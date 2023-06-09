import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "../components/Popover/Popover";

const meta: Meta<typeof Popover> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Popover
      label="Popover"
      content={
        <>
          <ul className="w-48 px-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </>
      }
    />
  ),
};
