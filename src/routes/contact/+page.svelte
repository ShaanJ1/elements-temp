<script lang="ts">
	import type { ContactFormData, Hours } from '$lib/types';
	import { enhance } from '$app/forms';

	let formData: ContactFormData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	let loading = false;
	let success = false;
	let error: string | null = null;

	const Hours: Hours = {
		Sunday: 'Closed',
		Monday: '9:00 AM - 5:00 PM',
		Tuesday: '9:00 AM - 5:00 PM',
		Wednesday: '9:00 AM - 5:00 PM',
		Thursday: '9:00 AM - 5:00 PM',
		Friday: '9:00 AM - 5:00 PM',
		Saturday: 'Closed'
	};
</script>

<div class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h1 class="mb-8 text-center text-3xl font-extrabold text-gray-900">Contact Us</h1>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Contact Form Section -->
			<div>
				{#if success}
					<div class="mb-6 rounded-md bg-green-50 p-4">
						<div class="flex">
							<div class="ml-3">
								<h3 class="text-sm font-medium text-green-800">Success!</h3>
								<div class="mt-2 text-sm text-green-700">
									<p>Your message has been sent successfully. We'll get back to you soon.</p>
								</div>
							</div>
						</div>
					</div>
				{/if}

				{#if error}
					<div class="mb-6 rounded-md bg-red-50 p-4">
						<div class="flex">
							<div class="ml-3">
								<h3 class="text-sm font-medium text-red-800">Error</h3>
								<div class="mt-2 text-sm text-red-700">
									<p>{error}</p>
								</div>
							</div>
						</div>
					</div>
				{/if}

				<form
					method="POST"
					class="grid grid-cols-1 gap-y-6"
					use:enhance={() => {
						loading = true;
						return async ({ result }) => {
							loading = false;
							if (result.type === 'success') {
								success = true;
								formData = { name: '', email: '', phone: '', message: '' };
							} else {
								error = 'Something went wrong sending message. Please try again.';
							}
						};
					}}
				>
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700">Name*</label>
						<div class="mt-1">
							<input
								type="text"
								name="name"
								id="name"
								autocomplete="name"
								bind:value={formData.name}
								required
								class="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
						<div class="mt-1">
							<input
								type="email"
								name="email"
								id="email"
								autocomplete="email"
								bind:value={formData.email}
								required
								class="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
					</div>
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
						<div class="mt-1">
							<input
								type="tel"
								name="phone"
								id="phone"
								autocomplete="tel"
								bind:value={formData.phone}
								class="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							/>
						</div>
					</div>
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700">Message*</label>
						<div class="mt-1">
							<textarea
								id="message"
								name="message"
								rows="4"
								bind:value={formData.message}
								required
								class="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							></textarea>
						</div>
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
						>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</div>
				</form>
			</div>

			<!-- Contact Information Section -->
			<div class="rounded-lg bg-gray-50 p-8">
				<h2 class="mb-6 text-xl font-medium text-gray-900">Other Ways to Reach Us</h2>
				<dl class="space-y-6">
					<div>
						<dt class="text-sm font-medium text-gray-500">Email</dt>
						<dd class="mt-1 text-base text-gray-900">sales@emfinc.ca</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">Phone</dt>
						<dd class="mt-1 text-base text-gray-900">+1 (403) 776-7456</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">Address</dt>
						<dd class="mt-1 text-base text-gray-900">
							1435 40 Ave NE Unit No 1<br />Calgary, AB T2E 8N6
						</dd>
					</div>
					<div>
						<dt class="text-sm font-medium text-gray-500">Hours:</dt>
						<dd class="mt-1 text-base text-gray-900">
							{#each Object.entries(Hours) as [day, time]}
								<div class="flex gap-2"> <!-- Days will line up with the lines -->
									<span class="w-24 font-medium">{day}:</span>
									<span>{time}</span>
								</div>
							{/each}
						</dd>
						<dd class="mt-3 text-base text-sm font-small italic text-gray-800">Closed on Major Holidays*</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</div>

