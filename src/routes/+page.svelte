<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Gallery from '$lib/components/Gallery.svelte';

    const featuredProjects = [
        {
            src: '/images/gallery/project1.jpg',
            alt: 'Custom Kitchen Cabinets',
            title: 'Modern Kitchen Design',
            description: 'Custom cabinetry with premium finishes'
        },
        {
            src: '/images/gallery/project2.jpg',
            alt: 'Architectural Millwork',
            title: 'Elegant Staircase',
            description: 'Hand-crafted wooden details'
        },
        {
            src: '/images/gallery/project3.jpg',
            alt: 'Custom Furniture',
            title: 'Built-in Storage',
            description: 'Space-saving solutions'
        }
    ];
</script>

<!-- Hero Section -->
<Hero />

<!-- Featured Projects Section -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Featured Projects
            </h2>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Discover our latest custom millwork and furniture designs
            </p>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {#each featuredProjects as project}
                <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="relative h-80 w-full overflow-hidden">
                        <img
                            src={project.src}
                            alt={project.alt}
                            class="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-medium text-gray-900">{project.title}</h3>
                        <p class="mt-2 text-sm text-gray-500">{project.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-12 text-center">
            <a
                href="/gallery"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
                View All Projects
            </a>
        </div>
    </div>
</section>

<!-- Services Overview -->
<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Services
            </h2>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Expert craftsmanship for all your millwork needs
            </p>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="bg-gray-50 rounded-lg p-8 text-center">
                <div class="text-indigo-600 mb-4">
                    <!-- Icon can be added here -->
                </div>
                <h3 class="text-xl font-bold text-gray-900">Custom Cabinetry</h3>
                <p class="mt-4 text-gray-500">
                    Expertly crafted cabinets for kitchens, bathrooms, and more
                </p>
            </div>

            <div class="bg-gray-50 rounded-lg p-8 text-center">
                <div class="text-indigo-600 mb-4">
                    <!-- Icon can be added here -->
                </div>
                <h3 class="text-xl font-bold text-gray-900">Architectural Millwork</h3>
                <p class="mt-4 text-gray-500">
                    Custom moldings, trim work, and architectural details
                </p>
            </div>

            <div class="bg-gray-50 rounded-lg p-8 text-center">
                <div class="text-indigo-600 mb-4">
                    <!-- Icon can be added here -->
                </div>
                <h3 class="text-xl font-bold text-gray-900">Custom Furniture</h3>
                <p class="mt-4 text-gray-500">
                    Bespoke furniture pieces designed to your specifications
                </p>
            </div>
        </div>

        <div class="mt-12 text-center">
            <a
                href="/services"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
                Explore Our Services
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="bg-indigo-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Ready to start your project?</span>
            <span class="block text-indigo-200">Contact us for a consultation.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
                <a
                    href="/contact"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                    Get Started
                </a>
            </div>
        </div>
    </div>
</section>
 