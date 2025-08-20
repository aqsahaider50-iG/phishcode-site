// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/phishcode-site/', // <-- Must match your repo name
  plugins: [react()],
});