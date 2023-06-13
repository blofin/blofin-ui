import { createContext } from 'react';
import { FormContextProps, FormItemContextProps } from './interface';

const FormContext = createContext<FormContextProps>({
  layout: 'horizontal',
  labelAlign: 'right',
  store: {
    submit: () => {},
    setInitialValues: () => {},
    setCallBacks: () => {},
    getFieldValue: () => {},
    setFieldValue: () => {},
    getFieldsValues: () => ({}),
    registerWatcher: () => {}
  }
});

export const FormItemContext = createContext<FormItemContextProps>({});

const FormProviderContext = createContext({});

export { FormProviderContext, FormContext };
