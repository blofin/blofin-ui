import { FC, useEffect, useRef, useState } from "react";
import { SortableProvider } from "./context";
import SortableItem from "./SortableItem";

interface SortableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Sortable: FC<SortableProps> = ({ children, direction }) => {
  const [isAnimation, setIsAnimation] = useState(false);

  return (
    <SortableProvider
      value={{
        direction: direction,
        isAnimation: isAnimation,
        setIsAnimation: setIsAnimation
      }}>
      <div className={`bu-flex ${direction === "horizontal" ? "bu-flex-row" : "bu-flex-col"}`}>
        {children}
      </div>
    </SortableProvider>
  );
};

export default Sortable;
