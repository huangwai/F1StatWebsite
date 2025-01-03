import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://api.jolpi.ca",
        changeOrigin: true,
        rewrite: (path) => {
          console.log("Rewriting path:", path); // Debug the path
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
