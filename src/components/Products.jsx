import React from 'react'
import { Star, TrendUp, ChartPieSlice, Graph  } from '@phosphor-icons/react'
const Products = () => {
    return (
        <div className='flex flex-col gap-10 lg:flex-row items-start justify-between px-6 sm:px-12 lg:px-32 py-14 bg-[#F9F8FE]'>
            {/* div one */}
            <div className='flex-1 text-center lg:text-left'>
                <h1 className='mt-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 pb-8'>
                    How we support our <br className='hidden lg:block' /> pratner all over the world
                </h1>
                <span className='pb-14 text-sm sm:text-base text-[#A6A6A6] block'>
                    SaaS become a common delivery model for many business application, including <br className='hidden lg:block' /> office software, messaging software, payroll processing software, <br className='hidden lg:block' /> DBMS software, management software
                </span>
                <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 items-center lg:items-start justify-center lg:justify-start'>
                    <div className='w-full sm:w-auto'>
                        <div className='flex pt-4 justify-center sm:justify-start'>
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-[#FFC728] cursor-pointer' />
                        </div>
                        <p className='py-5 text-lg font-semibold text-gray-900 text-center sm:text-left'> 4.9 / 5 rating</p>
                        <p className='text-[#A6A6A6] text-center sm:text-left'>databricks</p>
                    </div>
                    <div className='w-full sm:w-auto'>
                        <div className='flex pt-4 justify-center sm:justify-start'>
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-amber-400 cursor-pointer' />
                            <Star size={28} weight="fill" className='text-[#BBBBBB] cursor-pointer' />
                        </div>
                        <p className='py-5 text-lg font-semibold text-gray-900 text-center sm:text-left'>4.8 / 5 rating</p>
                        <p className='text-[#A6A6A6] text-center sm:text-left'>Chainalysis</p>
                    </div>

                </div>
            </div>
            {/* div two? */}
            <div className='flex-1 flex flex-col gap-6'>
            <div className='flex gap-4 items-start'>
                <div>
                    <TrendUp size={28} className='text-[#54BD95]'/>
                </div>
                <div>
                    <h2 className='font-bold text-2xl pb-3'>
                        Publishing
                    </h2>
                    <p className='text-[#A6A6A6] pb-5'>Plan, collaborate, and publishing your contetn <br /> that drivees meaningful engagement and growth <br /> for your barnd</p>
                </div>
            </div>
            <div className='flex gap-4 items-start p-6'>
                <div>
                    <ChartPieSlice   size={28} className='text-[#54BD95]'/>
                </div>
                <div>
                    <h2 className='font-bold text-2xl pb-3'>
                    Analytics
                    </h2>
                    <p className='text-[#A6A6A6] pb-5'>Analyze your performance and create goegeous <br /> report</p>
                </div>
            </div>
            <div className='flex gap-4 items-start p-6'>
                <div>
                    <Graph  size={28} className='text-[#54BD95]'/>
                </div>
                <div>
                    <h2 className='font-bold text-2xl pb-3'>
                    Engagement                    </h2>
                    <p className='text-[#A6A6A6] pb-5'>Quiuckly navigate you anda engage with your <br /> adience</p>
                </div>
            </div>
            </div>
          
        </div>
    )
}

export default Products