<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
        <div>
            <h1 class="text-9xl font-extrabold text-gray-900">404</h1>
            <h2 class="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <!-- $page.error?.message -->
        </div>
        <div class="mt-8">
            <a href="/" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Return Home
            </a>
        </div>
    </div>
</div>