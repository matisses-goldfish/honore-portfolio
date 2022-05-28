import React from "react";
import {
  Typography,
  makeStyles,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const footerTheme = makeStyles((theme) => ({
  footer:{
    background: 'white',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily:'Inter',
    fontweight: 600,
    mb: 10

  }
}));

const Footer = () => {

  const classes = footerTheme();
  //To do need to check on the page and need to add style on container, grid or typography
  return (
      <footer className="footer" className={classes.footer} >
          <Typography sx={{fontFamily: 'Inter'}}>
            made with love-  © honore 
          </Typography>
      </footer>
  );
};

export default Footer;
