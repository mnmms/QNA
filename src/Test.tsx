import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Button } from "@mui/material";

interface ChildComponentProps {
  history: RouteComponentProps["history"];
}

const Test: React.FC<ChildComponentProps> = ({ history }) => {
  return (
    <Box>
      <Button variant={"contained"} onClick={() => history.goBack()}>
        돌아가기
      </Button>
    </Box>
  );
};

export default Test;
