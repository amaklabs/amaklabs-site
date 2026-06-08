import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/webhook-test': {
        target: 'https://n8n.amaklabs.com',
        changeOrigin: true,
      },
      '/webhook': {
        target: 'https://n8n.amaklabs.com',
        changeOrigin: true,
      },
    },
  },
})
