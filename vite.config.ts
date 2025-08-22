import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If your repo name is "phishcode-site", set base to "/phishcode-site/"
export default defineConfig({
  plugins: [react()],
  base: "/phishcode-site/",
});
