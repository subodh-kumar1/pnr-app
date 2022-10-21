import React from "react";
import { AppBar, Avatar, Box, Typography } from "@mui/material";

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
            <Typography variant="h6">Courses</Typography>
          </Box>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h6">About Us</Typography>
          </Box>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h6">Get In Touch</Typography>
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
