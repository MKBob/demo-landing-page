import React from 'react'
import group from "../components/images/group.png"
import line from "../components/images/line.png"
import { PlayCircle } from '@phosphor-icons/react'
import logo from "../components/images/logo.png"
const Home = () => {
    return (
        <>

<div className='flex flex-col-reverse items-center gap-12 md:flex-row md:items-start md:justify-between py-10  mt-8 w-full px-6 md:w-[80%] md:px-0 mx-auto'>
            {/* first div */}

            <div className='text-center md:text-left flex-1'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                    We’re here to <br className='hidden md:block'/> Increase your <br className='hidden md:block'/> Productivity
                    <div className='py-15 '>
                        <img src={line} alt='line' className=''/>
                    </div>
                </h1>
                <p className='text-base sm:text-lg md:text-xl text-gray-600'>
                    Let's make your work more organize and easily using <br className='hidden md:block' /> the Taskio Dashboard  with many of the latest <br className='hidden md:block' /> featuresin managing work every day.
                </p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-15'>
                    <button className="px-7 py-4 text-lg sm:text-xl rounded-4xl text-white cursor-pointer transition-colors bg-[#52BD94] w-full sm:w-auto">
                        Try free trail
                    </button>
                    <p className='flex items-center justify-center gap-3 cursor-pointer text-lg text-gray-800'>
                        <PlayCircle size={28} weight="light" />
                        View Demo
                    </p>

                </div>
            </div>
            {/* second div */}
            <div className='flex-1 flex justify-center md:justify-end'>
                <img src={group} alt='group' className='max-w-full md:max-w-md lg:max-w-lg'/>
            </div>
        </div>
        <div className='flex flex-col items-center justify-between'>
             <p className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight pb-10'>
             More than 25,000 teams use Collabs
             </p>
             <div>
                <img src={logo} alt="logo" className='pb-10'/>
             </div>
        </div>
        </>
       
    )
}

export default Home