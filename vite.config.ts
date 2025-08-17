import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, writeFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        try {
          // ensure a .nojekyll file so GitHub Pages doesn't process files
          writeFileSync("dist/.nojekyll", "");
          // copy index.html -> 404.html for deep-link support
          if (existsSync("dist/index.html")) {
            copyFileSync("dist/index.html", "dist/404.html");
          }
        } catch (e) {
          console.warn("[github-pages-spa-fallback] skipped:", e);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: mode === "production" ? "./" : "/", // Use relative paths so assets resolve under /<repo>/
}));
