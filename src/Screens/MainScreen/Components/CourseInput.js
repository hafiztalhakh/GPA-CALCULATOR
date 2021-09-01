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
  addBtn: {
    marginTop: "20px",
    marginLeft: "10px",
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
  btnCntnr: {
    display: "flex",
    justifyContent :"space-between"
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
  const [credentials, setCredentials] = useState();
  //   ("Semister 3");
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx={1} mt={2}>
            <Typography style={{ color: "gray" }}>Course Code</Typography>
            <OutlinedInput
              type="text"
              required
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Course Code"
              fullWidth
              type="text"
              value={credentials?.code}
              onChange={(e) =>
                setCredentials({ ...credentials, code: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx={1} mt={2}>
            <Typography style={{ color: "gray" }}>Course Title</Typography>
            <OutlinedInput
              type="text"
              required
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Course Title"
              fullWidth
              type="text"
              value={credentials?.title}
              onChange={(e) =>
                setCredentials({ ...credentials, title: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx={1} mt={2}>
            <Typography style={{ color: "gray" }}>Credit Hours</Typography>
            <OutlinedInput
              type="text"
              required
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Credit Hours"
              fullWidth
              type="text"
              value={credentials?.crHours }
              onChange={(e) =>
                setCredentials({ ...credentials, crHours: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx={1} mt={2}>
            <Typography style={{ color: "gray" }}>Lab Marks</Typography>
            <OutlinedInput
              type="text"
              required
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Lab Marks"
              fullWidth
              type="text"
              value={credentials?.lab}
              onChange={(e) =>
                setCredentials({ ...credentials, lab: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mx={1} mt={2}>
            <Typography style={{ color: "gray" }}>Theory Marks</Typography>
            <OutlinedInput
              type="text"
              required
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Theory Marks"
              fullWidth
              type="text"
              value={credentials?.theory}
              onChange={(e) =>
                setCredentials({ ...credentials, theory: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.btnCntnr} >
            <Button variant="outlined" className={classes.addBtn} > Add</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseInput;
