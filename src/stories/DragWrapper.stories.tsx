import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import Sortable from "../components/Sortable";
import { useState } from "react";
import { Tab } from "..";
import SortableItem from "../components/Sortable/SortableItem";

const meta: Meta<typeof Sortable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Sortable",
  component: Sortable
};

export default meta;

type Story = StoryObj<typeof Sortable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const [list, setList] = useState(() =>
      ['Positions', 'Trade History', 'Open Orders'].map((item, index) => {
        return {
          key: index.toString(),
          label: (
            <SortableItem key={index} index={index} listLength={3}>
              {item}
            </SortableItem>
          ),
          children: <div>{item}</div>
        };
      })
    );

    const change = (key: string) => {
      console.log(key);
    };

    const onDrag = (colums: any) => {
      console.log(colums)
      setList(colums);
    };

    return (
      <Sortable list={list} direction="horizontal" onDrag={onDrag}>
        <Tab items={list} size="small" defaultIndex={5} change={change}></Tab>
      </Sortable>
    );
  }
};
