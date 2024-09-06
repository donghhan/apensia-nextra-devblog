import { Pre, RawCode } from "codehike/code";
import { callout } from "./annotations/callout";
import { className } from "./annotations/classname";
import { CopyButton } from "./annotations/copy-button";
import { diff } from "./annotations/diff";
import { mark } from "./annotations/mark";
import { tokenTransitions } from "./annotations/token-transitions";

export function Code({ codeblock }: { codeblock: RawCode }) {
  return (
    <Pre
      code={codeblock}
      handlers={[callout, className, CopyButton, diff, mark, tokenTransitions]}
      className="border border-zinc-500/50 rounded py-2 px-4 my-4"
    />
  );
}
