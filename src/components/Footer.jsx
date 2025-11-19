import React from 'react'
import logo from "../components/images/logo.png"

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center space-y-6'>
            <p className='text-5xl font-bold pt-15'>More than 25,000 teams use Collabs</p>
            <img src={logo} alt='group' className='mx-auto py-10' />
        </div>
    )
}

export default Footer