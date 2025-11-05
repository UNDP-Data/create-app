export function generateReadme(config){
  return `# ${config.projectName}

React + TypeScript + Vite project with Tailwind CSS ${config.installDataViz ? ', UNDP Design System and data viz library' : 'and UNDP Design System'}.

This is a template to initiate project with tooling for linting and prettier and uses React Compiler.

## Installed Libraries

- React 19.2
- @undp/design-system-react${config.installLucide ? '\n- lucide-react' : ''}${config.installDataViz ? '\n- @undp/data-viz' : ''}${config.installQuery ? '\n- @tanstack/react-query' : ''}${config.installRouter ? '\n- @tanstack/react-router' : ''}

## Installation

This project uses \`npm\`. For installation you will need to install \`node\` and \`npm\`, if you don't already have it. \`node\` and \`npm\` can be installed from [here](https://nodejs.org/en/download/).

To install the project, simply clone the the repo and them run \`npm install\` in the project folder. You can use terminal on Mac and Command Prompt on Windows.

This project is bootstrapped with [\`Vite\`](https://vitejs.dev/) and was created using \`npm create vite@latest\` command.

Run the terminal or command prompt and then run the following

\`\`\`
git clone https://github.com/UNDP-Data/${config.projectName}.git
cd ${config.projectName}
npm install
\`\`\`

## Local Development

To start the project locally, you can run \`npm run dev\` in the project folder in terminal or command prompt.

This is run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Available Scripts

- \`npm run dev\`: Executes \`vite\` and start the local server for local deployment.
- \`npm run build\`: Executes \`tsc && vite build\` and builds the app for production and deployment.
- \`npm run clean\`: Executes \`rimraf node_modules && rimraf dist && rimraf package-lock.json\` and remove node_modules folder, dist folder and package-lock.json.
- \`npm run lint\`: Executes \`npx eslint --fix && npx prettier . --write\` and resolve all the linting and prettier errors.

## Tooling Setup

This project uses ESLint integrated with prettier, which verifies and formats your code so you don't have to do it manually. You should have your editor set up to display lint errors and automatically fix those which it is possible to fix. See [http://eslint.org/docs/user-guide/integrations](http://eslint.org/docs/user-guide/integrations).

This project is build in Visual Studio Code, therefore the project is already set up to work with. Install it from [here](https://code.visualstudio.com/) and then install this [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and you should be good to go.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

${
  config.installRouter ? `## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a code based router. Which means that the routes are defined in code (in the \`./src/main.tsx\` file).

### Adding A Route

To add a new route to your application just add another \`createRoute\` call to the \`./src/main.tsx\` file. The example below adds a new \`/about\`route to the root route.

\`\`\`tsx
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <h1>About</h1>,
});
\`\`\`

You will also need to add the route to the \`routeTree\` in the \`./src/main.tsx\` file.

\`\`\`tsx
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
\`\`\`

With this set up you should be able to navigate to \`/about\` and see the about page.

Of course you don't need to implement the About page in the \`main.tsx\` file. You can create that component in another file and import it into the \`main.tsx\` file, then use it in the \`component\` property of the \`createRoute\` call, like so:

\`\`\`tsx
import About from "./components/About.tsx";

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
\`\`\`

That is how we have the \`App\` component set up with the home page.

For more information on the options you have when you are creating code based routes check out the [Code Based Routing](https://tanstack.com/router/latest/docs/framework/react/guide/code-based-routing) documentation.

Now that you have two routes you can use a \`Link\` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the \`Link\` component from \`@tanstack/react-router\`.

\`\`\`tsx
import { Link } from "@tanstack/react-router";
\`\`\`

Then anywhere in your JSX you can use it like so:

\`\`\`tsx
<Link to="/about">About</Link>
\`\`\`

This will create a link that will navigate to the \`/about\` route.

More information on the \`Link\` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).
` :''
}
${
  config.installQuery ? `## Query

This project uses [TanStack Query](https://tanstack.com/query).
` :''
}
## Steps to Embed

Add the following div in the page

\`\`\`
<div id="root"></div>
\`\`\`

Apart from the mentioned \`div\` above the following \`script\` and \`link\` needs to be added to the \`head\` or in the embed code

\`\`\`
<link rel="dns-prefetch" href="{{Link to the Visualization}}">
<script defer="defer" type="module" src="{{Link to the Visualization}}/index.js"></script>
<link rel="modulepreload" crossorigin href="{{Link to the Visualization}}/react-{{hash}}.js">
<link rel="modulepreload" crossorigin href="{{Link to the Visualization}}/undp-{{hash}}.js">
<link rel="stylesheet" href="{{Link to the Visualization}}/style.css"></link>
\`\`\`

# Contact us
Contact us at [data@undp.org](mailto:data@undp.org) if you have any feedback or questions.
`;
}