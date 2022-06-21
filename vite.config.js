import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  const BASE = command === "serve" ? "./" : "/interest-frontend/";

  return {
    base: BASE,
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
