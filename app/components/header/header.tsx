"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { JSX, useState } from 'react'
import menuI from './image_processing20210616-28547-4dos3y.png'

const Header = (): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className='bg-white shadow-md pb-2 fixed w-full top-0 z-50'>
            <nav className='flex justify-between w-[90vw] mx-auto py-4 items-center'>
                <div className='flex items-center'>
                    <Link href="/" className='text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors'>
                        Sebiro Technologies
                    </Link>
                </div>

                {/* Desktop/Tablet Navigation */}
                <div className='hidden sm:flex sm:flex-col gap-2'>
                    <div className='flex justify-end gap-3 text-gray-600'>
                        <div className='uppercase font-medium flex items-center'>
                            <span className='text-green-500 mr-2'>💬</span> WhatsApp
                        </div>
                        <div className='font-semibold hover:text-green-600 transition-colors'>
                            <a href="https://wa.me/94715424000?text=Hi%20I%20want%20to%20contact%20support" target="_blank">
                                +94 71 542 4000
                            </a>
                        </div>
                    </div>

                    <ul className='flex items-center gap-[3vw] font-medium cursor-pointer'>
                        <li>
                            <Link href={'/'} className='hover:text-blue-600 transition-colors'>Home</Link>
                        </li>
                        <li>
                            <Link href={'/products'} className='hover:text-blue-600 transition-colors'>Products</Link>
                        </li>
                        <li>
                            <Link href={'/services'} className='hover:text-blue-600 transition-colors'>Services</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className='hover:text-blue-600 transition-colors'>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/location'} className='hover:text-blue-600 transition-colors'>Locations</Link>
                        </li>
                        <li>
                            <Link href={'/dealers'} className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors'>Join as a Dealer</Link>
                        </li>
                    </ul>
                </div>
                <div className='block sm:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                        <Image src={menuI} alt='menu' className='w-6 h-6' />
                    </button>
                </div>
            </nav>
            <div className={`${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} block sm:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white`}>
                <ul className='flex flex-col items-center gap-6 py-4 font-medium' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <li>
                        <Link href={'/'} className='hover:text-blue-600 transition-colors'>Home</Link>
                    </li>
                    <li>
                        <Link href={'/products'} className='hover:text-blue-600 transition-colors'>Products</Link>
                    </li>
                    <li>
                        <Link href={'/services'} className='hover:text-blue-600 transition-colors'>Services</Link>
                    </li>
                    <li>
                        <Link href={'/about'} className='hover:text-blue-600 transition-colors'>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/location'} className='hover:text-blue-600 transition-colors'>Locations</Link>
                    </li>
                    <li>
                        <Link href={'/dealers'} className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors'>Join as a Dealer</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header