import { Typography } from '@material-ui/core'
import React from 'react'
import Dialog from "../../Component/Dialog"
import Header from './Components/Header'
import PersonalInfo from './Components/PersonalInfo'
import {
    Grid,
    makeStyles,
} from "@material-ui/core";

const MainScreen = () => {
    return (
        <div>
        <Header/>
        <Grid container >
            <Grid item xs={4}></Grid>
        </Grid>
            <PersonalInfo/>
        </div>

    )
}

export default MainScreen
