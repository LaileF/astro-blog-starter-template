import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true
  },
  preview: {
    host: true,
    allowedHosts: ['signalroutes.work','.railway.app ']
  }
});