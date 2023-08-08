import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "../components/Select";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Select",
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (
      <Select
        value={"alice"}
        selectItems={[
          { label: "Alice", value: "alice" },
          { label: "Bob", value: "bob" }
        ]}
      />
    );
  }
};

export const Controlled: Story = {
  render: () => {
    const mode = useMode();
    const [selectedValue, setSelectedValue] = useState("gtc");
    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-flex">
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              selectItems={[
                { label: "Good Till Cancel", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              align="right"
              selectItems={[
                { label: "gtc", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
