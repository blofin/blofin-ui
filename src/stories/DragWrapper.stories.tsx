import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import DragWrapper from "../components/DragWrapper";
import { useState } from "react";

const meta: Meta<typeof DragWrapper> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/DragWrapper",
  component: DragWrapper
};

export default meta;

type Story = StoryObj<typeof DragWrapper>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
      { id: 3, text: "Item 3" },
      { id: 4, text: "Item 4" }
    ]);

    const onDrag = (colums: any) => {
      console.log(colums);
      setItems(colums);
    };

    return <DragWrapper onDrag={onDrag} columns={items} />;
  }
};
