import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "../components/Typography/Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Example = Template.bind({});
Example.args = {
  variant: "h1",
  children: "Hello world!",
};
