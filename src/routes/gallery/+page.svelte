<script lang="ts">
    import type { GalleryImage, GalleryCategory } from '$lib/types';
    import { onMount } from 'svelte';

    const categories: GalleryCategory[] = [
        { id: 'all', name: 'All Projects', description: 'View all our work' },
        { id: 'custom-cabinets', name: 'Custom Cabinets', description: 'Handcrafted custom cabinetry' },
        { id: 'kitchens', name: 'Kitchens', description: 'Beautiful Kitchen Cabinets' },
        { id: 'staircases', name: 'Staircases', description: 'Elegant staircase designs' }
    ];

    const images: GalleryImage[] = [
        {
            src: '/images/gallery/cabinet-1.jpg',
            alt: 'Custom Kitchen Cabinet',
            title: 'Modern Kitchen Cabinets',
            description: 'Custom white kitchen cabinets with marble countertops',
            category: 'custom-cabinets'
        },
        // Add more images here
    ];

    let selectedCategory = 'all';
    let filteredImages = images;

    $: {
        filteredImages = selectedCategory === 'all' 
            ? images 
            : images.filter(img => img.category === selectedCategory);
    }

    function selectCategory(categoryId: string) {
        selectedCategory = categoryId;
    }
</script>

<div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Gallery
            </h1>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Explore our portfolio of custom cabinetry
            </p>
        </div>

        <!-- Category Filter -->
        <div class="mt-8">
            <div class="flex flex-wrap justify-center gap-4">
                {#each categories as category}
                    <button
                        class="px-4 py-2 rounded-full text-sm font-medium
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
        <div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {#each filteredImages as image}
                <div class="group relative">
                    <div class="w-full aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={image.src}
                            alt={image.alt}
                            class="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
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
            <div class="text-center py-12">
                <p class="text-gray-500">No images found in this category.</p>
            </div>
        {/if}
    </div>
</div>