import { FC, useRef, useState } from "react";

interface DragWrapperProps {
  columns: any[];
  onDrag: (colums: any) => void;
}

const DrapItem=()=>{
    return <div>
        111
    </div>
}

const DragWrapper: FC<DragWrapperProps> = ({ onDrag, columns }) => {
  const [draggingIndex, setDraggingIndex] = useState(-1);

  const columnsRef = useRef(columns);

  const handleDragStart = (event: any, index: number) => {
    event.dataTransfer.setData("text/plain", index);
    console.log(index);
    setDraggingIndex(index);
  };

  const handleDragOver = (event: any, index: number) => {
    event.preventDefault();
    if (index !== draggingIndex) {
      const newItems = [...columns];
      const draggedItem = newItems[draggingIndex];
      newItems.splice(draggingIndex, 1);
      newItems.splice(index, 0, draggedItem);
      columnsRef.current = newItems;
      setDraggingIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggingIndex(-1);
    onDrag(columnsRef.current);
  };

  return (
    <div className="bu-flex">
      {columns.map((item, index) => (
        <div
          key={item.id}
          className={`bu-mr-[8px] ${
            index === draggingIndex ? "bu-rounded-[4px] bu-bg-light-primary" : "bu-bg-light-white"
          }`}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragEnd={handleDragEnd}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DragWrapper;
