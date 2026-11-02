export function generateStylesCss(dataViz) {
	return `
@import 'tailwindcss';
@import "@undp/design-system-react/tailwind.css";${
		dataViz
			? `
@import '@undp/data-viz/tailwind.css';`
			: ""
	}
`;
}
