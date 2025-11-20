import React from 'react'
import group from "../components/images/group.png"
import line from "../components/images/line.png"
import HomeButtons from './HomeButtons'
const Home = () => {
    return (
        <section className='mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 py-12 sm:px-6 md:flex-row md:items-start lg:gap-16'>
            <div className='w-full md:w-1/2'>
                <p className='text-sm font-semibold uppercase tracking-widest text-[#52BD94]'>Productivity Platform</p>
                <h1 className='mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl'>
                    We’re here to <br className='hidden sm:block' /> Increase your <br /> Productivity
                </h1>
                <div className='mt-4 w-24 sm:w-32'>
                    <img src={line} alt='line accent' className='w-full' />
                </div>
                <p className='mt-6 text-base text-gray-600 sm:text-lg'>
                    Let's make your work more organized and effortless using the Taskio Dashboard with the latest features for managing daily workflows.
                </p>
                <HomeButtons />
            </div>

            <div className='flex w-full justify-center md:w-1/2'>
                <img src={group} alt='Team collaborating illustration' className='h-auto w-full max-w-md object-contain sm:max-w-lg' />
            </div>
        </section>
    )
}

export default Home