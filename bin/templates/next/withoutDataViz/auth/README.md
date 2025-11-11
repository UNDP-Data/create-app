This is a Next.js project powered by Tailwind CSS, and the UNDP Design System, bootstrapped with [@undp/create-app](https://www.npmjs.com/package/@undp/create-app). 

It includes:
* Next 16.x with React compiler
* UNDP Design System
* Authentication with [Better Auth](https://www.better-auth.com/)
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

This is run the app in development mode. Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## 📜 Available Scripts

- `npm run dev`: Executes `next dev` and start the local server for local deployment.
- `npm run build`: Executes `next build` and builds the app for production and deployment.
- `npm run preview`: Executes `next start` and serves the static build output locally.
- `npm run clean`: Executes `rimraf node_modules && rimraf .next && rimraf package-lock.json` and remove node_modules folder, dist folder and package-lock.json.
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

## 🛡️ Authentication

Authentication in this project is powered by [Better Auth](https://www.better-auth.com/), which provides a simple and flexible API for adding new providers.

**Add a new provider**
Add a new provider in `lib/auth.ts`. For example to add Google authenticator:

```ts
import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  plugins: [nextCookies()],
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    strategy: 'jwt',
    expiresIn: 60 * 60 * 24 * 7,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    goggle: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
```

**Add env variable**
Add client id and secret (and tenant id) in the `.env.local` file. These id and secret are used in `lib/auth.ts`.

**Add a sign in button**
Example of sign in button

```ts
import { signIn } from '@/lib/auth-client';

<button onClick={() => signIn.social({ provider: 'google', callbackURL: '/user' })}>
  Sign in with Google
</button>
```

More info: [Better Auth docs](https://www.better-auth.com/docs/introduction)

## 📬 Contact us

For questions or feedback, contact us at [data@undp.org](mailto:data@undp.org).