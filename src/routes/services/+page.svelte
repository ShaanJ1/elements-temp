<script lang="ts">
	import type { Service } from '$lib/types';
	import { page } from '$app/state';

	const baseUrl = 'https://starry-faustina-unceriferous.ngrok-free.dev';
	const url = `${baseUrl}${page.url.pathname}`;

	const services: Service[] = [
		{
			title: 'Custom Cabinetry',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image: '/images/services/cabinetry.jpg',
			id: 'cabinetry',
			features: [
				'Custom kitchen cabinets',
				'Bathroom Cabinets',
				'Built-in wardrobes',
				'Entertainment centers',
				'Storage solutions'
			]
		},
		{
			title: 'Architectural Millwork',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image: '/images/services/millwork.jpg',
			id: 'millwork',
			features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor']
		},
		{
			title: 'Custom Flooring',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image: '/images/services/flooring.jpg',
			id: 'flooring',
			features: [
				'Hardwood flooring',
                'Custom patterns & designs',
                'Long-lasting material and finishes'
			]
		}
	];
</script>

<!-- replace https://starry-faustina-unceriferous.ngrok-free.dev with https://emfinc.ca when uploading to the real site -->
<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Services | Elements Millwork & Flooring</title>
	<meta name="description" content="Explore the services we offer." />
	<link rel="canonical" href="https://starry-faustina-unceriferous.ngrok-free.dev/services" />
	<link rel="icon" href="/favicon.png" type="image/png" />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Elements Millwork & Flooring" />
	<meta property="og:title" content="Services | Elements Millwork & Flooring" />
	<meta property="og:description" content="Explore the services we offer." />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Services | Elements Millwork & Flooring" />
	<meta name="twitter:description" content="Explore the services we offer." />
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

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
				Our Services
			</h1>
			<p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
				Expert millwork services tailored to your needs
			</p>
		</div>

		<!-- Services Grid -->
		<div class="mt-16 space-y-16">
			{#each services as service, i}
				<div
					id={service.id}
					class="items-center lg:grid lg:grid-cols-12 lg:gap-8 {i % 2 === 1
						? 'lg:flex-row-reverse'
						: ''}"
				>
					<div class="lg:col-span-5">
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
							<img
								src={service.image}
								alt={service.title}
								class="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
					<div class="mt-6 lg:col-span-7 lg:mt-0 lg:pl-8">
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
										<span class="h-6 w-6 flex-shrink-0 text-indigo-600">
											<!-- Checkmark icon -->
											<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M5 13l4 4L19 7"
												/>
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
		<div class="mt-24 rounded-2xl bg-indigo-50 px-6 py-16 sm:p-16">
			<div class="mx-auto max-w-xl text-center">
				<h2 class="text-3xl font-extrabold text-gray-900">Connect with us</h2>
				<p class="mt-4 text-lg text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<a
					href="/contact-us"
					class="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
				>
					Get in Touch
				</a>
			</div>
		</div>
	</div>
</div>
