import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


const navbarTheme = makeStyles((theme) => ({
  appBar:{
    background:'white',
    elevation: 'none',
    
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    fontFamily:"Tinos",
    fontSize: 20,
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily:"Inter",
    fontSize: 25,
    color: "black"
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "grey",
    },
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: [
      "Tinos",
      "Roboto",
      "Inter"
    ].join(",")
  },
});

function Navbar() {
  const classes = navbarTheme();

  return (
    <AppBar position="sticky" className={classes.appBar} elevation={0}>
      <CssBaseline />
      <Toolbar>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" className={classes.logo}>
            honoré
          </Typography>
        </ThemeProvider>
          <div className={classes.navlinks}>
            <a href="/" className={classes.link}>
              home
            </a>
            <a href="/#projects" component={Link} className={classes.link}>
              projects
            </a>
            <a href="/#connect" component={Link} className={classes.link}>
              connect
            </a>
            <a href="https://drive.google.com/file/d/12qwy5SmQSipDRl1OphmPEt9mDL22XvbD/view?usp=sharing" target="_blank" component={Link} className={classes.link}>
              resume
            </a>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;