import { createContext, Dispatch } from 'react';

export enum SortEnum {
  default = 'default',
  desc = 'desc',
  asc = 'asc',
}

export type SortState = SortEnum.default | SortEnum.desc | SortEnum.asc;

type StateType = {
  active: string;
  sortType: SortState;
};

type ActionType =
  | {
      type: 'change';
      payload: string;
    }
  | {
      type: 'changeSort';
      payload: SortState;
      success?: (state: StateType) => void;
    };

const State = {
  active: '',
  sortType: SortEnum.default,
};

const Context = createContext<{ state: StateType; dispatch: Dispatch<ActionType> }>({
  state: State,
  dispatch: () => undefined,
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'change':
      return { ...state, active: action.payload };
    case 'changeSort':
      const value = { ...state, sortType: action.payload };
      if (action.success) {
        action?.success(value);
      }
      return value;
    default:
      return state;
  }
};

export { Context, reducer, State };
