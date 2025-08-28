"use client";

import cloneDeep from "lodash/cloneDeep";
import isArray from "lodash/isArray";
import { FormProps, innerCallbackType } from "./interface";
class Store<FormData = any> {
  private initialValues: Partial<FormData> = {};

  private callbacks: Pick<FormProps<FormData>, innerCallbackType> = {};

  private registerWatchers: (() => void)[] = [];

  public setInitialValues = (values: Partial<FormData> | undefined) => {
    if (!values) return;
    this.initialValues = cloneDeep(values);
  };

  public setCallBacks = (
    values: Pick<FormProps<FormData>, innerCallbackType>
  ) => {
    this.callbacks = {
      ...this.callbacks,
      ...values,
    };
  };

  public getFieldValue = (field: string) => {
    console.log("getFieldValue", field);
    // return this.initialValues[field];
  };

  public getFieldsValues = (fields?: string[]) => {
    const values = {};

    if (isArray(fields)) {
      // fields.forEach((key) => {
      //   values[key] = this.getFieldValue(key);
      // });
      return values;
    }
    return this.initialValues;
  };

  public setFieldValue = (value: string, field: string) => {
    // this.initialValues[field] = value;
    console.log("setFieldValue", value, field);
    this.notifyWatchers();
  };

  public registerWatcher = (item: () => void) => {
    this.registerWatchers.push(item);
  };

  private notifyWatchers() {
    this.registerWatchers.forEach((item) => {
      item();
    });
  }

  public getCallBacks = () => {
    return this.callbacks;
  };

  public submit = () => {
    const { onSubmit } = this.callbacks;
    if (onSubmit) {
      onSubmit(this.getFieldsValues() as FormData);
    }
  };
}

export default Store;
