"use client"
import React, { JSX, useState } from 'react'

const Header = (): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] =useState<boolean>(false);

  return (
    <header className='bg-gray-300 pb-2'>
        <nav className='flex justify-between w-[90vw] mx-auto py-2 items-center mb-2 sm:mb-0'>
            <div className=''>
                Sebiro Technologies
            </div>

            {/* this is nav link for desktop/Tab */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-[4vw] font-medium cursor-pointer'>
                    <li>
                        <p className='hover:text-gray-500 home' >Home</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 products'>Products</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 services' >Services</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 about' >About Us</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 location'>Locations</p>
                    </li>
                </ul>
            </div>
            <div className=' block sm:hidden ' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <button>Bu</button>
            </div>
        </nav>
        <div className={` ${isMenuOpen ? 'block':'hidden'} block sm:hidden `}>
            <ul className='flex flex-col items-center gap-[4vw] font-medium cursor-pointer'>
                    <li>
                        <p className='hover:text-gray-500 home' >Home</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 products' >Products</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 services' >Services</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 about' >About Us</p>
                    </li>
                    <li>
                        <p className='hover:text-gray-500 location' >Locations</p>
                    </li>
                </ul>
        </div>
    </header>
  )
}

export default Header