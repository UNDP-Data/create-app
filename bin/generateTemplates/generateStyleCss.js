export function generateStyleCss(installDataViz){
  return `@import '@undp/design-system-react/style.css';
${installDataViz ? `@import '@undp/data-viz/style.css';` : ''}
@import 'tailwindcss';
@config '../../tailwind.config.js';`;
}