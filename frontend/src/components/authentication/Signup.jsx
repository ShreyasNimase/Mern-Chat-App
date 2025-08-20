import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  // Handle input change
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  // Handle file upload
  const handleFileUpload = (file) => {
    if (!file) return;
    setPicLoading(true);
    setTimeout(() => {
      console.log("Uploaded file:", file);
      setPicLoading(false);
    }, 2000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // TODO: Add validation or API call
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{ mt: 2 }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
        >
          Create Account
        </Typography>

        <TextField
          label="Full Name"
          required
          fullWidth
          value={form.name}
          onChange={handleChange("name")}
          slotProps={{
            input: { sx: { borderRadius: 2 } },
          }}
        />

        <TextField
          label="Email Address"
          type="email"
          required
          fullWidth
          value={form.email}
          onChange={handleChange("email")}
          slotProps={{
            input: { sx: { borderRadius: 2 } },
          }}
        />

        <TextField
          label="Password"
          required
          fullWidth
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange("password")}
          slotProps={{
            input: {
              sx: { borderRadius: 2 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Confirm Password"
          required
          fullWidth
          type={showPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          slotProps={{
            input: {
              sx: { borderRadius: 2 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Upload your Picture
          </Typography>
          <TextField
            type="file"
            fullWidth
            slotProps={{
              input: {
                accept: "image/*",
                onChange: (e) => handleFileUpload(e.target.files[0]),
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 1, borderRadius: 2, fontWeight: "bold" }}
          disabled={picLoading}
        >
          {picLoading ? "Uploading..." : "Sign Up"}
        </Button>
      </Stack>
    </Box>
  );
};

export default Signup;
