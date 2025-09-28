import { FC, useReducer, forwardRef, useImperativeHandle, useEffect } from "react";
import { Context, reducer, SortEnum, State } from "./reducer";

interface SortGroupProps {
  children: React.ReactElement;
  type?: "single" | "multiple";
}

const SortGroup = forwardRef<{ restSort: (callBack:()=>void) => void }, SortGroupProps>(
  ({ children, type = "single" }, ref) => {
    const [state, dispatch] = useReducer(reducer, { ...State, type });

    const restSort = (callBack:()=>void) => {
      dispatch({
        type: "restSort",
        payload: { sort: "", sortType: SortEnum.default },
        reset: () => {
          callBack()
        }
      });
    };

    useImperativeHandle(ref, () => {
      return {
        restSort
      };
    });

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
  }
);

export default SortGroup;
