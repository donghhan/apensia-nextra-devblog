const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/material-darker.json");
const remarkMath = require("remark-math");
const rehypteKatex = require("rehype-katex");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        { theme, lineNumbers: false, showCopyButton: true, autoImport: true },
      ],
      [remarkMath],
    ],
    rehypePlugins: [rehypteKatex],
  },
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "ko"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/projects",
        destination: "/projects/gulp-static",
        statusCode: 301,
      },
      {
        source: "/algorithm",
        destination: "/algorithm/input-method",
        statusCode: 301,
      },
    ];
  },
});
