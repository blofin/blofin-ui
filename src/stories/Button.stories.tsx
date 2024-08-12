import { Meta } from "@storybook/react";
import { Button } from "../components/Button/Button";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import DemoIcon from "../assets/icons/demo.svg";
import { useEffect, useState } from "react";

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
    children: "Button",
    disabled: true
  }
};

export const All = {
  render: () => {
    const mode = useMode();

    const [loading, setLoading] = useState(false);

    const handleRequest=()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },3000)
    }

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="ghost" onClick={handleRequest} loading={loading} size="small">
            Button
          </Button>
          <Button variant="primary" onClick={handleRequest} loading={loading} size="medium" type="submit">
            Button
          </Button>
          <Button
            variant="secondary"
            size="medium"
            endIcon={<DemoIcon className="bu-h-[18px] bu-w-[18px]" />}>
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
          <Button variant="info" size="medium" disabled>
            Button
          </Button>
          <Button variant="primary" size="medium" startIcon="111">
            Button
          </Button>
          <Button variant="primary" size="medium">
            Button
          </Button>
          <Button variant="buy" disabled size="medium">
            Button
          </Button>
          <Button variant="sell" size="medium">
            Button
          </Button>
          <Button variant="primary" size="small" shape="circle" icon={<i>2</i>}></Button>
          <Button.WhiteButton variant="primary" size="medium">
            White Button
          </Button.WhiteButton>

          <Button variant="function" size="medium">
            Button
          </Button>
        </div>
      </ThemeProvider>
    );
  }
};
