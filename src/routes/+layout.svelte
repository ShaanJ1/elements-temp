<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Elements Millwork & Flooring</title>
	<meta
		name="description"
		content="Expert custom millwork, cabinetry, and flooring crafted for your needs."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar></Navbar>
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<Footer></Footer>
</div>
