import type { Meta, StoryObj } from "@storybook/react";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import addDays from "date-fns/addDays";
import { useState } from "react";
import { ThemeProvider } from "../provider/ThemeProvider";
import React from "react";
import { Popover, PopoverRefProps } from "../components/Popover/Popover";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTimePicker",
  component: DateTimePicker
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Primary: Story = {
  render: () => {
    const [date, setDate] = useState<number | undefined>(new Date('2025-1-2').getTime());

    const handleChangeDate = (date?: number) => {
      setDate(date);
      handleClose();
    };

    const lang = "en";

    const disabledDays = [
      {
        from: new Date("1900-01-01"),
        to: addDays(new Date(), -1)
      }
    ];

    const popupref = React.useRef<PopoverRefProps>(null);

    const handleClose = () => {
      popupref.current?.close();
    };

    return (
      <ThemeProvider value={{ theme: "light" }}>
        <div className="bu-h-[500px] bu-w-full">
          <Popover
            ref={popupref}
            placement="bottom"
            label={<span className="iconfont icon-calendar-fill text-light-label text-[20px] cursor-pointer">1111</span>}
            content={
              <DateTimePicker
                defaultValue={date}
                setValues={handleChangeDate}
                disabledDays={disabledDays}
                hidePast
                lang={lang}
                cancelText="Cancel"
                confirmText="Confirm"
                submitText="Ok"
              />
            }
          />
        </div>
      </ThemeProvider>
    );
  }
};
