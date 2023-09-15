import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Products() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In Stock
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ADD TO CART</Button>
          <Button size="small">VIEW DETAILS</Button>
        </CardActions>
      </Card>
    </div>
  );
}
