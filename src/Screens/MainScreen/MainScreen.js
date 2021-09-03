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
