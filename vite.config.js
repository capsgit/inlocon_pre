import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/inlocon_pre/",
  build: {
    assetsDir: "assets",
  },
  plugins: [react()],
});
