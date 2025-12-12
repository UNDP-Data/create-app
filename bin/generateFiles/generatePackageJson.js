import { execSync } from 'child_process';
import chalk from 'chalk';

function getLatestVersion(pkg) {
  try {
    return execSync(`npm show ${pkg} version`).toString().trim();
  } catch {
    return 'latest';
  }
}

export function generatePackageJson(config) {
  console.log(chalk.gray(`  Fetching latest version for packages...`));
  const designSystemVer = `^${getLatestVersion('@undp/design-system-react')}`
  const zustandVer = `^${getLatestVersion('zustand')}`
  const dependencies = config.libraries.includes('peer') && config.libraries.includes('@undp/data-viz') ? {
    "@undp/design-system-react": designSystemVer,
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/modifiers": "^9.0.0",
    "ajv": "^8.17.1",
    "dom-to-svg": "^0.12.2",
    "file-saver": "^2.0.5",
    "handlebars": "^4.7.8",
    "maplibre-gl": "^5.12.0",
    "marked": "^16.4.1",
    "math-expression-evaluator": "^2.0.7",
    "pmtiles": "^4.3.0",
    "react-globe.gl": "^2.37.0",
    "three": "^0.180.0",
    "zustand": zustandVer
  } : {
    "@undp/design-system-react": designSystemVer,
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "zustand": zustandVer
  };

  switch (config.framework) {
    case 'vite-router':  
      dependencies['@tanstack/react-router'] = '^1.141.1';
      break;
    case 'next-basic':  
      dependencies['next'] = '16.0.10';
      break;
    case 'next-auth':  
      dependencies['better-auth'] = '^1.3.34';
      dependencies['next'] = '16.0.10';
      break;
    default:
      break;
  }
  if (config.query) { 
    dependencies['@tanstack/react-query'] = '^5.90.12';
  }
  if (config.libraries.includes('@undp/data-viz')) {
    const dataVizVer = `^${getLatestVersion('@undp/data-viz')}`
    dependencies['@undp/data-viz'] = dataVizVer;
  }
  if (config.libraries.includes('lucide-react')) {
    const lucideReactVer = `^${getLatestVersion('lucide-react')}`
    dependencies['lucide-react'] = lucideReactVer;    
  }
  const devDependencies = config.framework.includes('vite') ?  {
    "@eslint/config-array": "^0.21.1",
    "@eslint/js": "^9.39.1",
    "@nabla/vite-plugin-eslint": "^2.0.6",
    "@tailwindcss/postcss": "^4.1.17",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.21",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^9.39.1",
    "eslint-config-love": "^133.0.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-n": "^17.23.1",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-promise": "^7.2.1",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "postcss": "^8.5.6",
    "postcss-nested": "^7.0.2",
    "prettier": "^3.6.2",
    "rimraf": "^6.1.0",
    "rollup-plugin-visualizer": "^6.0.5",
    "tailwind-animate": "^0.2.10",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.3",
    "vite": "^7.2.2",
    "vite-plugin-static-copy": "^3.1.4",
    "@vitejs/plugin-react": "^5.1.2",
    "@tailwindcss/vite": "^4.1.17"
  } : {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.17",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.7",
    "eslint": "^9.39.1",
    "eslint-config-love": "^133.0.0",
    "eslint-config-next": "16.0.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-n": "^17.23.1",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-promise": "^7.2.1",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "postcss": "^8.5.6",
    "postcss-nested": "^7.0.2",
    "prettier": "^3.6.2",
    "rimraf": "^6.1.0",
    "rollup-plugin-visualizer": "^6.0.5",
    "tailwind-animate": "^0.2.10",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.3"
  };

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
    scripts: config.framework.includes('next')
      ? {
        dev: 'next dev',
        build: 'next build',
        start: 'next start',
        clean: 'rimraf node_modules && rimraf .next && rimraf package-lock.json',
        lint: 'npx eslint --fix && npx prettier . --write'
      } : {
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