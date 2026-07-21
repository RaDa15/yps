import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/youth-portal-system/',
  build: {
    target: 'esnext',
  },
  define: {
    // Prevents crashes if third-party libraries check for process.env
    'process.env': {},
  },
})