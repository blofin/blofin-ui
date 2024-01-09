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

    useEffect(()=>{
      setTimeout(()=>{
        setShow(true);
      },2000)
    },[])

    return (
      <div className="bu-pl-[300px] bu-pt-[100px]">
        <Tooltip
          placement="top"
          // hideArrow
          title="This is Tooltip This is Tooltip This is Tooltip This is Tooltip"
          content={
            <div>
              <p>
                This is content This is content This is content This is content This is content This
                is content
              </p>
              {show && <p>你好</p>}
            </div>
          }>
          <Button size="small" icon="2" shape="circle"></Button>
        </Tooltip>
      </div>
    );
  }
};
