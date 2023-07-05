import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { Typography, TypographyTag, TypographyWeight } from "../components/Typography/Typography";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Typography> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "body3",
        "body4"
      ],
      control: { type: "select" }
    },
    weight: {
      options: ["regular", "medium", "bold"],
      control: { type: "select" }
    },
    children: {
      control: { type: "text" },
      defaultValue: "Typography"
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" }
    }
  },
  parameters: { controls: { sort: "requiredFirst" } }
};

export default meta;

type Story = StoryObj<typeof Typography>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    variant: "h1",
    children: "Hello world!"
  }
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const TypographyWithTheme = ({
  variant = "h1",
  weight = "regular",
  children = "Hello Theme!"
}: {
  variant?: TypographyTag;
  weight?: TypographyWeight;
  children?: ReactNode;
}) => {
  // Sets the hooks for both the label and primary props
  const mode = useMode();
  return (
    <ThemeProvider value={{ theme: mode }}>
      <Typography variant={variant} weight={weight}>
        {children}
      </Typography>
    </ThemeProvider>
  );
};

export const WithTheme: Story = {
  render: ({ ...args }) => <TypographyWithTheme {...args} />
};
