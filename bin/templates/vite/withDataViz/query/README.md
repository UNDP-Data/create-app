This is a React + TypeScript + Vite project powered by Tailwind CSS, the UNDP Design System, and the UNDP Data Visualization Library, bootstrapped with [@undp/create-app](https://www.npmjs.com/package/@undp/create-app). 

It includes:
* React 19.x with React compiler
* UNDP Design System
* UNDP Data Visualization library
* Data fetching with [TanStack Query](https://tanstack.com/query)
* TailwindCSS
* Code linting and formatting via ESLint and Prettier

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
- `npm run lint`: Executes `npx eslint --fix && npx prettier . --write` and resolve all the linting and prettier errors.

## 🧰 Tooling Setup

This project uses ESLint integrated with Prettier to automatically format and lint your code.

If you’re using Visual Studio Code, install:
* [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Your editor should now show linting errors and automatically fix issues where possible.

More info: [ESLint Integrations](http://eslint.org/docs/user-guide/integrations)

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling and and includes pre-configured design tokens from the UNDP Design System.

## 🔍 Data Fetching

Data fetching is powered by [TanStack Query](https://tanstack.com/query) for efficient, declarative data fetching and caching.

## 🌐 Embedding the Visualization

To embed the visualization on an external page, include:

**HTML Placeholder**

```html
<div id="root"></div>
```

**Required `<script>` and `<link>` tags**
```
<link rel="dns-prefetch" href="{{Visualization URL}}">
<script defer="defer" type="module" src="{{Visualization URL}}/index.js"></script>
<link rel="modulepreload" crossorigin href="{{Visualization URL}}/react-{{hash}}.js">
<link rel="modulepreload" crossorigin href="{{Visualization URL}}/undp-{{hash}}.js">
<link rel="stylesheet" href="{{Visualization URL}}/style.css"></link>
```

## 📬 Contact us

For questions or feedback, contact us at [data@undp.org](mailto:data@undp.org).