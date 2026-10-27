# ESLint follow-up fixes

- `app/search/page.tsx`: removed the effect that synchronously called `setQuery`; URL query `q` is read through Next.js `useSearchParams` inside a `Suspense` boundary.
- `test-db.js`: removed the old CommonJS diagnostic script. Use `test-db.mjs`, which uses ES module imports, if you need the database connection test.

After extracting, copy/replace these files in the project folder you actually run lint from, then run `npm run lint`.
