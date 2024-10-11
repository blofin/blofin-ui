import type { Meta, StoryObj } from "@storybook/react";
import { TextSelect, TextSelectRefProps } from "../components/TextSelect/TextSelect";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { Button, Dialog, TextField, Tooltip } from "..";

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

    const [open, setOpen] = useState(false);

    const [from, setFrom] = useState("");

    const [value, setValue] = useState("market");

    const [value1, setValue1] = useState("market");

    const [to, setTo] = useState("");

    const [placeholder, setPlaceholder] = useState("");

    const selectRef = useRef<TextSelectRefProps>(null);

    const change = (value: string) => {
      console.log(value, "+++");
      setValue(value)
      // if (value === "limit") {
      //   setValue("20000");
      // } else {
      //   setValue("");
      //   setPlaceholder("市价");
      // }
    };

    const change1 = (value: string) => {
      setValue1(value);
    };

    const inputChange = (value: string) => {
      setValue(value);
    };

    const changeTo = (value: string) => {
      console.log(value);
      setTo(value);
    };

    const searchChange = (value: string) => {
      setAccountOptions1(optionsRef.current.filter((item: any) => item.label.includes(value)));
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
        <div ref={ref} className="bu-overflow-y-scroll">
          <div className="bu-flex-col bu-p-[200px] bu-pt-[1000px]">
            <div className="bu-mb-[50px]">
              <Tooltip placement="top" content="价格" scrollContainer={ref.current}>
                <TextSelect
                  preventDuplicateSelection={false}
                  placeholder={placeholder}
                  inputClassName="bu-w-[80px] bu-h-[30px] bu-text-[14px] bu-pl-[8px]"
                  value={value}
                  options={accountOptions}
                  onChange={change}
                  inputChange={inputChange}
                  hideEndAdornment={true}
                  readOnly={false}
                  scrollContainer={ref.current}
                />
              </Tooltip>
            </div>
            <div>
              <TextSelect
                preventDuplicateSelection={false}
                placeholder={placeholder}
                inputClassName="bu-w-[80px] bu-h-[30px] bu-text-[14px] bu-pl-[8px]"
                defaultValue={value}
                options={accountOptions}
                onChange={change}
                inputChange={inputChange}>
                <div>custom</div>
              </TextSelect>
            </div>
            <div>
              <TextSelect
                ref={selectRef}
                defaultValue={value1}
                options={accountOptions1}
                onChange={change1}
                search={true}
                searchChange={searchChange}
                className="bu-max-h-[150px] bu-overflow-y-scroll"
                selectItemClassName="!bu-h-[52px]"
                searchClassName="!bu-px-[16px] bu-py-[8px] !bu-mb-0"
                hideSelectedState={true}
                customSelectItems={(item: { label: string; value: string }) => {
                  return (
                    <div className="bu-w-[440px]">
                      {item.label} --- {item.value}
                    </div>
                  );
                }}
                auto={false}>
                <div>
                  <span>custom</span>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => {
                      selectRef.current && selectRef.current.close();
                    }}>
                    Confirm
                  </Button>
                </div>
              </TextSelect>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
