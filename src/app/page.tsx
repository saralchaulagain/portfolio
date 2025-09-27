import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Home from "@/sections/Home";
import Skill from "@/sections/Skill";
import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Experience />
      <Education />
    </div>
  );
};

export default page;
