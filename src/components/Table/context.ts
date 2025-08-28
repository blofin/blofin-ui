"use client";

import { createContext, Dispatch } from 'react';

type StateType = {
  isScroll: boolean;
};

type ActionType = {
  type: 'checkScroll';
  payload: boolean;
};

const State = {
  isScroll: false,
};

const Context = createContext<{ state: StateType; dispatch: Dispatch<ActionType> }>({
  state: State,
  dispatch: () => undefined,
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'checkScroll':
      return { ...state, isScroll: action.payload };
    default:
      return state;
  }
};

export { Context, reducer, State };
