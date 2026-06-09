export function generateViteConfig(config) {
  return `import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssNested from 'postcss-nested';
import tailwindcss from '@tailwindcss/postcss';${config.addStaticWebAppConfig ? `
import { viteStaticCopy } from 'vite-plugin-static-copy';` : ''}${config.addPostCSSScripts ? `
import { AtRule } from 'postcss';` : ''}

export default defineConfig({
  plugins: [
    react({}),
    visualizer({ filename: 'stats.html', open: true }),${config.addStaticWebAppConfig ? `
    viteStaticCopy({
      targets: [{ src: 'staticwebapp.config.json', dest: '' }],
    }),` : ''}
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested(),
        tailwindcss(),${config.addPostCSSScripts ? `
        {
          postcssPlugin: 'remove-layers', // If you want to flatten layers except base layer
          AtRule: {
            layer(rule) {
              if (rule.params !== 'base') {
                rule.each(child => {
                  rule.parent.insertAfter(rule, child);
                });
                rule.remove();
              }
            },
          },
        },
        {
          postcssPlugin: 'wrap-with-undp-container', // If you want to wrap all the class in .undp-container
          OnceExit(root) {
            const skipSelectors = ['html', 'body', ':root', ':host'];
            root.walkRules(rule => {
              if (rule.parent && rule.parent.type === 'atrule') {
                const parent = rule.parent as AtRule;
                if (parent.name === 'keyframes' || parent.name === 'supports') {
                  return;
                }
              }
              rule.selectors = rule.selectors.map(selector => {
                if (selector.startsWith('.undp-container')) return selector;
                if (skipSelectors.some(skip => selector.startsWith(skip)))
                  return selector;
                return \`.undp-container \${selector}\`;
              });
            });
          },
        },
        {
          postcssPlugin: 'move-responsive-queries',
          OnceExit(root) {
            const mediaRules = [];
            const containerRules = [];

            function extractMinWidth(params) {
              let match = params.match(/min-width:\\s*([\\d.]+)(px|rem)/);
              if (!match) {
                match = params.match(/width\\s*>=\\s*([\\d.]+)(px|rem)/);
              }
              if (!match) return null;

              const value = parseFloat(match[1]);
              const unit = match[2];
              return unit === 'rem' ? value * 16 : value;
            }

            root.walkAtRules(rule => {
              if (rule.name !== 'media' && rule.name !== 'container') return;

              const pxValue = extractMinWidth(rule.params);
              if (pxValue === null) return;

              const entry = {
                pxValue,
                rule: rule.clone(),
              };

              if (rule.name === 'media') {
                mediaRules.push(entry);
              } else {
                containerRules.push(entry);
              }

              rule.remove();
            });

            // 1. Append media first
            mediaRules
              .sort((a, b) => a.pxValue - b.pxValue)
              .forEach(({ rule }) => {
                root.append(rule);
              });

            // 2. Append container after
            containerRules
              .sort((a, b) => a.pxValue - b.pxValue)
              .forEach(({ rule }) => {
                root.append(rule);
              });
          },
        },` : `
        {
          postcssPlugin: 'move-responsive-queries',
          OnceExit(root) {
            const mediaRules = [];
            const containerRules = [];

            function extractMinWidth(params) {
              let match = params.match(/min-width:\\s*([\\d.]+)(px|rem)/);
              if (!match) {
                match = params.match(/width\\s*>=\\s*([\\d.]+)(px|rem)/);
              }
              if (!match) return null;

              const value = parseFloat(match[1]);
              const unit = match[2];
              return unit === 'rem' ? value * 16 : value;
            }

            root.walkAtRules(rule => {
              if (rule.name !== 'media' && rule.name !== 'container') return;

              const pxValue = extractMinWidth(rule.params);
              if (pxValue === null) return;

              const entry = {
                pxValue,
                rule: rule.clone(),
              };

              if (rule.name === 'media') {
                mediaRules.push(entry);
              } else {
                containerRules.push(entry);
              }

              rule.remove();
            });

            // 1. Append media first
            mediaRules
              .sort((a, b) => a.pxValue - b.pxValue)
              .forEach(({ rule }) => {
                root.append(rule);
              });

            // 2. Append container after
            containerRules
              .sort((a, b) => a.pxValue - b.pxValue)
              .forEach(({ rule }) => {
                root.append(rule);
              });
          },
        },`
        }
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
          if (id.includes('@undp/design-system-react')) return 'undp-design-system';${config.libraries.includes('@undp/data-viz') ? `
          if (id.includes('@undp/data-viz')) return 'undp-data-viz';` : ''}
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
`
}

