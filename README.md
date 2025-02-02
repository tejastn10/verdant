<p align="center">
  <img src="logo.svg" alt="Logo">
</p>

# Verdant 🍃

![Node.js Version](https://img.shields.io/badge/Node.js-22%2B-339933?logo=nodedotjs&logoColor=white)
![Turborepo](https://img.shields.io/badge/Monorepo-Turborepo-007ACC?logo=turborepo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19%2B-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6%2B-646CFF?logo=vite&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-10+-E0234E?logo=nestjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative&logoColor=white)

**Verdant** is a starter template for a modern full-stack monorepo built with [Turborepo](https://turbo.build/repo). It includes a React client (powered by Vite) and a NestJS server, with shared configurations for TypeScript, ESLint, Prettier, and more.

---

## Features 🌟

- **Monorepo Setup**: Shared code, configurations, and dependencies between apps.
- **React Frontend**: Built with [Vite](https://vitejs.dev/) for fast development.
- **NestJS Backend**: Robust backend using [NestJS](https://nestjs.com/).
- **Centralized Configurations**:
  - TypeScript configurations shared across all apps.
  - Custom ESLint and Prettier configurations.
- **Code Quality**: Pre-configured with [Husky](https://typicode.github.io/husky/) and [CommitLint](https://commitlint.js.org/).
- **Caching and Performance**: Built-in support for Turborepo’s local and remote caching.

---

## Getting Started 🚀

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v22 or later.
- **NPM**: Installed alongside Node.js.

---

### Installation ⚙️

1. Clone the repository:  

   ```bash
   git clone https://github.com/tejastn10/verdant.git
   cd verdant

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` to see Verdant in action.

---

### Project Structure 📂

```bash
verdant/
├── apps/                  # Applications within the monorepo
│   ├── client/            # React front-end application
│   ├── server/            # NestJS back-end application
├── packages/              # Shared packages and configurations
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configurations
├── turbo.json             # Turborepo configuration file
├── package.json           # Monorepo dependencies and scripts
├── tsconfig.json          # Base TypeScript configuration
└── README.md              # Project documentation
```

---

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 🙌

- Built with **Turborepo** for blazing-fast development workflows.
- Inspired by the simplicity of **Verdant**, symbolizing freshness and efficiency.
- Made with ❤️ for developers who love clean and scalable codebases.
