"use client";

import { FC, createContext, useEffect, useRef, useState } from "react";
import { BUIComponentType } from "../types/component";
import { Notification } from "../components/Notification/Notification";
import { Toast } from "../components/Toast/Toast";
import { flushSync } from "react-dom";

export interface NotificationType {
  title: React.ReactNode;
  node: React.ReactNode;
  id: number;
  type: BUIComponentType;
  autoClose?: number | boolean;
  onClose?: () => void;
}

export interface ToastType {
  node: React.ReactNode;
  id: number;
  type: BUIComponentType;
}

export type configType = {
  title: React.ReactNode;
  msg: React.ReactNode;
  autoClose?: number | boolean;
  position?: string;
  onClose?: () => void;
};

export type Methods = (config: configType, type: BUIComponentType, position?: string) => void;

export type ToastMthods = (msg: string, type: BUIComponentType) => void;

interface NoticeContextProps {
  notificationListLeftBottom: NotificationType[];
  setNotificationListLeftBottom: (item: NotificationType[]) => void;
  notificationListLeftTop: NotificationType[];
  setNotificationListLeftTop: (item: NotificationType[]) => void;
  notificationListRightBottom: NotificationType[];
  setNotificationListRightBottom: (item: NotificationType[]) => void;
  notificationListRightTop: NotificationType[];
  setNotificationListRightTop: (item: NotificationType[]) => void;
  open: Methods;
  remove: (id: number) => void;
  toastList: ToastType[];
  setToastList: (item: ToastType[]) => void;
  openToast: ToastMthods;
  removeToast: (id: number) => void;
}

const NoticeContext = createContext<NoticeContextProps>({
  notificationListLeftBottom: [],
  setNotificationListLeftBottom: () => {},
  notificationListLeftTop: [],
  setNotificationListLeftTop: () => {},
  notificationListRightBottom: [],
  setNotificationListRightBottom: () => {},
  notificationListRightTop: [],
  setNotificationListRightTop: () => {},
  open: () => {
    console.warn("not methods");
  },
  remove: () => {},
  toastList: [],
  setToastList: () => {},
  openToast: () => {
    console.warn("not methods");
  },
  removeToast: () => {}
});

const MAX_NOTICE = 2;

const NoticeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notificationListLeftBottom, setNotificationListLeftBottom] = useState<NotificationType[]>(
    []
  );

  const [notificationListLeftTop, setNotificationListLeftTop] = useState<NotificationType[]>([]);

  const [notificationListRightBottom, setNotificationListRightBottom] = useState<
    NotificationType[]
  >([]);

  const [notificationListRightTop, setNotificationListRightTop] = useState<NotificationType[]>([]);

  const [toastList, setToastList] = useState<ToastType[]>([]);

  const [visible, setVisible] = useState(false);

  const key = useRef(0);

  const toastKey = useRef(0);

  const open = (config: configType, type: BUIComponentType, position?: string) => {
    if (config.position === "leftTop") {
      flushSync(() => {
        setNotificationListLeftTop((list) => {
          if (list.length >= MAX_NOTICE) {
            list.shift();
          }
          return [
            ...list,
            {
              node: config.msg,
              id: key.current,
              type: type,
              position: "leftTop",
              ...config
            }
          ];
        });
      });
    } else if (config.position === "rightBottom") {
      flushSync(() => {
        setNotificationListRightBottom((list) => {
          if (list.length >= MAX_NOTICE) {
            list.shift();
          }
          return [
            ...list,
            {
              node: config.msg,
              id: key.current,
              type: type,
              position: "rightBottom",
              ...config
            }
          ];
        });
      });
    } else if (config.position === "rightTop") {
      flushSync(() => {
        setNotificationListRightTop((list) => {
          if (list.length >= MAX_NOTICE) {
            list.shift();
          }
          return [
            ...list,
            {
              node: config.msg,
              id: key.current,
              type: type,
              position: "rightTop",
              ...config
            }
          ];
        });
      });
    } else {
      flushSync(() => {
        setNotificationListLeftBottom((list) => {
          if (list.length >= MAX_NOTICE) {
            list.shift();
          }
          return [
            ...list,
            {
              node: config.msg,
              id: key.current,
              type: type,
              position: "leftBottom",
              ...config
            }
          ];
        });
      });
    }

    key.current += 1;
  };

  const remove = (id: number) => {
    setNotificationListLeftBottom((val) => val.filter((item) => item.id !== id));
    setNotificationListLeftTop((val) => val.filter((item) => item.id !== id));
    setNotificationListRightBottom((val) => val.filter((item) => item.id !== id));
    setNotificationListRightTop((val) => val.filter((item) => item.id !== id));
  };

  const openToast = (config: string, type: BUIComponentType) => {
    setToastList((list) => [
      ...list,
      {
        node: config,
        id: toastKey.current,
        type: type
      }
    ]);
    toastKey.current += 1;
  };

  const removeToast = (id: number) => {
    setToastList((val) => val.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <NoticeContext.Provider
      value={{
        notificationListLeftBottom,
        setNotificationListLeftBottom,
        notificationListLeftTop,
        setNotificationListLeftTop,
        notificationListRightBottom,
        setNotificationListRightBottom,
        notificationListRightTop,
        setNotificationListRightTop,
        open,
        remove,
        toastList,
        setToastList,
        openToast,
        removeToast
      }}>
      {children}
      {visible && <Notification />}
      {visible && <Toast />}
    </NoticeContext.Provider>
  );
};

export { NoticeContext, NoticeProvider };
