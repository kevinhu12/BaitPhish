import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>

          {/* Route to specific pages */}
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/account" color="inherit">
            Account
          </Button>
          <Button component={Link} to="/history" color="inherit">
            History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
