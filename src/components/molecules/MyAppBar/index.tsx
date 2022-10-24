import React from "react";
import { AppBar, Avatar, Box, Link, Typography } from "@mui/material";

const MyAppBar = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}
      >
        <Box sx={{ margin: 2, fontFamily: "cursive" }}>L O G O</Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ margin: 2 }}>
            <Link href="/" color="lightcyan" underline="none">
              <Typography variant="h6">Courses</Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 2 }}>
            <Link href="/about" color="lightcyan" underline="none">
              <Typography variant="h6">About Us</Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 2 }}>
            <Link href="/contact" color="lightcyan" underline="none">
              <Typography variant="h6">Get In Touch</Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Avatar alt="Subodh Kumar" />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};
export default MyAppBar;
