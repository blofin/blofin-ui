import type { Meta, StoryObj } from "@storybook/react";
import { SVGLogo } from "../components/SVG/SVG";

const meta: Meta<typeof SVGLogo> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/SVG",
  component: SVGLogo,
};

export default meta;

type Story = StoryObj<typeof SVGLogo>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <SVGLogo />
      </div>
    );
  },
};
