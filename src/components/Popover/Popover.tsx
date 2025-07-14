import { Placement } from "@popperjs/core";
import React, { FC, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import useClient from "../../hooks/useClient";
import useDelayEvent from "../../hooks/useDelayEvent";
import useOutsideClick from "../../hooks/useOutsideClick";
import popoverStyles from "./popover.module.scss";

export interface PopoverProps {
  label: string | React.ReactNode;
  content: React.ReactNode;
  trigger?: "click";
  y?: number;
  x?: number;
  placement?: Placement;
  flipPlacement?: Placement[];
  afterClose?: () => void;
  contentClassName?: string;
  onVisibleChange?: (visible: boolean) => void;
}

export interface PopoverRefProps {
  close: () => void;
}

const Popover = forwardRef<PopoverRefProps, PopoverProps>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      close: hide
    };
  });

  const {
    label,
    content,
    trigger,
    y,
    x,
    placement = "bottom-start",
    flipPlacement,
    afterClose,
    contentClassName,
    onVisibleChange
  } = props;

  const isEnabled = useMemo(() => {
    return trigger === "click" ? false : true;
  }, [trigger]);

  const [showPopover, setShowPopover] = useDelayEvent<boolean>(false, 100, isEnabled);

  const popoverRef = useRef<HTMLDivElement | null>(null);

  const popoverElement = useRef<HTMLDivElement | null>(null);

  useOutsideClick(
    showPopover,
    setShowPopover,
    isEnabled,
    popoverRef.current,
    popoverElement.current
  );

  const { isClient } = useClient();

  const { styles, attributes, update } = usePopper(popoverRef.current, popoverElement.current, {
    placement: placement,
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [x, y]
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: flipPlacement ? flipPlacement : []
        }
      }
    ]
  });

  const hide = () => {
    setShowPopover(false);
  };

  useEffect(() => {
    if (update) {
      update();
    }
  }, [showPopover, update]);

  const togglePopover = () => {
    if (trigger === "click") {
      setShowPopover(!showPopover);
    }
  };

  const handleMouseEnter = () => {
    if (trigger !== "click") {
      setShowPopover(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger !== "click") {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    if (!showPopover) {
      afterClose && afterClose();
    }
    onVisibleChange?.(showPopover);
  }, [showPopover]);

  return (
    <div ref={popoverRef} onClick={togglePopover}>
      <label
        className="bu-cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {label}
      </label>
      {isClient &&
        createPortal(
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={popoverElement}
            style={styles.popper}
            {...attributes.popper}
            className={`${popoverStyles["popover-content"]} ${
              showPopover
                ? popoverStyles["popover-content-visible"]
                : popoverStyles["popover-content-hidden"]
            } ${contentClassName}`}>
            {content}
          </div>,
          document.body
        )}
    </div>
  );
});

export { Popover };
