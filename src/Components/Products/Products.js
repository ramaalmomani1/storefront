import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import "./products.css";

function Products(props) {
  const { products, activeCategory } = props;
  const filteredProducts = activeCategory
    ? products.filter((item) => item.category === activeCategory)
    : products;

  return (
    <div>
      {filteredProducts.map((item) => (
        <div key={item.id} className="card-container">
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
              <Button size="small">ADD TO CART</Button>
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
});

export default connect(mapStateToProps)(Products);
