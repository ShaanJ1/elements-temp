<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" />
    <title>Elements Millwork & Flooring Inc.</title>
    <meta name="description" content="Expert custom millwork, cabinetry, and flooring crafted with precision and care." />
</svelte:head>

<div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <main class="flex-grow">
        {@render children?.()}
    </main>
    <Footer></Footer>
</div>
