export function generateIndexHtml(config) {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${config.projectName}</title>
    <link rel="preload" href="/fonts/proximanova-regular-webfont.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/proximanova-semibold-webfont.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/soehne-breit-web-fett.woff2" as="font" type="font/woff2" crossorigin />
  </head>
  <body>
    ${
			!config.addPostCSSScripts
				? `<div id="root"></div>`
				: `<div class="undp-container">
      <div id="root"></div>
    </div>`
		}
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}
