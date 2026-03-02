import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BUITheme, useTheme } from "../..";
import ArrowIcon from "../../assets/icons/arrow-dark.svg";
import toolTipStyles from "./index.module.scss";
import { arrowPositionStyles, bgStyles, popperStyles } from "./styles";
import useClient from "../../hooks/useClient";
import { usePopper } from "react-popper";
import useDelayEvent from "../../hooks/useDelayEvent";
import { TooltipPlacement } from "./type";
import { OFFSET, PLACEMENT, PLACEMENT_REVERSE } from "./enum";

const resolvePlacementByDir = (placement: TooltipPlacement, isRTL: boolean): TooltipPlacement => {
  if (!isRTL) return placement;
  // 组件 API 使用 topLeft/topRight/bottomLeft/bottomRight 表达“物理方位”
  // 但 Popper 的 start/end 会受 RTL 影响，因此在 RTL 下需要互换 Left/Right
  switch (placement) {
    case "topLeft":
      return "topRight";
    case "topRight":
      return "topLeft";
    case "bottomLeft":
      return "bottomRight";
    case "bottomRight":
      return "bottomLeft";
    default:
      return placement;
  }
};

interface TooltipProps {
  placement: TooltipPlacement;
  flipPlacement?: TooltipPlacement[];
  title?: string;
  content?: ReactNode;
  children?: React.ReactNode;
  isShow?: boolean;
  className?: string;
  containerClassName?: string;
  hideArrow?: boolean;
  scrollContainer?: HTMLDivElement | null;
  theme?: BUITheme;
  /**
   * @property {number} [y] 控制tooltip到元素的距离
   * */
  y?: number;
  x?: number;
  delayPositive?: boolean;
}

type ContentProps = Omit<TooltipProps, "children"> & {
  parent: HTMLDivElement | null;
  enter: boolean;
  theme?: BUITheme;
  direction?: "ltr" | "rtl";
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
  isShow = false,
  flipPlacement,
  theme,
  direction = "ltr",
  x,
  y = 0
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const isRTL = direction === "rtl";
  const resolvedPlacement = useMemo(
    () => resolvePlacementByDir(placement, isRTL),
    [placement, isRTL]
  );
  const resolvedFlipPlacement = useMemo(
    () => (flipPlacement ? flipPlacement.map((p) => resolvePlacementByDir(p, isRTL)) : undefined),
    [flipPlacement, isRTL]
  );

  const { styles, attributes, update, state } = usePopper(parent, targetRef.current, {
    placement: PLACEMENT[resolvedPlacement],
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [x ? x : OFFSET[resolvedPlacement], 4 + y]
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: resolvedFlipPlacement
            ? resolvedFlipPlacement.map((item) => PLACEMENT[item])
            : []
        }
      }
    ]
  });

  useEffect(() => {
    if (update) {
      update();
    }
  }, [enter, isShow]);

  return ReactDOM.createPortal(
    <div
      ref={targetRef}
      className={`${toolTipStyles["tooltip-wrapper"]} ${popperStyles({
        show: enter || isShow
      })} ${bgStyles({
        theme
      })} ${className || ""}`}
      style={styles.popper}
      {...attributes.popper}>
      {title && <span className={toolTipStyles.title}>{title}</span>}
      {title && content && <div className={toolTipStyles.line}></div>}
      {content ? (
        typeof content === "string" ? (
          <span className={toolTipStyles.content}>{content}</span>
        ) : (
          content
        )
      ) : null}
      {!hideArrow && state && (
        <div
          className={arrowPositionStyles({
            placement: resolvePlacementByDir(
              PLACEMENT_REVERSE[state.placement as keyof typeof PLACEMENT] as TooltipPlacement,
              isRTL
            )
          })}>
          <ArrowIcon
            className={
              theme === "dark"
                ? "bu-text-dark-hover-fill-tertiary"
                : "bu-text-light-hover-fill-tertiary"
            }></ArrowIcon>
        </div>
      )}
    </div>,
    document.body
  );
};

const Tooltip: FC<TooltipProps> = ({
  children,
  isShow,
  theme: toolTipTheme,
  containerClassName,
  delayPositive=true,
  ...props
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [enter, setEnter] = useDelayEvent<boolean>(false, 300, true, delayPositive);

  const [show, setShow] = useState(false);

  const { isClient } = useClient();

  const mouseEnter = () => {
    setEnter(true);
  };

  const mouseLeave = () => {
    setEnter(false);
  };

  const { theme: mode, direction } = useTheme();

  const theme = useMemo(() => {
    return toolTipTheme ? toolTipTheme : mode;
  }, [toolTipTheme, mode]);

  useEffect(() => {
    if (isShow !== undefined) {
      setTimeout(() => {
        setShow(isShow);
      }, 0);
    }
  }, [isShow]);

  return (
    <div
      ref={targetRef}
      className={`bu-inline-block ${containerClassName}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}>
      {children}
      {isClient && (
        <Content
          {...props}
          enter={enter}
          theme={theme}
          isShow={show}
          parent={targetRef.current}
          direction={direction}
        />
      )}
    </div>
  );
};

export { Tooltip };
