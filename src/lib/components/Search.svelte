<script>
    let assets;

    fetch('http://localhost:8000/assets')
        .then((response) => response.json())
        .then((newAssets) => assets = newAssets);
</script>

<div>
    <input type="text" class="pl-4 rounded-l-full h-8 w-64 border-t-4 border-l-4 border-b-4" placeholder="Search" /><button class="text-gray-300 w-8 rounded-r-full border-4 hover:bg-red-500">S</button>
</div>

{#if assets}
    {#each assets.asset as {name}}
        <div class="text-gray-300">{name}</div>
    {/each}
{/if}
