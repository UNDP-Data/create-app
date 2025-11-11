
import chalk from 'chalk';

export function printSuccess(config, installNow){
  console.log(chalk.bold.green('\n✅ Project created successfully!\n'));
  
  
  console.log(chalk.cyan('\n🚀 Next steps:'));
  console.log(chalk.white(`  cd ${chalk.bold(config.projectName)}`));
  if(!installNow) console.log(chalk.white(`  ${chalk.bold('npm install')}`));
  console.log(chalk.white(`  ${chalk.bold('npm run dev')}`));
  
  console.log(chalk.dim('\nHappy coding! 🎉\n'));
}