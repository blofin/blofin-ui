import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { Tooltip } from "../components/Tooltip/Tooltip";
import useTheme from "../hooks/useMode";
import { useEffect, useState } from "react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => {
    const mode = useTheme();

    const [show, setShow] = useState(false);

    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }, []);

    return (
      <div className="bu-h-[300px] bu-overflow-y-scroll">
        <div className="bu-h-[1500px] bu-pl-[700px] bu-pt-[300px]">
          <Tooltip
            placement="left"
            theme={"light"}
            y={10}
            // hideArrow
            flipPlacement={["bottom"]}
            isShow={isShow}
            title="This is Tooltip This is Tooltip This is Tooltip This is Tooltip"
            content={
              <div>
                <p>
                  This is content This is content This is content This is content This is content
                  This is content
                </p>
                {show && <p>你好</p>}
              </div>
            }>
            <Button size="small" icon="2" shape="circle"></Button>
          </Tooltip>

          {/* <Tooltip
            placement="top"
            // hideArrow
            isShow = {isShow}
            title="This is Tooltip This is Tooltip This is Tooltip This is Tooltip"
            content={
              <div>
                <p>
                  This is content This is content This is content This is content This is content
                  This is content
                </p>
                {show && <p>你好</p>}
              </div>
            }>
            <Button size="small" icon="2" shape="circle"></Button>
          </Tooltip> */}
        </div>
      </div>
    );
  }
};
