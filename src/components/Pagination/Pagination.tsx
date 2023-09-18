import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useTheme from "../../provider/useTheme";
import Arrow from "../../assets/icons/text-arrow.svg";
import { BUITheme } from "../../types/component";
import { paginationVariants, arrowVariants } from "./styles";

export interface PaginationProps {
  /**
   * Current page number
   */
  currentPage: number;
  /**
   * Total page number
   */
  totalPages: number;
  /**
   * Current data items is smaller than pageSize to hide pagination
   */
  hideOnSinglePage?: boolean;
  /**
   * Called when the page number is changed
   */
  onChange: (pageNum: number) => void;
  /**
   * Called when the page number is changed
   */
  className?: string;
  theme?: BUITheme;
}

export function Pagination({
  totalPages,
  currentPage,
  onChange,
  className,
  theme
}: PaginationProps) {
  const [pageList, setPageList] = useState(() => calcPageList(currentPage, totalPages));
  const isFirstRendering = useRef(true);

  const { theme: defaultTheme } = useTheme();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (target: number | "prev" | "next") => () => {
    if (target === "prev") {
      return currentPage > 1 && onChange(currentPage - 1);
    }
    if (target === "next") {
      return currentPage < totalPages && onChange(currentPage + 1);
    }
    target !== currentPage && onChange(target);
  };

  useEffect(() => {
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
    } else {
      setPageList(calcPageList(currentPage, totalPages));
    }
  }, [totalPages, currentPage]);

  if (!currentPage || !totalPages || totalPages < currentPage) {
    return null;
  }

  return (
    <ul
      className={clsx(
        "bu-flex bu-items-center bu-justify-center bu-gap-[16px] bu-text-dark-label md:bu-gap-[24px]",
        className
      )}>
      <li
        className={arrowVariants({ theme: theme || defaultTheme })}
        data-disabled={isFirstPage}
        onClick={handlePageChange("prev")}>
        <Arrow className="bu-h-[24px] bu-w-[24px] bu-rotate-90" />
      </li>
      {pageList.map((pageNum, i) => {
        return (
          <li
            key={`${pageNum}-${i}`}
            data-current={currentPage === pageNum}
            className={paginationVariants({ theme: theme || defaultTheme })}>
            {typeof pageNum === "string" ? (
              <span>{pageNum}</span>
            ) : (
              <button onClick={handlePageChange(pageNum)}>{pageNum}</button>
            )}
          </li>
        );
      })}

      <li
        className={arrowVariants({ theme: theme || defaultTheme })}
        data-disabled={isLastPage}
        onClick={handlePageChange("next")}>
        <Arrow className="bu-h-[24px] bu-w-[24px] -bu-rotate-90" />
      </li>
    </ul>
  );
}

function calcPageList(current: number, total: number) {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
  if (current === 1) return [1, 2, 3, "...", total];
  if (current === total) return [1, "...", total - 2, total - 1, total];

  const arr = Array.from({ length: 3 }, (_, i) => current + i - 1).filter(
    (i) => i > 1 && i < total
  );
  const sp = current - 2 > 1 ? [1, "..."] : [1];
  const ep = current + 2 >= total ? [total] : ["...", total];

  return [...sp, ...arr, ...ep];
}
