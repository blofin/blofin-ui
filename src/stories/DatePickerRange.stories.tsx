import type { Meta, StoryObj } from "@storybook/react";
import DatePickerRange from "../components/DatePickerRange/DatePickerRange";
import addDays from "date-fns/addDays";
import { useState } from "react";
import { ThemeProvider } from "../provider/ThemeProvider";
import zhTW from "date-fns/locale/zh-TW";
import uk from "date-fns/locale/uk";
import ru from "date-fns/locale/ru";
import vi from "date-fns/locale/vi";
import enUS from "date-fns/locale/en-US";
import ko from "date-fns/locale/ko";
import es from "date-fns/locale/es";
import de from "date-fns/locale/de";
import fr from "date-fns/locale/fr";

const meta: Meta<typeof DatePickerRange> = {
  title: "Components/DatePickerRange",
  component: DatePickerRange
};

export default meta;
type Story = StoryObj<typeof DatePickerRange>;

export const Primary: Story = {
  render: () => {
    const [date, setDate] = useState({
      start_time: addDays(new Date(), -29).getTime(),
      end_time: new Date().getTime()
    });

    const handleChangeDate = (date: any) => {
      setDate(date);
    };

    const locale = {
      en: enUS,
      es: es,
      de: de,
      fr: fr
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
        from: addDays(new Date(), 1),
        to: new Date("2100-12-31")
      }
    ];
    return (
      <ThemeProvider value={{ theme: "dark" }}>
        <div className="bu-h-[500px] bu-w-full">
          <DatePickerRange
            defaultValue={date}
            setValues={handleChangeDate}
            limitDays={180}
            disabledDays={disabledDays}
            quickSelection={buttonGroup}
            disabledSameDay
            lang={lang}
            locale={locale[lang as keyof typeof locale]}
            selectText="Select"
            cancelText="Cancel"
            confirmText="Confirm"
            toText="To"
            isUtcTime={true}></DatePickerRange>
        </div>
      </ThemeProvider>
    );
  }
};
