import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { Typography } from "../components/Typography/Typography";
import useTheme from "../hooks/useMode";

const meta: Meta<typeof Slider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Slider",
  component: Slider
};

export default meta;

type Story = StoryObj<typeof Slider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const mode = useTheme();
    const [value, setValue] = useState<number>(25);

    useEffect(() => {
      console.log("parent value", value);
    }, [value]);

    return (
      <div className="bu-py-10">
        <Typography variant="body1" className="bu-mb-4">
          Value: {value}
        </Typography>
        <Slider value={value} onSliderChange={setValue} theme={mode} />
      </div>
    );
  }
};

export const OuterWidth: Story = {
  render: () => {
    const mode = useTheme();
    const [value, setValue] = useState<number>(25);

    return (
      <>
        <Typography variant="body1" className="bu-mb-4">
          Value: {value}
        </Typography>
        <button onClick={() => setValue(0)}>set to 0</button>
        <div className="bu-mx-auto bu-flex bu-w-96 bu-items-center bu-justify-center bu-py-10">
          <Slider value={value} onSliderChange={setValue} theme={mode} />
        </div>
      </>
    );
  }
};
