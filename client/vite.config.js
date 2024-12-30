import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://api.jolpi.ca",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy, options) => {
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["Cache-Control"] = "no-store";
            proxyRes.headers["Pragma"] = "no-cache";
          });
        },
      },
    },
  },
});
