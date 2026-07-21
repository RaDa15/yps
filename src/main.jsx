import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add base path matching your GitHub repository name:
  base: '/youth-portal-system/', 
})