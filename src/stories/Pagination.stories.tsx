import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { ThemeProvider } from "..";
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
    totalPages: 10,
    currentPage: 1
  });

  function handleChange(pageNum: number) {
    setPage((prevState) => ({ ...prevState, currentPage: pageNum }));
  }

  const mode = useMode();
  return (
    <ThemeProvider value={{ theme: mode }}>
      <Pagination {...page} onChange={handleChange} />
    </ThemeProvider>
  );
};
