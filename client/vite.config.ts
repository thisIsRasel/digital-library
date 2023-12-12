import path from 'path';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import legacy from '@vitejs/plugin-legacy';

const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './out/menu');
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'last 2 versions', 'IE 11', '> 1%'],
    }),
    nodePolyfills(),
    splitVendorChunkPlugin(),
    commonjs({
      transformMixedEsModules: true,
    }),
  ],
  publicDir: PUBLIC_DIR,
  define: {
    'process.env': process.env || {},
  },
  base: '/',
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modulePath = id.toString().split('node_modules/')[1];
            return modulePath.split('/')[0].toString();
          }
        },
      },
      treeshake: true,
    },
    commonjsOptions: {
      sourceMap: false,
      transformMixedEsModules: true,
      include: [],
    },
  },
  resolve: {},
  css: { devSourcemap: true },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
});
