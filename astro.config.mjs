// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://growthskills.dev',
  fonts: [{
    provider: fontProviders.local(),
    name: "CommitMono",
    cssVariable: "--font-commit-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/CommitMono.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }],

  integrations: [preact(), sitemap()]
});