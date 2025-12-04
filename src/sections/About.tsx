"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center gap-3 pt-2 bg-about my-0">
      <Box className="w-2/3 max-md:w-full">
        <Box className="w-full flex flex-col items-center justify-center">
          <Typography className="headers " variant="h4">
            About me
          </Typography>
          <Box className="flex flex-col gap-2 mt-6 max-md:mt-1">
            <Typography variant="body1">
              A passionate and motivated front-end developer intern, freshly
              equipped with modern web development skills and a hunger to
              contribute to real-world projects. I thrive on transforming
              creative ideas into clean, functional, and user-friendly
              interfaces.
            </Typography>
            <Typography variant="body1">
              I am actively seeking an internship opportunity where I can apply
              my knowledge, learn from experienced developers, and help build
              impactful digital experiences.
            </Typography>
          </Box>
        </Box>
        <Box className="grid grid-cols-3 mt-6 gap-2 card-text max-md:grid-cols-2 max-md:mt-1 ">
          <Box className="border bg-[#ffffff] py-1 px-2  flex flex-col justify-center gap-4 rounded-2xl card-hover  max-md:gap-1 ">
            <Typography variant="subtitle1" className=" text-center ">
              Clean Code
            </Typography>
            <Typography className="text-justify" variant="body1">
              Writing readable and maintainable code using modern HTML, CSS, and
              JavaScript (ES6+).
            </Typography>
          </Box>

          <Box className="border bg-[#ffffff] py-1 px-2 flex flex-col justify-center gap-4 rounded-2xl card-hover max-md:gap-1">
            <Typography variant="subtitle1" className=" text-center ">
              Responsive Design
            </Typography>
            <Typography className="text-justify" variant="body1">
              Building websites that provide a seamless experience across all
              devices, from desktop to mobile.
            </Typography>
          </Box>
          <Box className="border bg-[#ffffff] py-1 px-2  flex flex-col justify-center gap-4 rounded-2xl card-hover max-md:gap-1  max-md:col-span-2">
            <Typography variant="subtitle1" className=" text-center ">
              UI/UX Implementation
            </Typography>
            <Typography className="text-justify" variant="body1">
              Bringing designs to life with a strong attention to detail,
              focusing on creating intuitive and accessible user interfaces.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
