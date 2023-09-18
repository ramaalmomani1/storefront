import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import { remove } from "../../store/cartReducer";

function Cart(props) {
  const { remove } = props;

  function handleClick(product) {
    remove(product);
  }
  return (
    <div>
      {props.cart.cartProducts.map((product, i) => {
        // {
        //   console.log("this is from cart", product);
        // }
        return (
          <div key={i}>
            <p>{product.name}</p>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => handleClick(product)}
                variant="outlined"
                startIcon={<DeleteIcon />}
              ></Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};
const mapDispatchToProps = { remove };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
