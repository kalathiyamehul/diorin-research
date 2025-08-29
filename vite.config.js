import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chatgpt: resolve(__dirname, 'pages/ChatGpt.html'),
        genspark: resolve(__dirname, 'pages/GenSpark.html'),
        perplexity2: resolve(__dirname, 'pages/PerplexityResearch2.html'),
        perplexity3: resolve(__dirname, 'pages/PerplexityResearch3.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173
  }
})