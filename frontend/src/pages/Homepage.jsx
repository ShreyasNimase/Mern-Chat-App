import React, { useState } from "react";
import { Container, Box, Typography,Tabs,Tab, } from "@mui/material";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Homepage = () => {
  const [value,setValue] = useState(0);

  const handleChange =(event,newValue)=>{
    setValue(newValue);
  }
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 3,
          bgcolor: "white",
          width: "100%",
          m: "40px 0 15px 0",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Work Sans" }}>
          Talkify
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          p: 3,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Login" />
          <Tab label="Sign Up"/>
        </Tabs>
        {value === 0 && <Login />}
        {value === 1 && <Signup />}
      </Box>
    </Container>
  );
};
export default Homepage;
