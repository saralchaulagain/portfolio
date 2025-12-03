import { Box, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent bg-about">
      <Box className="w-2/3 max-md:w-full">
        <Box>
          <Typography className="headers text-center" variant="h4">
            My Projects
          </Typography>
        </Box>
        <Box className="grid grid-cols-2 gap-2 mt-6 experience-card">
          <Box className="border bg-[#ffffff] py-1 px-2 h-45 flex  gap-4 rounded-2xl card-hover">
            <img src="/cloudy.png" alt="weather icon" />
            <Box className="flex flex-col">
              <Typography variant="subtitle1" className=" text-center ">
                Weather App
              </Typography>
              <Box className="flex flex-col gap-2 mt-6">
                <Typography variant="body1">
                  A simple and responsive weather application built using HTML,
                  CSS, and JavaScript. It fetches real-time weather data from a
                  public API and displays temperature, humidity, and weather
                  conditions of any city entered by the user.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="border bg-[#ffffff] py-1 px-2 h-45 flex  gap-4 rounded-2xl card-hover">
            <img src="/time-management.png" alt="weather icon" />
            <Box className="flex flex-col">
              <Typography variant="subtitle1" className=" text-center ">
                Event Management System (Internship Project)
              </Typography>
              <Box className="flex flex-col gap-2 mt-6">
                <Typography variant="body1">
                  Currently working as a Frontend Developer Intern,
                  collaborating with a company team to build a responsive event
                  management web application using React and Tailwind CSS.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
