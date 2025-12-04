"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <Box className="h-screen w-full flex justify-center items-center gap-3 max-md:gap-3 pt-2 max-md:py-15 max-md:flex-col-reverse max-md:justify-evenly max-md:px-4">
      <Box className="max-md:w-full  ">
        <Typography className="headers" variant="subtitle1">
          Hello, I&#39;m
        </Typography>
        <Box className="flex flex-col mt-6  gap-1">
          <Typography
            className="headers"
            sx={{ fontFamily: "'Ms Madi', cursive" }}
            variant="h3"
          >
            Saral Chaulagain
          </Typography>
          <Typography sx={{ fontFamily: "'Ms Madi', cursive" }} variant="h5">
            Front-End Developer
          </Typography>
        </Box>
        <Box className="mt-6 ">
          <Typography variant="body1">
            I create exceptional digital experiences through thoughtful design
            and clean code. Passionate about turning ideas into beautiful,
            functional applications.
          </Typography>
        </Box>
        <Box className="flex gap-2 mt-6 ">
          <Button variant="contained">View my work</Button>
          <Button variant="outlined">Download CV</Button>
        </Box>
        <Box className="flex gap-1.5 text-xl mt-6 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/saral.chaulagain12/?hl=en"
            className="text-hover"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/saral.chaulagain.56/"
            className="text-hover"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/saralchaulagain"
            className="text-hover"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/saral-chaulagain-897986237/"
            className="text-hover"
          >
            <FaLinkedin />
          </a>
        </Box>
      </Box>
      <Box>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={400}
          height={300}
          className="rounded-full max-md:w-50 max-md:h-60"
        />
      </Box>
    </Box>
  );
};

export default Home;
