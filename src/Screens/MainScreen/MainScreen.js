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
  let firstSemister = semisterData?.slice(0, 6);
  let secondSemister = semisterData?.slice(6, 12);
  let thirdSemister = semisterData?.slice(12, 18);
  let fourthSemister = semisterData?.slice(18, 24);
  let fifthSemister = semisterData?.slice(24, 30);
  let sixSemister = semisterData?.slice(30, 36);
  let sevenSemister = semisterData?.slice(36, 42);
  let eightSemister = semisterData?.slice(42, 48);

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CourseInput />
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <GpaTable /> */}
            {firstSemister.length > 0 && <GpaTable semisterArr={firstSemister} semister={1} /> }
            {secondSemister.length > 0 && <GpaTable semisterArr={secondSemister} semister={2} /> }
            {thirdSemister.length > 0 && <GpaTable semisterArr={thirdSemister} semister={3} /> }
            {fourthSemister.length > 0 && <GpaTable semisterArr={fourthSemister} semister={4} /> }
            {fifthSemister.length > 0 && <GpaTable semisterArr={fifthSemister} semister={5} /> }
            {sixSemister.length > 0 && <GpaTable semisterArr={sixSemister} semister={6} /> }
            {sevenSemister.length > 0 && <GpaTable semisterArr={sevenSemister} semister={7} /> }
            {eightSemister.length > 0 && <GpaTable semisterArr={eightSemister} semister={8} /> }
          </Grid>
        </Grid>
      </Container>
      <PersonalInfo />
    </div>
  );
};

export default MainScreen;
