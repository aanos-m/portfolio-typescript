import React from 'react'
import { TypeAnimation } from 'react-type-animation'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='p-5 m-5 bg-slate-200 flex flex-col space-x-5 justify-center shadow-lg' id='skills'>
        <h1 className='text-4xl font-semibold m-2'>Skills</h1>
        <span className="text-lg font-semibold p-2">
          <TypeAnimation
            sequence={['This section is currently under contruction', 2000, 'Please be patient while it is developed', 2000]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </span>
        <div className='z-10 blur-sm '>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis est magni numquam! Tempore cumque ut rerum vel dignissimos quae magni nulla! Fugit!
            </span>
        </div>
    </div>
  )
}

export default Skills