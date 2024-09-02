import React from "react";
import { RawCode, Pre, highlight } from "codehike/code";

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark");
  return (
    <div className="px-4 bg-zinc-950 rounded">
      <div className="text-center text-zinc-400 text-sm py-2">
        {highlighted.meta}
      </div>
      <Pre code={highlighted} />
    </div>
  );
}
