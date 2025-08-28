"use client";

import { createContext } from "react";

interface SortableContent {
  direction: "horizontal" | "vertical";
  isAnimation: boolean;
  setIsAnimation: (isAnimation: boolean) => void;
}

const SortableContent = createContext<SortableContent>({
  direction: "horizontal",
  isAnimation: false,
  setIsAnimation: () => {}
});

const SortableProvider = SortableContent.Provider;

export { SortableContent, SortableProvider };
