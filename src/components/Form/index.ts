import Form from './Form';
import { Item } from './FormItem';

type RefForm = typeof Form;

export interface FormComponent extends RefForm {
  Item: typeof Item;
}

const FormComp: FormComponent = Form as FormComponent;

FormComp.Item = Item;

export default FormComp;
