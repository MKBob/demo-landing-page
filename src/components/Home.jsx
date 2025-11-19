import React from 'react'
import group from "../components/images/group.png"
import line from "../components/images/line.png"
import { PlayCircle } from '@phosphor-icons/react'
const Home = () => {
    return (
        <div className='flex items-start justify-center py-10 gap-15'>
            {/* first div */}

            <div>
                <h1 className='text-7xl font-bold'>
                    We’re here to <br /> Increase your <br /> Productivity
                    <div className='py-10 '>
                        <img src={line} alt='line' />
                    </div>
                </h1>
                <p className='text-xl'>Let's make your work more organize and easily using <br /> the Taskio Dashboard  with many of the latest <br /> featuresin managing work every day.</p>
                <div className='flex items-center gap-8 py-10'>
                    <button className=" px-7 py-4 text-xl rounded-4xl text-white cursor-pointer transition-colors bg-[#52BD94]">
                        Try free trail
                    </button>
                    <p className='flex items-center gap-3 cursor-pointer'>
                        <PlayCircle size={28} weight="light" />
                        View Demo
                    </p>

                </div>
            </div>
            {/* second div */}
            <div>
                <img src={group} alt='group' className='h-1/2 w-full mx-10'/>
            </div>
        </div>
    )
}

export default Home