import * as React from "react";
import { Context, reducer, SortEnum, State } from "./reducer";

interface SortGroupProps {
  children: React.ReactElement;
  type?: "single" | "multiple";
}

const SortGroup = React.forwardRef<{ restSort: (callBack: () => void) => void }, SortGroupProps>(
  ({ children, type = "single" }, ref) => {
    const [state, dispatch] = React.useReducer(reducer, { ...State, type });

    const restSort = (callBack: () => void) => {
      dispatch({
        type: "restSort",
        payload: { sort: "", sortType: SortEnum.default },
        reset: () => {
          callBack();
        }
      });
    };

    React.useImperativeHandle(ref, () => {
      return {
        restSort
      };
    });

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
  }
);

export { SortGroup };
