import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { remove } from "../../store/cartReducer";
import "./Cart.css"; 

function Cart(props) {
  const { remove } = props;

  function handleClick(product) {
    remove(product);
  }

  return (
    <div>
      {props.cart.cartProducts.map((product, i) => (
        <div key={i} className="product-container">
          <p>{product.name}</p>
          <Button
            onClick={() => handleClick(product)}
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
            startIcon={<DeleteIcon style={{ verticalAlign: "middle" }} />} // Center the icon vertically
          ></Button>
        </div>
      ))}
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
