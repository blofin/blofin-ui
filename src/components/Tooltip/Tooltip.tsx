import { FC, ReactNode, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../..";
import ArrowDarkIcon from "../../assets/icons/arrow-dark.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import useAlign from "../../hooks/useAlign";
import styles from "./index.module.scss";
import { arrowPositionStyles, bgStyles } from "./styles";

interface TooltipProps {
  placement: "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  title?: string;
  content?: ReactNode;
  children?: React.ReactNode;
  isShow?: boolean;
  className?: string;
  hideArrow?: boolean;
}

type ContentProps = Omit<TooltipProps, "children"> & {
  parent: HTMLDivElement | null;
};

const Content: FC<ContentProps> = ({
  title,
  content,
  placement,
  parent,
  className,
  hideArrow = false
}) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY, clientWidth, clientHeight, offsetLeft, offsetRight } = useAlign(parent).offset;

  const positions = () => {
    if (!targetRef.current) {
      return;
    }
    const { height, width } = targetRef.current.getBoundingClientRect();
    if (placement === "topLeft") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: offsetX + clientWidth / 2 - 16 - 4,
          top: offsetY - height - 4
        };
      } else {
        return {
          left: offsetX - 8,
          top: offsetY - height - 4
        };
      }
    } else if (placement === "top") {
      return {
        left: offsetX - width / 2 + clientWidth / 2,
        top: offsetY - height - 4
      };
    } else if (placement === "topRight") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: offsetX - width + clientWidth + 4,
          top: offsetY - height - 4
        };
      } else {
        return {
          left: offsetX - width + clientWidth + 8,
          top: offsetY - height - 4
        };
      }
    } else if (placement === "bottomLeft") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: offsetX + clientWidth / 2 - 16 - 4,
          top: offsetY + clientHeight + 4
        };
      } else {
        return {
          left: offsetX - 8,
          top: offsetY + clientHeight + 4
        };
      }
    } else if (placement === "bottom") {
      return {
        left: offsetX - width / 2 + clientWidth / 2,
        top: offsetY + clientHeight + 4
      };
    } else {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: offsetX - width + clientWidth + 4,
          top: offsetY + clientHeight + 4
        };
      } else {
        return {
          left: offsetX - width + clientWidth + 8,
          top: offsetY + clientHeight + 4
        };
      }
    }
  };

  return ReactDOM.createPortal(
    <div
      ref={targetRef}
      className={`${styles["tooltip-wrapper"]} ${bgStyles({ theme })} ${className || ""}`}
      style={positions()}>
      {title && <span className={styles.title}>{title}</span>}
      {title && content && <div className={styles.line}></div>}
      {content ? (
        typeof content === "string" ? (
          <span className={styles.content}>{content}</span>
        ) : (
          content
        )
      ) : null}
      {!hideArrow && (
        <div className={arrowPositionStyles({ placement })}>
          {theme === "dark" ? <ArrowDarkIcon /> : <ArrowIcon />}
        </div>
      )}
    </div>,
    document.body
  );
};

const Tooltip: FC<TooltipProps> = ({ children, isShow, ...props }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [enter, setEnter] = useState(false);

  const mouseEnter = () => {
    setEnter(true);
  };

  const mouseLeave = () => {
    setEnter(false);
  };

  return (
    <div
      ref={targetRef}
      className="bu-inline-block"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}>
      {children}
      {(enter || isShow) && <Content {...props} parent={targetRef.current} />}
    </div>
  );
};

export { Tooltip };
