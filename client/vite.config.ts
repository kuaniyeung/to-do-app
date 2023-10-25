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
  build: {
    rollupOptions: {
      output: {
        globals: {
          "import.meta.env.VITE_SUPABASE_KEY": JSON.stringify(
            process.env.SUPABASE_KEY
          ),
        },
      },
    },
  },
});
