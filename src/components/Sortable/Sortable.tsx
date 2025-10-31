import { FC, useEffect, useRef } from "react";
import sortable from "sortablejs";

interface SortableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
  moveEnd: (prev: number, next: number) => void;
  ghostClass?: string;
  dragClass?: string;
  customHandle?: string;
}

const Sortable: FC<SortableProps> = ({
  children,
  direction,
  moveEnd,
  ghostClass,
  dragClass,
  customHandle
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const sortableRef = useRef<any>(null);

  useEffect(() => {
    if (ref.current && !sortableRef.current) {
      sortableRef.current = sortable.create(ref.current, {
        animation: 200,
        ghostClass: ghostClass,
        dragClass: dragClass,
        handle: customHandle ? customHandle : ".drag-item",
        forceFallback: true,
        onStart: () => {},
        onEnd: (event) => {
          console.log(event);
          moveEnd(event.oldIndex!, event.newIndex!);
        }
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${!customHandle ? "drag-item" : ""} bu-flex bu-h-full bu-w-full ${
        direction === "horizontal" ? "bu-flex-row" : "bu-flex-col"
      }`}>
      {children}
    </div>
  );
};

export { Sortable };
