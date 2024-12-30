import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.jolpi.ca", // API base URL
        changeOrigin: true, // Adjust the origin header to match the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the `/api` prefix
        configure: (proxy) => {
          // Add custom headers to the proxied request if needed
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Accept", "application/json"); // Explicitly request JSON
          });
          proxy.on("proxyRes", (proxyRes) => {
            // Debug response headers from the API
            console.log("Proxy Response Headers:", proxyRes.headers);
          });
        },
      },
    },
  },
});
