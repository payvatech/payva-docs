# Contributing Guidelines

- [Contributing Guidelines](#contributing-guidelines)
  - [Branches \& Environments](#branches--environments)
    - [Staging](#staging)
    - [Production](#production)
  - [Versioning](#versioning)
  - [GraphQL Codegen](#graphql-codegen)
  - [How to commit](#how-to-commit)
  - [Code Style](#code-style)
  - [File Structure](#file-structure)

## Branches & Environments

### Staging

Default branch for development.

Automatic deploys based on `staging` branch through pushing code to the branch.

Ideally, create separate branches for features and bug fixes from `staging` branch and create PRs to merge back to `staging`.

https://dashboard.next.myabundant.com/sign-in

### Production

Automatic deploys based on `main` branch through pushing code to the branch.

Ideally, develop features and bug fixes from `staging` branch and then manually merge `staging` to `main` so that new changes are on both environments.

https://dash.myabundant.com/sign-in

## Versioning

We are using [Release It](https://github.com/release-it/release-it) for versioning.

To create a new release, run the following command:

```bash
pnpm release
```

This will trigger `release-it` to generate a CHANGELOG, bump versions, and create a tag based on the commit messages.

You should run this command from the `staging` branch and then merge the changes to `main`.

Ideally, create a new release for every new feature or bug fix. This will help in tracking changes and keeping the versioning consistent.

## GraphQL Codegen

We are using [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate TypeScript types and reusable hooks based on the GraphQL schema (`src/modules/api/operations.ts`).

To generate the code, run the following command:

```bash
pnpm codegen
```

This will generate the types and hooks based on the schema and save them in the `src/modules/api/generated` directory.

You should run this command whenever you or BE team make changes to the GraphQL schema or queries/mutations that you defined in `src/modules/api/operations.ts`.

## How to commit

We are using [Husky](https://typicode.github.io/husky) to run Git hooks for linting and formatting before committing the code. It combines with [lint-staged](https://github.com/lint-staged/lint-staged) and [commitlint](https://commitlint.js.org/).

You need to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

- Examples: `feat: add new feature`, `fix: resolve bug`, `chore: update dependencies`, `docs: update README`

## Code Style

- For all file naming use `kebab-case`

## File Structure

```
├── public                    # Public resources (favicon, images...)
├── src/
│   ├── config                # Constants (routes and links)
│   ├── hooks                 # General hooks
│   ├── lib                   # Utils, formatters
│   ├── modules/
│   │   ├── api/              # GraphAL + Apollo definitions
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
└── codegen.ts
```
