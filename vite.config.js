import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()  
  ],
  base: '/Portfolio', // Must match your repo name exactly
  build: {
    outDir: 'docs', // GitHub Pages can auto-detect this folder
    emptyOutDir: true
  }
})