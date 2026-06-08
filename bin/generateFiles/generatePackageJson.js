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
  const dependenciesTemp = config.libraries.includes('peer') && config.libraries.includes('@undp/data-viz') ? {
    "@undp/design-system-react": designSystemVer,
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
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-globe.gl": "^2.37.0",
    "three": "^0.180.0",
    "zustand": zustandVer
  } : {
    "@undp/design-system-react": designSystemVer,
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "zustand": zustandVer
  };

  const dependencies = config.language && !config.framework.includes('next') ? {
    ...dependenciesTemp, 
    "i18next": "^26.0.8",
    "i18next-browser-languagedetector": "^8.2.1",
    "react-i18next": "^17.0.6",
  } : {...dependenciesTemp}

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
  const sortedDependencies = Object.fromEntries(
    Object.entries(dependencies).sort(([a], [b]) => a.localeCompare(b))
  );
  const devDependencies = config.framework.includes('vite') ?  {
    "@biomejs/biome": "^2.4.12",
    "@tailwindcss/postcss": "^4.1.17",
    "@tailwindcss/vite": "^4.3.0",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.2",
    "autoprefixer": "^10.4.21",
    "babel-plugin-react-compiler": "^1.0.0",
    "postcss": "^8.5.6",
    "postcss-nested": "^7.0.2",
    "rimraf": "^6.1.0",
    "rollup-plugin-visualizer": "^6.0.5",
    "tailwind-animate": "^0.2.10",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.3",
    "vite": "^8.0.13",
    "vite-plugin-static-copy": "^4.1.0"
  } : {
    "@biomejs/biome": "^2.4.12",
    "@tailwindcss/postcss": "^4.1.17",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "postcss": "^8.5.6",
    "postcss-nested": "^7.0.2",
    "rimraf": "^6.1.0",
    "rollup-plugin-visualizer": "^6.0.5",
    "tailwind-animate": "^0.2.10",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.3"
  };
  const sortedDevDependencies = Object.fromEntries(
    Object.entries(devDependencies).sort(([a], [b]) => a.localeCompare(b))
  );

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
        lint: "biome check . --write"
      } : {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview',
        clean: 'rimraf node_modules && rimraf dist && rimraf package-lock.json',
        'install:build': 'npm install && tsc && vite build',
        lint: "biome check . --write"
      },
    dependencies: sortedDependencies,
    devDependencies: sortedDevDependencies
  }
  return packageJson
}