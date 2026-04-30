import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useState } from "react";
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
    const mode = useMode();

    const [outlinedValue, setOutlinedValue] = useState("");
    const [filledValue, setFilledValue] = useState("");
    const [errorValue, setErrorValue] = useState("");

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-flex bu-flex-col bu-gap-[24px] bu-p-[24px]">
          <div>
            <div className="bu-mb-[8px] bu-text-[14px]">variant="outlined" (default)</div>
            <TextArea
              value={outlinedValue}
              onChange={(e) => setOutlinedValue(e.target.value)}
              label="Outlined"
              placeholder="Type something..."
              endAdornment={
                <div className="bu-flex bu-justify-end bu-text-[12px]">
                  {outlinedValue.length}/50
                </div>
              }
            />
          </div>

          <div>
            <div className="bu-mb-[8px] bu-text-[14px]">variant="filled"</div>
            <TextArea
              variant="filled"
              value={filledValue}
              onChange={(e) => setFilledValue(e.target.value)}
              label="Filled"
              placeholder="Type something..."
              endAdornment={
                <div className="bu-flex bu-justify-end bu-text-[12px]">
                  {filledValue.length}/50
                </div>
              }
            />
          </div>

          <div>
            <div className="bu-mb-[8px] bu-text-[14px]">error</div>
            <TextArea
              variant="filled"
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              label="With error"
              error={true}
              helperText="This field has an error"
              endAdornment={
                <div className="bu-flex bu-justify-end bu-text-[12px]">
                  {errorValue.length}/50
                </div>
              }
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
