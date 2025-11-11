import readline from 'readline';
import inquirer from 'inquirer';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise(resolve => rl.question(query, resolve));

export async function promptUser(name) {
  console.log(
    chalk.bold.cyan("\n🚀 UNDP Frontend Starter Kit | Let's configure your application")
  );
  console.log(chalk.gray('─'.repeat(60)) + '\n');

  const projectName = name ? name : (await question(chalk.yellow('📝 Enter project name: '))) || 'my-undp-react-app';
  
  const { framework } = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: chalk.yellow('📦 Select the framework you prefer to use:\n'),
      choices: [
        { 
          name: 'Vite + Tailwind — Lightweight and blazing fast React starter (ideal if you are planning to embed the SPA in another page)', 
          value: 'vite-basic' 
        },
        { 
          name: 'Vite + Tailwind + Query — Optimized starter with data fetching powered by TanStack Query (ideal if you are planning to embed the SPA in another page)', 
          value: 'vite-query' 
        },
        { 
          name: 'Vite + Tailwind + Router — Fast starter with built-in routing support', 
          value: 'vite-router' 
        },
        { 
          name: 'Vite + Tailwind + Router + Query — Complete Vite setup for routing and data management', 
          value: 'vite-full' 
        },
        { 
          name: 'Next.js + Tailwind — Production-ready React framework with file-based routing and SSR', 
          value: 'next-basic' 
        },
        { 
          name: 'Next.js + Tailwind + Auth — Secure, full-stack framework with authentication and SSR', 
          value: 'next-auth' 
        },
      ],
      default: 'vite-basic',
    },
  ]);

  const libraryChoices = [
    { 
      name: '@undp/data-viz — UNDP data visualization components', 
      value: '@undp/data-viz' 
    },
    { 
      name: 'lucide-react — Beautiful open-source icon set for React', 
      value: 'lucide-react' 
    },
    { 
      name: 'Peer dependencies — Install required framework dependencies', 
      value: 'peer' 
    },
  ];

  const { libraries } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'libraries',
      message: chalk.yellow('📦 Select the libraries you want to install:'),
      choices: libraryChoices,
      default: ['@undp/data-viz', 'lucide-react'],
    },
  ]);

  let addPostCSSScripts = false;

  if(framework !== 'next-basic' && framework !== 'next-auth') {
    const { postCSS } = await inquirer.prompt([
      {
        type: 'list',
        name: 'postCSS',
        message: chalk.yellow(
          '⚙️ Add PostCSS script to flatten layers, wrap all classes in `.undp-container` (recommended if embedding in another app)?'
        ),
        choices: ['Yes', 'No'],
        default: 'Yes',
      },
    ]);
    addPostCSSScripts = postCSS === 'Yes';
  }

  const { staticWebApp } = framework !== 'next-basic' && framework !== 'next-auth' ? await inquirer.prompt([
    {
      type: 'list',
      name: 'staticWebApp',
      message: chalk.yellow('⚙️ Add Azure Static Web App Config file?'),
      choices: ['Yes', 'No'],
      default: 'No',
    },
  ]) : { staticWebApp: 'No' };

  const addStaticWebAppConfig = staticWebApp === 'Yes';

  rl.close();

  return {
    projectName,
    libraries,
    addStaticWebAppConfig,
    addPostCSSScripts,
    framework, 
  };
}