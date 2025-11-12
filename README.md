# 🏗️ UNDP Create App CLI ![npm](https://img.shields.io/npm/v/@undp/create-app)

**`@undp/create-app`** is UNDP’s official **project scaffolding tool** for quickly bootstrapping frontend applications using **React**, and **TypeScript** — complete with sensible defaults for ESLint, Prettier, and UNDP’s Design System.

[NPM Package](https://www.npmjs.com/package/@undp/create-app)

---

## 🚀 Features

- ⚡ **React + TypeScript** setup out of the box  
- 🎨 Includes **Tailwind CSS** for styling  
- 🧠 Includes **Zustand** for state management  
- 🚀 **Vite support** for fast SPA development, including optional **routing** and **data fetching** with **TanStack** libraries  
- 🌐 **Next.js support** for full-stack apps, including optional **authentication** with **Better Auth**  
- 🧱 Preconfigured for **UNDP’s Design System**  
- 📊 Optional integration with **@undp/data-viz** for interactive data visualization  
- 🧼 **ESLint** + **Prettier** preconfigured for consistent code style  

---

## 🧩 Pre-configured setups

All setups include **Tailwind CSS** for styling and **Zustand** for state management.

| Framework | Variants | Description |
|------------|-----------|-------------|
| **Vite** | Basic | Minimal React + TypeScript setup |
| **Vite** | + Query | Adds TanStack Query for data fetching |
| **Vite** | + Router | Adds TanStack Router for routing |
| **Vite** | + Router + Query | Full-featured Vite setup |
| **Next.js** | Basic | SSR and file-based routing |
| **Next.js** | + Auth | Includes authentication via Better Auth |

---

## 📦 Installation

You don’t need to install it globally — just use **npx**:

```bash
npx @undp/create-app my-undp-app
```

---

## 📦 Getting started

After running the CLI, navigate into your project and start the dev server:

```bash
cd my-undp-app && npm run dev
```

*Please note: If you have not installed the dependencies then you might want to run `npm install` before `npm run dev`.*