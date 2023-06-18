import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  // workaround, cloudflare ssr process env
  // https://github.com/withastro/astro/issues/4416#issuecomment-1228234136
  vite: {
    define: {
      'process.env.MICROCMS_SERVICE_DOMAIN': JSON.stringify(process.env.MICROCMS_SERVICE_DOMAIN),
      'process.env.MICROCMS_API_KEY': JSON.stringify(process.env.MICROCMS_API_KEY)
    }
  },
  integrations: [tailwind()]
});