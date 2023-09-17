import React from "react";
import { Typography, Container } from "@mui/material";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "16px 0",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <Container maxWidth="md">
        <Typography variant="h6" align="center">
          &copy; 2023 OUR STORE
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
