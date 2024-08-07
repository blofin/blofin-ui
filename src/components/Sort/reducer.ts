import { createContext, Dispatch } from "react";

export enum SortEnum {
  default = "default",
  desc = "desc",
  asc = "asc"
}

export type SortState = SortEnum.default | SortEnum.desc | SortEnum.asc;

export type SortsState = {
  sort: string;
  sortType: SortState;
};

export type SortsData = {
  sortKey: string;
  sort: SortState;
};

export type SortType = "single" | "multiple";

type StateType = {
  type: SortType;
  sorts: SortsState[];
};

type ActionType = {
  type: "changeSort" | "restSort";
  payload: SortsState;
  success?: (state: SortsState[]) => void;
  reset?: () => void;
};

const State = {
  type: "single" as SortType,
  sorts: []
};

const Context = createContext<{ state: StateType; dispatch: Dispatch<ActionType> }>({
  state: State,
  dispatch: () => undefined
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "changeSort":
      const index = state.sorts.findIndex((item) => item.sort === action.payload.sort);
      if (index === -1) {
        const value = state.type === "single" ? [action.payload] : [...state.sorts, action.payload];
        action.success && action.success(value);
        return {
          type: state.type,
          sorts: value
        };
      } else {
        const value = state.sorts.map((item) => {
          if (item.sort === action.payload.sort) {
            return {
              ...item,
              sortType: action.payload.sortType
            };
          } else {
            return item;
          }
        });
        action.success && action.success(value);
        return {
          type: state.type,
          sorts: value
        };
      }

    case "restSort":
      action.reset && action.reset();
      return {
        ...state,
        sorts: []
      };
    default:
      return state;
  }
};

export { Context, reducer, State };
