import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = () => {
  return (
    <Box className=" h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent bg-about max-md:px-4">
      <Box className=" w-full ">
        <Box className="w-full">
          <Typography className="headers text-center w-full" variant="h4">
            My Experience
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 gap-2 mt-6 experience-card">
          <Box className="flex justify-between items-center px-2 py-2 rounded-md card-hover bg-[#ffffff]">
            <Box className="flex ">
              <Typography variant="subtitle1" className="font-bold">
                2025-Jul &mdash; 2025-Nov
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
