import { defineCosenseSite } from "@cosense-site-kit/core";

// This repo deploys ITSELF as a live demo, built from the public Cosense
// project https://scrapbox.io/cosense-theme-default/ and served at
// https://shinyaoguri.github.io/cosense-theme-default/.
//
// After cloning, point it at YOUR site by editing these fields:
//   1. source.project — your PUBLIC Cosense project name.
//   2. site.baseUrl   — your GitHub Pages origin (https://USERNAME.github.io).
//   3. site.base      — "/REPO_NAME" for a project page, or "/" for a user/org page.
//   (site.title / description are the demo's; change them too.)
export default defineCosenseSite({
  site: {
    title: "cosense-theme-default",
    description: "Live demo of the cosense-site-kit default theme",
    baseUrl: "https://shinyaoguri.github.io",
    base: "/cosense-theme-default",
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
