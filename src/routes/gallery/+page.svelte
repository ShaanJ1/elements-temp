<script lang="ts">
	import type { GalleryImage, GalleryCategory } from '$lib/types';
	import { page } from '$app/state';
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import { fade } from 'svelte/transition';

	// Get server-side loaded data
	const { data } = $props<{ data: { images: GalleryImage[] } }>();

	const baseUrl = 'https://starry-faustina-unceriferous.ngrok-free.dev';
	const url = `${baseUrl}${page.url.pathname}`;

	const categories: GalleryCategory[] = [
		{ id: 'all', name: 'All Projects' },
		{ id: 'cabinets', name: 'Cabinets' },
		{ id: 'kitchen', name: 'Kitchens' },
		{ id: 'custom', name: 'Custom' },
		{ id: 'flooring', name: 'Flooring' }
	];

	// Use server-loaded images (automatically discovers all images)
	const images: GalleryImage[] = data.images;

    let selectedCategory = $state('all');
	let filteredImages = $derived(
		selectedCategory === 'all' ? images : images.filter((img) => img.category === selectedCategory)
	);

	function selectCategory(categoryId: string) {
		selectedCategory = categoryId;
	}
</script>

<!-- replace https://starry-faustina-unceriferous.ngrok-free.dev with https://emfinc.ca when uploading to the real site -->
<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Gallery | Elements Millwork & Flooring</title>
	<meta name="description" content="" />
	<link rel="canonical" href="https://starry-faustina-unceriferous.ngrok-free.dev/gallery" />
	<link rel="icon" href="/favicon.png" type="image/png" />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Elements Millwork & Flooring" />
	<meta property="og:title" content="Gallery | Elements Millwork & Flooring" />
	<meta property="og:description" content="" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Gallery | Elements Millwork & Flooring" />
	<meta name="twitter:description" content="" />
	<meta
		name="twitter:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>
	<meta property="twitter:url" content={url} />

	<!-- JSON-LD structured data -->
	{@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Elements Millwork & Flooring Inc.",
      "url": ${url},
      "logo": "https://starry-faustina-unceriferous.ngrok-free.dev/favicon.png"
    }
    </script>
  `}
</svelte:head>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Gallery</h1>
			<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
				Explore our portfolio of custom cabinetry
			</p>
		</div>

		<!-- Category Filter -->
		<div class="mt-8">
			<div class="flex flex-wrap justify-center gap-4">
				{#each categories as category}
					<button
						class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
                            {selectedCategory === category.id
							? 'bg-indigo-600 text-white shadow-lg scale-105'
							: 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105'}"
						onclick={() => selectCategory(category.id)}
					>
						{category.name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Masonry Grid -->
		<div class="mt-16">
			{#key selectedCategory}
				<div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 150 }}>
					<MasonryGrid images={filteredImages} />
				</div>
			{/key}
		</div>

		<!-- Empty State -->
		{#if filteredImages.length === 0}
			<div class="py-12 text-center" in:fade={{ duration: 300 }}>
				<p class="text-gray-500">No images found for this category.</p>
			</div>
		{/if}
	</div>
</div>
