export function generateStylesCss(dataViz) {
	return `
@import 'tailwindcss';
@import '@undp/design-system-react/style.css';
@import '@undp/design-system-react/theme.css';${
		dataViz
			? `
@import '@undp/data-viz/style.css';`
			: ""
	}
`;
}
