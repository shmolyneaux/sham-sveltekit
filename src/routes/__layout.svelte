<svelte:head>
    <title>SHAM</title>
</svelte:head>
<script>
    import '../styles/tailwind.css';
    import Home from '$lib/components/Home.svelte';
    import Search from '$lib/components/Search.svelte';
    import Upload from '$lib/components/Upload.svelte';
    import { fade, fly } from 'svelte/transition';
    import {page} from '$app/stores';

    let oldPath = '';
    let path = '/';

    let order = [
        '/',
        '/search',
        '/upload',
    ];

    let dir;
    $: {
        dir = order.indexOf(oldPath) < order.indexOf(path) ? 200 : -200;
        oldPath = path;
    }

    function setPath(p) {
        path = p;
    }
</script>

<!--
    Using pages/slots/transitions seems to be broken with sveltekit "1.0.0-next.195".
    Parts of the UI will remain in the DOM and there's all sorts of weirdness.
    I can figure out navigation later? For now I want to make page transitions
    not completely-broken by making each page a component.
-->

<div class="bg-gray-900" style="height: 100vh;">
    <nav>
        <button class="text-gray-300" class:growline={path!='/'} class:active={path=='/'} on:click={ () => setPath('/')}>Home</button>
        <button class="text-gray-300" class:growline={path!='/search'} class:active={path=='/search'} on:click={ () => setPath('/search')}>Search</button>
        <button class="text-gray-300" class:growline={path!='/upload'} class:active={path=='/upload'} on:click={ () => setPath('/upload')}>Upload</button>
    </nav>

    {#if path == '/search'}
        <h1 in:fly={{x: dir, duration: 250, delay: 250 }} out:fly={{x: -dir, duration: 250}}>
            <Search/>
        </h1>
    {:else if path == '/upload'}
        <h1 in:fly={{x: dir, duration: 250, delay: 250 }} out:fly={{x: -dir, duration: 250}}>
            <Upload/>
        </h1>
    {:else if path == '/'}
        <h1 in:fly={{x: dir, duration: 250, delay: 250 }} out:fly={{x: -dir, duration: 250}}>
            <Home/>
        </h1>
    {:else}
        <h1 in:fly={{x: dir, duration: 250, delay: 250 }} out:fly={{x: -dir, duration: 250}}>
            Unknown page
        </h1>
    {/if}

    <!-- Suppress the slot-->
    {#if false}<slot/>{/if}
</div>

<style>
.active,
.growline {
    display: inline-block;
    position: relative;
}

.active::after,
.growline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: blue;
}

/* Fade in */
.growline::after {
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}

.growline:hover::after,
.growline:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}

/* Scale from center */
.active,
.growline::after {
    opacity: 1;
    transform: scaleX(0);
    transform-origin: center;
}

.active,
.growline:hover::after,
.growline:focus::after{
    transform: scaleX(1);
}
</style>
