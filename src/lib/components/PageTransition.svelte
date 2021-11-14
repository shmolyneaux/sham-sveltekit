<script>
    import { fade } from "svelte/transition"
    let timeout = 250;
    let transitioning = false;

    $: console.log("Changing to", path);
    $: change(path);

    function change() {
        transitioning = true;
        setTimeout(() => {
            transitioning = false;
        }, timeout);
    }
    export let path;
</script>

{#if !transitioning}
    <div in:fade={{duration: 250, delay: 250 }} out:fade={{duration: 250}} >
        <slot />
    </div>
{/if}
