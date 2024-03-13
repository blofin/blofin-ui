import { createContext } from "react";

interface SortableContent {
  direction: "horizontal" | "vertical";
  onMove: (prevIndex: number, nextIndex: number) => void;
}

const SortableContent = createContext<SortableContent>({
  direction: "horizontal",
  onMove: (prevIndex: number, nextIndex: number) => {}
});

const SortableProvider = SortableContent.Provider;

export { SortableContent, SortableProvider };
