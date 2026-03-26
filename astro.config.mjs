import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://signalroutes.work',

  preview: {
    host: true,
    allowedHosts: ['signalroutes.work', '.railway.app']
  }
});