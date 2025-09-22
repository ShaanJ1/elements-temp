<script lang="ts">
    import type { ContactFormData, ContactResponse } from '$lib/types';
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
</script>

<div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
        <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Us</h1>
        
        {#if success}
            <div class="rounded-md bg-green-50 p-4 mb-6">
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
            <div class="rounded-md bg-red-50 p-4 mb-6">
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
                        class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
                        class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
                        class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
                        class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    ></textarea>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={loading}
                    class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>

        <!-- Contact Information -->
        <div class="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <dl class="space-y-4">
                <div>
                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                    <dd class="text-sm text-gray-900">sales@emfinc.ca</dd>
                </div>
                <div>
                    <dt class="text-sm font-medium text-gray-500">Phone</dt>
                    <dd class="text-sm text-gray-900">+1 (403) 776-7456</dd>
                </div>
                <div>
                    <dt class="text-sm font-medium text-gray-500">Address</dt>
                    <dd class="text-sm text-gray-900">1435 40 Ave NE Unit No 1<br>Calgary, AB T2E 8N6</dd>
                </div>
            </dl>
        </div>
    </div>
</div>