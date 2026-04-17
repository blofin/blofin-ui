"use client";

import * as React from "react";
import { Matcher } from "react-day-picker";
import Calendar from "./Calendar";
import { formatDate } from "../../utils/format";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Typography } from "../Typography/Typography";
import MonthPicker from "../MonthPicker";
import enUS from "date-fns/locale/en-US";
import ArrowUpLine from "../../assets/icons/arrow-up-l-line.svg";
import { ArrowLine, DatePickerBg, HeadCell } from "./styles";
import useTheme from "../../provider/useTheme";
import ScrollableList from "./ScrollableList";
import useDateTimePicker from "./hooks/useDateTimePicker";

export type DateTimePickerProps = {
  id?: string;
  className?: string;
  defaultValue?: number;
  setValues: (values: number | undefined) => void;
  disabledDays?: Matcher | Matcher[];
  limitDays?: number;
  isUtcTime?: boolean;
  lang: string;
  confirmText: string;
  cancelText: string;
  submitText: string;
  minuteInterval?: number;
  hidePast?: boolean;
  hideHoursAndMinutes?: boolean;
  monthPickerClassName?: string;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  id,
  className = "",
  defaultValue,
  setValues,
  disabledDays,
  limitDays,
  isUtcTime = false,
  lang = "en",
  confirmText = "Confirm",
  cancelText = "Cancel",
  submitText = "Ok",
  minuteInterval = 1,
  hidePast = true,
  hideHoursAndMinutes = false,
  monthPickerClassName = ""
}) => {
  const {
    date,
    setDate,
    startMonthShow,
    setStartMonthShow,
    startMonth,
    setStartMonth,
    month,
    setMonth,
    monthHeight,
    currentHour,
    setCurrentHour,
    currentMinute,
    setCurrentMinute,
    locale,
    modifiers,
    calculateMonths,
    hours,
    minutes,
    disabledHour,
    disabledMinute
  } = useDateTimePicker({
    defaultValue,
    limitDays,
    isUtcTime,
    lang,
    minuteInterval,
    hidePast
  });

  const { theme } = useTheme();

  const onSelect = (day: Date | undefined) => {
    setDate(day);
    if (day) {
      const selectedMonth = day.getMonth();
      if (selectedMonth !== date?.getMonth()) {
        setMonth(new Date(day.getFullYear(), selectedMonth));
      }
    }
  };

  const handleConfirm = () => {
    if (date) {
      const selectedDate = new Date(date);
      const hour =
        disabledHour && currentHour < new Date().getHours() ? new Date().getHours() : currentHour;
      const minute =
        disabledMinute && currentMinute < new Date().getMinutes()
          ? new Date().getMinutes()
          : currentMinute;
      selectedDate.setHours(hour, minute, 0, 0);
      setValues(selectedDate.getTime());
    } else {
      setValues(defaultValue);
    }
    setTimeout(() => {
      setStartMonthShow(false);
    }, 500);
  };

  return (
    <div id={id} className={`bu-date-picker-range ${className}`}>
      <div className={`bu-rounded bu-border bu-px-[16px] bu-pb-[8px] ${DatePickerBg({ theme })}`}>
        <div className="bu-date-picker bu-relative">
          {startMonthShow && (
            <div
              className={`bu-w-[333px] bu-flex-1 ltr:bu-pr-[16px] rtl:bu-pl-[16px] bu-pt-[16px] ${DatePickerBg({
                theme
              })} ${monthPickerClassName}`}
              style={{ height: monthHeight + "px" }}>
              <div
                className="bu-flex bu-h-[40px] bu-cursor-pointer bu-items-center bu-gap-[4px] bu-py-[8px]"
                onClick={() => setStartMonthShow(false)}>
                <Typography variant="body2" weight="medium">
                  {startMonth &&
                    formatDate(startMonth as Date, "MMM yyy", {
                      locale: locale || enUS
                    })}
                </Typography>
                <ArrowUpLine className={`bu-h-5 bu-w-5 ${ArrowLine({ theme })}`}></ArrowUpLine>
              </div>
              <MonthPicker
                data={calculateMonths}
                currentYear={startMonth ? startMonth.getFullYear() : new Date().getFullYear()}
                currentMonth={startMonth ? startMonth.getMonth() + 1 : new Date().getMonth() + 1}
                setMonth={setStartMonth}
                locale={locale || enUS}
                confirmText={confirmText}
                cancelText={cancelText}
                cancel={setStartMonthShow.bind(null, false)}
                confirm={() => {
                  setMonth(startMonth);
                  setStartMonthShow(false);
                  setTimeout(() => {
                    setMonth(undefined);
                  }, 200);
                }}></MonthPicker>
            </div>
          )}
          <Calendar
            mode="single"
            date={date?.getTime()}
            selected={date}
            onSelect={onSelect}
            disabled={disabledDays}
            startMonthShow={startMonthShow}
            setStartMonthShow={setStartMonthShow}
            setStartMonth={setStartMonth}
            locale={locale || enUS}
            month={month}
            modifiers={isUtcTime ? modifiers : undefined}
            fixedWeeks
            showOutsideDays
            hideHoursAndMinutes={hideHoursAndMinutes}
          />
          {!hideHoursAndMinutes && (
            <div
              className={`bu-absolute bu-top-[56px] bu-h-[236px] bu-w-[109px] ltr:bu-right-0 rtl:bu-left-0 ${
                startMonthShow ? "bu-hidden" : ""
              }`}>
              <div
                className={`bu-h-[36px] bu-border-b ${HeadCell({
                  theme
                })}`}>
                {" "}
              </div>
              <div className="bu-flex ltr:bu-pl-1 rtl:bu-pr-1 bu-pt-2">
                <ScrollableList
                  theme={theme}
                  items={hours}
                  selectedItem={currentHour}
                  onSelect={(val) => {
                    const hour = new Date().getHours();
                    const minute = new Date().getMinutes();
                    setCurrentHour(disabledHour && val < hour ? hour : val);
                    if (disabledHour && val === hour && currentMinute < minute) {
                      setCurrentMinute(minute);
                    }
                  }}
                  disablePast={disabledHour}
                  current={new Date().getHours()}
                />
                <span
                  className={`bu-mx-1 bu-h-[236px] bu-w-[1px] ltr:bu-border-r rtl:bu-border-l ${HeadCell({
                    theme
                  })}`}></span>
                <ScrollableList
                  theme={theme}
                  items={minutes}
                  selectedItem={currentMinute}
                  onSelect={(val) => {
                    const minute = new Date().getMinutes();
                    setCurrentMinute(disabledMinute && val < minute ? minute : val);
                  }}
                  disablePast={disabledMinute}
                  current={new Date().getMinutes()}
                />
              </div>
            </div>
          )}
        </div>
        {!startMonthShow && (
          <>
            <Divider direction="horizontal" />
            <div className="bu-flex bu-items-center bu-justify-end bu-py-[8px]">
              <Button onClick={() => handleConfirm()} size="small" variant="primary">
                {submitText}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
