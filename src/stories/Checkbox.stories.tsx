import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox/";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

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
    const [isChecked, setIsChecked] = useState(false);
    return (
      <Checkbox label="Reduce Only" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    );
  }
};

export const Vertical: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(true);
    const mode = useMode();

    return (
      <div className="bu-h-[24px] bu-w-full">
        <ThemeProvider value={{ theme: mode }}>
          <Checkbox
            label="TP/SL"
            checked={isChecked}
            disabled={false}
            onChange={() => setIsChecked(!isChecked)}
          />
        </ThemeProvider>
      </div>
    );
  }
};
