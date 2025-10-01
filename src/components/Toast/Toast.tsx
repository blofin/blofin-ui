import * as React from "react";
import { createPortal } from "react-dom";
import { bgStyles, iconstyles, textStyles, toastVariants } from "./styles";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import useTheme from "../../provider/useTheme";
import { BUIComponentType, BUITheme } from "../../types/component";
import { NoticeContext } from "../../provider/NoticeProvider";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface ToastMsgProps {
  children: React.ReactNode;
  type: BUIComponentType;
  remove: () => void;
  customTheme?: BUITheme;
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

const ToastMsg: React.FC<ToastMsgProps> = ({ children, type, remove, customTheme }) => {
  const { theme } = useTheme();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      remove();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`bu-mx-auto bu-mb-[12px] bu-w-fit bu-rounded-[8px] bu-shadow-toast ${bgStyles({
        theme
      })}`}>
      <div className={toastVariants({ theme: customTheme ? customTheme : theme })}>
        <Icon type={type} />
        <span className={textStyles({ theme: customTheme ? customTheme : theme })}>{children}</span>
      </div>
    </div>
  );
};

interface ToastItem {
  id: number;
  node: React.ReactNode;
  type: BUIComponentType;
  customTheme?: BUITheme;
}

const easingExit = [0.05, 0.03, 0.99, 0.28] as const;

const variants: Variants = {
  initial: { opacity: 0, y: -10 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "linear"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
      ease: easingExit
    }
  }
};

const ToastList: React.FC<{
  toasts: ToastItem[];
  onRemove: (id: number) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <div className="bu-fixed bu-left-[50%] bu-top-[40px] bu-z-[99999] bu-translate-x-[-50%] bu-text-center">
      <AnimatePresence initial={false}>
        {toasts.map(({ node, id, type, customTheme }) => (
          <motion.div
          key={id}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ willChange: "transform, opacity" }}>
            <ToastMsg type={type} customTheme={customTheme} remove={() => onRemove(id)}>
              {node}
            </ToastMsg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastContainer = () => {
  const { toastList, removeToast } = React.useContext(NoticeContext);

  return <ToastList toasts={toastList} onRemove={removeToast} />;
};

export const Toast = () => {
  return createPortal(<ToastContainer />, document.body);
};
