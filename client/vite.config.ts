import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  preview: {
    port: 5050,
  },
  plugins: [react()],
});
