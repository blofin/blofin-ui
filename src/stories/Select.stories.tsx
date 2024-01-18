import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useState } from "react";
import { Select } from "../components/Select";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { Button, Dialog, Tooltip } from "..";

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Select",
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ThemeProvider value={{ theme: "dark" }}>
        <Button variant="primary" onClick={() => setOpen(true)} size="medium">
          333
        </Button>
        <Dialog
          open={open}
          title="111"
          size="medium"
          footer={null}
          content={
            <div>
              <div className="bu-h-[100px] bu-w-full"></div>
              <Select
                value={"alice"}
                selectType="outlined"
                activeColor={false}
                align="right"
                selectItems={[
                  { label: "Alice", value: "alice" },
                  { label: "Bob", value: "bob" }
                ]}
                wrapper={(children: ReactNode) => {
                  return (
                    <Tooltip placement="top" content="111">
                      {children}
                    </Tooltip>
                  );
                }}
              />
              <div className="bu-h-[600px] bu-w-full"></div>
            </div>
          }></Dialog>
      </ThemeProvider>
    );
  }
};

export const Controlled: Story = {
  render: () => {
    const mode = useMode();
    const [selectedValue, setSelectedValue] = useState("gtc");
    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-flex">
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              selectItems={[
                { label: "Good Till Cancel", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue}</label>
            <Select
              align="right"
              labelClassName="!bu-text-[30px]"
              offsetParent={45}
              trigger="hover"
              selectItems={[
                { label: "gtc", value: "gtc" },
                { label: "Bob", value: "bob" }
              ]}
              menuWithBorder
              value={selectedValue}
              handleChange={(value) => setSelectedValue(value)}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
