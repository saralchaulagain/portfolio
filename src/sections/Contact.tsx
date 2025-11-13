"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box className="about h-screen w-full flex justify-center items-center pt-2 bg-transparent">
      <Box className="w-2/3">
        {/* Title */}
        <Box className="w-full flex flex-col items-center justify-center mb-8">
          <Typography className="headers" variant="subtitle2">
            Get in touch
          </Typography>
          <Typography className="headers" variant="h4">
            CONTACT
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box className="flex gap-8 items-stretch">
          {/* Left side — contact info */}
          <Box className="flex flex-col justify-center gap-4 card-text flex-1">
            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/phone-call.png" alt="phone icon" className="h-6" />
              <Typography variant="body1">9845765515</Typography>
            </Box>

            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/email.png" alt="email icon" className="h-6" />
              <Typography variant="body1">
                saral.chaulagain@gmail.com
              </Typography>
            </Box>

            <Box className="border bg-bgLight py-3 px-4 flex items-center gap-4 rounded-2xl card-hover">
              <img src="/location.png" alt="location icon" className="h-6" />
              <Typography variant="body1">Kathmandu, Nepal</Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box className="w-[2px] bg-divider self-stretch" />
          <Box>THis is form</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
