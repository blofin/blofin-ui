import { useRef } from "react";
import { TextSelect, TextSelectRefProps } from "../TextSelect/TextSelect";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";

const noop = () => {};
const _SizeOptions = [10, 20, 30, 40, 50];

export interface PageOptionProps {
  disabled?: boolean;
  sizeCanChange?: boolean;
  sizeOptions?: number[];
  onPageSizeChange?: (value: number) => void;
  pageSize?: number;
  theme?: BUITheme;
  countPerPage?: string;
}

function PageOption(props: PageOptionProps) {
  const selectRef = useRef<TextSelectRefProps>(null);
  const { theme: defaultTheme } = useTheme();
  const {
    sizeCanChange = false,
    onPageSizeChange = noop,
    sizeOptions = _SizeOptions,
    pageSize = 10,
    disabled,
    theme = defaultTheme,
    countPerPage
  } = props;

  return (
    <div className="bu-h-[34px] bu-w-[97px]">
      {sizeCanChange && (
        <TextSelect
          ref={selectRef}
          options={sizeOptions.map((item) => ({
            value: String(item),
            label: String(item)
          }))}
          defaultValue={
            sizeOptions.indexOf(pageSize) !== -1 ? String(pageSize) : String(sizeOptions[0])
          }
          onChange={(value) => {
            onPageSizeChange(Number(value) || 10);
          }}
          className="bu-max-h-[150px] bu-overflow-y-scroll"
          base="div"
          inputDisabled={disabled}
          selectItemClassName="!bu-px-[8px] !bu-leading-[18px]"
          valueClassName="!bu-h-[34px]"
          inputClassName="!bu-h-[34px]"
          customSelectItems={(item) => {
            const size =
              sizeOptions.indexOf(pageSize) !== -1 ? String(pageSize) : String(sizeOptions[0]);
            return (
              <div
                className={
                  size === item.value
                    ? theme === "light"
                      ? "!bu-text-light-primary"
                      : "!bu-text-dark-primary"
                    : ""
                }>
                {item.label} / {countPerPage}
              </div>
            );
          }}
          customLabel={(item) => {
            return (
              <div
                className={`${theme === "light" ? "!bu-text-light-label" : "!bu-text-dark-label"}`}>
                {item.label} / {countPerPage}
              </div>
            );
          }}
          auto={false}></TextSelect>
      )}
    </div>
  );
}

export default PageOption;
