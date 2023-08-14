import { FC, useRef, useState } from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import useAlign from "../../hooks/useAlign";
import { arrowPositionStyles, bgStyles } from "./styles";
import { useTheme } from "../..";
import ArrowIcon from "../../assets/icons/arrow.svg";

interface TooltipProps {
  placement: "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

type ContentProps = Omit<TooltipProps, "children"> & {
  parent: HTMLDivElement | null;
};

const Content: FC<ContentProps> = ({ title, content, placement, parent }) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY, clientWidth, clientHeight, offsetLeft, offsetRight } = useAlign(parent);

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
      className={`${styles["tooltip-wrapper"]} ${bgStyles({ theme })}`}
      style={positions()}>
      {title && <span className={styles.title}>{title}</span>}
      {title && content && <div className={styles.line}></div>}
      {content && <span className={styles.content}>{content}</span>}
      <div className={arrowPositionStyles({ placement })}>
        <ArrowIcon />
      </div>
    </div>,
    document.body
  );
};

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
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
      {enter && <Content {...props} parent={targetRef.current} />}
    </div>
  );
};

export { Tooltip };
