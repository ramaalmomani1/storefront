import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { connect } from "react-redux";

function Categories(props) {
  console.log(props);
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
      {props.activeCat.map((item) => (
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={()=> props.}> {item.displayName}</Button>
          <Button>Food</Button>
        </ButtonGroup>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCat: state.catReducer,
});

export default connect(mapStateToProps)(Categories);
