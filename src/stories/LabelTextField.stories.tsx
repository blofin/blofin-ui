import type { Meta, StoryObj } from "@storybook/react";
import { LabelTextField } from "../components/LabelTextField";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const meta: Meta<typeof LabelTextField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/LabelTextField",
  component: LabelTextField,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "LabelTextField"
    },
    color: {
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
      control: { type: "select" }
    }
  },
  parameters: { controls: { sort: "requiredFirst" } }
};

export default meta;

type Story = StoryObj<typeof LabelTextField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: "Label",
    startAdornment: "https://",
    endAdornment: ".com"
  }
};
