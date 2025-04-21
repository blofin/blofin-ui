import type { Meta, StoryObj } from "@storybook/react";
import DatePickerRange from "../components/DatePickerRange/DatePickerRange";
import addDays from "date-fns/addDays";
import { useState } from "react";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof DatePickerRange> = {
  title: "Components/DatePickerRange",
  component: DatePickerRange
};

export default meta;
type Story = StoryObj<typeof DatePickerRange>;

export const Primary: Story = {
  render: () => {
    const from = addDays(new Date(), -7);

    const to = addDays(new Date(), -1);

    from.setHours(0, 0, 0, 0);

    to.setHours(23, 59, 59, 999);

    const [date, setDate] = useState({
      start_time: from.getTime(),
      end_time: to.getTime()
    });

    const handleChangeDate = (date: any) => {
      setDate(date);
    };

    const lang = "en";

    const buttonGroup = [
      { label: "7 Days", value: 7 },
      { label: "30 Days", value: 30 },
      { label: "90 Days", value: 90 },
      { label: "Last 180 Days", value: 180 }
    ];

    const disabledDays = [
      {
        from: new Date(),
        to: new Date("2100-12-31")
      }
    ];
    return (
      <ThemeProvider value={{ theme: "light" }}>
        <div className="bu-h-[500px] bu-w-full">
          <DatePickerRange
            defaultValue={date}
            dateClassName={"bu-w-auto bu-gap-[10px]"}
            setValues={handleChangeDate}
            limitDays={370}
            disabledDays={disabledDays}
            quickSelection={buttonGroup}
            disabledSameDay
            lang={lang}
            selectText="Select"
            cancelText="Cancel"
            confirmText="Confirm"
            toText="To"
            auto={false}
            includesToday={false}
            mode="normal"
            dateSuffix="(UTC+8)"
          />
        </div>
      </ThemeProvider>
    );
  }
};
