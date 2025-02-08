import { Block, CodeBlock, parseProps } from "codehike/blocks";
import { Pre, RawCode, highlight } from "codehike/code";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schema = Block.extend({ tabs: z.array(CodeBlock) });

export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema);

  return <CodeTabs tabs={tabs} />;
}

export async function CodeTabs(props: { tabs: RawCode[] }) {
  const { tabs } = props;
  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, "github-dark"))
  );

  return (
    <Tabs defaultValue={tabs[0]?.meta} className="dark rounded bg-zinc-950">
      <TabsList className="rounded-none text-white pb-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className="cursor-pointer hover:bg-zinc-800"
          >
            {tab.meta}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent
          key={tab.meta}
          value={tab.meta}
          className="p-2 bg-zinc-950 rounded"
        >
          <Pre
            code={highlighted[i]}
            className="border border-zinc-500/50 rounded p-4"
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
