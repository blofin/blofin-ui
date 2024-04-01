import { FC, ReactNode } from "react";

interface SortItemProps {
  children: ReactNode;
}

const style = {
  // border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
  transition: "opacity 0.2s, transform 0.2s linear",
  width: "100%"
};

const SortItem: FC<SortItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SortItem;
