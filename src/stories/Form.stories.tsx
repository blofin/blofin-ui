import { useEffect, useRef } from "react";
import { Form } from "../components/Form";
import { FormInstance } from "../components/Form/interface";
import Input from "../components/Input/Input";

const FormItem = Form.Item;

export const Example = () => {
  const initialValues = {
    name: "hly",
    age: 25
  };

  const formRef = useRef<FormInstance>(null);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    if (formRef.current) {
      const name = formRef.current.getFieldValue("name");
      setTimeout(() => {
        formRef.current?.setFieldValue(name + "1", "name");
      }, 1000);
    }
  }, []);

  return (
    <div>
      <Form ref={formRef} initialValues={initialValues} onSubmit={onSubmit}>
        <>
          <FormItem label="姓名" field="name">
            <Input />
          </FormItem>
          <FormItem label="年龄" field="age">
            <Input />
          </FormItem>
          <button type="submit">提交</button>
        </>
      </Form>
    </div>
  );
};

export default {
  title: "Components/Form(Beta)"
};
