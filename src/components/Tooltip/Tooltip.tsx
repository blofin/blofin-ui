import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../..";
import ArrowDarkIcon from "../../assets/icons/arrow-dark.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import useAlign from "../../hooks/useAlign";
import styles from "./index.module.scss";
import { arrowPositionStyles, bgStyles, popperStyles } from "./styles";
import useClient from "../../hooks/useClient";

interface TooltipProps {
  placement: "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  title?: string;
  content?: ReactNode;
  children?: React.ReactNode;
  isShow?: boolean;
  className?: string;
  hideArrow?: boolean;
  scrollContainer?: HTMLDivElement | null;
}

type ContentProps = Omit<TooltipProps, "children"> & {
  parent: HTMLDivElement | null;
  enter: boolean;
};

const Content: FC<ContentProps> = ({
  title,
  content,
  placement,
  parent,
  className,
  enter,
  hideArrow = false,
  scrollContainer,
  isShow = false
}) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offset, resize } = useAlign(parent);

  const { offsetX, offsetY, clientWidth, clientHeight } = offset;

  const [domOffset, setDomOffset] = useState({
    width: 0,
    height: 0
  });

  const positions = useMemo(() => {
    if (!targetRef.current) {
      return;
    }

    const { height, width } = domOffset;

    if (!enter && !isShow) {
      return {
        left: 0,
        top: 0,
        transform: `translate3d(${0}px, ${0}px, 0px)`
      };
    }

    if (placement === "topLeft") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX + clientWidth / 2 - 16 - 4}px, ${
            offsetY - height - 4
          }px, 0px)`
        };
      } else {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - 8}px, ${offsetY - height - 4}px, 0px)`
        };
      }
    } else if (placement === "top") {
      return {
        left: 0,
        top: 0,
        transform: `translate3d(${offsetX - width / 2 + clientWidth / 2}px, ${
          offsetY - height - 4
        }px, 0px)`
      };
    } else if (placement === "topRight") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - width + clientWidth + 4}px, ${
            offsetY - height - 4
          }px, 0px)`
        };
      } else {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - width + clientWidth + 8}px, ${
            offsetY - height - 4
          }px, 0px)`
        };
      }
    } else if (placement === "bottomLeft") {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX + clientWidth / 2 - 16 - 4}px, ${
            offsetY + clientHeight + 4
          }px, 0px)`
        };
      } else {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - 8}px, ${offsetY + clientHeight + 4}px, 0px)`
        };
      }
    } else if (placement === "bottom") {
      return {
        left: 0,
        top: 0,
        transform: `translate3d(${offsetX - width / 2 + clientWidth / 2}px, ${
          offsetY + clientHeight + 4
        }px, 0px)`
      };
    } else {
      if (clientWidth - clientHeight > -5 && clientWidth - clientHeight < 5) {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - width + clientWidth + 4}px, ${
            offsetY + clientHeight + 4
          }px, 0px)`
        };
      } else {
        return {
          left: 0,
          top: 0,
          transform: `translate3d(${offsetX - width + clientWidth + 8}px, ${
            offsetY + clientHeight + 4
          }px, 0px)`
        };
      }
    }
  }, [offsetX, clientWidth, domOffset]);

  useEffect(() => {
    let observer: ResizeObserver;
    if (targetRef.current) {
      resize();
      observer = new ResizeObserver((entries) => {
        if (targetRef.current) {
          const { height, width } = targetRef.current.getBoundingClientRect();
          setDomOffset({
            width,
            height
          });
        }
      });
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [enter]);

  const scroll = () => {
    resize();
    if (targetRef.current) {
      const { height, width } = targetRef.current.getBoundingClientRect();
      setDomOffset({
        width,
        height
      });
    }
  };

  useEffect(() => {
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", scroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", scroll);
      }
    };
  }, [scrollContainer]);

  return ReactDOM.createPortal(
    <div
      ref={targetRef}
      className={`${styles["tooltip-wrapper"]} ${popperStyles({
        show: enter || isShow
      })} ${bgStyles({
        theme
      })} ${className || ""}`}
      style={positions}>
      {title && <span className={styles.title}>{title}</span>}
      {title && content && <div className={styles.line}></div>}
      {content ? (
        typeof content === "string" ? (
          <span className={styles.content}>{content}</span>
        ) : (
          content
        )
      ) : null}
      {placement.includes("top") && (
        <div className="bu-absolute bu-bottom-[-7px] bu-h-[16px] bu-w-full"></div>
      )}
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

  const { isClient } = useClient();

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
      {isClient && <Content {...props} enter={enter} isShow={isShow} parent={targetRef.current} />}
    </div>
  );
};

export { Tooltip };
