import React, { useState, useContext } from "react";
import {
  Grid,
  makeStyles,
  Box,
  Typography,
  OutlinedInput,
  Button,
  Container,
} from "@material-ui/core";
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
  semisterHead: {
    marginTop: "20px",
    color: "#447e36",
  },
}));

const CourseInput = () => {
  const classes = styles();
  const { semisterData } = useContext(GlobalContext);
//   ("Semister 3");
  return (
    <div>
      <Typography variant="h3" className={classes.semisterHead}>
        {semisterData.length < 6
          ? "Semister 1"
          : (semisterData.length >= 6 && semisterData.length) < 12
          ? "Semister 2"
          : (semisterData.length >= 12 && semisterData.length) < 18
          ? "Semister 3"
          : (semisterData.length >= 18 && semisterData.length) < 24
          ? "Semister 4"
          : (semisterData.length >= 24 && semisterData.length) < 30
          ? "Semister 5"
          : (semisterData.length >= 30 && semisterData.length) < 36
          ? "Semister 6"
          : (semisterData.length >= 36 && semisterData.length) < 42
          ? "Semister 7"
          : "Semister 8"}
      </Typography>
    </div>
  );
};

export default CourseInput;
