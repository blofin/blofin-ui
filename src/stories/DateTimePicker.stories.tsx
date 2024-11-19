import type { Meta, StoryObj } from "@storybook/react";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import addDays from "date-fns/addDays";
import { useState } from "react";
import { ThemeProvider } from "../provider/ThemeProvider";
import React from "react";
import Popup, { PopupRef } from "../components/Popup";

const meta: Meta<typeof DateTimePicker> = {
  title: "Components/DateTimePicker",
  component: DateTimePicker
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Primary: Story = {
  render: () => {
    const [date, setDate] = useState<number | undefined>();

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

    const ref = React.useRef<PopupRef>(null);

    const handleClose = () => {
      ref.current?.close();
    };

    return (
      <ThemeProvider value={{ theme: "light" }}>
        <div className="bu-h-[500px] bu-w-full">
          <Popup
            ref={ref}
            distance={5}
            cancel={handleClose}
            auto={true}
            title={"Select DateTime"}
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
