# cosense-site-starter

A ready-to-deploy starter for [cosense-site-kit](https://github.com/shinyaoguri/cosense-site-kit):
turn a **public Cosense project** into a static website, built and deployed by
GitHub Actions. No local setup required — you can do everything from the browser.

> Unofficial community tooling. Not affiliated with Cosense or its operator.

## Use it from the browser (no clone, no terminal)

1. Click **“Use this template” → “Create a new repository”** on GitHub.
2. Edit **`cosense.config.ts`** in GitHub’s web editor and set:
   - `source.project` — your public Cosense project name
   - `site.baseUrl` — `https://<your-username>.github.io`
   - `site.base` — `/<this-repo-name>` (or `/` if you renamed the repo to `<username>.github.io`)
3. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
4. **Actions → “Build and deploy” → Run workflow** (or wait for the daily cron).
   Your site deploys to `https://<your-username>.github.io/<repo-name>/`.

Publish a Cosense page by adding a `#publish` tag; hide one with `#draft`.

## Local development (optional)

```bash
npm install
npm run fetch   # pull pages from Cosense into .cosense-cache/
npm run dev     # Astro dev server at http://localhost:4321
npm run build   # cosense-site fetch && astro build
npm run validate
```

## Configure

- `cosense.config.ts` — data source, publish rules, slug strategy, deploy target.
- `astro.config.ts` — swap themes (`themeDefault({ ... })`) or add Astro integrations.
- See the [cosense-site-kit docs](https://github.com/shinyaoguri/cosense-site-kit) for the
  `.site` page (declare nav / home / posts in Cosense) and the `doctor` command.
