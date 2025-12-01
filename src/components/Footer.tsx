import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className="my-6 h-18 ml-4 cursor-pointer border-t-[1px] flex flex-r items-end">
      <Typography variant="body2">
        © 2025 Saral Chaulagain. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
