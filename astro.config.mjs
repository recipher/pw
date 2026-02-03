// @ts-check

import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
  site: "https://peebleswargaming.org",
});
