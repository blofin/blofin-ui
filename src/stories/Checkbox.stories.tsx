import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox/";

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Checkbox",
  component: Checkbox
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return <Checkbox label="Reduce Only" />;
  }
};

export const Vertical: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="bu-h-[24px] bu-w-full">
        <Checkbox label="TP/SL" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </div>
    );
  }
};
