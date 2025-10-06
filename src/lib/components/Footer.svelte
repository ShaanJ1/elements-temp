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
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="xl:grid xl:grid-cols-3 xl:gap-9">
			<div class="space-y-8 xl:col-span-1">
				<div class="text-2xl font-bold text-white">Elements Millwork & Flooring</div>
				<p class="text-base text-gray-400">
					Crafting excellence in custom millwork and architectural elements since 2016.
				</p>
				<div class="flex space-x-6">
					{#each socialLinks as { href, label, icon }}
						<a {href} class="text-gray-400 hover:text-gray-300">
							<span class="sr-only">{label}</span>
							<div class="h-6 w-6 select-none text-gray-400 transition-colors hover:text-white">
								<img src={`icons/${icon}`} alt={label} draggable="false" />
							</div>
						</a>
					{/each}
					<ThemeSwitcher />
				</div>
			</div>
			<div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					{#each footerSections as section}
						<div>
							<h3 class="text-sm font-semibold uppercase tracking-wider text-gray-400">
								{section.title}
							</h3>
							<ul class="mt-4 space-y-4">
								{#each section.links as link}
									<li>
										<a href={link.href} class="text-base text-gray-300 hover:text-white">
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-700 pt-8">
			<p class="text-center text-base text-gray-400">
				© {new Date().getFullYear()} Elements Millwork & Flooring Inc. All rights reserved.
			</p>
		</div>
	</div>
</footer>
