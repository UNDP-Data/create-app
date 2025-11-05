import { execSync } from 'child_process';
import chalk from 'chalk';

function getLatestVersion(pkg) {
  console.log(chalk.gray(`  Fetching latest version for ${pkg}`));
  try {
    return execSync(`npm show ${pkg} version`).toString().trim();
  } catch {
    return 'latest';
  }
}

export function generatePackageJson(config) {
  const DEPENDENCIES = ['@undp/design-system-react', 'react', 'react-dom'] 
  if(config.installLucide) DEPENDENCIES.push('lucide-react');
  if(config.installDataViz) DEPENDENCIES.push('@undp/data-viz');
  if(config.installQuery) DEPENDENCIES.push('@tanstack/react-query');
  if(config.installRouter) DEPENDENCIES.push('@tanstack/react-router');
  const dependencies = {};
  DEPENDENCIES.forEach((d) => {
    const version = getLatestVersion(d)
    dependencies[d] = version === 'latest' ? 'latest' : `^${version}`;
  })
  const PEER_DEPENDENCIES = config.installDataVizPeerDeps ? [
    '@dnd-kit/core',
    '@dnd-kit/modifiers',
    'ajv',
    'dom-to-svg',
    'file-saver',
    'handlebars',
    'maplibre-gl',
    'marked',
    'math-expression-evaluator',
    'pmtiles',
    'react-globe.gl',
    'three',
  ] : [];
  PEER_DEPENDENCIES.forEach((d) => {
    const version = getLatestVersion(d)
    dependencies[d] = version === 'latest' ? 'latest' : `^${version}`;
  })
  const DEV_DEPENDENCIES = [
    '@eslint/config-array',
    '@eslint/js',
    '@nabla/vite-plugin-eslint',
    '@tailwindcss/postcss',
    '@tailwindcss/vite',
    '@types/node',
    '@types/react',
    '@types/react-dom',
    '@vitejs/plugin-react',
    'autoprefixer',
    'babel-plugin-react-compiler',
    'eslint',
    'eslint-config-love',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-n',
    'eslint-plugin-prettier',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'postcss',
    'postcss-nested',
    'prettier',
    'rimraf',
    'rollup-plugin-visualizer',
    'tailwind-animate',
    'tailwind-merge',
    'tailwindcss',
    'tailwindcss-animate',
    'typescript',
    'typescript-eslint',
    'vite',
    'vite-plugin-static-copy',
  ]
  const devDependencies = {}
  DEV_DEPENDENCIES.forEach((d) => {
    const version = getLatestVersion(d)
    devDependencies[d] = version === 'latest' ? 'latest' : `^${version}`;
  })
  const packageJson = {
    name: config.projectName,
    private: true,
    version: '0.0.0',
    type: 'module',
    keywords: [],
    author: '',
    sideEffects: [
      '*.css'
    ],
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
      clean: 'rimraf node_modules && rimraf dist && rimraf package-lock.json',
      'install:build': 'npm install && tsc && vite build',
      lint: 'npx eslint --fix && npx prettier . --write'
    },
    dependencies: dependencies,
    devDependencies: devDependencies
  }
  return packageJson
}