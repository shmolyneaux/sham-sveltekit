<script>
    import Text from '$lib/components/Text.svelte';
    import AssetRow from '$lib/components/AssetRow.svelte';
    let assets;
    let error;
    let requestInProgress = true;

    fetch('http://localhost:8000/assets')
        .then((response) => response.json())
        .then((newAssets) => {
            if (newAssets.status) {
                throw newAssets;
            }
            requestInProgress = false;
            assets = newAssets;
        })
        .catch((reason) => {
            requestInProgress = false;
            error = "Request failure " + reason;
        });

    function previewImageUrl(id, name) {
        if (name.endsWith('.png')) {
            return 'http://localhost:8000/assets/' + id + '.png';
        }

        return undefined;
    }
</script>

<div class="w-full flex justify-center pb-4">
    <div class="bg-black border border-gray-800">
        <input type="text" class="w-64 pl-2 bg-black text-white" placeholder="Search" /><button class="text-gray-500 bg-gray-900 hover:bg-primary-500 hover:text-gray-300 px-2 transition-colors ease-out duration-100">S</button>
    </div>
</div>

{#if requestInProgress}
    <Text>
        Requesting...
    </Text>
{:else if error}
    <Text>
        {error}
    </Text>
{:else if assets}
    <div class="flex flex-col divide-y divide-gray-800">
        {#each assets.asset as {id, name}}
            <div on:click={() => console.log("selected asset")}>
                <AssetRow
                    assetId={id}
                    previewImageUrl={previewImageUrl(id, name)}
                >
                    {name}
                </AssetRow>
            </div>
        {/each}
    </div>
{/if}
