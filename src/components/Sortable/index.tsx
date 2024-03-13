import { FC } from "react";
import SortableItem from "./SortableItem";
import { SortableProvider } from "./context";

interface SortableProps {
  list: any[];
  onDrag: (list: any[]) => void;
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Sortable: FC<SortableProps> = ({ list, onDrag, direction, children }) => {
  const onMove = (prevIndex: number, nextIndex: number) => {
    console.log(prevIndex,nextIndex,'+++')
    // 更新列表
    const newList = [...list];
    newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
    onDrag(newList);
  };

  return (
    <SortableProvider
      value={{
        direction: direction,
        onMove:onMove
      }}>
      {children}
    </SortableProvider>
  );
};

export default Sortable;
