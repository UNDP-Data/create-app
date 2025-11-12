import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      'build/**',
      'public/**',
      'dist/**',
      'storybook-static/**',
      'dist-ssr/**',
      'coverage/**',
      '**/*.test.js',
      '**/__snapshots__/**',
      '.next/**',
      'out/**',
      'next-env.d.ts',
    ],
  },
  ...nextVitals,
  ...nextTs,
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,ts}'],
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-no-undef': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/prop-types': 'off',
      'react/require-default-props': 0,
      'react/jsx-filename-extension': 0,
      'react/no-array-index-key': 0,
      'react/jsx-props-no-spreading': 0,

      // TypeScript rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Import rules
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'import/no-anonymous-default-export': 0,

      // A11y rules
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',

      // General rules
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-nested-ternary': 0,
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]);
