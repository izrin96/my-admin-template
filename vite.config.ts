import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 44463,
    host: true,
    proxy: {
      "/api": "http://localhost:5057",
      "/graphql": {
        target: "ws://localhost:5057",
        ws: true,
      },
    },
  },
});
