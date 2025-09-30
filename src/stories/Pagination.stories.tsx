import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { ThemeProvider } from "../provider/ThemeProvider";
import useMode from "../hooks/useMode";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      defaultValue: { summary: 0 }
    },
    currentPage: {
      defaultValue: { summary: 1 }
    }
  }
};

export const Example = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    total: 10000,
    pageSize: 15
  });

  function handleChange(pageNum: number, pageSize: number) {
    setPage((prevState) => ({ ...prevState, currentPage: pageNum, pageSize }));
  }

  const mode = useMode();
  return (
    <ThemeProvider value={{ theme: mode }}>
      <Pagination
        {...page}
        sizeCanChange
        onPageChange={handleChange}
        countPerPage="Page"
        sizeOptions={[15, 50, 100]}
        // activeStyle={{
        //   backgroundColor: "red"
        // }}
      />
    </ThemeProvider>
  );
};
