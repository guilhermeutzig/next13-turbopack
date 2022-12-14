## Goal to achieve with this boilerplate

Simply understand what new features were added to Next.js 13 with Turbopack

## How to install

Just run:

```sh
npx create-next-app --example with-turbopack
```

Reference: https://beta.nextjs.org/docs/configuring/turbopack

## Issues I had with this boilerplate

- When using Route Groups (directories with `()`), Homepage is not accessible anymore

  - ```sh
    VM5823 node_modules_next_dist_client_components_app-router.js:585 Uncaught TypeError: flightRouterState is not iterable
    ```

- Loading state for pages (e.g. `loading.tsx`) only works when refreshing the page. You can see an example by directly accessing: `/search/dasd`
- Error state pages only show the error with the standard Next.js warning. Custom error pages (e.g. `error.tsx`) were not loaded
- Tailwind was not generating classes in runtime with Turbopack, but Vercel offered a very simple explanation to get it working on the official README

## Final thoughts

I still want to test Next.js 13 with it's regular bundler instead of Turbopack to see if I can reproduce the same issues I did in this repo. I'll probably open another branch here.

Below you'll see the official readme that comes in the repo when you clone it:

---

## Next.js + Turbopack App Directory Playground

[Turbopack](https://turbo.build/pack) is a new incremental bundler optimized for JavaScript and TypeScript, written in Rust by the creators of Webpack and Next.js at [Vercel](https://vercel.com). On large applications Turbopack updates 10x faster than Vite and 700x faster than Webpack ([benchmark](https://turbo.build/pack/docs/benchmarks)). For the biggest applications the difference grows even more stark with updates up to 20x faster than Vite.

This playground is a mirror of the [Next.js v13 App Directory Playground](https://github.com/vercel/app-playground), but uses Turbopack as the Next.js development server (`next dev --turbo`).

**As a reminder, Turbopack is currently in alpha and not yet ready for production. We appreciate your ongoing support as we work to make it ready for everyone.**

## Running Locally

1. Install dependencies: `yarn`
1. Start the dev server: `yarn dev`

**Note:** The playground uses [Tailwind CSS](https://tailwindcss.com). However, Turbopack does not yet support fully [PostCSS](https://turbo.build/pack/docs/features/css#postcss), but it does support CSS and CSS Modules. [As a workaround](https://turbo.build/pack/docs/features/css#tailwind-css), we run Tailwind through it's CLI upon `postinstall`. For live reload of CSS, you can run Tailwind in another process with the `--watch` flag or install `concurrently` and modify your `dev` script:

```bash
yarn add concurrently --dev
```

Then modify your `dev` script in `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"next dev --turbo\" \"npm run tailwind --watch\""
  }
}
```

For more information, see: https://turbo.build/pack/docs/features/css#tailwind-css

## Documentation

https://nextjs.link/with-turbopack

## Providing Feedback

https://nextjs.link/turbopack-feedback
