import * as React from "react";

interface SortItemProps {
  children: React.ReactNode;
}

const SortItem: React.FC<SortItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { SortItem };
