import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import preload from "vite-plugin-preload";
import { VitePWA } from "vite-plugin-pwa";

import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  // root: "./", // Set the root directory of your project
  // base: "/", // Set the base URL path for your application

  build: {
    outDir: "build", // Set the output directory for the build files
    assetsDir: "@/assets", // Set the directory for the static assets
    // sourcemap: process.env.__DEV__ === "true",
    rollupOptions: {
      // Additional Rollup configuration options if needed
    },
    chunkSizeWarningLimit: 10 * 1024,
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),

    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        // enabled: process.env.SW_DEV === "true",
        enabled: false,
        /* when using generateSW the PWA plugin will switch to classic */
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      // add this to cache all the
      // // static assets in the public folder
      // includeAssets: ["**/*"],
      includeAssets: [
        "**/*",
        "src/assets/img/logo/*.png",
        "src/assets/img/*.png",
        "src/assets/img/*.jepg",
        "src/assets/img/*.webp",
        "favicon.ico",
      ],
      manifest: [
        {
          theme_color: "#f69435",
          background_color: "#f69435",
          display: "standalone",
          orientation: "portrait",
          scope: ".",
          start_url: ".",
          id: ".",
          short_name: "Dashtar - E-Commerce Website",
          name: "Dashtar : React eCommerce Admin Dashboard",
          description:
            "Dashtar : React Grocery & Organic Food Store e-commerce Admin Dashboard",
          icons: [
            {
              src: "favicon.ico",
              sizes: "48x48",
              type: "image/x-icon",
            },
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
            },
            {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      ],
    }),
    preload(),
  ],

  server: {
    proxy: {
      "/api/": {
        target: "http://localhost:5065",
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env": process.env,
    // global: {},
  },

  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.js"],
  },
});
