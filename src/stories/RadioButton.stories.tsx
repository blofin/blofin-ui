import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioButton } from "../components/RadioButton";

const meta: Meta<typeof RadioButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/RadioButton",
  component: RadioButton
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return <RadioButton label="Reduce Only" />;
  }
};

export const Vertical: Story = {
  render: () => {
    const [currentValue, setCurrentValue] = useState("buy");
    return (
      <div className="bu-h-[24px] bu-w-full">
        <div className="bu-flex bu-gap-2">
          <RadioButton
            label="buy"
            name="TP/SL"
            value={"buy"}
            selected={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
          <RadioButton
            label="sell"
            name="TP/SL"
            value={"sell"}
            selected={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </div>
      </div>
    );
  }
};
