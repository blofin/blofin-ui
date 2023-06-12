import type { Meta, StoryObj } from "@storybook/react";
import ReactLogo from "../assets/react.svg";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/SVG",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <ReactLogo />
      </div>
    );
  },
};
