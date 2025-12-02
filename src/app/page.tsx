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

type SectionKeys =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "project"
  | "skill"
  | "contact";
const Page = () => {
  const refs: Record<SectionKeys, React.RefObject<HTMLDivElement | null>> = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    skill: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (key: SectionKeys) => {
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
