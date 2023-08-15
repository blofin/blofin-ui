import type { Meta, StoryObj } from "@storybook/react";
import { TextSelect } from "../components/TextSelect/TextSelect";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof TextSelect> = {
  /* 👇 The title prop is Tab.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TextSelect",
  component: TextSelect
};

export default meta;

type Story = StoryObj<typeof TextSelect>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const change = (key: string) => {
      console.log(key);
    };

    const options=[
      {
        label:'1',
        value:'1'
      },
      {
        label:'2',
        value:'2'
      },
      {
        label:'3',
        value:'3'
      }
    ]

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-w-full">
          <TextSelect placeholder="Select a person" defaultValue={options[0].value} options={options} />
        </div>
      </ThemeProvider>
    );
  }
};
