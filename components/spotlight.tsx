import React from "react";
import { z } from "zod";
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection";
import { Block, CodeBlock, parseRoot } from "codehike/blocks";
import { highlight, Pre } from "codehike/code";
import { tokenTransitions } from "./utils/token-transitions";

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
});

export default function Page(props) {
  const { steps } = parseRoot(props, Schema);

  return (
    <SelectionProvider className="flex ">
      <div className="flex-1 mt-4 ml-2 prose prose-invert prose-h2:mt-4">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={["click"]}
            className="border border-zinc-700 data-[selected=true]:border-blue-400 px-5 py-2 mb-4 rounded bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition-colors duration-200 ease-in-out"
          >
            <h2 className="text-xl">{step.title}</h2>
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="w-[40vw] max-w-xl ">
        <div className="top-16 sticky overflow-auto h-full p-4">
          <Selection
            from={steps.map((step) => (
              <Code codeblock={step.code} />
            ))}
          />
        </div>
      </div>
    </SelectionProvider>
  );
}

async function Code({ codeblock }) {
  const highlighted = await highlight(codeblock, "github-dark");
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions]}
      className="max-h-[90vh] min-h-[38rem] bg-zinc-900 h-full m-0 border border-zinc-700 "
    />
  );
}
