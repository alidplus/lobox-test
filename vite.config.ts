import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["src"], insertTypesEntry: true })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "GOLDEN UI KIT",
      formats: ["es", "umd", "cjs"],
      fileName: "main",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "tailwind-variants",
        "react/jsx-runtime",
        "tailwindcss",
      ],
    },
  },
});
