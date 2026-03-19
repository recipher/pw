// @ts-check
import react from "@astrojs/react";
import { defineConfig, fontProviders } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
  site: "https://www.peebleswargaming.org",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Gemini",
      cssVariable: "--font-gemini",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/TG-Gemini.otf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
