import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useRef, useState } from "react";
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
                align="left"
                adsorb={true}
                selectItems={[
                  { label: "Alice", value: "alice" },
                  { label: "Bob", value: "bob" }
                ]}
                inputDisabled={true}
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
    const [selectedValue1, setSelectedValue1] = useState("market");
    const [selectedValue2, setSelectedValue2] = useState("gtc");

    const [accountOptions1, setAccountOptions1] = useState<any>([
      {
        label: "市价",
        value: "market"
      },
      {
        label: "最新价",
        value: "limit"
      },
      {
        label: "最新价1",
        value: "limit1"
      },
      {
        label: "最新价2",
        value: "limit2"
      },
      {
        label: "最新价3",
        value: "limit3"
      },
      {
        label: "最新价4",
        value: "limit4"
      },
      {
        label: "最新价5",
        value: "limit5"
      }
    ]);

    const optionsRef = useRef(accountOptions1);

    const searchChange = (value: string) => {
      setAccountOptions1(
        optionsRef.current.filter(
          (item: any) =>
            item.label.includes(value.toLowerCase()) || item.value.includes(value.toLowerCase())
        )
      );
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-flex">
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue1}</label>
            <Select
              labelId="testId"
              selectItems={accountOptions1}
              customSelectItems={(item: { label: string; value: string }) => {
                return (
                  <div className="bu-w-[440px]">
                    {item.label} --- {item.value}
                  </div>
                );
              }}
              search={true}
              searchChange={searchChange}
              value={selectedValue1}
              handleChange={(value) => setSelectedValue1(value)}
            />
          </div>
          <div className="bu-flex bu-h-[24px] bu-w-full bu-flex-col bu-gap-4">
            <label htmlFor="select">{selectedValue2}</label>
            <Select
              align="right"
              labelClassName="!bu-text-[30px]"
              offsetParent={45}
              trigger="hover"
              selectItems={[
                { label: "gtc", value: "gtc" },
                { label: "Bob", value: "bob" },
                { label: "Bob2", value: "Bob2" },
                { label: "Bob3", value: "Bob3" },
                { label: "Bob4", value: "Bob4" },
                { label: "Bob5", value: "Bob5" },
                { label: "Bob6", value: "Bob6" },
                { label: "Bob7", value: "Bob7" },
                { label: "Bob8", value: "Bob8" },
                { label: "Bob9", value: "Bob9" },
                { label: "Bob10", value: "Bob10" },
                { label: "Bob11", value: "Bob11" },
                { label: "Bob12", value: "Bob12" },
                { label: "Bob13", value: "Bob13" }
              ]}
              menuWrapperClassName="bu-border bu-border-dark-line-primary bu-max-h-[200px] bu-overflow-y-scroll"
              arrowClassName="!bu-text-dark-label"
              value={selectedValue2}
              handleChange={(value) => setSelectedValue2(value)}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
