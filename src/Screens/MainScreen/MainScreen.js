import React,{ useState, useContext,useEffect }  from "react";
import { Container, Typography } from "@material-ui/core";
import Dialog from "../../Component/Dialog";
import Header from "./Components/Header";
import PersonalInfo from "./Components/PersonalInfo";
import { Grid, makeStyles } from "@material-ui/core";
import CourseInput from "./Components/CourseInput";
import GpaTable from "./Components/GpaTable";

import { GlobalContext } from "../../Context/GlobalState";

const MainScreen = () => {
  const { semisterData } = useContext(GlobalContext);
  const [semister, setSemister] = useState('Semister 1')

//   useEffect(() => {
//     setSemister(
//         semisterData.length < 6
//             ? "Semister 1"
//             : (semisterData.length >= 6 && semisterData.length) < 12
//             ? "Semister 2"
//             : (semisterData.length >= 12 && semisterData.length) < 18
//             ? "Semister 3"
//             : (semisterData.length >= 18 && semisterData.length) < 24
//             ? "Semister 4"
//             : (semisterData.length >= 24 && semisterData.length) < 30
//             ? "Semister 5"
//             : (semisterData.length >= 30 && semisterData.length) < 36
//             ? "Semister 6"
//             : (semisterData.length >= 36 && semisterData.length) < 42
//             ? "Semister 7"
//             : "Semister 8"
//     )
//   }, [semisterData])

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CourseInput />
          </Grid>
          <Grid item xs={12} md={8}>
            <GpaTable />
          </Grid>
        </Grid>
      </Container>
      <PersonalInfo />
    </div>
  );
};

export default MainScreen;
