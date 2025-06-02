import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import htmlMinifier from "vite-plugin-html-minifier-terser";
import viteImagemin from "vite-plugin-imagemin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_FOLDERS = [
  "bgMaterials",
  "icons",
  "angles",
  "basement",
  "walls",
  "background",
  "buttonBg",
];

export default defineConfig({
  plugins: [
    react(),
    htmlMinifier({
      minifyOptions: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.7, 0.9],
        speed: 3,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",

    rollupOptions: {
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: ({ name }) => {
          const ext = name ? path.extname(name) : "";

          if (ext === ".css") {
            return "[name]-[hash][extname]";
          }

          const folder = name
            ?.split("/")
            .find((part) => IMAGE_FOLDERS.includes(part));

          if (folder) {
            return `assets/images/${folder}/[name]-[hash][extname]`;
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
