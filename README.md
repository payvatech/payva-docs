# Payva Web App

- [Payva Web App](#myabundant-web-app)
  - [Technology stack](#technology-stack)
    - [Core](#core)
    - [Tooling](#tooling)
    - [Code Quality Tools](#code-quality-tools)
  - [Project Setup](#project-setup)
    - [Prerequisites](#prerequisites)
    - [Getting started](#getting-started)
  - [Development](#development)
    - [pnpm scripts](#pnpm-scripts)
    - [Recommended VSCode extensions](#recommended-vscode-extensions)
    - [File Structure](#file-structure)
    - [Contributing](#contributing)

## Technology stack

This project was bootstrapped with [Next.js 14](https://nextjs.org/) using Pages Router.

### Core

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack Table](https://tanstack.com/table/latest)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Tooling

- [React Icons](https://react-icons.github.io/react-icons/icons/md/)
- [Export To CSV](https://github.com/alexcaza/export-to-csv)
- [GraphQL Codegen](https://the-guild.dev/graphql/codegen)
- [Release It](https://github.com/release-it/release-it)

### Code Quality Tools

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://typicode.github.io/husky/)

## Project Setup

### Prerequisites

- [Node v18](https://nodejs.org/en/)
- [pnpm v9](https://pnpm.io/)
- [Git](https://git-scm.com/downloads)

#### Switching Package Manager Versions

Run the following commands to switch to the correct version of each package manager.

- Node (using [nvm - Node Version Manager](https://github.com/nvm-sh/nvm)):

  `nvm install 18`

  `nvm use 18`

- pnpm

  `rm -rf $PNPM_HOME`

  `curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=9.15.6 sh -`

### Getting started

**1. Clone repository from Github**

**2. Checkout to default branch (`staging`)**

```bash
git fetch
git checkout staging
```

**3. Setup Environment Variables**

Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

You can find environment variables in [Vercel dashboard](https://vercel.com/my-abundant/myabundant-frontend-react/settings/environment-variables).

**4. Install dependencies**

```bash
pnpm install
```

**5. Run the application 🚀**

```bash
pnpm dev
```

## Development

### pnpm scripts

| Script            | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| `dev`             | Starts the development server. Visit http://localhost:3000 to view the application.   |
| `build`           | Builds the application for production.                                                |
| `start`           | Serves the production build of the application.                                       |
|                   |                                                                                       |
| `lint`            | Runs all linters to check for code quality and potential issues.                      |
| `format`          | Checks the formatting of the codebase using Prettier.                                 |
| `format:fix`      | Formats the codebase using Prettier, fixing any formatting issues.                    |
| `format:validate` | Validates the code formatting using Prettier, highlighting any differences.           |
| `prepare`         | Installs Husky, a tool for running Git hooks, during the project setup.               |
| `typecheck`       | Validates the codebase typing using TypeScript.                                       |
| `release`         | Triggers `release-it` to generate a CHANGELOG, bump versions, and create a tag.       |
| `codegen`         | Generates code based on the GraphQL schema (`operations.ts`) using `graphql-codegen`. |
|                   |

### Recommended VSCode extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)

### File Structure

```
├── public                    # Public resources (favicon, images...)
├── src/
│   ├── config                # Constants (routes and links)
│   ├── hooks                 # General hooks
│   ├── lib                   # Utils, formatters
│   ├── modules/
│   │   ├── api/              # GraphQL + Apollo definitions
│   │   │   ├── generated     # Auto-generated hooks
│   │   │   └── operations.ts # Queries and mutations
│   │   ├── auth              # Authentication
│   │   ├── customer          # Customer portal
│   │   ├── dashboard         # Overview summaries
│   │   ├── design-system/
│   │   │   └── components    # Reusable components
│   │   ├── partners          # Partners portal
│   │   ├── payouts           # Payouts tables
│   │   ├── plaid             # Plaid link account
│   │   ├── sales             # Sales page
│   │   └── users             # Users page
│   ├── pages                 # Next.js routing
│   ├── store                 # Zustand store
│   ├── styles                # Global styles
│   └── middleware.ts         # Auth token validation
└── codegen.ts                # Codegen config
```

### Contributing

See the [Contributing Guidelines](CONTRIBUTING.md).
