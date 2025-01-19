import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Account = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 3,
        marginTop: 4
      }}
    >
      {/* Header */}
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Account Information
      </Typography>

      {/* Data Fields */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1.5,
          marginBottom: 4
        }}
      >
        <Typography>Name: Owen Chung</Typography>
        <Typography>Email: owengtchung@gmail.com</Typography>
        <Typography>Test Email Frequency: Weekly</Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2
        }}
      >
        <Button
          variant="contained"
          color="primary"
        >
          Sign Out
        </Button>
        <Button
          variant="outlined"
          color="error"
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default Account;
