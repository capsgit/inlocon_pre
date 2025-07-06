import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/inlocon_pre/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
  },
  plugins: [react()],
});
