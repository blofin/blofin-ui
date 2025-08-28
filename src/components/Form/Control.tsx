"use client";

import isObject from "lodash/isObject";
import React, { cloneElement } from "react";
import { FormContext } from "./context";
import { ControlProps, FormItemProps } from "./interface";

class Control extends React.Component<ControlProps & FormItemProps> {
  static contextType = FormContext;

  declare context: any;

  constructor(props: ControlProps & FormItemProps) {
    super(props);
  }

  updateItem = () => {
    this.forceUpdate();
  };

  onChange = (value: string) => {
    const { store } = this.context;
    const { field } = this.props;
    store?.setFieldValue(value, field as string);
  };

  cloneNode = () => {
    const { children, field } = this.props;
    const { store } = this.context;
    if (isObject(children)) {
      return cloneElement(children, {
        defaultValue: store?.getFieldValue(field as string),
        onChange: this.onChange,
      });
    } else {
      return children;
    }
  };

  componentDidMount(): void {
    const { store } = this.context;
    store?.registerWatcher(this.updateItem);
  }

  render() {
    return <div>{this.cloneNode()}</div>;
  }
}

export default Control;
