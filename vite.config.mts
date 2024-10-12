import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  server: {
    port: 3333,
  },
});
