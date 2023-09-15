import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function Categories() {
  return (
    <div>
      <h3>Browse our Categories</h3>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      ></Box>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Electronics</Button>
        <Button>Food</Button>
      </ButtonGroup>
    </div>
  );
}
