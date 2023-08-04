import { FC, createContext, useRef, useState } from "react";
import { BUIComponentType } from "../types/component";
import { Notification } from "../components/Notification/Notification";

export interface NotificationType {
  title: string;
  node: React.ReactNode;
  id: number;
  type: BUIComponentType;
}

export type configType = {
  title: string;
  msg: string;
};

export type Methods = (config: configType, type: BUIComponentType) => void;

interface NoticeContextProps {
  notificationList: NotificationType[];
  setNotificationList: (item: NotificationType[]) => void;
  open: Methods;
  remove:(id:number)=>void
}

const NoticeContext = createContext<NoticeContextProps>({
  notificationList: [],
  setNotificationList: () => {},
  open:()=>{
    console.warn("not methods")
  },
  remove:()=>{}
});

const NoticeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notificationList, setNotificationList] = useState<NotificationType[]>([]);


  const key = useRef(0);

  const open = (config: configType, type: BUIComponentType) => {
    setNotificationList((list) => [
      ...list,
      {
        title: config.title,
        node: config.msg,
        id: key.current,
        type: type
      }
    ]);
    key.current += 1;
  };

  const remove = (id: number) => {
    setNotificationList((val) => val.filter((item) => item.id !== id));
  };

  return (
    <NoticeContext.Provider
      value={{
        notificationList,
        setNotificationList,
        open,
        remove
      }}>
      {children}
      <Notification />
    </NoticeContext.Provider>
  );
};

export { NoticeContext, NoticeProvider };
