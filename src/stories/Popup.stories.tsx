import type { Meta, StoryObj } from "@storybook/react";
import useTheme from "../hooks/useMode";
import { ThemeProvider } from "..";
import Popup, { PopupRef } from "../components/Popup";
import { useEffect, useRef } from "react";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup",
  component: Popup
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Primary: Story = {
  render: () => {

    const mode = useTheme();

    const ref=useRef<PopupRef>(null);

    useEffect(()=>{
      setTimeout(()=>{
        ref.current?.open();
      },2000)
    },[])

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-h-[1000px]"></div>
        <Popup ref={ref} title='我是Title' content={<div className="bu-w-[60px] bu-text-right bu-bg-light-primary">111</div>} />
        <div className="bu-h-[1000px]"></div>
      </ThemeProvider>
    );
  }
};
