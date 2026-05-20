import { defineCosenseSite } from "@cosense-site-kit/core";

// 1. Set `source.project` to your PUBLIC Cosense project name.
// 2. Set `site.baseUrl` to your GitHub Pages origin (https://USERNAME.github.io).
// 3. Set `site.base` to "/REPO_NAME" for a project page, or "/" for a user/org page
//    (USERNAME.github.io). These three are the only fields you usually need to edit.
export default defineCosenseSite({
  site: {
    title: "My Cosense Site",
    description: "Built with cosense-site-kit",
    baseUrl: "https://USERNAME.github.io",
    base: "/REPO_NAME",
    lang: "ja",
  },

  source: {
    type: "cosense",
    project: "your-public-cosense-project",
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
