import React from "react";
import {
  Grid,
  makeStyles,
  Box,
  Typography,
  OutlinedInput,
  Button,
  Container,
} from "@material-ui/core";
import logo from "../../../Assets/logo.png";
import { GlobalContext } from "../../../Context/GlobalState";

const styles = makeStyles((theme) => ({
  submitBtn: {
    float: "right",
    marginTop: "20px",
    marginRight: "10px",
    backgroundColor: "#447E36",
    color: "#ffff",
    "&:hover": {
      backgroundColor: "#447E36",
      color: "#ffff",
    },
  },
  mainHeader: {
    maxWidth: "100%",
    height: "auto",
    padding: "50px 0px",
    backgroundColor: "#E0E5CA",
  },
  cntnr: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  logo: {
    maxWidth: "240px",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
    },
  },
  gpaHead: {
    marginTop: "20px",
    color: "#447e36",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
      alignSelf: "center",
    },
  },
}));

const Header = () => {
  const classes = styles();
  return (
    <div className={classes.mainHeader}>
      <Container className={classes.cntnr}>
        <img className={classes.logo} src={logo} />
        <Typography variant="h4" className={classes.gpaHead}>
          GPA Calculator
        </Typography>
      </Container>
    </div>
  );
};

export default Header;
