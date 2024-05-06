import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const GotoTest: React.FC = () => {
  return (
    <Box sx={{ textAlign: "end", whiteSpace: "nowrap" }}>
      <Link to="/test">
        <Button variant={"outlined"} color={"error"}>
          테스트 페이지
        </Button>
      </Link>
    </Box>
  );
};

export default GotoTest;
