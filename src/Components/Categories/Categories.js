import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { activeCat } from "../../store/categoriesReducer";
import { selectedPro } from "../../store/productsReducer";

function Categories(props) {
  const { activeCategory, activeCat, selectedPro } = props;

  const handleClick = (category) => {
    activeCat(category);
    selectedPro(category);
  };

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
          <Button
            onClick={() => handleClick(item.normalizedName)}
            variant={item.normalizedName === activeCategory ? "contained" : "outlined"}
          >
            {item.normalizedName}
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCategory: state.catReducer.activeCategory,
  active: state.catReducer,
});

const mapDispatchToProps = { activeCat, selectedPro };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
