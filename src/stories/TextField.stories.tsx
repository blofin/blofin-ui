import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LabelTextField } from "../components/LabelTextField";
import { TextField } from "../components/TextField";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

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

const TextFieldWithTheme = ({
  startAdornment = "https://",
  endAdornment = ".com"
}: {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}) => {
  // Sets the hooks for both the and primary props
  const mode = useMode();
  return (
    <ThemeProvider value={{ theme: mode }}>
      <div className="bu-flex bu-flex-col bu-gap-2">
        <TextField variant="filled" startAdornment={startAdornment} endAdornment={endAdornment} />
        <TextField
          variant="filled"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          error={true}
        />
        <TextField
          variant="filled"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled={true}
        />
        <TextField variant="outlined" startAdornment={startAdornment} endAdornment={endAdornment} />
        <TextField variant="outlined" className="bu-h-[30px] bu-w-24" />
        <TextField variant="outlined" inputSize="lg" />
        <TextField
          variant="filled"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          inputSize="lg"
        />
      </div>
    </ThemeProvider>
  );
};

export const WithTheme: Story = {
  render: ({ ...args }) => <TextFieldWithTheme {...args} />
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
        <TextField variant="outlined" defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <TextField variant="outlined" {...register("exampleRequired", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <TextField variant="filled" type="submit" />
      </form>
    );
  }
};
