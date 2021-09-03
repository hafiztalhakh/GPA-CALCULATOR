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
}));

const GpaTable = () => {
  const classes = styles();
  const { semisterData } = useContext(GlobalContext);

  let firstSemister = semisterData?.slice(0, 6);
  let secondSemister = semisterData?.slice(6, 12);
  let thirdSemister = semisterData?.slice(12, 18);
  let fourthSemister = semisterData?.slice(18, 24);
  let fifthSemister = semisterData?.slice(24, 30);
  let sixSemister = semisterData?.slice(30, 36);
  let sevenSemister = semisterData?.slice(36, 42);
  let eightSemister = semisterData?.slice(42, 48);

  const calGpa = (gpaArr, totalCrhs) => {
    console.log(gpaArr,"arr")
    let total = 0;
    gpaArr.forEach((element) => {
      total += element.gpa;
    });
    let gpa = (total * 3) / totalCrhs;
    return `${gpa} GPA`;
  };

  console.log(firstSemister, "1", secondSemister, "2", thirdSemister, "3");
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
                  <TableCell className={classes.tableCell}>
                    Total Marks
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    Grade Point
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {semisterData?.slice(0,48).map((val, i) => {
                  if (i % 6 !== 0 || i == 0) {
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
                    );
                  } else {
                    return (
                      <>
                        <TableRow style={{ height: "20px" }}></TableRow>
                        <TableRow className={classes.gpa}>
                          {i == 6
                            ? calGpa(firstSemister, 18)
                            : (i == 12)
                            ? calGpa(secondSemister, 18)
                            : (i == 18)
                            ? calGpa(thirdSemister, 18)
                            : (i == 24)
                            ? calGpa(fourthSemister, 18)
                            : (i == 30)
                            ? calGpa(fifthSemister, 18)
                            : (i == 36)
                            ? calGpa(sixSemister, 18)
                            : (i == 42)
                            ? calGpa(sevenSemister, 18)
                            : calGpa(eightSemister, 18)}
                        </TableRow>
                        <TableRow style={{ height: "50px" }}></TableRow>
                        <TableRow className={classes.lastTableRow}>
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
                      </>
                    );
                  }
                })}
                {
                  semisterData.length >= 48 &&
                  <>
                <TableRow style={{ height: "20px" }}></TableRow>
                <TableRow className={classes.gpa}>{calGpa(eightSemister, 18)}</TableRow>
                  </>
                }
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
