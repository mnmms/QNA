import React, { useEffect } from "react";
import { QNA } from "./type";
import hljs from "highlight.js";
import { Button, ListItem, Stack } from "@mui/material";

interface Props {
  item: QNA;
  deleteHandler: (id: number) => void;
}

const Item: React.FC<Props> = ({
  item: { id, question, answer },
  deleteHandler,
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <ListItem sx={{ m: 1, p: 0, "& button": { p: "2px 8px" } }}>
      <Stack direction={"row"} spacing={2}>
        <code
          style={{ display: "flex", alignItems: "center" }}
        >{`{${question}: ${answer}}`}</code>
        <Button variant={"outlined"} onClick={() => deleteHandler(id)}>
          삭제
        </Button>
      </Stack>
    </ListItem>
  );
};

export default Item;
