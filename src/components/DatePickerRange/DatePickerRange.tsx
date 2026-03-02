"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { DateRange, Matcher } from "react-day-picker";
import { Calendar } from "../Calendar";
import { formatDate } from "../../utils/format";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Typography } from "../Typography/Typography";
import MonthPicker from "../MonthPicker";
import enUS from "date-fns/locale/en-US";
import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import Popup, { PopupRef } from "../Popup";
import ArrowUpLine from "../../assets/icons/arrow-up-l-line.svg";
import SubtractLine from "../../assets/icons/subtract-line.svg";
import CalendarFill from "../../assets/icons/calendar-fill.svg";
import { ArrowLine, BorderColor, DatePickerBg, TextDescribe } from "./styles";
import useTheme from "../../provider/useTheme";
import { loadLocale } from "../../utils/locales";

export type DateValue = {
  start_time?: number;
  end_time?: number;
};

export type QuickSelection = {
  label: string;
  value: number;
};

export type DatePickerRangeProps = {
  mode?: "simple" | "normal";
  className?: string;
  dateClassName?: string;
  defaultValue: DateValue;
  setValues: (values: DateValue) => void;
  disabledDays?: Matcher | Matcher[];
  quickSelection?: QuickSelection[];
  limitDays?: number;
  disabledSameDay?: boolean;
  includesToday?: boolean;
  startTime?: Date;
  isUtcTime?: boolean;
  lang: string;
  selectText: string;
  confirmText: string;
  cancelText: string;
  toText: string;
  distance?: number;
  auto?: boolean;
  startPlaceholder?: string;
  endPlaceholder?: string;
  dateSuffix?: string;
  pointClassName?: string;
  suffixIcon?: React.ReactNode;
  timeZone?: string;
  disabled?: boolean;
};

