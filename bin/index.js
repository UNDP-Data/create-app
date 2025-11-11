#!/usr/bin/env node

import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { promptUser } from './promptUser.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { printSuccess, createFolders } from './utils/index.js';
import { generatePackageJson, generateViteConfig,  generateIndexHtml} from './generateFiles/index.js';

function copyFolder(source, destination) {
  fs.cpSync(source, destination, { recursive: true, force: true });
}

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];
  const config = await promptUser(projectName);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const projectPath = path.resolve(process.cwd(), config.projectName);
  console.log(chalk.gray('\n' + '─'.repeat(60)));
  console.log(chalk.bold.green(`\n📁 Creating project at: ${chalk.cyan(projectPath)}\n`));

  createFolders(projectPath, true);

  process.chdir(projectPath);
  
  const baseFolder = config.framework.includes('vite') ? 'vite' : 'next';
  
  const secondaryFolder = config.libraries.includes('@undp/data-viz') ? 'withDataViz' : 'withoutDataViz';

  let tertiaryFolder = 'basic';

  switch (config.framework) {
    case 'vite-query':
      tertiaryFolder = 'query';
      break;
    case 'vite-router':
      tertiaryFolder = 'router';
      break;
    case 'vite-full':
      tertiaryFolder = 'query+router';
      break;
    case 'next-auth':
      tertiaryFolder = 'auth';
      break;
    default:
      break;
  }
  
  copyFolder(path.join(__dirname, `./templates/${baseFolder}/${secondaryFolder}/${tertiaryFolder}`), projectPath)

  if (config.framework.includes('vite')) {
    fs.writeFileSync('vite.config.ts', generateViteConfig(config));
    fs.writeFileSync('index.html', generateIndexHtml(config));
  }
  fs.writeFileSync('package.json', JSON.stringify(generatePackageJson(config), null, 2));
  
  console.log(chalk.green('  ✓ Project folder and files generated'));

  const { installNow } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'installNow',
      message: 'Would you like to install dependencies now?',
      default: true,
    },
  ]);

  console.log(chalk.bold.yellow('\n📦 Installing dependencies (this might take some time)...'));
  if (installNow) {
    try {
      execSync('npm install', { stdio: 'inherit' })
      console.log(chalk.green('  ✓ All dependencies installed'));
    } catch {
      console.log(chalk.yellow('  ⚠️ Skipped installing dependencies (npm not installed or error occurred)'));
    }
  }
  try {
    execSync('git init', { stdio: 'ignore' });
    console.log(chalk.green('  ✓ Git repository initialized'));
  } catch {
    console.log(chalk.yellow('  ⚠️ Skipped git init (Git not installed or error occurred)'));
  }
  printSuccess(config, installNow);
}

main().catch(console.error);