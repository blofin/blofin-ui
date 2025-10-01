import * as React from "react";
import { createPortal } from "react-dom";
import useTheme from "../../provider/useTheme";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { BUIComponentType } from "../../types/component";
import { bgStyles, closeIconStyles, iconstyles, textStyles, textbg } from "./style";
import CloseIcon from "../../assets/icons/close.svg";
import { NoticeContext } from "../../provider/NoticeProvider";

import { AnimatePresence, motion, Transition, Variants } from "framer-motion";

interface NotificationMsgProps {
  title: React.ReactNode;
  children: React.ReactNode;
  type: BUIComponentType;
  autoClose?: number | boolean;
  remove: () => void;
}

const Icon: React.FC<{ type: BUIComponentType }> = ({ type }) => {
  const { theme } = useTheme();
  const icons = {
    info: <Info className={iconstyles(type, theme)} />,
    warning: <Warning className={iconstyles(type, theme)} />,
    success: <Success className={iconstyles(type, theme)} />,
    danger: <Danger className={iconstyles(type, theme)} />
  };
  return <>{icons[type]}</>;
};

const NotificationMsg: React.FC<NotificationMsgProps> = ({
  title,
  children,
  autoClose,
  type,
  remove
}) => {
  const { theme } = useTheme();

  React.useEffect(() => {
    if (autoClose === false) return;
    const delay = typeof autoClose === "number" ? autoClose : 3000;
    const timer = setTimeout(() => {
      remove();
    }, delay);
    return () => clearTimeout(timer);
  }, [autoClose, remove]);

  const close = () => remove();

  return (
    <div
      className={`bu-w-full bu-rounded-[8px] ${bgStyles({ theme })}`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="bu-flex bu-rounded-[8px] bu-px-[16px] bu-py-[12px]">
        <Icon type={type} />
        <div className="w-full bu-flex bu-flex-col">
          <div className="bu-mb-[4px] bu-flex bu-justify-between">
            <span
              className={`bu-w-[260px] bu-break-words bu-text-[16px] bu-font-medium bu-leading-[24px] bu-tracking-[-0.2px] ${textbg(
                { theme }
              )}`}
            >
              {title}
            </span>
            <CloseIcon onClick={close} className={closeIconStyles({ theme })} />
          </div>

          <span className={textStyles({ theme })}>{children}</span>
        </div>
      </div>
    </div>
  );
};

const DURATION = 0.3;
const EASING_EXIT = [0.05, 0.03, 0.99, 0.28] as const;

const listTransition:Transition = {
  layout: { duration: DURATION, ease: "linear" },
  opacity: { duration: DURATION, ease: "linear" },
  x: { duration: DURATION, ease: "linear" }
};

const leftVariants: Variants = {
  initial: { opacity: 0, x: -16 },
  enter: { opacity: 1, x: 0, transition: { duration: DURATION, ease: "linear" } },
  exit: { opacity: 0, x: -16, transition: { duration: DURATION, ease: EASING_EXIT } }
};

const rightVariants: Variants = {
  initial: { opacity: 0, x: 16 },
  enter: { opacity: 1, x: 0, transition: { duration: DURATION, ease: "linear" } },
  exit: { opacity: 0, x: 16, transition: { duration: DURATION, ease: EASING_EXIT } }
};

const StackLeft: React.FC<{
  items: {
    title: React.ReactNode;
    node: React.ReactNode;
    id: number;
    type: BUIComponentType;
    autoClose?: number | boolean;
    onClose?: () => void;
  }[];
  positionClass: string;
  remove: (id: number) => void;
}> = ({ items, positionClass, remove }) => {
  const sorted = React.useMemo(() => [...items].sort((a, b) => a.id - b.id), [items]);
  return (
    <div
      className={`${positionClass} bu-z-[99999] bu-w-[360px] bu-flex bu-flex-col bu-gap-[12px]`}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {sorted.map(({ title, node, id, type, autoClose, onClose }, idx) => (
          <motion.div
            key={id}
            layout="position"
            variants={leftVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={listTransition}
            custom={idx}
          >
            <NotificationMsg
              type={type}
              title={title}
              autoClose={autoClose}
              remove={() => {
                onClose?.();
                remove(id);
              }}
            >
              {node}
            </NotificationMsg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const StackRight: React.FC<{
  items: {
    title: React.ReactNode;
    node: React.ReactNode;
    id: number;
    type: BUIComponentType;
    autoClose?: number | boolean;
    onClose?: () => void;
  }[];
  positionClass: string;
  remove: (id: number) => void;
  reverse?: boolean; 
}> = ({ items, positionClass, remove, reverse }) => {
  const sorted = React.useMemo(() => [...items].sort((a, b) => a.id - b.id), [items]);
  return (
    <div
      className={`${positionClass} bu-z-[99999] bu-w-[360px] bu-flex ${
        reverse ? "bu-flex-col-reverse" : "bu-flex-col"
      } bu-gap-[12px]`}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {sorted.map(({ title, node, id, type, autoClose, onClose }, idx) => (
          <motion.div
            key={id}
            layout="position"
            variants={rightVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={listTransition}
            custom={idx}
          >
            <NotificationMsg
              type={type}
              title={title}
              autoClose={autoClose}
              remove={() => {
                onClose?.();
                remove(id);
              }}
            >
              {node}
            </NotificationMsg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const NotificationContainer = () => {
  const {
    notificationListLeftBottom,
    notificationListLeftTop,
    notificationListRightBottom,
    notificationListRightTop,
    remove
  } = React.useContext(NoticeContext);

  return (
    <>
      <StackLeft
        items={notificationListLeftBottom}
        positionClass="bu-fixed bu-bottom-[32px] bu-left-[32px]"
        remove={remove}
      />

      <StackLeft
        items={notificationListLeftTop}
        positionClass="bu-fixed bu-top-[32px] bu-left-[32px]"
        remove={remove}
      />

      <StackRight
        items={notificationListRightBottom}
        positionClass="bu-fixed bu-bottom-[32px] bu-right-[8px]"
        remove={remove}
        reverse
      />

      <StackRight
        items={notificationListRightTop}
        positionClass="bu-fixed bu-top-[32px] bu-right-[8px]"
        remove={remove}
      />
    </>
  );
};

export const Notification = () => {
  return createPortal(<NotificationContainer />, document.body);
};
