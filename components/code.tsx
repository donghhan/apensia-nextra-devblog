import { HighlightedCode, Pre } from "codehike/code";
import { callout } from "./annotations/callout";
import { className } from "./utils/classname";

export function Code({ codeblock }: { codeblock: HighlightedCode }) {
  return (
    <Pre
      code={codeblock}
      handlers={[callout, className]}
      className="border border-zinc-500/50 rounded py-2 px-4 my-4"
      style={codeblock.style}
    />
  );
}
