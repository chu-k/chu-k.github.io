import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? ["", ""];
const isUserOrOrgPages = owner.length > 0 && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = isGitHubActions && repository && !isUserOrOrgPages ? `/${repository}/` : "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://your-username.github.io",
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
