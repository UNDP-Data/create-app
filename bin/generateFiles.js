import fs from 'fs';
import chalk from 'chalk';
import { 
  generatePackageJson,
  generateReadme,
  generateStyleCss,
  copyTemplate,
} from './generateTemplates/index.js';

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
  copyTemplate('eslint.config.js', 'eslint.config.js', ['templates', 'configFiles']);
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