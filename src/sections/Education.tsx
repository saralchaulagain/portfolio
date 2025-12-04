"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const Education = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent max-md:px-4">
      <Box className=" w-full">
        <Box className="w-full flex flex-col items-center justify-center">
          <Typography className="headers " variant="h4">
            Education
          </Typography>
          <Box className="flex  mt-6">
            <Typography variant="body1">
              Built a strong foundation in technology and problem-solving
              through academic learning, while gaining skills in teamwork,
              adaptability, and continuous growth.
            </Typography>
          </Box>
        </Box>
        <Box className="grid grid-cols-1 mt-6 gap-4 card-text">
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

export default Education;
