# 🏗️ UNDP Create App CLI ![npm](https://img.shields.io/npm/v/@undp/create-app)

**`@undp/create-app`** is UNDP’s official **project scaffolding tool** for quickly bootstrapping frontend applications using **React**, and **TypeScript** — complete with sensible defaults for ESLint, Prettier, and UNDP’s Design System.

[NPM Package](https://www.npmjs.com/package/@undp/create-app)

---

## 🚀 Features

- ⚡ **React + TypeScript + TailwindCSS** setup out of the box  
- 🚀 **Vite support** for fast SPA development, including optional **state management**, and **routing** using **tanstack libraries**
- 🌐 **Next.js support** for full-stack apps, including optional **authentication (Auth)** using **Better Auth**
- 🧱 Preconfigured for UNDP’s Design System  
- 📊 Optional integration with **@undp/data-viz** for data visualization  
- 🧼 ESLint + Prettier ready

---

## 🧩 Pre-configured setups

- Vite + Tailwind
    - Lightweight and blazing fast React starter (ideal if you are planning to embed the SPA in another page)
- Vite + Tailwind + Query
    - Optimized starter with data fetching powered by TanStack Query (ideal if you are planning to embed the SPA in another page)
- Vite + Tailwind + Router
    - Fast starter with built-in routing support
- Vite + Tailwind + Router + Query
    - Complete Vite setup for routing and data management
- Next.js + Tailwind
    - Production-ready React framework with file-based routing and SSR
- Next.js + Tailwind + Auth
    - Secure, full-stack framework with authentication and SSR

---

## 📦 Installation

You don’t need to install it globally — just use **npx**:

```bash
npx @undp/create-app my-project
```

or install it globally

```bash
npm install -g @undp/create-app
create-undp-app my-project
```

---

## 📦 Getting started

After running the CLI, navigate into your project and start the dev server:

```bash
cd my-project && npm run dev
```

*Please note: If you have not installed the dependencies then you might want to run `npm install` before `npm run dev`.*