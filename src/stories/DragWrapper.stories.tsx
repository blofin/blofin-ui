import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import Sortable from "../components/Sortable";
import { useEffect, useRef, useState } from "react";
import { Checkbox, Tab } from "..";
import SortableItem from "../components/Sortable/SortableItem";
import { cloneDeep } from "lodash";

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
    const labelRef = useRef([
      "Positions(8)",
      "Open Orders(1)",
      "Assets",
      "Order History",
      "Trading Bots(4)"
    ]);

    const onMove = (prevIndex: any, nextIndex: any) => {
      // 更新列表
      let newList = [...labelRef.current];
      newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
      labelRef.current = newList;
      // setList(
      //   newList.map((item, index) => {
      //     return {
      //       key: item,
      //       label: (
      //         <SortableItem index={index} listLength={labelRef.current.length} onMove={onMove}>
      //           {item}
      //         </SortableItem>
      //       ),
      //       children: <div>{item}</div>
      //     };
      //   })
      // );
    };

    // const [list, setList] = useState(() =>
    //   labelRef.current.map((item, index) => {
    //     return {
    //       key: item,
    //       label: (
    //         <SortableItem index={index} listLength={3} onMove={onMove}>
    //           {item}
    //         </SortableItem>
    //       ),
    //       children: <div>{item}</div>
    //     };
    //   })
    // );

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

    const onMoveColumns = (prevIndex: number, nextIndex: number) => {
      const newList = cloneDeep(columns);
      newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
      setColumns(newList);
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

    const onMove1 = (prevIndex: any, nextIndex: any) => {
      const newList = [...list];
      newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
      setList(newList);
    };

    const change = () => {};

    useEffect(() => {
      console.log(columns);
    }, [columns]);

    return (
      <div className="bu-w-[200px]">
        {/* <Sortable direction="horizontal">
          <Tab items={list} size="medium" change={change}></Tab>
        </Sortable> */}
        <Sortable direction="vertical">
          {list.map((item, index) => {
            return (
              <SortableItem
                index={index}
                key={item.label}
                listLength={list.length}
                onMove={onMove1}
                onMoveUp={()=>{
                  console.log("结束")
                }}>
                <div className="bu-flex bu-h-[30px] bu-w-full bu-items-center">
                  <Checkbox
                    label={item.label === "action" ? "Action" : item.label}
                    checked={item.show}
                    onChange={() => switchColumns(item.label)}
                  />
                </div>
              </SortableItem>
            );
          })}
        </Sortable>
      </div>
    );
  }
};
