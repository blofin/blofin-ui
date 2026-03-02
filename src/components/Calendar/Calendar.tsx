"use client";

import { format } from "date-fns";
import * as React from "react";
import { Typography } from "./../Typography/Typography";
import ArrowDownLine from "../../assets/icons/arrow-down-l-line.svg";
import ArrowLeftLine from "../../assets/icons/arrow-left-l-line.svg";
import ArrowRightLine from "../../assets/icons/arrow-right-l-line.svg";
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";
import {
  ArrowLine,
  CaptionStart,
  Cell,
  Day,
  DayDisabled,
  DayOutside,
  DayRangeEnd,
  DayRangeMiddle,
  DayRangeStart,
  DaySelected,
  DayToday,
  HeadCell,
  NavButton
} from "./styles";
import useTheme from "../../provider/useTheme";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  startMonthShow: boolean;
  endMonthShow: boolean;
  setStartMonthShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEndMonthShow: React.Dispatch<React.SetStateAction<boolean>>;
  setStartMonth: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setEndMonth: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const Calendar: React.FC<CalendarProps> = ({
  className = "",
  classNames,
  showOutsideDays = true,
  month,
  startMonthShow,
  endMonthShow,
  setStartMonthShow,
  setEndMonthShow,
  setStartMonth,
  setEndMonth,
  locale,
  ...props
}) => {
  const { theme, direction } = useTheme();
  const isRTL = direction === "rtl";

  function CustomCaption(props: CaptionProps) {
    const { goToMonth, nextMonth, previousMonth } = useNavigation();

    const handleMonthClick = () => {
      if (props.displayIndex === 0) {
        setStartMonthShow(!startMonthShow);
        setStartMonth(props.displayMonth);
      } else {
        setEndMonthShow(!endMonthShow);
        setEndMonth(props.displayMonth);
      }
    };

    React.useEffect(() => {
      if (month) {
        goToMonth(month);
      }
    }, [month]);

    return (
      <div className="bu-flex bu-h-10 bu-items-center bu-justify-between bu-py-2">
        <div
          className="bu-flex bu-h-3 bu-cursor-pointer bu-items-center bu-gap-1"
          onClick={handleMonthClick}>
          <Typography variant="body2" weight="medium">
            {format(props.displayMonth, "MMM yyy", { locale: locale })}
          </Typography>
          <ArrowDownLine
            className={`bu-h-5 bu-w-5 bu-cursor-pointer ${ArrowLine({ theme })}`}></ArrowDownLine>
        </div>

        {props.displayIndex === 1 && (
          <div className="bu-flex bu-gap-6">
            {isRTL ? (
              <ArrowRightLine
                className={`bu-h-6 bu-w-6 bu-cursor-pointer ${ArrowLine({ theme })}`}
                onClick={() => previousMonth && goToMonth(previousMonth)}></ArrowRightLine>
            ) : (
              <ArrowLeftLine
                className={`bu-h-6 bu-w-6 bu-cursor-pointer ${ArrowLine({ theme })}`}
                onClick={() => previousMonth && goToMonth(previousMonth)}></ArrowLeftLine>
            )}
            {isRTL ? (
              <ArrowLeftLine
                className={`bu-h-6 bu-w-6 bu-cursor-pointer ${ArrowLine({ theme })}`}
                onClick={() => nextMonth && goToMonth(nextMonth)}></ArrowLeftLine>
            ) : (
              <ArrowRightLine
                className={`bu-h-6 bu-w-6 bu-cursor-pointer ${ArrowLine({ theme })}`}
                onClick={() => nextMonth && goToMonth(nextMonth)}></ArrowRightLine>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`pb-4 ${className}`}
      classNames={{
        months: "bu-flex bu-flex-col sm:bu-flex-row bu-space-y-4 sm:bu-space-x-4 sm:bu-space-y-0",
        month: "bu-space-y-4",
        caption: "bu-flex bu-justify-center bu-pt-1 bu-relative bu-items-center",
        caption_label: "bu-text-base bu-font-medium",
        caption_start: `ltr:bu-border-r rtl:bu-border-l ltr:bu-pr-[16px] rtl:bu-pl-[16px] bu-pt-[16px] ${CaptionStart(
          {
            theme
          }
        )} ${startMonthShow ? "bu-hidden" : ""}`,
        caption_end: `bu-pt-[16px] ${endMonthShow ? "bu-hidden" : ""}`,
        nav: "bu-space-x-1 bu-flex bu-items-center",
        nav_button: `${NavButton({
          theme
        })}  bu-inline-flex bu-items-center bu-justify-center bu-whitespace-nowrap bu-rounded-md bu-text-base bu-font-medium bu-ring-offset-background bu-transition-colors disabled:bu-pointer-events-none bu-h-7 bu-w-7 bu-bg-transparent bu-p-0 hover:bu-opacity-100 bu-border bu-border-input`,
        nav_button_previous: "bu-absolute bu-left-1",
        nav_button_next: "bu-absolute bu-right-1",
        table: "bu-w-full bu-border-collapse !bu-mt-[8px]",
        head_row: "bu-flex",
        head_cell: `bu-w-8 bu-font-normal bu-text-[12px] bu-pb-[8px] bu-border-b ${HeadCell({
          theme
        })}`,
        row: "bu-flex bu-w-full bu-mt-2",
        cell: `${Cell({
          theme
        })}  bu-h-8 bu-w-8 bu-text-center bu-text-base bu-p-0 bu-relative [&:has([disabled])]:!bu-cursor-not-allowed [&:has([aria-selected].day-range-end)]:bu-rounded-r-[16px] first:[&:has([aria-selected])]:bu-rounded-l-[0px] last:[&:has([aria-selected])]:bu-rounded-r-[0px] focus-within:bu-relative focus-within:bu-z-20 [&:has([aria-selected].day-range-start)]:bu-rounded-l-[16px]`,
        day: `${Day({
          theme
        })} bu-inline-flex bu-items-center bu-justify-center bu-whitespace-nowrap bu-rounded-[16px] bu-text-base bu-font-medium bu-ring-offset-background bu-transition-colors focus:bu-outline-none disabled:bu-pointer-events-none bu-h-8 bu-w-8 bu-p-0 bu-font-normal aria-selected:bu-opacity-100`,
        day_range_start: `day-range-start ${DayRangeStart({ theme })}`,
        day_range_end: `day-range-end ${DayRangeEnd({ theme })}`,
        day_selected: `${DaySelected({ theme })}`,
        day_today: `${DayToday({ theme })} bu-rounded-[16px]`,
        day_outside: `day-outside ${DayOutside({ theme })} aria-selected:bu-rounded-[16px]`,
        day_disabled: `${DayDisabled({ theme })}`,
        day_range_middle: `${DayRangeMiddle({ theme })}`,
        day_hidden: "invisible",
        ...classNames
      }}
      components={{
        Caption: CustomCaption
      }}
      locale={locale}
      {...props}
    />
  );
};

export default Calendar;
