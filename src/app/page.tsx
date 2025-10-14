import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Home from "@/sections/Home";
import Skill from "@/sections/Skill";
import React from "react";
import Project from "@/sections/Project";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Education />
      <Experience />
    </div>
  );
};

export default page;
