import { remarkCodeHike } from "@code-hike/mdx";
import githubDarkDimmed from "shiki/themes/github-dark-dimmed.json" assert { type: "json" };
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
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          lineNumbers: false,
          showCopyButton: false,
          theme: githubDarkDimmed,
          autoImport: true,
        },
      ],
    ],
  },
});

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
  },
});