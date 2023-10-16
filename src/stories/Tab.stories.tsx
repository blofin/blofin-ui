import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../components/Tab/Tab";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

const meta: Meta<typeof Tab> = {
  /* 👇 The title prop is Tab.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" }
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tab>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const items = [
  {
    key: "1",
    label: `OrderBook`,
    children: <div>Content of Tab Pane 1</div>
  },
  {
    key: "2",
    label: `Trade History`,
    children: `Content of Tab Pane 2`
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`
  }
];

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const change = (key: string) => {
      console.log(key);
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-w-full">
          <Tab items={items} size="small" change={change}><input type="checkbox" /></Tab>
        </div>
      </ThemeProvider>
    );
  }
};
