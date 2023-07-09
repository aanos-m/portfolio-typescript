import { List, ListItem } from '@mui/material';

type Props = {}

const Experience = (props: Props) => {
  return (
    <div className=" p-5 m-5 bg-slate-200 flex flex-col space-x-5 justify-center shadow-lg" id='experience'>
        <h1 className='text-4xl font-semibold m-2'>Experience</h1>

        <div className="flex flex-col items-center">
          <div className="m-2 max-w-md rounded-sm overflow-hidden shadow-lg ">
            <img className="w-1/2" src="./rm.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">RippleMatch </div>
              <div className="font-semibold text-md mb-2"> Leadership Development Internship </div>
              <p className="text-gray-700 text-base">
                <List>
                  <ListItem>
                    Selected from a pool of thousands of candidates to work closely
                    with leaders of RippleMatch’s Leadership Team
                  </ListItem>
                  <ListItem>
                    Leveraged various growth strategies and tools including social media, email marketing, presentations, 
                    and peer and faculty member networking to grow the user base and awareness on campus
                  </ListItem>
                  <ListItem>
                    Strategically assessed growth and performance metrics to improve, 
                    change and/or help design new growth strategies
                  </ListItem>
                </List>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Networking
              </span>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Experience