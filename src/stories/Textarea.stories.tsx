import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useState } from "react";
import { Dialog } from "..";
import TextArea from "../components/Textarea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea
};

export default meta;

type Story = StoryObj<typeof TextArea>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <ThemeProvider value={{ theme: "dark" }}>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="测试"
          error={true}
          helperText="3333"
          endAdornment={
            <div className="bu-flex bu-justify-end bu-text-[12px]">{value.length}/50</div>
          }
        />
      </ThemeProvider>
    );
  }
};
