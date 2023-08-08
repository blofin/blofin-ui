import type { Meta, StoryObj } from "@storybook/react";
import Table, { TableColumnProps } from "../components/Table";
import useMode from "../hooks/useMode";
import { ThemeProvider } from "../provider/ThemeProvider";

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

const items: TableColumnProps<ColumnProps>[] = [
  {
    key: "uid",
    title: `uid`,
    width: "300px",
    fixed: "left",
    align: "flex-start",
    filter:true,
    render: (record) => {
      return <div>uid: {record.uid}</div>;
    }
  },
  {
    key: "id",
    title: `id`,
    width: "300px",
    align: "flex-start",
    filter:true,
  },
  {
    key: "name",
    title: `name`,
    width: "150px",
    align: "flex-start"
  },
  {
    key: "name1",
    title: `name`,
    width: "150px",
    align: "center"
  },
  {
    key: "name2",
    title: `name`,
    width: "150px",
    align: "flex-end"
  },
  {
    key: "name3",
    title: `name`,
    width: "150px",
    align: "flex-end"
  },
  {
    key: "name4",
    title: `name`,
    width: "150px",
    align: "flex-end"
  },
  {
    key: "address",
    title: `address`,
    width: "150px",
    align: "flex-end"
  }
];

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
  }
];

export const Primary: Story = {
  render: () => {
    const mode = useMode();

    const onChange=(data:any)=>{
      console.log(data);
    }

    return (
      <ThemeProvider value={{ theme: mode }}>
        <div className="bu-w-[100%]">
          <Table columns={items} data={data} hideShadow rowKey="id" onChange={onChange} customPagination={true} />
        </div>
      </ThemeProvider>
    );
  }
};
