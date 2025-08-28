"use client";

import { useRef } from 'react';
import { FormInstance } from './interface';
import Store from './store';

export function getFormInstance<FormData = any>(): FormInstance<FormData> {
  const store = new Store<FormData>();
  return {
    submit: store.submit,
    setInitialValues: store.setInitialValues,
    setCallBacks: store.setCallBacks,
    getFieldsValues: store.getFieldsValues,
    getFieldValue: store.getFieldValue,
    setFieldValue: store.setFieldValue,
    registerWatcher: store.registerWatcher
  };
}

export default function useForm<FormData = any>(
  form?: FormInstance<FormData>
): [FormInstance<FormData>] {
  const formRef = useRef<FormInstance<FormData> | undefined>(form);

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      formRef.current = getFormInstance<FormData>();
    }
  }
  return [formRef.current];
}
