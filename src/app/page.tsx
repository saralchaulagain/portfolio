import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Home from "@/sections/Home";
import Skill from "@/sections/Skill";
import React from "react";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default page;
