import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import "../style.css";
import "@code-hike/mdx/dist/index.css";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
