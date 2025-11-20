import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // importantissimo per far funzionare i file su Netlify
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src/'
    }
  },
  build: {
    sourcemap: false
  }
})

