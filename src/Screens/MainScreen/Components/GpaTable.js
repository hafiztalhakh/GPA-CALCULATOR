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
  Typography,
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
    backgroundColor: "#E0E5CA",
    color: "#447e36",
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
  gpa: {
    paddingLeft: "20px",
  },
  semisterHead:{
    color:"#447e36",
    marginBottom:"10px"
  }
}));

const GpaTable = (props) => {
  const classes = styles();
  let {semisterArr,semister} = props;
  const { semisterData } = useContext(GlobalContext);

  

  const calGpa = (gpaArr, totalCrhs) => {
    // console.log(gpaArr,"arr")
    let total = 0;
    gpaArr.forEach((element) => {
      total += element.gpa;
    });
    let gpa = (total * 3) / totalCrhs;
    return `${gpa} GPA`;
  };

  return (
    <div>
      <Box>
        <Paper elevation={0} className={classes.rootTable}>
        <Typography variant="h4" className={classes.semisterHead} >Semister {semister} </Typography>
          <TableContainer className={classes.tableContainer}>
            {semisterArr.length > 0 &&
            <>
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
                  <TableCell className={classes.tableCell}>
                    Total Marks
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    Grade Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {semisterArr.map((val, i) => {
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
                          {val?.lab || '-' }
                        </TableCell>
                        <TableCell className={classes.tableCellBody}>
                          {val?.theory}
                        </TableCell>
                        <TableCell className={classes.tableCellBody}>
                          {val?.total}
                        </TableCell>
                        <TableCell className={classes.tableCellBody}>
                          {val?.gpa}
                        </TableCell>
                      </TableRow>
                    )
                })}
                {
                  semisterArr.length == 6 &&
                  <>
                <TableRow style={{ height: "20px" }}></TableRow>
                <TableRow className={classes.gpa}>{calGpa(semisterArr, 18)}</TableRow>
                  </>
                }
              </TableBody>
            </Table>
            </>
            }
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default GpaTable;
