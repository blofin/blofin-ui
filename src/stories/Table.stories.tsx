import type { Meta, StoryObj } from "@storybook/react";
import Table, { TableColumnProps } from "../components/Table";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";
import { useEffect, useState } from "react";

const meta: Meta<typeof Table> = {
  /* 👇 The title prop is Tab.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Table",
  component: Table
};

export default meta;

type Story = StoryObj<typeof Table>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

type ColumnProps = {
  uid: number;
  id: number;
};

const data = [
  {
    uid: "nini",
    id: "2222",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "2255522",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "33",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "6",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "5",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "4",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "3",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  },
  {
    uid: "nini",
    id: "1",
    name: "HLY",
    address: "Beijing",
    name1: "HLY1",
    name2: "HLy2",
    name3: "HLy2",
    name4: "HLy2"
  }
];

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const [items, setItems] = useState<TableColumnProps<ColumnProps>[]>([
      {
        key: "uid",
        title: `uid`,
        width: "100px",
        fixed: "left",
        align: "flex-start",
        filter: true,
        render: (record) => {
          return <div>uid: {record.uid}</div>;
        },
        renderHeader(item) {
          return <span>test {item.uid}</span>;
        }
      },
      {
        key: "id",
        title: `id`,
        width: "100px",
        align: "flex-start",
        filter: true,
        fixed: "left"
      },
      {
        key: "name",
        title: `name`,
        width: "150px",
        align: "center"
      },
      {
        key: "name1",
        title: `name1`,
        width: "150px",
        align: "center"
      },
      {
        key: "name2",
        title: `name2`,
        width: "150px",
        align: "flex-end"
      },
      {
        key: "name3",
        title: `name3`,
        width: "150px",
        align: "flex-end"
      },
      {
        key: "name4",
        title: `name4`,
        width: "150px",
        align: "flex-end",
        fixed: "right"
      },
      {
        key: "address",
        title: `address`,
        width: "150px",
        align: "flex-end",
        fixed: "right"
      }
    ]);

    const onChange = (data: any) => {
      console.log(data);
    };

    useEffect(() => {
      setTimeout(() => {
        setItems([
          {
            key: "uid",
            title: `uid`,
            width: "100px",
            fixed: "left",
            align: "flex-start",
            filter: true,
            render: (record) => {
              return <div>uid: {record.uid}</div>;
            }
          },
          {
            key: "id",
            title: `id`,
            width: "100px",
            align: "flex-start",
            filter: true,
            fixed: "left"
          },
          {
            key: "name1",
            title: `name1`,
            width: "150px",
            align: "center"
          },
          {
            key: "name2",
            title: `name2`,
            width: "150px",
            align: "center"
          },
          {
            key: "name",
            title: `name`,
            width: "150px",
            align: "center"
          },
          {
            key: "name3",
            title: `name3`,
            width: "150px",
            align: "flex-end"
          },
          {
            key: "name4",
            title: `name4`,
            width: "150px",
            align: "flex-end",
            fixed: "right"
          },
          {
            key: "address",
            title: `address`,
            width: "150px",
            align: "flex-end",
            fixed: "right"
          }
        ]);
      }, 2000);
    }, []);

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-h-[400px] bu-w-[100%]">
          <Table
            columns={items}
            scroll
            data={data}
            hideShadow
            rowKey="id"
            onChange={onChange}
            customPagination={true}
          />
        </div>
      </ThemeProvider>
    );
  }
};
