import type { Meta, StoryObj } from "@storybook/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LabelTextField } from "../components/LabelTextField";
import { TextField } from "../components/TextField";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const meta: Meta<typeof TextField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
      control: { type: "select" }
    }
  },
  parameters: { controls: { sort: "requiredFirst" } }
};

export default meta;

type Story = StoryObj<typeof TextField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: "text"
  }
};

export const All: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className="bu-flex bu-max-w-sm bu-flex-col bu-gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <TextField defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <TextField {...register("exampleRequired", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <TextField type="submit" />
      </form>
    );
  }
};
