import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Replace 'react-folder' with your GitHub repository name
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cope/',  // Use the repository name as the base
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    open: true
  },
  define: {
    // Add this to make the API URL available in your React code
    'process.env.API_URL': JSON.stringify(process.env.NODE_ENV === 'production' 
      ? 'https://your-backend-url.com/api'  // Replace with your actual backend URL
      : 'http://localhost:5173/api'
    )
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
