// vue.config.js
// module.exports = {
    // Other configurations...
//     productionSourceMap: true,
//   };
  

// vue.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Other configurations...
  productionSourceMap: true,
});
