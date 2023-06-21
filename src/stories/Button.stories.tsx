import { Meta } from "@storybook/react";
import { Button } from "../components/Button/Button";
import useTheme from "../hooks/useTheme";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "text", "ghost"],
      control: { type: "radio" }
    },
    size: {
      options: ["large", "medium", "small", "max"],
      control: { type: "radio" }
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" }
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" }
    }
  }
};

export default meta;

export const Primary = {
  args: {
    label: "Button",
    variant: "primary",
    size: "medium"
  }
};

export const All = {
  render: () => {
    const mode = useTheme();
    return (
      <ThemeProvider value={{ theme: mode }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button label="Button" variant="primary" size="medium"></Button>
          <Button label="Button" variant="secondary" size="medium"></Button>
          <Button label="Button" variant="tertiary" size="medium"></Button>
          <Button label="Button" variant="ghost" size="medium"></Button>
          <Button label="Button" variant="text" size="medium"></Button>
          <Button label="Button" variant="primary" size="medium" startIcon="111"></Button>
          <Button label="Button" variant="primary" size="medium" endIcon={<i>222</i>}></Button>
          <Button variant="primary" size="medium" shape="circle" icon={<i>2</i>}></Button>
        </div>
      </ThemeProvider>
    );
  }
};
