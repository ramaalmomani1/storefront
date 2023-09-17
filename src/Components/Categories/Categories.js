import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { activeCat } from "../../store/categoriesReducer";
import { selectedPro } from "../../store/productsReducer";

function Categories(props) {
  const { activeCat, selectedPro } = props;

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
          flexDirection: "row",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        {props.categories.map((item) => (
          <ButtonGroup
            key={item.normalizedName}
            variant="text"
            aria-label="text button group"
          >
            <Button onClick={() => handleClick(item.normalizedName)}>
              {item.displayName}
            </Button>
          </ButtonGroup>
        ))}
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCategory: state.catReducer.activeCategory,
  categories: state.catReducer.categories,
});

const mapDispatchToProps = { activeCat, selectedPro };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
