"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <Box className=" h-screen w-full flex justify-center items-center gap-3 pt-2 bg-transparent">
      <Box className="w-2/3 max-md:w-full">
        <Box className="w-full flex flex-col items-center justify-center">
          <Typography className="headers " variant="h4">
            Skills
          </Typography>
          <Box className="flex  mt-6">
            <Typography variant="body1">
              I enjoy working with modern frontend tools and frameworks to
              design clean and interactive websites.
            </Typography>
          </Box>
        </Box>
        <Box className="grid grid-cols-3 mt-6 gap-2 card-text">
          <Box className="border bg-[#ffffff] py-1 px-2 h-50 flex flex-col justify-center gap-4 rounded-2xl card-hover">
            <Typography variant="subtitle1" className=" text-center ">
              Core Frontend Skills
            </Typography>
            <Box className="grid grid-cols-2 gap-4 px-2">
              <Box className="flex gap-1 items-center">
                <Image src="/html.png" alt="html icon" width={32} height={32} />
                <Typography className="text-justify" variant="body1">
                  HTML
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image src="/css.png" alt="css icon" width={32} height={32} />
                <Typography className="text-justify" variant="body1">
                  CSS
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/js.png"
                  alt="javascript icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Javascript
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/typescript.png"
                  alt="typescript icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Typescript
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="border bg-[#ffffff] py-1 px-2 h-50 flex flex-col justify-center gap-4 rounded-2xl card-hover">
            <Typography variant="subtitle1" className=" text-center ">
              Frameworks & Libraries
            </Typography>
            <Box className="grid grid-cols-2 gap-4 px-2">
              <Box className="flex gap-1 items-center">
                <Image
                  src="/react.png"
                  alt="react icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  React
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/nextjs.png"
                  alt="nextjs icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Next.js
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/tailwind.png"
                  alt="tailwind icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Tailwind CSS
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="border bg-[#ffffff] py-1 px-2 h-50 flex flex-col justify-center gap-4 rounded-2xl card-hover">
            <Typography variant="subtitle1" className=" text-center ">
              Tools & Version Control
            </Typography>
            <Box className="grid grid-cols-2 gap-4 px-2">
              <Box className="flex gap-1 items-center">
                <Image src="/git.png" alt="git icon" width={32} height={32} />
                <Typography className="text-justify" variant="body1">
                  Git
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/github.png"
                  alt="github icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Github
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/vscode.png"
                  alt="vscode icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  Vs Code
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex flex-col items-center justify-center mt-6 card-text gap-6">
          <Typography className="headers " variant="h5">
            Current Focus
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-justify text-[var(--text-color)]"
          >
            I am currently learning GSAP for creating smooth and engaging
            animations, React Table for building efficient and dynamic data
            tables, and React Hook Form for handling forms with better
            validation and performance.
          </Typography>

          <Box className="border bg-[#ffffff] py-1 px-2 h-50 flex flex-col justify-center gap-4 rounded-2xl card-hover w-1/2 ">
            <Box className="grid grid-cols-1 gap-4 px-2">
              <Typography variant="subtitle1" className=" text-justify ">
                Learning
              </Typography>
              <Box className="flex gap-1 items-center">
                <Image src="/gsap.png" alt="gsap icon" width={32} height={32} />
                <Typography className="text-justify" variant="body1">
                  GSAP
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/react-form-hook.png"
                  alt="react-form-hook icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  React Form Hook
                </Typography>
              </Box>
              <Box className="flex gap-1 items-center">
                <Image
                  src="/react-table.png"
                  alt="react-table icon"
                  width={32}
                  height={32}
                />
                <Typography className="text-justify" variant="body1">
                  React Table
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
