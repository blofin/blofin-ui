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

interface TooltipProps {
  placement: TooltipPlacement;
  flipPlacement?: TooltipPlacement[];
  title?: string;
  content?: ReactNode;
  children?: React.ReactNode;
  isShow?: boolean;
  className?: string;
  hideArrow?: boolean;
  scrollContainer?: HTMLDivElement | null;
  theme?: BUITheme;
  y?: number;
  x?: number;
  /**
   * @property {number} [distance] 控制tooltip到元素的距离
   * */
  distance?: number;
}

type ContentProps = Omit<TooltipProps, "children"> & {
  parent: HTMLDivElement | null;
  enter: boolean;
  theme?: BUITheme;
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
  x,
  y,
  distance = 0
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { styles, attributes, update, state } = usePopper(parent, targetRef.current, {
    placement: PLACEMENT[placement],
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [x ? x : OFFSET[placement], 4 + distance]
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: flipPlacement ? flipPlacement.map((item) => PLACEMENT[item]) : []
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
            placement: PLACEMENT_REVERSE[
              state.placement as keyof typeof PLACEMENT
            ] as TooltipPlacement
          })}>
          <ArrowIcon
            className={
              theme === "dark" ? "bu-text-dark-fill-tertiary" : "bu-text-light-fill-tertiary"
            }></ArrowIcon>
        </div>
      )}
    </div>,
    document.body
  );
};

const Tooltip: FC<TooltipProps> = ({ children, isShow, theme: toolTipTheme, ...props }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [enter, setEnter] = useDelayEvent<boolean>(false, 100);

  const [show, setShow] = useState(false);

  const { isClient } = useClient();

  const mouseEnter = () => {
    setEnter(true);
  };

  const mouseLeave = () => {
    setEnter(false);
  };

  const { theme: mode } = useTheme();

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
      className="bu-inline-block"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}>
      {children}
      {isClient && (
        <Content {...props} enter={enter} theme={theme} isShow={show} parent={targetRef.current} />
      )}
    </div>
  );
};

export { Tooltip };
