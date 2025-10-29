import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sass from 'astro-sass';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    sass(),
    sitemap({
      site: 'https://codegregg.com',
    }),
  ],
  site: 'https://codegregg.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    ssr: {
      noExternal: ['prism-react-renderer'],
    },
  },
});

