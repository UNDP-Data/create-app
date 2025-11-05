
import chalk from 'chalk';

export function printSuccess(config, installNow){
  console.log(chalk.bold.green('\n✅ Project created successfully!\n'));
  
  console.log(chalk.cyan('📦 Added packages:'));
  console.log(chalk.gray('  • React + TypeScript + Vite'));
  console.log(chalk.gray('  • Tailwind CSS'));
  console.log(chalk.gray('  • ESLint + Prettier'));
  console.log(chalk.gray('  • @undp/design-system-react'));
  if (config.installLucide) console.log(chalk.gray('  • lucide-react'));
  if (config.installDataViz) console.log(chalk.gray('  • @undp/data-viz'));
  if (config.installQuery) console.log(chalk.gray('  • @tanstack/react-query'));
  if (config.installRouter) console.log(chalk.gray('  • @tanstack/react-router'));
  
  console.log(chalk.cyan('\n🚀 Next steps:'));
  console.log(chalk.white(`  cd ${chalk.bold(config.projectName)}`));
  if(!installNow) console.log(chalk.white(`  ${chalk.bold('npm install')}`));
  console.log(chalk.white(`  ${chalk.bold('npm run dev')}`));
  
  console.log(chalk.dim('\nHappy coding! 🎉\n'));
}