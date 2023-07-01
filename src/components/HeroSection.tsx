import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, IconButton } from "@mui/material";


type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className="p-5 mt-5 bg-slate-200 flex flex-row justify-center items-center">
        <img className="object-contain max-w-none h-48 max-h-screen rounded-full bg-red-300" src='./img.png' alt="my image" />
        <div className="bg-indigo-300 aspect-auto m-1">
          <h1 className="font-sans text-4xl font-bold ">Hello there...</h1>
          <p className="text-center"> 
            Hi, my name is Aanos Mahmood. I’m an aspiring Software Developer. Currently, I’m a junior pursuing a B.S. in Software Engineering at The University of of Texas at Dallas.
            My aim in this portfolio is to identify myself in the most creative way possible and I strive to become a better developer everyday. 
          </p>
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
