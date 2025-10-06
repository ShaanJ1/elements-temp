<script lang="ts">
	import type { NavLink } from '$lib/types';
	import { onMount } from 'svelte';

	const links: NavLink[] = [
		{ href: '/', label: 'Home' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/services', label: 'Services' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact-us', label: 'Contact Us' }
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

<nav
	class="fixed z-50 w-full bg-background/95 backdrop-blur-sm transition-all duration-200"
	class:shadow-lg={isScrolled}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="inline-flex items-center text-2xl font-bold text-text-primary">
						Elements Millwork
						<img src="favicon.png" alt="Elements Logo" class="ml-2 h-8" draggable="false" />
					</a>
				</div>
			</div>

			<!-- Desktop menu -->
			<div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
				{#each links as link}
					<a
						href={link.href}
						class="px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:text-primary"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center sm:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
					on:click={() => (isOpen = !isOpen)}
				>
					<span class="sr-only">Open main menu</span>
					{#if !isOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isOpen}
		<div class="bg-background sm:hidden">
			<div class="space-y-1 pb-3 pt-2">
				{#each links as link}
					<a
						href={link.href}
						class="block px-3 py-2 text-base font-medium text-text-primary hover:bg-background-alt hover:text-primary"
						on:click={() => (isOpen = false)}
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
