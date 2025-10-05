import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: true,
        allowedHosts: [
            'fwcc0wggo0sskws400gc40wg.172.219.50.229.sslip.io',
            'starry-faustina-unceriferous.ngrok-free.dev'
        ]
    },

    preview: {
        host: true,
        port: 80,
        allowedHosts: [
            'fwcc0wggo0sskws400gc40wg.172.219.50.229.sslip.io',
            'starry-faustina-unceriferous.ngrok-free.dev'
        ]
    },
});
