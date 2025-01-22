import { useEffect, useRef, useState, CSSProperties, useMemo } from "react";
import clsx from "clsx";
import useTheme from "../../provider/useTheme";
import Arrow from "../../assets/icons/text-arrow.svg";
import { BUITheme } from "../../types/component";
import { paginationVariants, arrowVariants } from "./styles";
import PageOption from "./PageOptions";

export interface PaginationProps {
  /**
   * Current page number
   */
  currentPage: number;
  /**
   * Total page number
   */
  totalPages?: number;
  /**
   * Current data items is smaller than pageSize to hide pagination
   */
  hideOnSinglePage?: boolean;
  /**
   * Called when the page number is changed
   */
  onChange?: (pageNum: number) => void;
  /**
   * Called when the page number is changed
   */
  className?: string;
  theme?: BUITheme;
  activeStyle?: CSSProperties;
  total?: number;
  sizeOptions?: number[];
  sizeCanChange?: boolean;
  onPageChange?: (currentPage: number, pageSize: number) => void;
  pageSizeChangeResetCurrent?: boolean;
  countPerPage?: string;
  pageSize?: number;
}

const _defaultPageSize = 10;

function getAllPages(pageSize = _defaultPageSize, total: number) {
  return Math.ceil(total / pageSize);
}

function getAdjustPageSize(sizeOptions?: number[]) {
  if (sizeOptions && sizeOptions.length) {
    return sizeOptions[0];
  }
  return _defaultPageSize;
}

export function Pagination({
  totalPages,
  currentPage,
  onChange,
  className,
  theme,
  activeStyle,
  total,
  sizeOptions,
  sizeCanChange,
  onPageChange,
  pageSizeChangeResetCurrent = true,
  countPerPage = "Page",
  pageSize: propPageSize
}: PaginationProps) {
  const [pageSize, setPageSize] = useState(
    propPageSize ? propPageSize : getAdjustPageSize(sizeOptions)
  );

  const [pageList, setPageList] = useState(() =>
    calcPageList(
      currentPage,
      sizeCanChange ? getAllPages(pageSize, total as number) : (totalPages as number)
    )
  );

  const isFirstRendering = useRef(true);

  const { theme: defaultTheme } = useTheme();

  const isFirstPage = currentPage === 1;

  const isLastPage = useMemo(() => {
    const maxPage = sizeCanChange ? getAllPages(pageSize, total as number) : (totalPages as number);
    return currentPage === maxPage;
  }, [currentPage, totalPages, sizeCanChange, pageSize, total]);

  const handlePageChange = (target: number | "prev" | "next") => () => {
    const changePage = (newPage: number) => {
      if (sizeCanChange) {
        onPageChange && onPageChange(newPage, pageSize);
      } else {
        onChange && onChange(newPage);
      }
    };

    if (target === "prev") {
      return currentPage > 1 && changePage(currentPage - 1);
    }

    if (target === "next") {
      const maxPage = sizeCanChange
        ? getAllPages(pageSize, total as number)
        : (totalPages as number);
      return currentPage < maxPage && changePage(currentPage + 1);
    }

    target !== currentPage && changePage(target as number);
  };

  const handlePageSizeChange = (pageSize: number) => {
    const allPages = getAllPages(pageSize, total as number);
    setPageSize(pageSize);
    onPageChange &&
      onPageChange(
        pageSizeChangeResetCurrent ? 1 : currentPage > allPages ? allPages : currentPage,
        pageSize
      );
  };

  useEffect(() => {
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
    } else {
      setPageList(
        calcPageList(
          currentPage,
          sizeCanChange ? getAllPages(pageSize, total as number) : (totalPages as number)
        )
      );
    }
  }, [totalPages, currentPage, sizeCanChange, pageSize, total]);

  if (!sizeCanChange && (!currentPage || !totalPages || totalPages < currentPage)) {
    return null;
  }

  if (sizeCanChange && !onPageChange) {
    console.error(
      "Warning: you have provide current prop for pagination but without onPageSizeChange handler ," +
        " this will cause no-change when you change page. "
    );
  }

  return (
    <div className={`bu-flex bu-items-center bu-justify-center bu-gap-[16px] ${className}`}>
      <ul
        className={clsx(
          "bu-flex bu-items-center bu-justify-center bu-gap-[16px] bu-text-dark-label md:bu-gap-[24px]"
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
              {...(currentPage === pageNum
                ? { "data-current": true, style: activeStyle }
                : { "data-current": false })}
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
      <PageOption
        theme={theme}
        sizeCanChange={sizeCanChange}
        sizeOptions={sizeOptions}
        onPageSizeChange={handlePageSizeChange}
        pageSize={pageSize}
        countPerPage={countPerPage}
      />
    </div>
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
