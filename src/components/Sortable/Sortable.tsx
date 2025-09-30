import * as React from "react";
import sortable from "sortablejs";

interface SortableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
  moveEnd: (prev: number, next: number) => void;
  ghostClass?: string;
  dragClass?: string;
}

const Sortable: React.FC<SortableProps> = ({ children, direction, moveEnd, ghostClass, dragClass }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const sortableRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (ref.current && !sortableRef.current) {
      sortableRef.current = sortable.create(ref.current, {
        animation: 200,
        ghostClass: ghostClass,
        dragClass: dragClass,
        handle: ".drag-item",
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
      className={`drag-item bu-flex bu-h-full bu-w-full ${
        direction === "horizontal" ? "bu-flex-row" : "bu-flex-col"
      }`}>
      {children}
    </div>
  );
};

export { Sortable };
