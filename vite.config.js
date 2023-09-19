import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/game-guess-the-number/",
  plugins: [react()],
  server: {
    host: true
  }
})
