import { FC, useEffect, useRef, useState } from "react";
import { SortableProvider } from "./context";
import SortableItem from "./SortableItem";

interface SortableProps {
  list: any[];
  setList: any;
  // onDrag: (list: any[]) => void;
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Sortable: FC<SortableProps> = ({ children, direction }) => {
  return (
    <SortableProvider
      value={{
        direction: direction
      }}>
      <div className={`bu-flex ${direction === "horizontal" ? "bu-flex-row" : "bu-flex-col"}`}>
        {children}
      </div>
    </SortableProvider>
  );
};

export default Sortable;
