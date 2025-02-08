import { HighlightedCode, Pre } from "codehike/code";
import { callout } from "./annotations/callout";

export function Code({ codeblock }: { codeblock: HighlightedCode }) {
  return (
    <div className="px-4 py-2 bg-zinc-950 rounded">
      <div className="text-center text-zinc-400 text-sm pb-2">
        {codeblock.meta}
      </div>
      <Pre
        code={codeblock}
        handlers={[callout]}
        className="border border-zinc-500/50 rounded p-4"
        style={codeblock.style}
      />
    </div>
  );
}
