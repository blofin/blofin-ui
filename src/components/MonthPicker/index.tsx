"use client";

import React, { FC, useState, useEffect } from "react";
import Picker from "../Picker";
import { Button } from "./../Button";
import { formatDate } from "./../../utils/format";
import { Locale } from "date-fns";

type MonthPickerProps = {
  data: { [key: number]: number[] };
  currentYear: number;
  currentMonth: number;
  setMonth: (value: Date) => void;
  locale: Locale;
  confirmText: string;
  cancelText: string;
  cancel: () => void;
  confirm: () => void;
};

const MonthPicker: FC<MonthPickerProps> = ({
  data,
  currentYear,
  currentMonth,
  setMonth,
  locale,
  confirmText,
  cancelText,
  cancel,
  confirm
}) => {
  const yearList = Object.keys(data)?.map((item) => {
    return {
      label: formatDate(new Date(Number(item), 1), "YYY", { locale: locale }),
      value: Number(item)
    };
  });

  const monthList = useMemo(() => {
    return data[currentYear]
      ? data[currentYear].map((item) => {
          return {
            label: formatDate(new Date(currentYear, item - 1), "MMM", { locale: locale }),
            value: item
          };
        })
      : [];
  }, [currentYear, data]);

  const handleChangeYear = (value: number) => {
    setMonth(new Date(value, currentMonth - 1));
  };

  const handleChangeMonth = (value: number) => {
    setMonth(new Date(currentYear, value - 1));
  };

  return (
    <>
      <div className="bu-relative bu-flex bu-h-[210px] bu-py-[21px]">
        <div className="bu-absolute  bu-top-[calc(50%_-_17px)] bu-z-[-1px] bu-h-[34px] bu-w-[100%] bu-rounded-[4px] bu-border bu-border-light-primary dark:bu-border-dark-primary"></div>
        {yearList.length && (
          <Picker list={yearList} selectedValue={currentYear} setValue={handleChangeYear} />
        )}
        {monthList.length && (
          <Picker list={monthList} selectedValue={currentMonth} setValue={handleChangeMonth} />
        )}
      </div>
      <div className="bu-flex bu-justify-end bu-gap-[12px]">
        <Button size="small" variant="ghost" onClick={cancel}>
          {cancelText}
        </Button>
        <Button size="small" variant="primary" onClick={confirm}>
          {confirmText}
        </Button>
      </div>
    </>
  );
};

export default MonthPicker;
