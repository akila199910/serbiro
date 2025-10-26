"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { JSX, useState } from 'react'
import menuI from './image_processing20210616-28547-4dos3y.png'

const Header = (): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] =useState<boolean>(false);

  return (
    <header className='bg-gray-300 pb-2 fixed w-full top-0 z-50'>
        <nav className='flex justify-between w-[90vw] mx-auto py-2 items-center'>
            <div className='item-center'>
                Sebiro Technologies
            </div>

            {/* this is nav link for desktop/Tab */}
            <div className='hidden sm:flex sm:flex-col gap-2'>
                <div className='flex  justify-end gap-3'>
                    <div className='uppercase font-medium'> 📞 Hotline </div>
                    <div>0452230584</div>
                </div>
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
                        <Link href={'/location'} className='hover:text-gray-500 home'>Locations</Link>
                    </li>
                </ul>
            </div>
            <div className=' block sm:hidden ' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <button><Image src={menuI} alt='menu' className='w-5 pt-2'/></button>
            </div>
        </nav>
        <div className={` ${isMenuOpen ? 'block':'hidden'} block sm:hidden `}>
            <ul className='flex flex-col items-center gap-[4vw] font-medium cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                        <Link href={'/location'} className='hover:text-gray-500 home'>Locations</Link>
                    </li>
                </ul>
        </div>
    </header>
  )
}

export default Header