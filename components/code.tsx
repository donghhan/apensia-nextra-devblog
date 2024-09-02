import { HighlightedCode, Pre, highlight, RawCode } from "codehike/code";
import { callout } from "./utils/callout";
import { className } from "./utils/classname";
import { hover } from "./utils/code-mentions";
import { wordWrap } from "./utils/word-wrap";
import { lineNumbers } from "./utils/line-numbers";
import { link } from "./utils/link";
import { mark } from "./utils/mark";
import { CopyButton } from "./utils/button";
import { diff } from "./utils/diff";

export function Code({ codeblock }: { codeblock: HighlightedCode }) {
  const highlighted = codeblock;

  return (
    <Pre
      code={highlighted}
      handlers={[callout, className, CopyButton, diff]}
      className="border border-zinc-500/50 rounded py-2 px-4 my-4"
      style={codeblock.style}
    />
  );
}
