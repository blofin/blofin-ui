import { Meta } from "@storybook/react";
import { Button } from "../components/Button/Button";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import DemoIcon from '../assets/icons/demo.svg'

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
    size: "medium",
    children: "Button"
  }
};

export const All = {
  render: () => {
    const mode = useMode();

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="primary" size="medium">
            Button
          </Button>
          <Button variant="secondary" size="medium" endIcon={<DemoIcon className="bu-w-[18px] bu-h-[18px]" />}>
            Button
          </Button>
          <Button variant="tertiary" size="medium">
            Button
          </Button>
          <Button variant="ghost" size="medium">
            Button
          </Button>
          <Button variant="text" size="medium">
            Button
          </Button>
          <Button variant="primary" size="medium" startIcon="111">
            Button
          </Button>
          <Button variant="primary" size="medium">
            Button
          </Button>
          <Button variant="primary" size="medium" shape="circle" icon={<i>2</i>}></Button>
          <Button.WhiteButton variant="primary" size="medium">
            White Button
          </Button.WhiteButton>
        </div>
      </ThemeProvider>
    );
  }
};
