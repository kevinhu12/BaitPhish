import { Box, Typography } from "@mui/material";
import React from "react";

const History = () => {
  return <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 3,
      backgroundColor: "beige"
    }}
  >
    <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
      Coming Soon!
    </Typography>
  </Box>
};

export default History;
