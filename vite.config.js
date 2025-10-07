import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Modern browsers ke liye
    minify: "esbuild", // Fast + efficient JS minifier
    sourcemap: false, // Disable source maps in prod
    chunkSizeWarningLimit: 1000, // Avoid console warnings
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libs into smaller chunks
          react: ["react", "react-dom"],
          icons: ["react-icons"],
          motion: ["framer-motion"],
        },
      },
    },
  },
  server: {
    host: true,
  },
});
