// @ts-check
import { defineConfig } from "astro/config";

import path from "path";
import { fileURLToPath } from "url";

import AutoImport from "astro-auto-import";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@styles/mixins.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  integrations: [
    AutoImport({
      imports: [
        "./src/components/BoxSpoiler.astro",
        "./src/components/CustomImg.astro",
        "./src/components/TitlePage.astro",
      ],
    }),
    icon({
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      },
    }),
    mdx(),
  ],
  site: "https://paginanove.com.br",
});
