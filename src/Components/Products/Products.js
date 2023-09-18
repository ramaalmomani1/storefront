import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { add } from "../../store/cartReducer";

import "./products.css";

function Products(props) {
  // console.log(props);
  const { products, activeCategory, add } = props;
  const filteredProducts = activeCategory
    ? products.filter((item) => item.category === activeCategory)
    : products;

  function handleClick(product) {
    add(product);
  }

  return (
    <div className="cards-container">
      {filteredProducts.map((item) => (
        <div key={item.id} className="card-container">
          {/* {console.log("itemmmmmmmmm", item)} */}
          <Card sx={{ width: 345, height: 400 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title="green iguana"
            />
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Stock: {item.inStock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClick(item)}>
                ADD TO CART
              </Button>
              <Button size="small">VIEW DETAILS</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.proReducer.finalProducts,
  activeCategory: state.catReducer.activeCategory,
  cart: state.cartReducer.count,
});

const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
