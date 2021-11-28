import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: 'svantic',
      fileName: (format) => `index.${format}.js`,
      formats: ['es']
    },
  },
  optimizeDeps: {
    include: ["fomantic-ui"]
  },
  plugins: [svelte()]
})
