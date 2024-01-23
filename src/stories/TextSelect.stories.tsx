import type { Meta, StoryObj } from "@storybook/react";
import { TextSelect } from "../components/TextSelect/TextSelect";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { Button, Dialog, Tooltip } from "..";

const meta: Meta<typeof TextSelect> = {
  /* 👇 The title prop is Tab.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TextSelect",
  component: TextSelect
};

export default meta;

type Story = StoryObj<typeof TextSelect>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const ref = useRef<HTMLDivElement>(null);

    const [accountOptions, setAccountOptions] = useState<any>([]);

    const [open, setOpen] = useState(false);

    const [from, setFrom] = useState("");

    const [value, setValue] = useState("");

    const [to, setTo] = useState("");

    const [placeholder, setPlaceholder] = useState("");

    const change = (value: string) => {
      if (value === "limit") {
        setValue("20000");
      } else {
        setValue("");
        setPlaceholder("市价");
      }
    };

    const inputChange = (value: string) => {
      setValue(value);
    };

    const changeTo = (value: string) => {
      console.log(value);
      setTo(value);
    };

    useEffect(() => {
      setTimeout(() => {
        const arr = [
          {
            label: "市价",
            value: "market"
          },
          {
            label: "最新价",
            value: "limit"
          }
        ];
        setAccountOptions(arr);
        setFrom(arr[0].value);
        setTo(arr[1].value);
      }, 1000);
    }, []);

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div ref={ref} className="bu-h-[500px] bu-overflow-y-scroll">
          <div className="bu-h-[1000px] bu-flex-col bu-p-[200px]">
            <div className="bu-mb-[50px]">
              <Tooltip placement="top" content="价格" popupContainer={ref.current}>
                <TextSelect
                  placeholder={placeholder}
                  inputClassName="bu-w-[80px] bu-h-[30px] bu-text-[14px] bu-pl-[8px]"
                  value={value}
                  options={accountOptions}
                  onChange={change}
                  inputChange={inputChange}
                  hideEndAdornment={true}
                  readOnly={false}
                  popupContainer={ref.current}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip placement="top" content="价格">
                <TextSelect
                  placeholder={placeholder}
                  inputClassName="bu-w-[80px] bu-h-[30px] bu-text-[14px] bu-pl-[8px]"
                  value={value}
                  options={accountOptions}
                  onChange={change}
                  inputChange={inputChange}
                  hideEndAdornment={true}
                  readOnly={false}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
