import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleTriggerTestEmail = async () => {
    setLoading(true);
    try {
      await axios.get("http://127.0.0.1:5000/api/getGeneratedEmail");
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "beige"
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: "center", marginBottom: 3 }}
      >
        Welcome!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleTriggerTestEmail}
      >
        Trigger Test Email
      </Button>
      {loading && <p>Loading...</p>}
    </Box>
  );
};

export default Home;
