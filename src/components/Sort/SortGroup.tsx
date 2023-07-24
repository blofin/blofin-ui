import { FC, useReducer } from 'react';
import { Context, reducer, State } from './reducer';

interface SortGroupProps {
  children: JSX.Element;
}

const SortGroup: FC<SortGroupProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, State);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default SortGroup;
