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
    variant: "ghost3",
    size: "medium",
    children: "Button",
    disabled: false
  }
};

export const All = {
  render: () => {
    const mode = useMode();

    const [loading, setLoading] = useState(true);

    const handleRequest = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button.CheckButton checked={false} size="medium">
            CheckButton
          </Button.CheckButton>
          <Button variant="ghost" onClick={handleRequest} loading={loading} size="small">
            ghost
          </Button>
          <Button variant="ghost2" onClick={handleRequest} loading={loading} size="m-small">
            ghost2
          </Button>
          <Button
            variant="primary"
            onClick={handleRequest}
            loading={loading}
            size="medium"
            type="submit">
            primary
          </Button>
          <Button
            variant="secondary"
            size="medium"
            endIcon={<DemoIcon className="bu-h-[18px] bu-w-[18px]" />}>
            secondary
          </Button>
          <Button variant="tertiary" size="medium">
            tertiary
          </Button>
          <Button variant="ghost" size="medium">
            ghost
          </Button>
          <Button variant="text" size="medium">
            text
          </Button>
          <Button variant="info" size="medium" disabled>
            info
          </Button>
          <Button variant="primary" size="medium" startIcon="111">
            primary-startIcon
          </Button>
          <Button variant="primary" size="medium">
            primary
          </Button>
          <Button variant="buy" disabled size="medium">
            buy
          </Button>
          <Button variant="sell" size="medium">
            sell
          </Button>
          <Button variant="primary" size="small" shape="circle" icon={<i>2</i>}></Button>
          <Button.WhiteButton variant="primary" size="medium">
            White Button
          </Button.WhiteButton>

          <Button variant="function" size="medium">
            Button
          </Button>

          <Button variant="primary" size="medium" disabled loading={true}>
            Button
          </Button>

          <Button variant="primary" size="medium" disabled loading={true} loadingType="refresh">
            Button
          </Button>
        </div>
      </ThemeProvider>
    );
  }
};
