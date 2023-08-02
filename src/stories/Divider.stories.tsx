import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider/Divider";

const meta: Meta<typeof Divider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Divider",
  component: Divider
};

export default meta;

type Story = StoryObj<typeof Divider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return <Divider direction="horizontal" />;
  }
};

export const Vertical: Story = {
  render: () => {
    return (
      <div className="bu-h-[24px] bu-w-full">
        <Divider direction="vertical" />
      </div>
    );
  }
};
