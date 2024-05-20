import { FC, useReducer } from "react";
import { Context, reducer, State } from "./reducer";

interface SortGroupProps {
  children: JSX.Element;
  type?: "single" | "multiple";
}

const SortGroup: FC<SortGroupProps> = ({ children, type = "single" }) => {
  const [state, dispatch] = useReducer(reducer, { ...State, type });

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default SortGroup;
