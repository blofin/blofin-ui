import type { Meta, StoryObj } from "@storybook/react";
import Sortable from "../components/Sortable";
import { useEffect, useState } from "react";
import { Checkbox } from "..";

import SortItem from "../components/Sortable/SortItem";

const meta: Meta<typeof Sortable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Sortable",
  component: Sortable
};

export default meta;

type Story = StoryObj<typeof Sortable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => {
    const [columns, setColumns] = useState([
      {
        label: "total",
        show: true
      },
      {
        label: "averagePrice",
        show: true
      },
      {
        label: "tpSlPrice",
        show: true
      },
      {
        label: "margin",
        show: true
      },
      {
        label: "markPrice",
        show: true
      },
      {
        label: "trailingStop",
        show: true
      },
      {
        label: "marginRatio",
        show: true
      },
      {
        label: "estimateLiquidationPrice",
        show: true
      },
      {
        label: "pnl",
        show: true
      },
      {
        label: "pnlPercentage",
        show: true
      },
      {
        label: "action",
        show: true
      }
    ]);

    const [isDragging, setIsDragging] = useState(false);

    const moveEnd = (prevIndex: number, nextIndex: number) => {
      console.log(prevIndex, nextIndex);
      const newList = [...list];
      newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
      console.log(newList);
      setList(newList);
    };

    const switchColumns = (key: string) => {
      setColumns(
        columns.map((item) => {
          return item.label === key
            ? {
                ...item,
                show: !item.show
              }
            : item;
        })
      );
    };

    const [list, setList] = useState(() => [
      {
        label: "total",
        show: true,
        order: 0,
        id: 0
      },
      {
        label: "estimateLiquidationPrice",
        show: true,
        order: 1,
        id: 1
      },
      {
        label: "averagePrice",
        show: true,
        order: 2,
        id: 2
      },
      {
        label: "tpSlPrice",
        show: true,
        order: 3,
        id: 3
      },
      {
        label: "margin",
        show: true,
        order: 4,
        id: 4
      },
      {
        label: "markPrice",
        show: true,
        order: 5,
        id: 5
      },
      {
        label: "trailingStop",
        show: true,
        order: 6,
        id: 6
      },
      {
        label: "marginRatio",
        show: true,
        order: 7,
        id: 7
      },
      {
        label: "pnl",
        show: true,
        order: 8,
        id: 8
      },
      {
        label: "pnlPercentage",
        show: true,
        order: 9,
        id: 9
      },
      {
        label: "action",
        show: true,
        order: 10,
        id: 10
      }
    ]);

    const change = () => {};

    useEffect(() => {
      console.log(list);
    }, [list]);

    return (
      <div className="bu-relative">
        <Sortable direction="vertical" moveEnd={moveEnd}>
          {list.map((item, index) => {
            return (
              <SortItem key={item.label}>
                <Checkbox
                  label={item.label === "action" ? "Action" : item.label}
                  checked={item.show}
                  onChange={() => switchColumns(item.label)}
                />
              </SortItem>
            );
          })}
        </Sortable>
      </div>
    );
  }
};
