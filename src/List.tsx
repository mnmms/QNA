import React from "react";
import Item from "./Item";
import { QNA } from "./type";
import { Box, MenuList, Typography } from "@mui/material";

interface Props {
  list: QNA[];
  deleteHandler: (id: number) => void;
}

const List: React.FC<Props> = ({ list, deleteHandler }) => {
  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant={"body2"}>TOTAL : {list.length}</Typography>
      </Box>
      <MenuList>
        {list.map((item, idx) => {
          return <Item key={idx} item={item} deleteHandler={deleteHandler} />;
        })}
      </MenuList>
    </Box>
  );
};

export default List;
