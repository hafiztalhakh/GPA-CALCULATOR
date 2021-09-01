import React, { useState,useContext } from "react";
import Dialog from "../../../Component/Dialog";
import {
  Grid,
  makeStyles,
  Box,
  Typography,
  OutlinedInput,
  Button,
} from "@material-ui/core";
import { GlobalContext } from "../../../Context/GlobalState"

const styles = makeStyles((theme) => ({
  infoHead: {
    color: "#447E36",
    marginTop: "10px",
  },
  submitBtn:{
      float:"right",
      marginTop:"20px",
      marginRight:"10px",
      backgroundColor:"#447E36",
      color:"#ffff",
      "&:hover": {
        backgroundColor:"#447E36",
      color:"#ffff",
    },
  }
}));

const PersonalInfo = () => {
  const classes = styles();
  const [isOpen, setIsOpen] = useState(true);
  const [credentials, setCredentials] = useState()

  const { addPersonaInfo }=useContext(GlobalContext)

  const hideDialogHandler = () => {
    setIsOpen(false);
  };

  const onSubmit = e=>{
    e.preventDefault()
    // console.log("checking")
    addPersonaInfo(credentials)
    if(Object.keys(credentials).length  > 0){
        setIsOpen(false)
    }
}

  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth={true}
        scrollType="body"
        hideDialogHandler={hideDialogHandler}
        isOpen={isOpen}
      >
        <Box
          px={4}
          py={4}
          style={{ backgroundColor: "#FAFBFD", overflowY: "hidden" }}
        >
          <form onSubmit={onSubmit} >
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.infoHead} variant="h3">
                  Student Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>
                    Degree Program
                  </Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Enter Your Degree Program"
                    fullWidth
                    type="text"
                    value={credentials?.program}
                    onChange={ (e) => setCredentials({...credentials,program:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>
                    Academic Year
                  </Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Enter Your Academic Year"
                    fullWidth
                    type="number"
                    value={credentials?.year}
                    onChange={ (e) => setCredentials({...credentials,year:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>Department</Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Department"
                    fullWidth
                    type="text"
                    value={credentials?.department}
                    onChange={ (e) => setCredentials({...credentials,department:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>Full Name</Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Full Name"
                    fullWidth
                    type="text"
                    value={credentials?.name}
                    onChange={ (e) => setCredentials({...credentials,name:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>
                    Father's Name
                  </Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Father's Name"
                    fullWidth
                    type="text"
                    value={credentials?.fatherName}
                    onChange={ (e) => setCredentials({...credentials,fatherName:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mx={1} mt={2}>
                  <Typography style={{ color: "gray" }}>Seat Number</Typography>
                  <OutlinedInput
                    type="text"
                    required
                    style={{
                      borderRadius: "10px",
                      height: "45px",
                      marginTop: "5px",
                    }}
                    placeholder="Seat Number"
                    fullWidth
                    type="text"
                    value={credentials?.seatNo}
                    onChange={ (e) => setCredentials({...credentials,seatNo:e.target.value})}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                  <Button variant="outlined" className={classes.submitBtn} type="submit" >Submit</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </div>
  );
};

export default PersonalInfo;
