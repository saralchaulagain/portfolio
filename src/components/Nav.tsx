"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  scrollTo: (section: string) => void;
};

export default function Nav({ scrollTo }: Props) {
  const lists = [
    "Home",
    "About",
    "Skill",
    "Project",
    "Education",
    "Experience",
    "Contact",
  ];

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "true") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Box className="w-full fixed top-0 right-0 left-0 flex justify-between items-center line px-2 py-3 bg-background/80 backdrop-blur-md z-50 shadow-sm">
      {/* Logo */}
      <Typography
        variant="h5"
        className="cursor-pointer font-msMadi headers"
        sx={{ fontFamily: "'Ms Madi', cursive" }}
        onClick={() => scrollTo("home")}
      >
        Portfolio
      </Typography>

      {/* Nav Links */}
      <ul className="flex gap-6">
        {lists.map((list, idx) => (
          <li key={idx}>
            <button
              onClick={() => scrollTo(list.toLowerCase())}
              className="nav-text-hover outline-none bg-transparent border-none cursor-pointer"
            >
              {list}
            </button>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <Box className="flex gap-2">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setDark(!dark);
            localStorage.setItem("mode", JSON.stringify(!dark));
          }}
        >
          {dark ? "White?" : "Dark?"}
        </Button>
      </Box>
    </Box>
  );
}
