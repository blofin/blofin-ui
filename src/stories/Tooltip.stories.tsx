import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { Tooltip } from "../components/Tooltip/Tooltip";
import useTheme from "../hooks/useMode";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => {
    const mode = useTheme();

    return (
      <div className="bu-pt-[100px] bu-pl-[300px]">
        <Tooltip
          placement="topRight"
          title="This is Tooltip This is Tooltip This is Tooltip This is Tooltip"
          content="This is content This is content This is content This is content This is content This is content">
          <Button size="small" icon='2' shape="circle"></Button>
        </Tooltip>
      </div>
    );
  }
};
