"use client"
import Link from 'next/link';
import React, { JSX, useState } from 'react'

const Header = (): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] =useState<boolean>(false);

  return (
    <header className='bg-gray-300 pb-2 fixed w-full top-0 z-50'>
        <nav className='flex justify-between w-[90vw] mx-auto py-2 items-center mb-2 sm:mb-0'>
            <div className=''>
                Sebiro Technologies
            </div>

            {/* this is nav link for desktop/Tab */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-[4vw] font-medium cursor-pointer'>
                    <li>
                        <Link href={'/'} className='hover:text-gray-500 home'>Home</Link>
                    </li>
                    <li>
                        <Link href={'/products'} className='hover:text-gray-500 home'>Products</Link>
                    </li>
                    <li>
                        <Link href={'/services'} className='hover:text-gray-500 home'>Services</Link>
                    </li>
                    <li>
                        <Link href={'/about'} className='hover:text-gray-500 home'>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/locations'} className='hover:text-gray-500 home'>Locations</Link>
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
                        <Link href={'/'} className='hover:text-gray-500 home'>Home</Link>
                    </li>
                    <li>
                        <Link href={'/products'} className='hover:text-gray-500 home'>Products</Link>
                    </li>
                    <li>
                        <Link href={'/services'} className='hover:text-gray-500 home'>Services</Link>
                    </li>
                    <li>
                        <Link href={'/about'} className='hover:text-gray-500 home'>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/locations'} className='hover:text-gray-500 home'>Locations</Link>
                    </li>
                </ul>
        </div>
    </header>
  )
}

export default Header