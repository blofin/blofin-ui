import React from 'react';
import Store from './store';

export interface FormProps<FormData = any> {
  /**
   *是否可用
   */
  disabled?: boolean;
  /**
   *布局
   */
  layout?: 'horizontal' | 'vertical' | 'inline';
  /**
   *标签的文本对齐方式
   */
  labelAlign?: 'left' | 'right';
  /**
   * 设置表单初始值
   */
  initialValues?: Partial<FormData>;
  /**
   * 数据验证成功后回调事件
   */
  onSubmit?: (values: FormData) => void;

  form?: FormInstance<FormData>;

  children?: React.ReactNode;
}

export type FormInstance<FormData = any> = Pick<
  Store<FormData>,
  | 'submit'
  | 'setInitialValues'
  | 'setCallBacks'
  | 'getFieldValue'
  | 'setFieldValue'
  | 'getFieldsValues'
  | 'registerWatcher'
>;

export type innerCallbackType = 'onSubmit';

export type FormContextProps<FormData = any> = Pick<
  FormProps<FormData>,
  'labelAlign' | 'layout'
> & {
  store?: FormInstance<FormData>;
};

export type FormItemContextProps<FormData = any> = Pick<
  FormProps<FormData>,
  'labelAlign' | 'layout'
> & {
  updateFormItem?: (field: string) => void;
};

export interface FormItemProps<FormData = any> {
  label?: string;
  labelAlign?: 'left' | 'right';
  store?: FormInstance<FormData>;
  children?: JSX.Element;
  field?: string;
}

export interface FormItemLabelProps {
  label?: string;
}

export interface ControlProps {
  children?: React.ReactNode;
  cloneNode?: () => React.ReactNode;
}
