import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../components/Slider/Slider";
import useTheme from "../hooks/useTheme";

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

    return (
      <div className="py-10">
        <Slider theme={mode} />
      </div>
    );
  }
};

export const OuterWidth: Story = {
  render: () => {
    const mode = useTheme();

    return (
      <div className="mx-auto flex w-96 items-center justify-center py-10">
        <Slider theme={mode} />
      </div>
    );
  }
};
