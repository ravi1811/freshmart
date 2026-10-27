# FreshMart — Grocery E-commerce Store

FreshMart is a grocery e-commerce web application built with Next.js, React, TypeScript, and Tailwind CSS. It includes product categories and listings, a shopping cart, and a shopping assistant integration that can be configured with an API key.

## Requirements

- Node.js (use a current LTS release)
- npm
- Any database / environment variables required by the features you enable

## Run locally

1. Extract the project and open a terminal in the `freshmart_source_code` folder.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Optional: copy `.env.example` to `.env.local` and fill in only the environment variables you actually use. Never commit `.env.local` or real API keys.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`.

## Code quality checks

```bash
npm run lint       # ESLint, including Next.js and TypeScript rules
npm run typecheck  # TypeScript compiler check
npm run build      # Production build
```

This project uses **ESLint** with `eslint-config-next` and its TypeScript rules. It does not use TSLint. TSLint has been deprecated in favor of ESLint, so adding TSLint to a modern Next.js/TypeScript project is not recommended.

## Upload this project to GitHub

1. Sign in to GitHub and create a **new empty repository** (for example, `freshmart-ecommerce`). Do not initialize it with a README, license, or `.gitignore` because this project already contains these files.
2. In a terminal, `cd` into the folder that contains this README (`freshmart_source_code`).
3. Run the following commands, replacing `YOUR_GITHUB_USERNAME` with your GitHub username and `freshmart-ecommerce` with your repository name:

   ```bash
   git init
   git add .
   git status
   git commit -m "Initial commit: FreshMart e-commerce project"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/freshmart-ecommerce.git
   git push -u origin main
   ```

4. If Git asks you to authenticate, follow the browser sign-in prompt or use GitHub's supported authentication method. Do not put passwords, tokens, `.env.local`, database credentials, or API keys into source code or Git commits.

Before `git commit`, carefully review `git status` and ensure that no secrets, local database files, or private information are staged. The `.gitignore` excludes environment files except the safe `.env.example` template, dependencies, and build output.

## Notes

- The repository is private by default only if you choose **Private** when creating it. Select **Public** if you want others to view it.
- If you later change source files, use `git add .`, `git commit -m "Describe your changes"`, and `git push` to publish updates.
