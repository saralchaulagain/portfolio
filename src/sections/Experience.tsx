import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent bg-about">
      <Box className="w-2/3">
        <Box>
          <Typography className="headers text-center" variant="h4">
            My Experience
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 gap-2 mt-6 experience-card">
          <Box className="flex justify-between items-center px-1 py-2 rounded-md card-hover bg-[#ffffff]">
            <Box className="flex ">
              <Typography variant="subtitle1" className="font-bold">
                2025-July &mdash; current
              </Typography>
            </Box>
            <Box className="flex flex-col ">
              <Typography variant="subtitle1" className="font-bold">
                ZION TECH FIRM
              </Typography>
              <Typography variant="body1">Internship, Front-end</Typography>
            </Box>
          </Box>
          <Box className="flex justify-between items-center px-1 py-2 rounded-md card-hover bg-[#ffffff] ">
            <Box className="flex ">
              <Typography
                variant="subtitle1"
                className="font-bold"
              ></Typography>
            </Box>
            <Box className="flex flex-col ">
              <Typography
                variant="subtitle1"
                className="font-bold"
              ></Typography>
              <Typography variant="body1"></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
