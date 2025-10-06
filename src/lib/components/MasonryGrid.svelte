<script lang="ts">
	import { Masonry } from 'svelte-bricks';
	import type { GalleryImage } from '$lib/types';
	import GalleryItem from './GalleryItem.svelte';
	import { browser } from '$app/environment';

	interface Props {
		images: GalleryImage[];
	}

	let { images }: Props = $props();
</script>

<div class="masonry-container">
	{#if browser}
		<Masonry
			items={images}
			minColWidth={300}
			maxColWidth={400}
			gap={16}
			animate={false}
			duration={0}
			idKey="src"
		>
			{#snippet children({ item, idx }: { item: GalleryImage; idx: number })}
				<GalleryItem image={item} index={idx} />
			{/snippet}
		</Masonry>
	{:else}
		<!-- SSR fallback -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each images as image, index}
				<GalleryItem {image} {index} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.masonry-container {
		width: 100%;
		margin: 0 auto;
	}

	:global(.masonry) {
		display: flex;
		gap: 1rem;
	}

	:global(.masonry > div) {
		flex: 1;
	}
</style>
