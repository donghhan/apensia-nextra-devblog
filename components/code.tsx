import { HighlightedCode, Pre, RawCode } from "codehike/code";
import { callout } from "./annotations/callout";
import { className } from "./annotations/classname";
import { CopyButton } from "./annotations/copy-button";
import { diff } from "./annotations/diff";
import { mark } from "./annotations/mark";

export function Code({ codeblock }: { codeblock: HighlightedCode }) {
  return (
    <Pre
      code={codeblock}
      handlers={[callout, className, CopyButton, diff, mark]}
      className="border border-zinc-500/50 rounded py-2 px-4 my-4"
      style={codeblock.style}
    />
  );
}
