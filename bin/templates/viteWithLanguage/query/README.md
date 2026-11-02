This is a React + TypeScript + Vite project powered by Tailwind CSS, and the UNDP Design System, bootstrapped with [@undp/create-app](https://www.npmjs.com/package/@undp/create-app). 

It includes:

* React 19.x with React compiler
* UNDP Design System
* Data fetching with [TanStack Query](https://tanstack.com/query)
* TailwindCSS
* Code linting and formatting via Biome

## 🧩 Installation

This project uses `npm`. 

For installation you will need to install `node` and `npm`, if you don't already have it. `node` and `npm` can be installed from [here](https://nodejs.org/en/download/).

To install the project, simply run `npm install` in the project folder in the terminal on Mac or Command Prompt on Windows.

## 🚀 Local Development

To start the project locally:

```bash
npm run dev
```

This is run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## 📜 Available Scripts

- `npm run dev`: Executes `vite` and start the local server for local deployment.
- `npm run build`: Executes `tsc && vite build` and builds the app for production and deployment.
- `npm run preview`: Executes `vite preview` and serves the static build output (from vite build) locally.
- `npm run clean`: Executes `rimraf node_modules && rimraf dist && rimraf package-lock.json` and remove node_modules folder, dist folder and package-lock.json.
- `npm run check`: Executes `biome check .` and lists all the linting and prettier errors.
- `npm run check:fix`: Executes `biome check --write .` and resolve all the linting and prettier errors.

## 🧰 Tooling Setup

This project uses Biome integrated to automatically format and lint your code.

If you’re using Visual Studio Code, install:
* [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

Your editor should now show linting errors and automatically fix issues where possible.

More info: [Biome Docs](https://biomejs.dev/guides/getting-started/)

__Recommendation__

On Visual Studio Code, you can also use the [i18n Ally](https://github.com/lokalise/i18n-ally/wiki) extension for a better translation workflow. It provides features such as translation key autocomplete, inline translation previews, missing key detection, and quick navigation between translation files. 

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling and and includes pre-configured design tokens from the UNDP Design System.

## 🔣 Adding a new language

1. Create a new translation file (e.g. `src/locales/<language code>/common.json`) containing all translated keys.
2. Import and register the language in your i18next `src/i18n.ts`.
3. Add the new language in `LANGUAGE` variable in `src/constants.ts`.
4. Add the language code to your language selector or supported languages list.
5. Switch languages using `i18n.changeLanguage('fr')` and i18next will load the corresponding translations.

## 🔍 Data Fetching

Data fetching is powered by [TanStack Query](https://tanstack.com/query) for efficient, declarative data fetching and caching.

## 🌐 Embedding the Visualization

To embed the visualization on an external page, include:

### Option 1: Iframe

__HTML Placeholder__

```html
  <iframe
    id="my-embed"
    src="<url of the app>"
    style="width: 100%; border: 0; display: block;"
    scrolling="no"
  />
```

__Required `<script>`__

```js
  <script>
    var iframe = document.getElementById('my-embed');
    window.addEventListener('message', function (e) {
      if (e.origin !== 'APP_URL') return;
      if (e.source !== iframe.contentWindow) return;
      if (e.data && e.data.type === 'iframe-height') {
        iframe.style.height = e.data.height + 'px';
      }
    });
  </script>
```

_This script listens for height messages from the embedded web app and resizes the iframe to match its content, so the app displays without an inner scrollbar._

### Option 2: Embed in the page (Worst performance better UX)

__HTML Placeholder__

```html
<div id="root"></div>
```

__Required `<script>` and `<link>` tags__

```html
<link rel="dns-prefetch" href="{{Visualization URL}}">
<script defer="defer" type="module" src="{{Visualization URL}}/index.js"></script>
<link rel="stylesheet" href="{{Visualization URL}}/style.css"></link>
```

## ✅ Launch Checklist

Before deploying to production, complete the launch checklist. It covers metadata and SEO, analytics, QA, accessibility, performance, security headers and caching.

The checklist is set up as a GitHub issue template, so each launch gets its own tickable copy:

1. Go to **Issues → New issue** in this repository.
2. Select **Launch checklist**.
3. Assign yourself, and click **Create**.
4. Tick items off as you complete them. The issue list shows progress (e.g. "7 of 32 tasks").

Or open it directly: [Create launch checklist issue](../../issues/new?template=launch-checklist.md)

Don't close the issue until every item is checked, or marked N/A with a reason.

The template lives in `.github/ISSUE_TEMPLATE/launch-checklist.md`.

## 📬 Contact us

For questions or feedback, contact us at [data@undp.org](mailto:data@undp.org).