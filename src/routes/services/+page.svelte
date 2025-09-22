<script lang="ts">
    import type { Service } from '$lib/types';

    const services: Service[] = [
        {
            title: "Custom Cabinetry",
            description: "Expertly crafted custom cabinets for kitchens, bathrooms, and more. Each piece is designed to your specifications and built to last.",
            image: "/images/services/cabinetry.jpg",
            id: "cabinetry",
            features: [
                "Custom kitchen cabinets",
                "Bathroom vanities",
                "Built-in wardrobes",
                "Entertainment centers",
                "Storage solutions"
            ]
        },
        {
            title: "Architectural Millwork",
            description: "High-quality architectural millwork that adds elegance and value to your space. From crown moldings to custom doors.",
            image: "/images/services/millwork.jpg",
            id: "millwork",
            features: [
                "Crown molding",
                "Wainscoting",
                "Custom doors",
                "Window trim",
                "Wall paneling"
            ]
        },
        {
            title: "Custom Furniture",
            description: "Bespoke furniture pieces designed and built to your exact specifications. Combining traditional craftsmanship with modern techniques.",
            image: "/images/services/furniture.jpg",
            id: "furniture",
            features: [
                "Dining tables",
                "Conference tables",
                "Office furniture",
                "Built-in seating",
                "Custom shelving"
            ]
        }
    ];
</script>

<div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Our Services
            </h1>
            <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Expert millwork services tailored to your needs
            </p>
        </div>

        <!-- Services Grid -->
        <div class="mt-16 space-y-16">
            {#each services as service, i}
                <div id={service.id} class="lg:grid lg:grid-cols-12 lg:gap-8 items-center {i % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
                    <div class="lg:col-span-5">
                        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                class="object-cover object-center w-full h-full"
                            />
                        </div>
                    </div>
                    <div class="mt-6 lg:mt-0 lg:col-span-7 lg:pl-8">
                        <h2 class="text-3xl font-extrabold text-gray-900">
                            {service.title}
                        </h2>
                        <p class="mt-4 text-lg text-gray-500">
                            {service.description}
                        </p>
                        <div class="mt-6">
                            <h3 class="text-lg font-medium text-gray-900">Features:</h3>
                            <ul class="mt-4 space-y-3">
                                {#each service.features as feature}
                                    <li class="flex items-start">
                                        <span class="flex-shrink-0 h-6 w-6 text-indigo-600">
                                            <!-- Heroicon check -->
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span class="ml-3 text-base text-gray-500">{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- CTA Section -->
        <div class="mt-24 bg-indigo-50 rounded-2xl px-6 py-16 sm:p-16">
            <div class="max-w-xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Ready to Start Your Project?
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                    Contact us today to discuss your custom millwork needs. We'll help bring your vision to life.
                </p>
                <a
                    href="/contact"
                    class="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Get in Touch
                </a>
            </div>
        </div>
    </div>
</div>