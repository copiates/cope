import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from package.json or environment variable
const repoName = 'react-folder' // Your repository name

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    // Add this to make the API URL available in your React code
    'process.env.API_URL': JSON.stringify(process.env.NODE_ENV === 'production' 
      ? 'https://your-backend-url.com/api'  // Replace with your actual backend URL
      : 'http://localhost:5173/api'
    )
  }
})
