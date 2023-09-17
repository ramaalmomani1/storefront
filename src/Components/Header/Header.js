import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "16px 0",
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <Typography variant="h6">OUR STORE</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
