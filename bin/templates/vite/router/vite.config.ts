import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssNested from 'postcss-nested';
import tailwindcss from '@tailwindcss/postcss';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    eslint(),
    visualizer({ filename: 'stats.html', open: true }),
    viteStaticCopy({
      targets: [{ src: 'staticwebapp.config.json', dest: '' }],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested(),
        tailwindcss(),
      ],
    },
  },
  build: {
    manifest: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react';
          if (id.includes('@undp/design-system-react')) return 'undp';
          if (id.includes('@undp/data-viz')) return 'undp';
        },
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name].[ext]',
        entryFileNames: '[name].js',
      },
      treeshake: true,
    },
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
