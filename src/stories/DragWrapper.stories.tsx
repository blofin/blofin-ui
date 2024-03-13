import type { Meta, StoryObj } from "@storybook/react";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import Sortable from "../components/Sortable";
import { useRef, useState } from "react";
import { Tab } from "..";
import SortableItem from "../components/Sortable/SortableItem";

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
    const labelRef = useRef(["Positions", "Trade History", "Open Orders"]);

    const onMove = (prevIndex: any, nextIndex: any) => {
      // 更新列表
      let newList = [...labelRef.current];
      newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
      console.log(newList);
      labelRef.current=newList;
      setList(
        newList.map((item, index) => {
          return {
            key: item,
            label: (
              <SortableItem index={index} listLength={3} onMove={onMove}>
                {item}
              </SortableItem>
            ),
            children: <div>{item}</div>
          };
        })
      );
    };

    const [list, setList] = useState(() =>
      labelRef.current.map((item, index) => {
        return {
          key: item,
          label: (
            <SortableItem index={index} listLength={3} onMove={onMove}>
              {item}
            </SortableItem>
          ),
          children: <div>{item}</div>
        };
      })
    );

    const change = () => {};

    // const [list, setList] = useState(["Positions", "Trade History", "Open Orders"]);

    // return (
    //   <Sortable list={list} direction="horizontal" setList={setList}>
    //     {list.map((child, i) => (
    //       <SortableItem
    //         key={child}
    //         index={i}
    //         listLength={list.length}
    //         onMove={(prevIndex: any, nextIndex: any) => {
    //           console.log(list);
    //           // 更新列表
    //           const newList = [...list];
    //           newList.splice(nextIndex, 0, newList.splice(prevIndex, 1)[0]);
    //           setList(newList);
    //         }}>
    //         {child}
    //       </SortableItem>
    //     ))}
    //   </Sortable>
    // );
    return (
      <Sortable list={list} direction="horizontal" setList={setList}>
        <Tab items={list} size="small" change={change}></Tab>
      </Sortable>
    );
  }
};
