This is a Next.js project powered by Tailwind CSS, and the UNDP Design System, bootstrapped with [@undp/create-app](https://www.npmjs.com/package/@undp/create-app). 

It includes:
* Next 16.x with React compiler
* UNDP Design System
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

This is run the app in development mode. Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## 📜 Available Scripts

- `npm run dev`: Executes `next dev` and start the local server for local deployment.
- `npm run build`: Executes `next build` and builds the app for production and deployment.
- `npm run preview`: Executes `next start` and serves the static build output locally.
- `npm run clean`: Executes `rimraf node_modules && rimraf .next && rimraf package-lock.json` and remove node_modules folder, dist folder and package-lock.json.
- `npm run check`: Executes `biome check .` and lists all the linting and prettier errors.
- `npm run check:fix`: Executes `biome check --write .` and resolve all the linting and prettier errors.

## 🧰 Tooling Setup

This project uses Biome integrated to automatically format and lint your code.

If you’re using Visual Studio Code, install:
* [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

Your editor should now show linting errors and automatically fix issues where possible.

More info: [Biome Docs](https://biomejs.dev/guides/getting-started/)

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling and and includes pre-configured design tokens from the UNDP Design System.

## 📬 Contact us

For questions or feedback, contact us at [data@undp.org](mailto:data@undp.org).