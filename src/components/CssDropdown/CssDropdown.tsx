import * as React from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { menuStyles } from "./styles";

interface CssDropdownProps {
  /**
   * CssDropdown label
   */
  label: React.ReactNode;
  /**
   * CssDropdown content
   */
  content: React.ReactNode;
  /**
   * CssDropdown theme
   */
  theme?: BUITheme;
}

export const CssDropdown = ({ label, content, theme: mode }: CssDropdownProps) => {
  const { theme } = useTheme();
  return (
    <div className="bu-group bu-relative bu-text-left" tabIndex={-1}>
      <span className="bu-cursor-pointer">{label}</span>
      <div className="bu-invisible bu-origin-top-left -bu-translate-y-2 bu-scale-95 bu-transform bu-opacity-0 bu-transition-all bu-duration-300 group-focus-within:bu-visible group-focus-within:bu-translate-y-0 group-focus-within:bu-scale-100 group-focus-within:bu-opacity-100">
        <div
          className={cn(
            menuStyles({
              theme: mode || theme
            })
          )}
          role="menu">
          <div className="bu-px-4 bu-py-3">{content}</div>
        </div>
      </div>
    </div>
  );
};
