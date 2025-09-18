import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <Box className="flex justify-center items-center mt-20">
      <Box className="w-2/5 ">
        <Typography variant="subtitle1">Hello, I&#39;m</Typography>
        <Box className="flex flex-col mt-6 gap-1">
          <Typography variant="h3">Saral Chaulagain</Typography>
          <Typography variant="h5">
            Full Stack Developer & UI/UX Designer
          </Typography>
        </Box>
        <Box className="mt-6">
          <Typography variant="body1">
            I create exceptional digital experiences through thoughtful design
            and clean code. Passionate about turning ideas into beautiful,
            functional applications.
          </Typography>
        </Box>
        <Box className="flex gap-2 mt-6">
          <Button variant="contained">View my work</Button>
          <Button variant="outlined">Download CV</Button>
        </Box>
        <Box className="flex gap-1.5 text-xl mt-6">
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
          <FaLinkedin />
        </Box>
      </Box>
      <Box>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={400}
          height={300}
          className="rounded-full"
        />
      </Box>
    </Box>
  );
};

export default About;
