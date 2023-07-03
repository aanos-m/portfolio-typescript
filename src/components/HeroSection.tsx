import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";
import Button from "@mui/material-next/Button";



type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className="p-5 mt-5 bg-slate-200 flex flex-col justify-center items-center">
        <span className="text-4xl transition ease-in-out duration-500 hover:text-5xl font-bold p-2"> Aanos Mahmood </span>
        <span className="text-lg font-semibold p-2"> Software Engineer</span>
        <img className="p-4 object-contain max-w-none max-h-96" src='./img.png' alt="my image" />
          <p className="font-normal text-center subpixel-antialiased"> 
            Hi, I'm an aspiring Software Developer and a rising senior pursuing a B.S. in Software Engineering 
            expected to gradute in May 2024 from The University of of Texas at Dallas. I'm always excited to take 
            on new challanges that put me outside my confort zone and explore advancing technology.
            A few of my hobbies are to workout, play sports, skateboard, make beats, and sometimes cook/bake. 
          </p>
          <Stack direction="row" className="p-2">
            <Button disabled={false} size="large" variant='filledTonal' startIcon={<GitHubIcon fontSize="large"/>}/>
          </Stack>
      </div>
    </>
  );
};

export default HeroSection;
