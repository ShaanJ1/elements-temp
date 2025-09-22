<script lang="ts">
    import type { NavLink } from '$lib/types';
    import { onMount } from 'svelte';

    const links: NavLink[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact Us' }
    ];

    let isOpen = false;
    let scrollY = 0;
    let isScrolled = false;

    onMount(() => {
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            isScrolled = scrollY > 20;
        });
    });
</script>

<nav class="fixed w-full z-50 transition-all duration-200" class:bg-white={isScrolled} class:shadow-lg={isScrolled}>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                    <a href="/" class="text-2xl font-bold text-gray-900">
                        Elements
                    </a>
                </div>
            </div>

            <!-- Desktop menu -->
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
                {#each links as link}
                    <a
                        href={link.href}
                        class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                        {link.label}
                    </a>
                {/each}
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center sm:hidden">
                <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    on:click={() => isOpen = !isOpen}
                >
                    <span class="sr-only">Open main menu</span>
                    {#if !isOpen}
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    {:else}
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if isOpen}
        <div class="sm:hidden bg-white">
            <div class="pt-2 pb-3 space-y-1">
                {#each links as link}
                    <a
                        href={link.href}
                        class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
                        on:click={() => isOpen = false}
                    >
                        {link.label}
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</nav>

<!-- Spacer to prevent content from hiding under fixed navbar -->
<div class="h-16"></div>