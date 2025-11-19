import React from 'react'
import logo from "../components/images/logo.svg"

const Footer = () => {
    return (
        <div>
         
            <p className='text-5xl font-bold flex items-center'>More than 25,000 teams use Collabs</p>

            <div className='flex items-center justify-between'>
                <img src={logo} alt='group' />

            </div>
         
           
        </div>
    )
}

export default Footer