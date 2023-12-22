import type { Meta, StoryObj } from "@storybook/react";
import { Children, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "..";
import { Button } from "../components/Button/Button";
import { Drawer } from "../components/Drawer/Drawer";
import { Switch } from "../components/Switch/Switch";
import useTheme from "../hooks/useMode";


const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const Content = () => {
    const [changeValue, setChangeValue] = useState(false);
    const change = () => {
        setChangeValue(!changeValue)
        };
        const pt = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          };
    return (
        <div>
            <div className="switchButton" style={pt}>
            <div>Place order</div>
            <Switch 
            check={changeValue}
            onChange={change}
            />
        </div>
        <div className="switchButton" style={pt}>
            <div>Reverse position</div>
            <Switch 
            check={changeValue}
            onChange={change}
            />
        </div>
        <div className="switchButton" style={pt}>
            <div>Place order</div>
            <Switch 
            check={changeValue}
            onChange={change}
            />
        </div>
        </div>
        
        
    );
  };
  

export const Primary: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const mode = useTheme();

    const cancel = () => {
    //   alert("Cancel");
      setOpen(false);
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <Button size="medium" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          open={open}
          title="这是一个title"
          width="300px"
          placement='right'
          hideIcon={true}
          cancel={cancel}
          content={<Content />}
        />
      </ThemeProvider>
    );
  }
};
