import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { activeCat } from "../../store/categoriesReducer";

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
      {props.active.categories.map((item) => (
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => props.activeCat(item.normalizedName)}>
            {" "}
            {console.log('tessstt', item.normalizedName)}
            {item.normalizedName}
          </Button>
          {/* <Button>Food</Button> */}
        </ButtonGroup>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  active: state.catReducer,
});

const mapDispatchToProps = { activeCat };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
