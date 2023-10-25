import { defineConfig, } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  preview: {
    port: 5050,
  },
  plugins: [react()],
  define: {
    "import.meta.env.VITE_SUPABASE_KEY": JSON.stringify(env.VITE_SUPABASE_KEY),
  },
});
