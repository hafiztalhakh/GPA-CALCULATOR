import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Dialog from "../../Component/Dialog"
import Header from './Components/Header'
import PersonalInfo from './Components/PersonalInfo'
import {
    Grid,
    makeStyles,
} from "@material-ui/core";
import CourseInput from './Components/CourseInput'

const MainScreen = () => {
    return (
        <div>
        <Header/>
        <Container>
        <Grid container >
            <Grid item xs={4}>
                <CourseInput/>
            </Grid>
        </Grid>
        </Container>
            <PersonalInfo/>
        </div>

    )
}

export default MainScreen
