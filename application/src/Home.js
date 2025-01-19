import React from "react";
import { Box, Button, Typography } from "@mui/material";

const HomePage = () => {
  const handleTriggerTestEmail = () => {
    alert("Trigger test email button clicked!");
    // Add logic for triggering the test email here
  };

  return (
    <Box
      sx={{
        height: "100vh", // Full height of the viewport
        backgroundColor: "beige", // Set background color to beige
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Horizontally center the content
        justifyContent: "center", // Vertically center the content
        padding: 2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center", // Center align the title
          marginBottom: 3, // Add some space below the title
        }}
      >
        Welcome to the Home Page
      </Typography>

      {/* Button to Trigger Test Email */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleTriggerTestEmail}
      >
        Trigger Test Email
      </Button>
    </Box>
  );
};

export default HomePage;
