import type { Meta, StoryObj } from "@storybook/react";
import { TextSelect } from "../components/TextSelect/TextSelect";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useEffect, useState } from "react";
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

    const [accountOptions, setAccountOptions] = useState<any>([]);

    const [open, setOpen] = useState(false);

    const [from, setFrom] = useState("");

    const [value, setValue] = useState("");

    const [to, setTo] = useState("");

    const [placeholder,setPlaceholder] = useState("");

    const change = (value: string) => {
      if(value==='limit'){
        setValue('20000');
      }else{
        setValue('');
        setPlaceholder('市价')
      }
    };

    const inputChange=(value:string)=>{
      setValue(value);
    }

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
        <>
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
          {/* <Button variant="primary" size="medium" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Dialog
            title="demo"
            size="large"
            open={open}
            footer={null}
            cancel={() => setOpen(false)}
            content={
              <div>
                <div className="bu-w-full">
                  <TextSelect
                    placeholder="Select a person"
                    disabled={to}
                    defaultValue={from}
                    options={accountOptions}
                    onChange={change}
                  />
                </div>
                <div className="bu-w-full">
                  <TextSelect
                    placeholder="Select a person"
                    disabled={from}
                    defaultValue={to}
                    options={accountOptions}
                    onChange={changeTo}
                  />
                </div>
              </div>
            }
          /> */}
        </>
      </ThemeProvider>
    );
  }
};
