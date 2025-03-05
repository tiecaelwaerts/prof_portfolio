import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        './components/AboutMe.jsx',
        './components/Portfolio.jsx',
        './components/Contact.jsx',
        './components/Resume.jsx'
      ]
    }
  }
})
