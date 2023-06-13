import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Pagination } from "../components/Pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    total: {
      defaultValue: { summary: 0 },
    },
    pageSize: {
      defaultValue: { summary: 10 },
    },
  },
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Example = Template.bind({});
Example.args = {
  total: 50,
  pageSize: 10,
};
