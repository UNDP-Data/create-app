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
    chalk.bold.cyan("\n🚀 UNDP Frontend Starter Kit | Let's configure your application") +
    chalk.gray('\n🔧 Powered by React, Vite, TypeScript, ESLint, Prettier, Tailwind, and React Compiler\n')
  );
  console.log(chalk.gray('─'.repeat(60)) + '\n');

  const projectName = name ? name : (await question(chalk.yellow('📝 Enter project name: '))) || 'my-undp-react-app';
  
  const { libraries } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'libraries',
      message: chalk.yellow('📦 Select the libraries you want to install:'),
      choices: [
        { name: '@undp/data-viz (for visualizations)', value: '@undp/data-viz' },
        { name: 'lucide-react (for icons)', value: 'lucide-react' },
        { name: '@tanstack/react-router (for routing)', value: '@tanstack/react-router' },
        { name: '@tanstack/react-query (for state management and fetching data from api)', value: '@tanstack/react-query' },
      ],
      default: ['@undp/data-viz', 'lucide-react'], // optional default selection
    },
  ]);
  const installLucide = libraries.includes('lucide-react');  
  const installDataViz = libraries.includes('@undp/data-viz');  
  const installRouter = libraries.includes('@tanstack/react-router'); 
  const installQuery = libraries.includes('@tanstack/react-query');  

  let installDataVizPeerDeps = false;
  if (installDataViz) {
    const { peerDeps } = await inquirer.prompt([
      {
        type: 'list',
        name: 'peerDeps',
        message: chalk.yellow('📦 Add peer dependencies for @undp/data-viz?'),
        choices: ['Yes', 'No'],
        default: 'Yes',
      },
    ]);
    installDataVizPeerDeps = peerDeps === 'Yes'
  }

  let addPostCSSScripts = false;

  if(!installRouter) {
    const { postCSS } = await inquirer.prompt([
      {
        type: 'list',
        name: 'postCSS',
        message: chalk.yellow(
          '⚙️ Add PostCSS script to flatten layers, wrap all classes in `.undp-container`, and reorder media queries (recommended if embedding in another app)?'
        ),
        choices: ['Yes', 'No'],
        default: 'Yes',
      },
    ]);
    addPostCSSScripts = postCSS === 'Yes';
  }

  const { staticWebApp } = await inquirer.prompt([
    {
      type: 'list',
      name: 'staticWebApp',
      message: chalk.yellow('⚙️ Add Azure Static Web App Config file?'),
      choices: ['Yes', 'No'],
      default: 'No',
    },
  ]);

  // Convert string responses to booleans for convenience
  const addStaticWebAppConfig = staticWebApp === 'Yes';

  rl.close();
  return {
    projectName,
    installLucide,
    installDataViz,
    installDataVizPeerDeps,
    addStaticWebAppConfig,
    addPostCSSScripts,
    installRouter,
    installQuery
  };
}