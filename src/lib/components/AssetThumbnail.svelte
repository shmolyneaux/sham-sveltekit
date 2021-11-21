<script>
    export let assetName;
    export let assetId;
    export let previewImageUrl;

    let audioElement;
    let playbackProgress = 0.0;
    let isPlaying = false;
    let audioLoadedMetadata = false;

    function audioAssetMetadataLoaded(event) {
        audioElement = event.target;
        audioLoadedMetadata = true;
    }

    function audioProgressUpdate(event) {
        playbackProgress = event.target.currentTime / event.target.duration;
        console.log(playbackProgress);
    }

    function audioStarted() {
        isPlaying = true;
    }

    function audioStopped() {
        isPlaying = false;
    }

    function togglePlayback() {
        if (audioElement) {
            if (audioElement.paused) {
                audioElement.play()
            } else {
                audioElement.pause()
            }
        }
    }
</script>

<div class="overflow-hidden h-16 w-16 border border-gray-700 bg-gray-800 rounded-md flex text-gray-500 hover:text-primary-500 transition-colors duration-200">
    {#if previewImageUrl}
        <img src={previewImageUrl} />
    {:else if assetName.endsWith(".ogg")}
        <button class="relative h-full w-full flex items-center justify-items-center justify-center" on:click={() => togglePlayback()}>
            <audio
                id=testThing
                on:play={audioStarted}
                on:pause={audioStopped}
                on:ended={audioStopped}
                on:timeupdate={audioProgressUpdate}
                on:loadedmetadata={(event) => audioAssetMetadataLoaded(event)}
                preload=metadata
                src={"http://localhost:8000/assets/" + assetId + ".ogg"}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            {#if audioLoadedMetadata}
                <div class="absolute w-16 bottom-0">
                    <div
                        class="h-1 bg-primary-500"
                        style="width: {playbackProgress * 100}%;">
                    </div>
                </div>
                {#if isPlaying}
                    <!-- Stop Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                {:else}
                    <!-- Play Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                {/if}
            {:else}
                <!-- Clock Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            {/if}
        </button>
    {/if}
</div>
