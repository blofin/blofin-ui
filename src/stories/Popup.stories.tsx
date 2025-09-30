import type { Meta, StoryObj } from "@storybook/react";
import useTheme from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import Popup, { PopupRef } from "../components/Popup";
import { useEffect, useRef, useState } from "react";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup",
  component: Popup
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Primary: Story = {
  render: () => {
    const mode = useTheme();

    const ref = useRef<PopupRef>(null);

    const [show, setShow] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        ref.current?.open();
      }, 2000);
    }, []);

    const cancel = () => {
      console.log("cancel!!!!", show);
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-h-[1000px]"></div>
        {show && <div onClick={() => setShow(false)}>2222</div>}
        <Popup
          ref={ref}
          title="我是Title"
          // disabled
          cancel={cancel}
          content={
            <div className="bu-w-[60px] bu-bg-light-primary bu-text-right">
              {show && <div onClick={() => setShow(false)}>2222</div>}
              3333
            </div>
          }
        />
        <div className="bu-h-[1000px]"></div>
      </ThemeProvider>
    );
  }
};
