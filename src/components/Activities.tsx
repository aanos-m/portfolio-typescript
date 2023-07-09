import { List, ListItem } from '@mui/material';
import React from 'react'

type Props = {}

const Activities = (props: Props) => {
  return (
    <div
      className="p-5 m-5 bg-slate-200 flex flex-col space-x-5 justify-center shadow-lg" id="activites">
      <h1 className="text-4xl font-semibold m-2"> Activities </h1>

      <div className="flex flex-wrap justify-center">
        <div className="m-2 max-w-xs rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="./img.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nebula Labs</div>
            <div className="text-gray-700 text-base">
                <List>
                    <ListItem>
                        Collaborating with peers and designing different components that can be used
                        throughout the Nebula Labs organization
                    </ListItem>
                    <ListItem>
                       Utilizing TailwindCSS to create and refine mock-ups for simple user interface  
                    </ListItem>
                </List>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #CSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities