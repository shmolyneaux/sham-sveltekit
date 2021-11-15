<script>
    import Text from '$lib/components/Text.svelte';
    import Tag from '$lib/components/Tag.svelte';
    export let assetId;

    let result;
    let error;
    let requestInProgress = true;

    fetch('http://localhost:8000/assets/' + assetId + '/tags')
        .then((response) => response.json())
        .then((newResult) => {
            requestInProgress = false;
            result = newResult;
        })
        .catch((reason) => {
            requestInProgress = false;
            error = "Request failure " + reason;
        });
</script>

<div class="p-2 flex gap-3 items-center hover:bg-primary-500 hover:bg-opacity-50 transition-colors ease-out duration-300">
    <div class="h-16 w-16 border border-gray-700 bg-gray-800 rounded-md">
    </div>

    {#if requestInProgress}
        <Text>Requesting tags...</Text>
    {:else if error}
        <Text>{error}</Text>
    {:else if result}
        <div class="flex flex-row gap-1 items-center">
            <Text><slot/></Text>{#each result as tagId}<Tag {tagId} />{/each}
        </div>
    {/if}
</div>
