import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/dove-vanno-soldi-ticino/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        metodologia: resolve(__dirname, 'metodologia.html')
      }
    }
  }
});
