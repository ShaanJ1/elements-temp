<script lang="ts">
	import { page } from '$app/state';

	const baseUrl = 'https://starry-faustina-unceriferous.ngrok-free.dev';
	const url = `${baseUrl}${page.url.pathname}`;

	const companyInfo = {
		founded: '2016',
		location: 'Calgary, Alberta',
		mission:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	};

	const values = [
		{
			name: 'Quality',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			name: 'Craftsmanship',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			name: 'Sustainability',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];

	const stats = [
		{
			name: 'Years in Business',
			value: new Date().getFullYear() - parseInt(companyInfo.founded)
		},
		{
			name: 'Projects Completed',
			value: '500+'
		},
		{
			name: 'Client Satisfaction',
			value: '99%'
		}
	];

	const teamMembers = [
		// add if wanted
		{
			name: 'John Doe',
			role: 'Founder & CEO',
			image: '/images/team/john-doe.jpg'
		},
		{
			name: 'Mike Johnson',
			role: 'Lead Craftsman',
			image: '/images/team/mike-johnson.jpg'
		}
	];
</script>

<!-- replace https://starry-faustina-unceriferous.ngrok-free.dev with https://emfinc.ca when uploading to the real site -->
<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>About Us | Elements Millwork & Flooring</title>
	<meta name="description" content="Learn more about us, our mission, values, stats, and more." />
	<link rel="canonical" href="https://starry-faustina-unceriferous.ngrok-free.dev/about-us" />
	<link rel="icon" href="/favicon.png" type="image/png" />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Elements Millwork & Flooring" />
	<meta property="og:title" content="About Us | Elements Millwork & Flooring" />
	<meta
		property="og:description"
		content="Learn more about us, our mission, values, stats, and more."
	/>
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://starry-faustina-unceriferous.ngrok-free.dev/images/gallery/cabinet-1.jpg"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Us | Elements Millwork & Flooring" />
	<meta
		name="twitter:description"
		content="Learn more about us, our mission, values, stats, and more."
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

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
				About Elements Millwork & Flooring
			</h1>
			<p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">Crafting excellence since 2016.</p>
		</div>

		<!-- Mission Statement -->
		<div class="mt-16">
			<div class="overflow-hidden rounded-lg bg-gray-50">
				<div class="px-4 py-5 sm:p-6">
					<h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
					<p class="mt-4 text-lg text-gray-500">{companyInfo.mission}</p>
				</div>
			</div>
		</div>

		<!-- Company Stats -->
		<div class="mt-16">
			<dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
				{#each stats as stat}
					<div class="overflow-hidden rounded-lg bg-white shadow">
						<div class="px-4 py-5 sm:p-6">
							<dt class="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
						</div>
					</div>
				{/each}
			</dl>
		</div>

		<!-- Values Section -->
		<div class="mt-16">
			<h2 class="text-center text-3xl font-bold text-gray-900">Our Values</h2>
			<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each values as value}
					<div class="rounded-lg bg-white px-6 py-8 shadow-lg">
						<h3 class="text-xl font-bold text-gray-900">{value.name}</h3>
						<p class="mt-4 text-gray-500">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
