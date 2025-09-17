"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const lists = ["About", "Skill", "Project", "Experience", "Education"];
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "true") {
      setDark(true);
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <Box className="flex justify-between items-center border-b-gray-1">
      <Typography className="cursor-pointer" variant="h5">
        Portfolio
      </Typography>
      <ul className="flex gap-6">
        {lists.map((list, index) => (
          <li key={index}>
            <a href="#">{list}</a>
          </li>
        ))}
      </ul>
      <Box className="flex gap-2">
        <Button variant="outlined" color="secondary">
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
};

export default Nav;
