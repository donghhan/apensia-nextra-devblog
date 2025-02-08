import nextra from "nextra";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  reactStrictMode: true,
});
