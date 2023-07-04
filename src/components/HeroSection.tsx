import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {  Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material-next/Button";

type Props = {};

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="p-5 mt-5 bg-slate-200 flex flex-col justify-center items-center" id="home">
        <span className="font-bold p-2 grow"> Aanos Mahmood </span>
        <span className="text-lg font-semibold p-2">
          <TypeAnimation
            sequence={["Software Engineer", 2000, "Computer Science", 2000]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </span>
        <img
          className="p-4 object-contain max-w-none max-h-96"
          src="./me.png"
          alt="my image"
        />
        <p className="font-normal text-center subpixel-antialiased">
          Hi, I'm an aspiring Software Developer and a rising senior pursuing a
          B.S. in Software Engineering expected to gradute in May 2024 from The
          University of of Texas at Dallas. I'm always excited to take on new
          challanges that put me outside my confort zone and explore advancing
          technology. A few of my hobbies are to workout, play sports,
          skateboard, make beats, and sometimes cook/bake.
        </p>
        <Stack direction="row" spacing={2} className="p-2">
          <Button size="large" variant="elevated" startIcon={<GitHubIcon fontSize="large" />} href="https://www.github.com/aanos-m">
            GitHub
          </Button>

          <Button size="large" variant="elevated" color="primary" startIcon={<LinkedInIcon fontSize="large" />} 
                  href="https://www.linkedin.com/in/aanos-mahmood/" >
            LinkedIn
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default HeroSection;
