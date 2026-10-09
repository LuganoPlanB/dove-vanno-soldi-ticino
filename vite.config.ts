import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';

export default defineConfig({
  base: '/dove-vanno-soldi-ticino/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        metodologia: resolve(__dirname, 'metodologia.html'),
        storiaDebito: resolve(__dirname, 'storia-debito.html'),
        tassazioneImprese: resolve(__dirname, 'tassazione-imprese.html'),
        comuni: resolve(__dirname, 'comuni.html'),
        spese: resolve(__dirname, 'spese.html'),
        sanita: resolve(__dirname, 'sanita.html'),
        controllo: resolve(__dirname, 'controllo.html')
      }
    }
  },
  // Copy data files to dist
  plugins: [
    {
      name: 'copy-data-files',
      closeBundle() {
        const dataDir = resolve(__dirname, 'data');
        const distDataDir = resolve(__dirname, 'dist/data');
        
        try {
          mkdirSync(distDataDir, { recursive: true });
          const files = readdirSync(dataDir);
          files.forEach(file => {
            if (file.endsWith('.json')) {
              copyFileSync(
                resolve(dataDir, file),
                resolve(distDataDir, file)
              );
            }
          });
          console.log(`✓ Copied ${files.filter(f => f.endsWith('.json')).length} data files to dist/data/`);
        } catch (err) {
          console.error('Error copying data files:', err);
        }
      }
    }
  ]
});
