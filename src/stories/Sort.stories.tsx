import type { Meta, StoryObj } from "@storybook/react";
import SortGroup from "../components/Sort/SortGroup";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { Fragment } from "react";
import SortButton, { TextAlign } from "../components/Sort/SortButton";
import { SortsData, SortsState } from "../components/Sort/reducer";

const meta: Meta<typeof SortGroup> = {
  /* 👇 The title prop is Tab.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Sort",
  component: SortGroup
};

export default meta;

type Story = StoryObj<typeof SortGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const sortMenus = [
      {
        text: "symbol",
        key: "symbol",
        hideSort: true,
        textAlign: "flex-start",
        width: "34%"
      },
      {
        text: "price",
        key: "price",
        hideSort: false,
        textAlign: "flex-end",
        width: "22%"
      },
      {
        text: "24h %",
        key: "change24",
        hideSort: false,
        textAlign: "flex-end",
        width: "22%"
      },
      {
        text: "volume",
        key: "volume",
        hideSort: false,
        textAlign: "flex-end",
        width: "22%"
      }
    ];

    const sortChange = (data: SortsData[]|SortsData) => {
      console.log(data,'data');
    };

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-flex">
          <SortGroup >
            <Fragment>
              {sortMenus.map((item) => {
                return (
                  <SortButton
                    key={item.key}
                    onSortChange={sortChange}
                    sortKey={item.key}
                    hideSort={item.hideSort}
                    textAlign={item.textAlign as TextAlign}
                    width={item.width}>
                    <span>{item.text}</span>
                  </SortButton>
                );
              })}
            </Fragment>
          </SortGroup>
        </div>
      </ThemeProvider>
    );
  }
};
