import React from 'react'
import logo from "../components/images/logo.png"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-6 px-4 py-12 text-center">
            <p className='text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
                More than 25,000 teams use Collabs
            </p>

            <img src={logo} alt='Collabs partner logos' className="mx-auto w-full max-w-3xl" />
        </footer>
    )
}

export default Footer