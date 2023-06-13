import type { Meta, StoryObj } from "@storybook/react";
import { BUITheme } from "../../types/component";
import { Badge } from "../components/Badge/Badge";
import { BadgeColor } from "../components/Badge/styles";
import useTheme from "../hooks/useTheme";

const meta: Meta<typeof Badge> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Badge",
    },
    color: {
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
      control: { type: "select" },
    },
    decoration: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
  parameters: { controls: { sort: "requiredFirst" } },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: "Badge",
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    ...Primary.args,
    color: "secondary",
  },
};

export const Success: Story = {
  name: "Success",
  args: {
    ...Primary.args,
    color: "success",
  },
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const BadgeWithHooks = ({
  label = "Badge",
  color = "primary",
  decoration = true,
  theme,
}: {
  label?: string;
  color?: BadgeColor;
  decoration?: boolean;
  theme?: BUITheme;
}) => {
  // Sets the hooks for both the label and primary props
  const mode = useTheme();

  return (
    <Badge
      theme={theme || mode}
      color={color}
      label={label}
      decoration={decoration}
    />
  );
};

export const WithTheme: Story = {
  render: ({ ...args }) => <BadgeWithHooks {...args} />,
};

export const All: Story = {
  parameters: {
    controls: { include: ["decoration", "theme"] },
  },
  render: ({ decoration, theme }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mode = useTheme();

    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Badge theme={theme || mode} decoration={decoration} label="primary" />
        <Badge
          theme={theme || mode}
          decoration={decoration}
          color="secondary"
          label="secondary"
        />
        <Badge
          theme={theme || mode}
          decoration={decoration}
          color="success"
          label="success"
        />
        <Badge
          theme={theme || mode}
          decoration={decoration}
          color="warning"
          label="warning"
        />
        <Badge
          theme={theme || mode}
          decoration={decoration}
          color="danger"
          label="danger"
        />
        <Badge
          theme={theme || mode}
          decoration={decoration}
          color="info"
          label="info"
        />
      </div>
    );
  },
};
