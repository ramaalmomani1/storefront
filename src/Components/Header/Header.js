import React from "react";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import { connect } from "react-redux";

const Header = (props) => {
  // console.log('this is frome header', props)
  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "16px 0",
    position: "relative",
  };

  const cartStyle = {
    position: "absolute",
    top: "30px",
    right: "16px",
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <Typography variant="h6">OUR STORE</Typography>
      </Toolbar>
      <Box style={cartStyle}>
        <Typography variant="h6">Cart ({props.cart})</Typography>
      </Box>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.count,
});

export default connect(mapStateToProps)(Header);
