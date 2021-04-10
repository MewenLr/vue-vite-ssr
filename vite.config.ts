import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, '/src')

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import '${srcPath}/styles/_index.sass'`,
      },
    },
  },
})
