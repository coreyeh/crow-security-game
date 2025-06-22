import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@@': __dirname,
      '@': path.resolve(__dirname, 'src')
    }
  }
})
