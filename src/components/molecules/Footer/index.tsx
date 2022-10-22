import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box bgcolor="black" textAlign="center" padding={4}>
      <Typography variant="h6" color="whitesmoke">
        © 2022 - React Project by Subodh
      </Typography>
      <Link
        href="https://github.com/subodh-kumar1/react-app"
        underline="hover"
        color="lightcyan"
      >
        Source Code
      </Link>
    </Box>
  );
};
export default Footer;
