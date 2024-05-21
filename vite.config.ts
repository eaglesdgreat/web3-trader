import { URL, fileURLToPath } from 'url';

// import StylelintPlugin from 'vite-plugin-stylelint';
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    // StylelintPlugin({
    //   fix: true,
    //   quiet: false,
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
