import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    const handleGuestCredentials = () => {
      setFormData({
        name: "Guest User",
        email: "guest@example.com",
        password: "123456",
        confirmPassword: "123456",
      });
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", values);
  };


  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Login
        </Typography>

        {/* Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
          slotProps={{
            input: {
              type: "email",
              placeholder: "Enter your email",
            },
          }}
        />

        {/* Password */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          slotProps={{
            input: {
              type: "password",
              placeholder: "Enter your password",
            },
          }}
        />

        {/* Submit */}
        <Button 
        type="submit" 
        variant="contained" 
        color="primary" fullWidth
        >
          Login
        </Button>
      </Box>
      <Button
        type="button"
        variant="contained"
        sx={{ backgroundColor: "red", mt: 2 }}
        fullWidth
        onClick={handleGuestCredentials}
      >
        Get Guest User Credentials
      </Button>
    </Container>
  );
};

export default Login;
