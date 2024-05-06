import React, { useRef, useState } from "react";
import List from "./List";
import GotoTest from "./GotoTest";
import AddQNA from "./AddQNA";
import { Box, Grid } from "@mui/material";
import { QNA, QNAForm } from "./type";
import { SubmitHandler } from "react-hook-form";

const App: React.FC = () => {
  const [list, setList] = useState<QNA[]>([
    { id: 0, question: "key", answer: "value" },
  ]);

  const nextId = useRef(6);

  const deleteHandler = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const filterList = list.filter((item) => {
        return item.id !== id;
      });
      setList(filterList);
    }
  };

  const submitHandler: SubmitHandler<QNAForm> = (qna: QNAForm) => {
    setList([
      ...list,
      {
        id: nextId.current,
        ...qna,
      },
    ]);
    nextId.current++;
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={10}>
          <AddQNA submitHandler={submitHandler} />
          <List list={list} deleteHandler={deleteHandler} />
        </Grid>
        <Grid item xs={2}>
          <GotoTest />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
