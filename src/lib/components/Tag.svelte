<script>
    import {tags} from '../stores/tags.js';
    export let tagId;

    if (!(tagId in tags)) {
        fetch('http://localhost:8000/tags')
            .then((response) => response.json())
            .then((result) => {
                for (const tag of result) {
                    tags.update(obj => {
                        obj[tag.tag_id] = tag;
                        return obj;
                    });
                }
            })
            .catch((reason) => {
                console.log("request failure", reason);
            });
    }
</script>

<div>
    {#if $tags[tagId]}
        <span class="border font-mono border-white text-2xs"><span class="border border-white bg-white text-black px-px">{$tags[tagId].key}</span><span class="px-1 text-white">{$tags[tagId].value}</span></span>
    {:else}
        No tag {tagId}
    {/if}
</div>
