#!/usr/bin/env node

import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { promptUser } from './promptUser.js';
import { generateFiles } from './generateFiles.js';
import { printSuccess, createFolders } from './utils/index.js';

async function main() {
  // Get user configuration
  const args = process.argv.slice(2);
  const projectName = args[0];
  const config = await promptUser(projectName);

  const projectPath = path.resolve(process.cwd(), config.projectName);
  console.log(chalk.gray('\n' + '─'.repeat(60)));
  console.log(chalk.bold.green(`\n📁 Creating project at: ${chalk.cyan(projectPath)}\n`));

  createFolders(projectPath, true);

  process.chdir(projectPath);
  
  
  createFolders(path.join(projectPath, 'public'), false);
  createFolders(path.join(projectPath, 'src'), false);
  createFolders(path.join(projectPath, 'src', 'styles'), false);
  createFolders(path.join(projectPath, 'src', 'assets'), false);

  if(config.installRouter) {
    createFolders(path.join(projectPath, 'src', 'routes'), false);
    createFolders(path.join(projectPath, 'src', 'components'), false);
  }

  if(config.installRouter && config.installQuery) {
    createFolders(path.join(projectPath, 'src', 'integration'), false);
  }
  
  generateFiles(config);

  const { installNow } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'installNow',
      message: 'Would you like to install dependencies now?',
      default: true,
    },
  ]);

  console.log(chalk.bold.yellow('\n📦 Installing dependencies (this might take some time)...'));
  if (installNow) execSync('npm install', { stdio: 'inherit' })
  console.log(chalk.green('  ✓ All dependencies installed'));

  printSuccess(config, installNow);
}

main().catch(console.error);