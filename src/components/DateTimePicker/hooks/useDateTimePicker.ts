"use client";

import * as React from "react";
import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import { loadLocale } from "../../../utils/locales";

const generateMinuteList = (interval: number): string[] => {
  const minutes = [];
  for (let i = 0; i < 60; i += interval) {
    const minute = i.toString().padStart(2, "0"); // 确保分钟数是两位数
    minutes.push(`${minute}`);
  }
  return minutes;
};

const useDateTimePicker = ({
  defaultValue,
  limitDays,
  isUtcTime,
  lang,
  minuteInterval,
  hidePast
}: {
  defaultValue?: number;
  limitDays?: number;
  isUtcTime?: boolean;
  lang: string;
  minuteInterval: number;
  hidePast: boolean;
}) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [startMonthShow, setStartMonthShow] = React.useState<boolean>(false);
  const [startMonth, setStartMonth] = React.useState<Date | undefined>();
  const [month, setMonth] = React.useState<Date | undefined>();
  const [monthHeight, setMonthHeight] = React.useState<number>(303);
  const [currentHour, setCurrentHour] = React.useState<number>(new Date().getHours());
  const [currentMinute, setCurrentMinute] = React.useState<number>(new Date().getMinutes());
  const [locale, setLocale] = React.useState(null);

  const maximum = limitDays && limitDays > 0 && limitDays * 24 * 60 * 60 * 1000;

  const toUtc = (date: number): Date => {
    if (!isUtcTime) return new Date(date);
    return utcToZonedTime(date, "UTC");
  };

  const modifiers = {
    today: utcToZonedTime(new Date().getTime(), "UTC")
  };

  React.useEffect(() => {
    const fetchLocale = async () => {
      const loadedLocale = await loadLocale(lang);
      setLocale(loadedLocale);
    };

    fetchLocale();
  }, [lang]);

  React.useEffect(() => {
    if (startMonth) {
      const height = document.querySelector(".bu-date-picker")?.clientHeight || 303;
      setMonthHeight(height);
    }
  }, [startMonth]);

  React.useEffect(() => {
    if (defaultValue) {
      setDate(new Date(defaultValue));
      setCurrentHour(new Date(defaultValue).getHours());
      setCurrentMinute(new Date(defaultValue).getMinutes());
      setMonth(new Date(defaultValue));
      setStartMonth(new Date(defaultValue));
    }
  }, [defaultValue]);

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

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
  const minutes = generateMinuteList(minuteInterval);

  const disabledHour = React.useMemo(() => {
    return hidePast && date && date.toDateString() === new Date().toDateString();
  }, [hidePast, date]);

  const disabledMinute = React.useMemo(() => {
    return (
      hidePast &&
      date &&
      date.toDateString() === new Date().toDateString() &&
      currentHour === new Date().getHours()
    );
  }, [hidePast, date, currentHour]);

  return {
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
  };
};

export default useDateTimePicker;
