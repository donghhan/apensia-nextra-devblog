import nextra from "nextra";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  // optional (see code docs):
  components: { code: "Code" },
  // if you can't use RSC:
  syntaxHighlighting: {
    theme: "github-dark-dimmed",
  },
};

const mdxOptions = {
  remarkPlugins: [[remarkCodeHike, chConfig]],
  recmaPlugins: [[recmaCodeHike, chConfig]],
  // jsx: true,
};

const withNextra = nextra({
  latex: {
    renderer: "katex",
  },
  search: {
    codeblocks: false,
  },
  codeHighlight: false,
  mdxOptions,
});

export default withNextra({
  reactStrictMode: true,
});
