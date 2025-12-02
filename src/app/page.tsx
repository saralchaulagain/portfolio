"use client";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Home from "@/sections/Home";
import Skill from "@/sections/Skill";
import React, { useRef } from "react";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import Nav from "@/components/Nav";

const Page = () => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    project: useRef(null),
    skill: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (key: string) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <Nav scrollTo={scrollTo} />
      <section ref={refs.home}>
        <Home />
      </section>
      <section ref={refs.about}>
        <About />
      </section>
      <section ref={refs.skill}>
        <Skill />
      </section>
      <section ref={refs.project}>
        <Project />
      </section>
      <section ref={refs.education}>
        <Education />
      </section>
      <section ref={refs.experience}>
        <Experience />
      </section>
      <section ref={refs.contact}>
        <Contact />
      </section>
    </main>
  );
};

export default Page;
