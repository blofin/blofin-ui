import { FC, ReactNode } from "react";

interface SortItemProps {
  children: ReactNode;
}

const SortItem: FC<SortItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SortItem;
