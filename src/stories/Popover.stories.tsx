import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverRefProps } from "../components/Popover/Popover";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { TextSelect, TextSelectRefProps } from "../components/TextSelect/TextSelect";
import { useRef } from "react";

const meta: Meta<typeof Popover> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Popover",
  component: Popover
};

export default meta;

type Story = StoryObj<typeof Popover>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(2);
    };

    const options = [
      {
        label: "left",
        value: "left"
      },
      {
        label: "center",
        value: "center"
      },
      {
        label: "right",
        value: "right"
      }
    ];

    const onChange = (value: string) => {
      console.log(value);
      parentRef.current?.close();
      childRef.current?.close();
    };

    const parentRef = useRef<PopoverRefProps>(null);

    const childRef = useRef<PopoverRefProps>(null);

    const selectRef = useRef<TextSelectRefProps>(null);

    const afterClose = () => {
      console.log("是不是触发");
      selectRef.current?.close();
    };

    return (
      <div>
        <div className="bu-w-[150px]">
          <Popover
            label="Popover"
            y={10}
            x={-10}
            placement="bottom-start"
            ref={parentRef}
            afterClose={afterClose}
            // trigger="click"
            content={
              <>
                <ul className="bu-w-48 bu-bg-light-background bu-px-2">
                  <li>
                    <Popover
                      label={<div>1111</div>}
                      placement={"right-start"}
                      ref={childRef}
                      x={-6}
                      y={16}
                      content={
                        <ul>
                          <li className="bu-flex bu-justify-between">
                            <span>2222</span>
                            <TextSelect
                              ref={selectRef}
                              inputClassName="h-[34px]"
                              options={options}
                              onChange={onChange}></TextSelect>
                          </li>
                        </ul>
                      }></Popover>
                  </li>
                  <li>
                    <Button onClick={(e) => handleClick(e)} size="medium" variant="primary">
                      Test Click
                    </Button>
                  </li>
                  <li>3</li>
                </ul>
              </>
            }
          />
        </div>
        {/* <Button variant="primary" size="medium" onClick={handleClick}>
          Click
        </Button> */}
      </div>
    );
  }
};
