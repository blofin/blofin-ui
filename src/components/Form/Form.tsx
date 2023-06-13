import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from "react";
import { FormContext } from "./context";
import { FormInstance, FormProps } from "./interface";
import useForm from "./useForm";

const Form: ForwardRefRenderFunction<FormInstance, FormProps> = (
  props,
  ref
) => {
  const { layout, labelAlign, form, initialValues, onSubmit, ...rest } = props;

  const formRef = useRef<HTMLFormElement>(null);

  const [formInstance] = useForm(form);

  useImperativeHandle(ref, () => {
    return formInstance;
  });

  if (formInstance) {
    formInstance.setInitialValues(initialValues);
    formInstance.setCallBacks({
      onSubmit,
    });
  }

  const contextProps = {
    layout,
    labelAlign,
    store: formInstance,
  };

  return (
    <FormContext.Provider value={contextProps}>
      <form
        ref={formRef}
        {...rest}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          formInstance.submit();
        }}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  );
};

export default forwardRef(Form);
