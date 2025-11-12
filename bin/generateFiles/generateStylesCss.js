export function generateStylesCss(dataViz) {
  return `@import '@undp/design-system-react/style.css';${dataViz ? `
@import '@undp/data-viz/style.css';` : ''}
@import 'tailwindcss';
@config '../../tailwind.config.js';
`
}

