import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { LabelTextField } from "../components/LabelTextField";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

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
    },
    theme: {
      options: ["light", "dark"],
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

const LabelTextFieldWithTheme = ({
  label = "Label",
  startAdornment = "https://",
  endAdornment = ".com"
}: {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}) => {
  // Sets the hooks for both the label and primary props
  const mode = useMode();
  return (
    <ThemeProvider value={{ theme: mode }}>
      <LabelTextField
        variant="filled"
        label={label}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
      />
      <LabelTextField
        variant="filled"
        label={label}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        error={true}
        helperText="This is an error"
      />
      <LabelTextField
        variant="filled"
        label={label}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        disabled={true}
      />
      <LabelTextField
        variant="outlined"
        label={label}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
      />
    </ThemeProvider>
  );
};

export const WithTheme: Story = {
  render: ({ ...args }) => <LabelTextFieldWithTheme {...args} />
};
