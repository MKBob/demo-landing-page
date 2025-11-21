import React from 'react'
import group from "../components/images/group.png"
import line from "../components/images/line.png"
import { PlayCircle } from '@phosphor-icons/react'
import logo from "../components/images/logo.png"

const Home = () => {
    return (
        <>
            <div className='flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-center py-10 mt-8 w-full px-6 md:w-[80%] md:px-0 mx-auto'>

                {/* LEFT SECTION */}
                <div className='text-center md:text-left flex-1 w-full'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                        We’re here to <br className='hidden md:block' />
                        Increase your <br className='hidden md:block' />
                        Productivity
                    </h1>

                    <div className='flex justify-center md:justify-start'>
                        <img 
                            src={line} 
                            alt='line' 
                            className='w-[70%] sm:w-[60%] pt-7 pb-12'
                        />
                    </div>

                    <p className='text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed'>
                        Let's make your work more organize and easily using <br className='hidden md:block' />
                        the Taskio Dashboard with many of the latest <br className='hidden md:block' />
                        features in managing work every day.
                    </p>

                    <div className='flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-10 sm:py-12'>
                        <button className="px-7 py-4 text-lg sm:text-xl rounded-4xl text-white bg-[#52BD94] w-full sm:w-auto">
                            Try free trial
                        </button>

                        <p className='flex items-center justify-center gap-3 cursor-pointer text-lg text-gray-800'>
                            <PlayCircle size={28} weight="light" />
                            View Demo
                        </p>
                    </div>
                </div>

                {/* RIGHT IMAGE — MADE LARGER */}
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <img 
                        src={group} 
                        alt='group' 
                        className='w-full sm:w-[80%] md:w-[90%] lg:w-[110%] xl:w-[130%] max-w-none h-auto'
                    />
                </div>
            </div>

            {/* LOGO SECTION */}
            <div className='flex flex-col items-center justify-between px-6'>
                <p className='text-xl sm:text-3xl md:text-5xl font-bold text-center pb-6 sm:pb-10'>
                    More than 25,000 teams use Collabs
                </p>

                <img 
                    src={logo} 
                    alt="logo" 
                    className='w-full max-w-xs sm:max-w-md md:max-w-lg pb-10'
                />
            </div>
        </>
    )
}

export default Home
