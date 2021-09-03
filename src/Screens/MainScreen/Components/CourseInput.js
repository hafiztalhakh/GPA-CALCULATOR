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
  cgpa:{
    color: "#447e36",
  }
}));

const CourseInput = () => {
  const classes = styles();
  const { semisterData,addCourseMarks } = useContext(GlobalContext);
  const [credentials, setCredentials] = useState({
    code:"",
    title:"",
    crHours:"",
    lab:0,
    theory:""
  });
  
  

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("chala",Number(credentials?.theory)+Number(credentials?.lab))
    let score = Number(credentials?.theory)+Number(credentials?.lab)
    let grade = ''
    let point = 0

    if( score <= 100 && score >=0 ){
      if(score < 50 && score >=0 ){
        grade = 'FAILS'
        point= 0.0
      }
      else if(score >= 50 && score <=52 ){
        grade = 'D'
        point= 1.0
      }
      else if(score >= 53 && score <=56 ){
        grade = 'D+'
        point= 1.4
      }
      else if(score >= 57 && score <=60 ){
        grade = 'C-'
        point= 1.8
      }
      else if(score >= 61 && score <=63 ){
        grade = 'C'
        point= 2.0
      }
      else if(score >= 64 && score <=67 ){
        grade = 'C+'
        point= 2.4
      }
      else if(score >= 68 && score <=70 ){
        grade = 'B-'
        point= 2.8
      }
      else if(score >= 71 && score <=74 ){
        grade = 'B'
        point= 3.0
      }
      else if(score >= 75 && score <=79 ){
        grade = 'B+'
        point= 3.4
      }
      else if(score >= 80 && score <=84 ){
        grade = 'A-'
        point= 3.8
      }
      else if(score >= 85 && score <= 89 ){
        grade = 'A'
        point= 4.0
      }else if(score >= 90 && score <=100 ){
        grade = 'A+'
        point= 4.0
      }
        addCourseMarks({...credentials,grade:grade,gpa:point,total:score})
        // setCredentials({
        //     code:"",
        //     title:"",
        //     crHours:0,
        //     lab:0,
        //     theory:0
        //   })
    }
  };

  const calGpa = (gpaArr, totalCrhs) => {
    console.log(gpaArr,"arr")
    let total = 0;
    gpaArr.forEach((element) => {
      total += element.gpa;
    });
    let gpa = (total * 3) / totalCrhs;
    return `${gpa} CGPA`;
  };

  return (
    <div>
      <form onSubmit={onSubmit} >
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
              disabled= {semisterData.length < 48?false:true}
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
              disabled= {semisterData.length < 48?false:true}
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
              disabled= {semisterData.length < 48?false:true}
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
              disabled= {semisterData.length < 48?false:true}
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Lab Marks"
              fullWidth
              type="number"
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
              disabled= {semisterData.length < 48?false:true}
              style={{
                borderRadius: "10px",
                height: "45px",
                marginTop: "5px",
              }}
              placeholder="Theory Marks"
              fullWidth
              type="number"
              value={credentials?.theory}
              onChange={(e) =>
                setCredentials({ ...credentials, theory: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.btnCntnr} >
        {
          semisterData.length < 48 ?<Button type="submit" variant="outlined" className={classes.addBtn} > Add</Button>:
          null
        }
        </Grid>
        {
          semisterData.length == 48 && <Grid>
            <Box py={3} >
              <Typography variant="h5" className={classes.cgpa}>{calGpa(semisterData,144)} </Typography>
            </Box>
          </Grid>
        }
      </Grid>
        </form>
    </div>
  );
};

export default CourseInput;
