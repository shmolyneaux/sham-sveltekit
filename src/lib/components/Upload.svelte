<script>
    let uploadStatus = [];
    let dragHovering = false;
    let fileCount = 0;

    function dragEnter(e) {
        dragHovering = true;
        fileCount = e.dataTransfer.items.length;
    }

    function dragLeave(e) {
        dragHovering = false;
    }

    function fileDrop(e) {
        dragHovering = false;
        e.preventDefault();

        uploadStatus = [];
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
            // Ignore things that aren't files
            if (e.dataTransfer.items[i].kind === 'file') {
                var file = e.dataTransfer.items[i].getAsFile();

                var formData = new FormData();
                formData.append("file", file);
                formData.append("filename", file.name);

                uploadStatus.push("fetching");

                fetch("http://localhost:8000/assets", {"method": "POST", "body": formData})
                    .then(() => uploadStatus[i] = "")
                    .catch((reason) => {
                        uploadStatus[i] = reason;
                    });
            }
        }
    }

    // NOTE: We return `false` from ondragover so that we don't get the default
    // browser behavior when dropping files (which would otherwise open them)
</script>
<div
    class="px-6 flex h-64 justify-center gap-8">
    <label
        on:dragenter={dragEnter}
        on:dragleave={dragLeave}
        on:drop={fileDrop}
        ondragover="return false;"
        class="cursor-pointer w-full h-full rounded-2xl border-dashed border-2 border-gray-500 hover:border-gray-400 hover:bg-gray-700 text-gray-300 flex items-center"
        class:bg-gray-800={!dragHovering}
        class:bg-gray-300={dragHovering}
        class:text-gray-800={dragHovering}
        class:border-gray-900={dragHovering}
>
        <!-- We set pointer-events: none so that we don't get spurious dragLeave events on the parent -->
        <div class="w-full text-center text-3xl" style="pointer-events: none">
            {#if dragHovering}
                Upload {fileCount} {fileCount > 1 ? 'Files' : 'File'}
            {:else}
                Drop Assets Here
            {/if}
        </div>
        <input type="file" class="hidden" />
    </label>
</div>
{#each uploadStatus as status}
    <div class="text-white">
        {status}
    </div>
{/each}
