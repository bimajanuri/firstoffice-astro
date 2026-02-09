import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://firstoffice-astro.pages.dev', // Placeholder until user provides real domain
    output: 'server',
    adapter: cloudflare(),
    integrations: [tailwind(), icon(), sitemap()],
});