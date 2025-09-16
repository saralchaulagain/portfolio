import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Nav = () => {
  const lists = ["About", "Skill", "Project", "Experience", "Education"];
  return (
    <Box className="flex justify-between">
      <Typography>Portfolio</Typography>
      {lists.map((list, index) => (
        <ul key={index} className="flex gap-2">
          <a href="#">
            <li>{list}</li>
          </a>
        </ul>
      ))}
      <Button>Contact</Button>
    </Box>
  );
};

export default Nav;
