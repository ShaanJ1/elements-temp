<script lang="ts">
	import { page } from '$app/state';
	import type { NavLink } from '$lib/types';
	import path from 'path';

	const links: NavLink[] = [
		{ href: '/', label: 'Home' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/services', label: 'Services' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact-us', label: 'Contact Us' }
	];

	let isOpen = $state(false);
	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 20);

	$effect(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	class="bg-white fixed z-50 w-full transition-all duration-200"
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
			<div class="hidden sm:ml-6 sm:flex sm:items-center background-background-primary sm:space-x-4 group"> 
				{#each links as link}
					<a
						href={link.href}
						class="relative px-3 py-2 text-sm font-medium text-text-primary no-underline transition-colors
                            after:absolute
                            after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0
                            after:bg-current after:transition-all after:duration-200 after:content-[''] hover:text-primary
                            hover:after:w-full
                            aria-[current=page]:after:w-full
                            {page.url.pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}"
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
					onclick={() => (isOpen = !isOpen)}
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
						onclick={() => (isOpen = false)}
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