const DatePickerRange: React.FC<DatePickerRangeProps> = ({
  mode = "simple",
  className = "",
  dateClassName = "",
  defaultValue,
  setValues,
  disabledDays,
  quickSelection = [],
  limitDays,
  disabledSameDay = false,
  includesToday = true,
  startTime,
  isUtcTime = false,
  lang = "en",
  selectText = "Selected",
  confirmText = "Confirm",
  cancelText = "Cancel",
  toText = "-",
  distance = 5,
  auto = true,
  startPlaceholder = "Start Date",
  endPlaceholder = "End Date",
  dateSuffix = "",
  pointClassName = "",
  suffixIcon = null,
  timeZone = "UTC",
  disabled = false
}) => {
  const [date, setDate] = React.useState<DateRange | undefined>();

  const [startMonthShow, setStartMonthShow] = React.useState<boolean>(false);

  const [endMonthShow, setEndMonthShow] = React.useState<boolean>(false);

  const [startMonth, setStartMonth] = React.useState<Date | undefined>();

  const [endMonth, setEndMonth] = React.useState<Date | undefined>();

  const [month, setMonth] = React.useState<Date | undefined>();

  const [monthHeight, setMonthHeight] = React.useState<number>(303);

  const [recentDays, setRecentDays] = React.useState<number | undefined>();

  const [locale, setLocale] = React.useState(null);

  const isChange = React.useRef<boolean>(false);

  const ref = React.useRef<PopupRef>(null);

  const { theme } = useTheme();

  const maximum =
    limitDays && limitDays > 0 && (includesToday ? limitDays - 1 : limitDays) * 24 * 60 * 60 * 1000;

  const toUtc = (date: number): Date => {
    if (!isUtcTime) return new Date(date);
    return utcToZonedTime(date, timeZone);
  };

  const modifiers = {
    today: utcToZonedTime(new Date().getTime(), timeZone)
  };

  React.useEffect(() => {
    const fetchLocale = async () => {
      const loadedLocale = await loadLocale(lang);
      setLocale(loadedLocale);
    };

    fetchLocale();
  }, [lang]);

  const calculateMonths = React.useMemo(() => {
    const currentDate = maximum ? toUtc(new Date().getTime()) : toUtc(new Date(2100, 10).getTime());
    currentDate.setHours(0, 0, 0, 0);
    const pastDate = maximum
      ? new Date(currentDate.getTime() - maximum)
      : toUtc(new Date(1970, 0).getTime());
    const startYear = pastDate.getFullYear();
    const startMonth = pastDate.getMonth() + 1;
    const endYear = currentDate.getFullYear();
    const endMonth = currentDate.getMonth() + 1;

    const yearMonthData: { [key: number]: number[] } = {};

    for (let year = startYear; year <= endYear; year++) {
      yearMonthData[year] = [];

      let monthStart = 1;
      let monthEnd = 12;

      if (year === startYear) {
        monthStart = startMonth;
      }

      if (year === endYear) {
        monthEnd = endMonth;
      }

      for (let month = monthStart; month <= monthEnd; month++) {
        yearMonthData[year].push(month);
      }
    }

    return yearMonthData;
  }, [maximum]);

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleDaysChange = (days: number) => {
    setRecentDays(days);
    const today = toUtc(new Date().getTime());
    today.setHours(0, 0, 0, 0);
    const from = addDays(today, -days + (includesToday ? 1 : 0));
    if (startTime && from.getTime() < startTime.getTime()) {
      from.setTime(startTime.getTime());
    }
    const to = toUtc(
      includesToday ? new Date().getTime() : addDays(new Date().getTime(), -1).getTime()
    );
    isChange.current = true;
    setDate({ from, to });
    setValues({
      start_time: from.getTime(),
      end_time: to.getTime()
    });
    setMonth(toUtc(from.getTime()));
    setTimeout(() => {
      setMonth(undefined);
    }, 200);
  };

  const calculateDateDiff = (date1: Date, date2: Date) => {
    return date2.getTime() - date1.getTime();
  };

  const onSelect = (day: DateRange | undefined) => {
    setRecentDays(undefined);
    if (day?.from && day?.to) {
      if (disabledSameDay && isSameDay(day.from, day.to)) {
        setDate(undefined);
        return;
      } else if (maximum && calculateDateDiff(day.from, day.to) > maximum) {
        if (day.to.getTime() === date?.to?.getTime()) {
          day.to = new Date(day.from.getTime() + maximum);
        } else if (day.from.getTime() === date?.from?.getTime()) {
          day.from = new Date(day.to.getTime() - maximum);
        }
      }
    }
    isChange.current = false;
    setDate(day);
  };

  const handleClose = () => {
    if (!isChange.current && defaultValue?.start_time && defaultValue?.end_time) {
      setDate({
        from: new Date(defaultValue.start_time),
        to: new Date(defaultValue.end_time)
      });
    }
    if (!defaultValue?.start_time && !defaultValue?.end_time) {
      setDate({
        from: undefined,
        to: undefined
      });
    }
    setTimeout(() => {
      setRecentDays(undefined);
      setStartMonthShow(false);
      setEndMonthShow(false);
      isChange.current = false;
    }, 500);
    ref.current?.close();
  };

  const handleConfirm = () => {
    if (date?.from && date?.to) {
      if (disabledSameDay && isSameDay(date.from, date.to)) {
        return;
      }
      date.from.setHours(0, 0, 0, 0);
      const today = toUtc(new Date().getTime());
      today.setHours(0, 0, 0, 0);
      if (date.to.getTime() < today.getTime()) {
        date.to.setHours(23, 59, 59, 999);
      }
      setValues({
        start_time: date.from.getTime(),
        end_time: isSameDay(date.to, toUtc(new Date().getTime()))
          ? toUtc(new Date().getTime()).getTime()
          : date.to.getTime()
      });
    }
    isChange.current = true;
    if (!date?.from && !date?.to) {
      setValues({
        start_time: undefined,
        end_time: undefined
      });
    }
    handleClose();
  };

  React.useEffect(() => {
    if (startMonth) {
      const height = document.querySelector(".bu-date-picker ")?.clientHeight || 303;
      setMonthHeight(height);
    }
  }, [startMonth]);

  React.useEffect(() => {
    if (endMonth) {
      const height = document.querySelector(".bu-date-picker ")?.clientHeight || 303;
      setMonthHeight(height);
    }
  }, [endMonth]);

  React.useEffect(() => {
    const { start_time, end_time } = defaultValue;
    if (start_time === undefined || end_time === undefined) return;
    const startDate = new Date(start_time);
    const endDate = new Date(end_time);
    if (startTime && startDate.getTime() < startTime.getTime()) {
      startDate.setTime(startTime.getTime());
    }
    startDate && endDate && setDate({ from: startDate, to: endDate });
  }, [defaultValue, startTime]);

  return (
    <div className={`bu-date-picker-range ${className}`}>
      <Popup
        ref={ref}
        distance={distance}
        cancel={handleClose}
        auto={auto}
        disabled={disabled}
        title={
          <div
            id="date"
            className={`bu-flex bu-h-[40px] bu-w-[260px] bu-cursor-pointer bu-items-center bu-justify-between bu-rounded-[8px] bu-border bu-p-[8px] ${DatePickerBg(
              { theme, hover: theme }
            )} ${dateClassName}`}>
            {mode === "simple" ? (
              date?.from ? (
                date.to ? (
                  <>
                    <Typography
                      variant="body3"
                      weight="regular"
                      className={`bu-leading-[20px] ${pointClassName}`}>
                      {formatDate(date.from, "yyyy/MM/dd", undefined, lang)}
                    </Typography>
                    <SubtractLine
                      className={`bu-h-4 bu-w-4 ${ArrowLine({ theme })}`}></SubtractLine>
                    <Typography variant="body3" weight="regular" className="bu-leading-[20px]">
                      {formatDate(date.to, "yyyy/MM/dd", undefined, lang)}
                    </Typography>
                  </>
                ) : (
                  <Typography
                    variant="body3"
                    weight="regular"
                    className={`bu-leading-[20px] ${pointClassName}`}>
                    {formatDate(date.from, "yyyy/MM/dd", undefined, lang)}
                  </Typography>
                )
              ) : (
                <span></span>
              )
            ) : (
              <div className="bu-flex bu-items-center bu-gap-[10px]">
                <div className="bu-flex bu-flex-1 bu-items-center bu-justify-evenly bu-gap-[10px]">
                  <div
                    className={`bu-flex bu-min-w-[138px] bu-items-center bu-justify-center bu-gap-[4px] ${pointClassName}`}>
                    <Typography
                      variant="body3"
                      weight="regular"
                      className={`bu-leading-[20px] ${
                        !date?.from || disabled ? TextDescribe({ theme }) : ""
                      }`}>
                      {date?.from
                        ? formatDate(date.from, "yyyy/MM/dd", undefined, lang)
                        : startPlaceholder}
                      {date?.from && <span className={TextDescribe({ theme })}> {dateSuffix}</span>}
                    </Typography>
                  </div>
                  <SubtractLine className={`bu-h-4 bu-w-4 ${ArrowLine({ theme })}`} />
                  <div
                    className={`bu-flex bu-min-w-[138px] bu-items-center bu-justify-center bu-gap-[4px] ${pointClassName}`}>
                    <Typography
                      variant="body3"
                      weight="regular"
                      className={`bu-leading-[20px] ${
                        !date?.to || disabled ? TextDescribe({ theme }) : ""
                      }`}>
                      {date?.to
                        ? formatDate(date.to, "yyyy/MM/dd", undefined, lang)
                        : endPlaceholder}
                      {date?.to && <span className={TextDescribe({ theme })}> {dateSuffix}</span>}
                    </Typography>
                  </div>
                </div>
                {suffixIcon ? (
                  suffixIcon
                ) : (
                  <CalendarFill
                    className={`bu-h-4 bu-w-4 ${TextDescribe({ theme })}`}></CalendarFill>
                )}
              </div>
            )}
          </div>
        }
        content={
          <div
            className={`bu-rounded-[8px] bu-border bu-px-[16px] bu-pb-[8px] ${DatePickerBg({
              theme
            })}`}>
            <div className="bu-date-picker bu-flex">
              {startMonthShow && (
                <div
                  className={`bu-w-[241px] bu-flex-1 ltr:bu-border-r rtl:bu-border-l ltr:bu-pr-[16px] rtl:bu-pl-[16px] bu-pt-[16px] ${BorderColor(
                    { theme }
                  )}`}
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
                    currentMonth={
                      startMonth ? startMonth.getMonth() + 1 : new Date().getMonth() + 1
                    }
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
              <div className="flex">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={onSelect}
                  numberOfMonths={2}
                  disabled={disabledDays}
                  startMonthShow={startMonthShow}
                  endMonthShow={endMonthShow}
                  setStartMonthShow={setStartMonthShow}
                  setEndMonthShow={setEndMonthShow}
                  setStartMonth={setStartMonth}
                  setEndMonth={setEndMonth}
                  month={month}
                  locale={locale || enUS}
                  modifiers={isUtcTime ? modifiers : undefined}
                />
              </div>
              {endMonthShow && (
                <div
                  className="bu-w-[240px] bu-flex-1 ltr:bu-pl-[16px] rtl:bu-pr-[16px] bu-pt-[16px]"
                  style={{ height: monthHeight + "px" }}>
                  <div
                    className="bu-flex bu-h-[40px] bu-cursor-pointer bu-items-center bu-gap-[4px] bu-py-[8px]"
                    onClick={() => setEndMonthShow(false)}>
                    <Typography variant="body2" weight="medium">
                      {endMonth &&
                        formatDate(endMonth as Date, "MMM yyy", {
                          locale: locale || enUS
                        })}
                    </Typography>
                    <ArrowUpLine className={`bu-h-5 bu-w-5 ${ArrowLine({ theme })}`}></ArrowUpLine>
                  </div>
                  <MonthPicker
                    data={calculateMonths}
                    currentYear={endMonth ? endMonth.getFullYear() : new Date().getFullYear()}
                    currentMonth={endMonth ? endMonth.getMonth() + 1 : new Date().getMonth() + 1}
                    setMonth={setEndMonth}
                    locale={locale || enUS}
                    confirmText={confirmText}
                    cancelText={cancelText}
                    cancel={setEndMonthShow.bind(null, false)}
                    confirm={() => {
                      setMonth(
                        endMonth?.getMonth() === 0
                          ? new Date(endMonth.getFullYear() - 1, 11)
                          : endMonth && new Date(endMonth.getFullYear(), endMonth.getMonth() - 1)
                      );
                      setEndMonthShow(false);
                      setTimeout(() => {
                        setMonth(undefined);
                      }, 200);
                    }}></MonthPicker>
                </div>
              )}
            </div>
            {quickSelection && quickSelection.length > 0 && (
              <div className="bu-button-group bu-flex bu-gap-[8px] bu-py-[8px]">
                {quickSelection.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleDaysChange(item.value)}
                    size="small"
                    variant={recentDays === item.value ? "tertiary" : "text"}>
                    {item.label}
                  </Button>
                ))}
              </div>
            )}
            {!startMonthShow && !endMonthShow && (
              <>
                <Divider direction="horizontal" />
                <div className="bu-flex bu-items-center bu-justify-between bu-py-[8px]">
                  <Typography variant="body3" weight="medium">
                    {date?.from ? (
                      date.to ? (
                        <>
                          {selectText}: {formatDate(date.from, "yyyy/MM/dd")} {toText}{" "}
                          {formatDate(date.to, "yyyy/MM/dd")}
                        </>
                      ) : (
                        <>
                          {selectText}: {formatDate(date.from, "yyyy/MM/dd")}
                        </>
                      )
                    ) : (
                      <>{selectText}: </>
                    )}
                  </Typography>
                  <Button onClick={() => handleConfirm()} size="small" variant="primary">
                    {confirmText}
                  </Button>
                </div>
              </>
            )}
          </div>
        }
      />
    </div>
  );
};

export default DatePickerRange;
