import { Button, Stack, Avatar, ToggleButton, Switch } from '@mui/material'
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ComputerIcon from "@mui/icons-material/Computer";
import TimelineIcon from "@mui/icons-material/Timeline";
import {Link} from 'react-scroll';

type Props = {}

const Navbar = (props: Props) => {

  return (
    <>
      <div className="bg-slate-200 p-5 m-5 flex justify-between shadow-lg hover:shadow-xl" id='home'>
          <Stack direction='row' spacing={5} justifyContent='' alignItems='center' >
            <Avatar alt="Test" src="" />
          </Stack>

          <Stack direction='row' spacing={2} justifyContent='flex-start' alignItems='center'>

            <Link to='home' smooth={true} duration={1000}> 
              <Button color='primary' variant="contained" startIcon={<HomeIcon fontSize='medium'/>}>Home</Button>
            </Link>
            
            <Link to='experience' smooth={true} duration={1000}> 
              <Button color='secondary' variant="contained" startIcon={<WorkIcon fontSize='medium'/>}>Experience</Button>
            </Link>
            
            <Link to='projects' smooth={true} duration={1000}>
              <Button color='secondary' variant="contained" startIcon={<PsychologyIcon fontSize='medium'/> }> Projects</Button>
            </Link>
            
            <Button color='secondary' variant='contained' startIcon={<TimelineIcon fontSize='medium'/>}>Activites </Button>
            <Button color='secondary' variant="contained" startIcon={<ComputerIcon fontSize='medium'/>}>Skills</Button>
            <Button color='secondary' variant="contained" startIcon={<ContactPageIcon fontSize='medium'/>}>Contact</Button>
          </Stack>

          <Stack>
            <Switch size='medium'/>
          </Stack>
      </div>
    </>
  );
}

export default Navbar