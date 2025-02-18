import type { Meta, StoryObj } from "@storybook/react";

import { CircularLoading } from "../components/CircularLoading/index";

const meta: Meta<typeof CircularLoading> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/CircularLoading",
  component: CircularLoading
};

export default meta;

type Story = StoryObj<typeof CircularLoading>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (
      <div className="bu-bg-red-50">
        <CircularLoading />
        <CircularLoading
          wrapperClassName="!bu-w-[100px] !bu-h-[100px]"
          animateClassName="bu-animate-[spin_0.5s_linear_infinite]"
        />
        <CircularLoading
          wrapperClassName="!bu-w-[200px] !bu-h-[200px]"
          outerCircularClassName="!bu-border-[10px] !bu-border-base-success"
          innerCircularClassName="!bu-border-[10px] !bu-border-l-base-danger"
          animateClassName="bu-animate-[spin_3s_linear_infinite]"
        />
      </div>
    );
  }
};
