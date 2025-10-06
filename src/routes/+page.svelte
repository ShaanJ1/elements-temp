<script lang="ts">
	import { page } from '$app/state';
	import Hero from '$lib/components/Hero.svelte';

	const baseUrl = 'https://starry-faustina-unceriferous.ngrok-free.dev';
	const url = `${baseUrl}${page.url.pathname}`;

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
			title: 'Functional & Stylish Cabinets',
			description: 'Hand-crafted wooden details'
		},
		{
			src: '/images/gallery/project3.jpg',
			alt: 'New Flooring',
			title: 'Flooring Installations',
			description: 'Space-saving solutions'
		}
	];
</script>

<!-- replace https://starry-faustina-unceriferous.ngrok-free.dev with https://emfinc.ca when uploading to the real site -->
<!-- also replace it in robots.txt and sitemap.xml -->
<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Home | Elements Millwork & Flooring</title>
	<meta
		name="description"
		content="Welcome to Elements Millwork and Flooring. We provide expert custom millwork, cabinetry, and flooring crafted for your needs."
	/>
	<link rel="canonical" href="https://starry-faustina-unceriferous.ngrok-free.dev/" />
	<link rel="icon" href="/favicon.png" type="image/png" />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Elements Millwork & Flooring" />
	<meta property="og:title" content="Home | Elements Millwork & Flooring" />
	<meta
		property="og:description"
		content="Welcome to Elements Millwork and Flooring. We provide expert custom millwork, cabinetry, and flooring crafted for your needs."
	/>
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Home | Elements Millwork & Flooring" />
	<meta
		name="twitter:description"
		content="Welcome to Elements Millwork and Flooring. We provide expert custom millwork, cabinetry, and flooring crafted for your needs."
	/>
	<meta
		name="twitter:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>
	<meta property="twitter:url" content={url} />

	<!-- JSON-LD structured data -->
	{@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Elements Millwork & Flooring Inc.",
      "url": ${url},
      "logo": "https://starry-faustina-unceriferous.ngrok-free.dev/favicon.png"
    }
    </script>
  `}
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- Featured Projects Section -->
<section class="bg-background-alt py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
				Featured Projects
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-xl text-text-secondary">
				Discover our latest custom millwork and flooring designs
			</p>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredProjects as project}
				<div
					class="group relative overflow-hidden rounded-lg border border-border bg-background shadow-lg"
				>
					<div class="relative h-80 w-full overflow-hidden">
						<img
							src={project.src}
							alt={project.alt}
							class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-medium text-text-primary">{project.title}</h3>
						<p class="mt-2 text-sm text-text-secondary">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a href="/gallery" class="btn-primary"> View All Projects </a>
		</div>
	</div>
</section>

<!-- Services Overview -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
			<p class="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
				Expert craftsmanship for all your millwork needs
			</p>
		</div>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-gray-50 p-8 text-center">
				<div class="mb-4 text-indigo-600">
					<!-- Icon can be added here -->
				</div>
				<h3 class="text-xl font-bold text-gray-900">Custom Cabinetry</h3>
				<p class="mt-4 text-gray-500">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</p>
			</div>

			<div class="rounded-lg bg-gray-50 p-8 text-center">
				<div class="mb-4 text-indigo-600">
					<!-- Icon can be added here -->
				</div>
				<h3 class="text-xl font-bold text-gray-900">Architectural Millwork</h3>
				<p class="mt-4 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
			</div>

			<div class="rounded-lg bg-gray-50 p-8 text-center">
				<div class="mb-4 text-indigo-600">
					<!-- Icon can be added here -->
				</div>
				<h3 class="text-xl font-bold text-gray-900">Custom Flooring</h3>
				<p class="mt-4 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
			</div>
		</div>

		<div class="mt-12 text-center">
			<a
				href="/services"
				class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
			>
				Explore Our Services
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-indigo-700">
	<div
		class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16"
	>
		<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
			<span class="block">Want to learn more?</span>
			<span class="block text-indigo-200">Contact us at any time.</span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					href="/contact-us"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
				>
					Get Started
				</a>
			</div>
		</div>
	</div>
</section>
