import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://signalroutes.work",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [mdx(), sitemap()],
});