import { createContext } from "react";

interface SortableContent {
  direction: "horizontal" | "vertical";
 
}

const SortableContent = createContext<SortableContent>({
  direction: "horizontal",
});

const SortableProvider = SortableContent.Provider;

export { SortableContent, SortableProvider };
