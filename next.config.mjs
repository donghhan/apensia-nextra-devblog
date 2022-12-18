import { remarkCodeHike } from "@code-hike/mdx";
import shikiTheme from "shiki/themes/material-darker.json" assert { type: "json" };
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { shikiTheme }]],
  },
});

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
  },
});
