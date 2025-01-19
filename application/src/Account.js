import React from "react";
import { Box, Button, Typography } from "@mui/material";

const AccountPage = () => {
  const handleSignOut = () => {
    alert("Sign out button clicked!");
    // Add your sign-out logic here
  };

  const handleDeleteAccount = () => {
    alert("Delete account button clicked!");
    // Add your delete account logic here
  };

  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "flex-start", // Align content at the top
        padding: 3,
        backgroundColor: "#f9f9f9", // Light background color
        marginTop: 4, // Add some spacing from the top
      }}
    >
      {/* Account Information Title */}
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Account Information
      </Typography>

      {/* User Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start", // Align text to the left
          gap: 1.5, // Spacing between fields
          marginBottom: 4, // Space between fields and buttons
          width: "100%",
          maxWidth: "400px", // Constrain width for better layout
        }}
      >
        <Typography>Name: John Doe</Typography>
        <Typography>Email: johndoe@example.com</Typography>
        <Typography>Test Email Frequency: Weekly</Typography>
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2, // Spacing between buttons
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default AccountPage;
