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
</script>

<div class="flex justify-center">
    <div class="bg-black border border-gray-800">
        <input type="text" class="w-auto pl-2 bg-black text-white" placeholder="Search" /><button class="text-gray-300 bg-gray-900 hover:bg-primary-500 px-2">S</button>
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
            <AssetRow assetId={id}>{name}</AssetRow>
        {/each}
    </div>
{/if}
