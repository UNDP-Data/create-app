import fs from 'fs';
import chalk from 'chalk';
import { 
  generatePackageJson,
  generateReadme,
  generateStyleCss,
  copyTemplate,
  generateNextLayout,
} from './generateFiles/index.js';

export function generateFiles(config) {  
  // Main files
  let projectType = 'basic';

  if (config.installRouter && config.installQuery) {
    projectType = 'router+query';
  } else if (config.installRouter) {
    projectType = 'router';
  } else if (config.installQuery) {
    projectType = 'query';
  } else {
    projectType = 'basic';
  }
  copyTemplate('src/main.tsx', 'main.txt', ['templates', projectType]);
  copyTemplate(
    'src/App.tsx',
    config.addPostCSSScripts && !config.installRouter ? 'AppWithContainer.txt' : 'App.txt', 
    ['templates', projectType]
  );
  if (config.installRouter) {
    copyTemplate('src/components/Header.tsx', 'Header.txt', ['templates', projectType, 'components']);
    copyTemplate('src/components/Footer.tsx', 'Footer.txt', ['templates', projectType, 'components']);
    if (config.installQuery) {
      copyTemplate('src/integration/tanstack-query.tsx', 'tanstack-query.txt', ['templates', projectType, 'integration']);
      copyTemplate('src/routes/queryDemo.tsx', 'queryDemo.txt', ['templates', projectType, 'routes']);
    } else {
      copyTemplate('src/routes/About.tsx', 'About.txt', ['templates', projectType, 'routes']);
    }
  }
  fs.writeFileSync('src/styles/style.css', generateStyleCss(config.installDataViz));
  copyTemplate('src/styles/fonts.css', 'fonts.css', ['templates', 'css']);
  copyTemplate('src/assets/undp-logo-blue.svg', 'icon.txt', ['templates', 'configFiles']);
  copyTemplate('public/undp-logo-blue.svg', 'icon.txt', ['templates', 'configFiles']);
  console.log(chalk.green('  ✓ Created core files and base styles.'));

  // Config files
  console.log(chalk.bold.yellow('\n⚙️  Creating configuration and tooling files...'));
  copyTemplate('eslint.config.mjs', 'eslint.config.mjs', ['templates', 'configFiles']);
  copyTemplate('.prettierrc', '.prettierrc', ['templates', 'configFiles']);
  copyTemplate('vite.config.ts', config.addPostCSSScripts ?  'vite.config.ts.txt' : 'viteWithoutPostCss.config.ts.txt', ['templates', 'configFiles']);
  fs.writeFileSync('src/vite-env.d.ts', `/// <reference types="vite/client" />`);
  copyTemplate('tsconfig.json', 'tsconfig.json', ['templates', 'configFiles']);
  copyTemplate('tsconfig.node.json', 'tsconfig.node.json', ['templates', 'configFiles']);
  copyTemplate('tailwind.config.js', 'tailwind.config.js', ['templates', 'configFiles']);
  if (config.addStaticWebAppConfig) {
    copyTemplate('staticwebapp.config.json', 'staticwebapp.config.json', ['templates', 'configFiles']);
  }
  copyTemplate('.gitignore', '.gitignore', ['templates', 'configFiles']);
  fs.writeFileSync('README.md', generateReadme(config));
  console.log(chalk.green('  ✓ Created ESLint, Prettier, Vite, TypeScript, Tailwind, and other configs.'));

  // Package.json
  console.log(chalk.bold.yellow('\n📜 Creating package.json and scripts...'));
  fs.writeFileSync('package.json', JSON.stringify(generatePackageJson(config), null, 2));
  console.log(chalk.green('  ✓ Created package.json.'));
}


export function generateNextFiles(config) {  
  // Main files
  copyTemplate('public/undp-logo-blue.svg', 'icon.txt', ['templates', 'configFiles']);
  fs.writeFileSync('src/styles/style.css', generateStyleCss(config.installDataViz));
  copyTemplate('src/styles/fonts.css', 'fonts.css', ['templates', 'css']);
  fs.writeFileSync('src/app/layout.tsx', generateNextLayout(config.projectName));
  copyTemplate('src/app/page.tsx', 'page.txt', ['templates', 'next']);
  copyTemplate('src/app/head.tsx', 'head.txt', ['templates', 'next']);
  copyTemplate('src/app/about/page.tsx', 'About.txt', ['templates', 'next', 'routes']);
  copyTemplate('src/components/Header.tsx', 'Header.txt', ['templates', 'next', 'components']);
  copyTemplate('src/components/Footer.tsx', 'Footer.txt', ['templates', 'next', 'components']);
  console.log(chalk.green('  ✓ Created core files and base styles.'));

  // Config files
  console.log(chalk.bold.yellow('\n⚙️  Creating configuration and tooling files...'));
  copyTemplate('.next/types/routes.d.ts', 'routes.d.ts.txt', ['templates', 'next']);
  copyTemplate('.next/types/validator.ts', 'validator.ts.txt', ['templates', 'next']);
  copyTemplate('eslint.config.mjs', 'eslint.config.mjs', ['templates', 'configFiles']);
  copyTemplate('.prettierrc', '.prettierrc', ['templates', 'configFiles']);
  copyTemplate('tsconfig.json', 'tsconfig.json', ['templates', 'configFiles']);
  copyTemplate('tsconfig.node.json', 'tsconfig.node.json', ['templates', 'configFiles']);
  copyTemplate('tailwind.config.js', 'tailwind.config.js', ['templates', 'configFiles']);
  copyTemplate('.gitignore', '.gitignore', ['templates', 'configFiles']);
  copyTemplate('next.config.ts', 'next.config.ts.txt', ['templates', 'next']);
  copyTemplate('next-env.d.ts', 'next-env.d.ts.txt', ['templates', 'next']);
  copyTemplate('postcss.config.mjs', 'postcss.config.mjs.txt', ['templates', 'next']);
  if (config.addAuth) {
    copyTemplate('.env.local', '.env.local', ['templates', 'configFiles']);
  }
  fs.writeFileSync('README.md', generateReadme(config));
  console.log(chalk.green('  ✓ Created ESLint, Prettier, Next, TypeScript, Tailwind, and other configs.'));

  // Package.json
  console.log(chalk.bold.yellow('\n📜 Creating package.json and scripts...'));
  fs.writeFileSync('package.json', JSON.stringify(generatePackageJson(config), null, 2));
  console.log(chalk.green('  ✓ Created package.json.'));
}