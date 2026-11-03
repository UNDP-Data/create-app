export function generateIndexHtml(config) {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <link rel="canonical" href="https://YOUR_SITE_URL/"/>

    <title>${config.projectName}</title>
    <meta name="description" content="SITE_DESCRIPTION" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${config.projectName}" />
    <meta property="og:title" content="${config.projectName}" />
    <meta property="og:description" content="${config.projectName}/>
    <meta property="og:url" content="https://YOUR_SITE_URL/" />
    <meta property="og:image" content="https://YOUR_SITE_URL/imgs/og-image.jpg" />
    <meta property="og:image:width" content="862" />
    <meta property="og:image:height" content="483" />
    <meta property="og:image:alt" content="YOUR_IMAGE_ALT" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />  

    <!-- Preload important assets -->    
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
