import { defineCosenseSite } from "@cosense-site-kit/core";

// This repo deploys ITSELF as a live demo, built from the public Cosense
// project https://scrapbox.io/cosense-theme-default/ and served at
// https://shinyaoguri.github.io/cosense-theme-default/.
//
// After cloning, point it at YOUR site by editing:
//   1. source.project — your PUBLIC Cosense project name.
//   2. site.title / description — the demo's; change them too.
//
// You do NOT need to touch baseUrl / base for GitHub Pages: the deploy
// workflow injects the correct origin and subpath (PAGES_ORIGIN /
// PAGES_BASE_PATH, from actions/configure-pages), which handles both
// user/org pages (served at "/") and project pages (served at "/REPO")
// automatically. The literals below are only fallbacks for local builds.
export default defineCosenseSite({
  site: {
    title: "cosense-theme-default",
    description: "Live demo of the cosense-site-kit default theme",
    baseUrl: process.env.PAGES_ORIGIN || "https://shinyaoguri.github.io",
    base: process.env.PAGES_BASE_PATH || "/cosense-theme-default",
    lang: "ja",
  },

  source: {
    type: "cosense",
    project: "cosense-theme-default",
  },

  publish: {
    default: "none",
    includeTags: ["publish"],
    excludeTags: ["draft", "private", "internal"],
  },

  routing: {
    slug: "metadata-or-encoded-title",
  },

  deploy: {
    target: "github-pages",
    schedule: "17 1,13 * * *",
  },
});
