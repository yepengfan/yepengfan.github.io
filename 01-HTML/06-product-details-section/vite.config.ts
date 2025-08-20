import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/01-HTML/06-product-details-section/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
