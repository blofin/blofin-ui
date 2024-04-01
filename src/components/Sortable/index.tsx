import { FC, useEffect, useRef, useState } from "react";
import { SortableProvider } from "./context";
import sortable from "sortablejs";
import styles from "./index.module.scss";

interface SortableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
  moveEnd: (prev: number, next: number) => void;
  ghostClass?: string;
}

const Sortable: FC<SortableProps> = ({ children, direction, moveEnd, ghostClass }) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      sortable.create(ref.current, {
        animation: 200,
        ghostClass: ghostClass,
        handle: ".drag-item",
        onStart: () => {},
        onEnd: (event) => {
          console.log(event.oldIndex, event.newIndex);
          moveEnd(event.oldIndex!, event.newIndex!);
        }
      });
    }
  }, []);

  return (
    <SortableProvider
      value={{
        direction: direction,
        isAnimation: isAnimation,
        setIsAnimation: setIsAnimation
      }}>
      <div
        ref={ref}
        className={`drag-item bu-flex bu-h-full bu-w-full ${
          direction === "horizontal" ? "bu-flex-row" : "bu-flex-col"
        }`}>
        {children}
      </div>
    </SortableProvider>
  );
};

export default Sortable;
