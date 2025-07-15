import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
'@vitejs/plugin-react-swc' // Importing the React plugin for Vite
'vite-plugin-gh-|pages' // Importing the GitHub Pages plugin for Vite

// https://vite.dev/config/
export default defineConfig({
  base: '/PROYECTOPORTAFOLIOREACT/', // Base path for GitHub Pages
  plugins: [react()],
})
