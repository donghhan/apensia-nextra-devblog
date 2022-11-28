import "../styles.css";
import "nextra-theme-docs/style.css";
import "@code-hike/mdx/dist/index.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
