import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://urvashitech.github.io/SEO-detector",
  plugins: [react()],
});