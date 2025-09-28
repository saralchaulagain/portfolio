import { Box, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent bg-about">
      <Box className="w-2/3">
        <Box>
          <Typography className="headers text-center" variant="h4">
            My Projects
          </Typography>
        </Box>
        <Box className="grid grid-cols-2 gap-2 mt-6 experience-card">
          <Box className="border bg-[#ffffff] py-1 px-2 h-40 flex  gap-4 rounded-2xl card-hover">
            <img src="/aryan.png" alt="html icon" />
            <Box className="flex flex-col">
              <Typography variant="subtitle1" className=" text-center ">
                Bachelor of Information Technology (BIT)
              </Typography>
              <Box className="flex flex-col gap-2 mt-6">
                <Box className="grid grid-cols-1 gap-4 ">
                  <Typography variant="body1">
                    Aryan School of Engineering and Management, Kathmandu
                    (Affiliated to Tribhuvan University)
                  </Typography>
                </Box>
                <Box className="flex ">
                  <Typography variant="subtitle1" className="font-bold">
                    2021 &mdash; present
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="border bg-[#ffffff] py-1 px-2 h-40 flex  gap-4 rounded-2xl card-hover">
            <img src="/himalaya.png" alt="html icon" />
            <Box className="w-full flex flex-col ">
              <Typography variant="subtitle1" className=" text-center ">
                High School (+2 Science)
              </Typography>
              <Box className="flex flex-col gap-2 mt-6">
                <Box className="grid grid-cols-1 gap-4 ">
                  <Typography variant="body1">
                    Himalaya College, Koteshwor
                  </Typography>
                </Box>
                <Box className="flex ">
                  <Typography variant="subtitle1" className="font-bold">
                    2019 &mdash; 2021
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
