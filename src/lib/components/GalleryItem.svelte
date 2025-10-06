<!-- Individual image on gallery -->
<script lang="ts">
	import type { GalleryImage } from '$lib/types';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Props {
		image: GalleryImage;
		index: number;
	}

	let { image, index }: Props = $props();
	let imageLoaded = $state(false);
	let imageElement: HTMLImageElement | undefined = $state();

	function handleImageLoad() {
		imageLoaded = true;
	}
</script>

<div
	class="group relative overflow-hidden"
	in:fade={{ duration: 400, delay: index * 50, easing: quintOut }}
>
	<div class="relative overflow-hidden bg-gray-200">
		<!-- Skeleton loader -->
		{#if !imageLoaded}
			<div class="absolute inset-0 animate-pulse bg-gray-300"></div>
		{/if}

		<!-- Image -->
		<img
			bind:this={imageElement}
			src={image.src}
			alt={image.alt}
			loading="lazy"
			onload={handleImageLoad}
			class="h-auto w-full object-cover transition-all duration-500 ease-out
				{imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
				group-hover:scale-110"
		/>

		<!-- Overlay on hover -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
				opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		>
			<div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 
				transition-transform duration-300 group-hover:translate-y-0">
				<h3 class="text-lg font-semibold text-white">{image.alt}</h3>
				{#if image.category}
					<p class="text-sm capitalize opacity-90">{image.category}</p>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes shimmer {
		0% {
			background-position: -1000px 0;
		}
		100% {
			background-position: 1000px 0;
		}
	}

	.animate-pulse {
		animation: shimmer 2s infinite;
		background: linear-gradient(to right, #f3f4f6 4%, #e5e7eb 25%, #f3f4f6 36%);
		background-size: 1000px 100%;
	}
</style>
