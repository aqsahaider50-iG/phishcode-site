import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  base: '/phishcode-site/',   // 👈 this must match your repo name
}
