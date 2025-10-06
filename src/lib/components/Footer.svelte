<script lang="ts">
	import type { FooterSection, SocialLink } from '$lib/types';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	const footerSections: FooterSection[] = [
		{
			title: 'Solutions',
			links: [
				{ href: '/services#cabinetry', label: 'Custom Cabinetry' },
				{ href: '/services#millwork', label: 'Architectural Millwork' },
				{ href: '/services#flooring', label: 'Custom Flooring' }
			]
		},
		{
			title: 'Company',
			links: [
				{ href: '/about-us', label: 'About Us' },
				{ href: '/gallery', label: 'Our Work' },
				{ href: '/contact-us', label: 'Contact Us' }
			]
		}
	];

	const socialLinks: SocialLink[] = [
		{ href: 'tel:+14037767456', label: 'Phone', alt: 'Call Elements Millwork & Flooring', icon: 'phone.png' },
		{ href: 'mailto:sales@emfinc.ca', label: 'Mail', alt: 'Email Elements Millwork & Flooring', icon: 'mail.png' },
		{
			href: 'https://www.instagram.com/elementsmillwork',
			label: 'Instagram',
			alt: 'Follow Elements Millwork & Flooring on Instagram',
			icon: 'instagram.png'
		}
	];
</script>

<footer class="bg-gray-900">
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-9">
			<div class="space-y-6 lg:col-span-1">
				<div class="text-xl font-bold text-white sm:text-2xl">Elements Millwork & Flooring</div>
				<p class="text-sm text-gray-400 sm:text-base">
					Crafting excellence in custom millwork and architectural elements since 2016.
				</p>
				<div class="flex flex-wrap items-center gap-4 sm:gap-6">
					{#each socialLinks as { href, label, icon }}
						<a {href} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300">
							<span class="sr-only">{label}</span>
							<div class="h-6 w-6 select-none text-gray-400 transition-colors hover:text-white">
								<img src={`icons/${icon}`} alt={label} draggable="false" />
							</div>
						</a>
					{/each}
					<ThemeSwitcher />
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
				{#each footerSections as section}
					<div>
						<h3 class="text-sm font-semibold uppercase tracking-wider text-gray-400">
							{section.title}
						</h3>
						<ul class="mt-4 space-y-3">
							{#each section.links as link}
								<li>
									<a href={link.href} class="text-sm text-gray-300 hover:text-white sm:text-base">
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-8 border-t border-gray-700 pt-6 sm:mt-12 sm:pt-8">
			<p class="text-center text-sm text-gray-400 sm:text-base">
				© {new Date().getFullYear()} Elements Millwork & Flooring Inc. All rights reserved.
			</p>
		</div>
	</div>
</footer>
