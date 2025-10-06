<script lang="ts">
	import type { GalleryImage, GalleryCategory } from '$lib/types';
	import { page } from '$app/state';

	const baseUrl = 'https://starry-faustina-unceriferous.ngrok-free.dev';
	const url = `${baseUrl}${page.url.pathname}`;

	const categories: GalleryCategory[] = [
		{ id: 'all', name: 'All Projects', description: 'View all our work' },
		{ id: 'custom-cabinets', name: 'Custom Cabinets', description: 'Handcrafted custom cabinetry' },
		{ id: 'kitchens', name: 'Kitchens', description: 'Beautiful Kitchen Cabinets' },
		{ id: 'flooring', name: 'Flooring', description: 'Elegant flooring designs' }
	];

	const images: GalleryImage[] = [
		{
			src: '/images/gallery/cabinet-1.jpg',
			alt: 'Custom Kitchen Cabinet',
			title: 'Modern Kitchen Cabinets',
			description: 'Custom white kitchen cabinets with marble countertops',
			category: 'custom-cabinets'
		}
		// Add more images here or use imageloader.ts
	];

	let selectedCategory = 'all';
	let filteredImages = images;

	$: {
		filteredImages =
			selectedCategory === 'all'
				? images
				: images.filter((img) => img.category === selectedCategory);
	}

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
						class="rounded-full px-4 py-2 text-sm font-medium
                            {selectedCategory === category.id
							? 'bg-indigo-600 text-white'
							: 'bg-gray-100 text-gray-800 hover:bg-gray-200'}"
						on:click={() => selectCategory(category.id)}
					>
						{category.name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Image Grid -->
		<div class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			{#each filteredImages as image}
				<div class="group relative">
					<div class="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200">
						<img
							src={image.src}
							alt={image.alt}
							class="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700">
								<span aria-hidden="true" class="absolute inset-0"></span>
								{image.title}
							</h3>
							<p class="mt-1 text-sm text-gray-500">{image.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Empty State -->
		{#if filteredImages.length === 0}
			<div class="py-12 text-center">
				<p class="text-gray-500">No images found in this category.</p>
			</div>
		{/if}
	</div>
</div>
