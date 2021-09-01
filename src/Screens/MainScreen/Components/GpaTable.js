import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  Chip,
  CircularProgress,
} from "@material-ui/core";
import { GlobalContext } from "../../../Context/GlobalState";

const styles = makeStyles((theme) => ({
  rootTable: {
    width: "100%",
    margin: "30px 0px",
    borderRadius: "8px",
  },
  tableContainer: {
    fontFamily: "inherit",
  },
  tableRow: {
    "&:hover": {
      color: "#09926E",
      backgroundColor: "#f5f5f5",
    },
  },
  tableCell: {
    fontFamily: "inherit",
    backgroundColor: "#0095FF",
    color: "#ffff",
    textAlign: "left",
    fontWeight: "bold",
    textTransform: "upperCase",
  },
  tableCellBody: {
    textAlign: "left",
  },
  lastTableRow: {
    "&:hover": {
        color: "#09926E",
        backgroundColor: "#f5f5f5",
      },
    paddingTop: "50px",
  },
}));

const GpaTable = () => {
  const classes = styles();
  const { semisterData } = useContext(GlobalContext);
  return (
    <div>
      <Box>
        <Paper elevation={0} className={classes.rootTable}>
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    Course Code
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    Course Title
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    Credit Hours
                  </TableCell>
                  <TableCell className={classes.tableCell}>Lab Marks</TableCell>
                  <TableCell className={classes.tableCell}>
                    Theory Marks
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {semisterData.map((val, i) => {
                    if (i% 6 !== 0 || i == 0 ) {
                      return (
                          
                        <TableRow className={classes.tableRow}>
                          <TableCell className={classes.tableCellBody}>
                            {val?.code}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.title}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.crHours}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.lab}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.theory}
                          </TableCell>
                          </TableRow>
                      );
                    } else {
                      return (
                          <>
                          <TableRow>cal</TableRow>
                          <TableRow style={{height:"50px"}} ></TableRow>
                        <TableRow className={classes.lastTableRow}  >
                          <TableCell className={classes.tableCellBody}>
                            data
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.title}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.crHours}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.lab}
                          </TableCell>
                          <TableCell className={classes.tableCellBody}>
                            {val?.theory}
                          </TableCell>
                        </TableRow>
                        </>
                      );
                    }
                  })}
              </TableBody>
              {/* {
                  semisterData.map((val,i)=>{
                      if((i+1)%6 == 0){
                          return(
                            <TableRow  className={classes.tableRow}>

                            </TableRow>
                          )
                      }else{
                          return(
                              <h1>adad</h1>
                          )
                      }
                  })
              } */}
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default GpaTable;
