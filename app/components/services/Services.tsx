import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import services from '@/app/data/services';

const Services = () => {
  
  return (
    <div className=" bg-amber-100 mx-auto px-2 mt-2 pb-2" id="products">
          <div className="font-bold text-2xl mb-4 text-center pt-4">Our Services </div>
    
          <div className='mb-4 text-center '>Alston is also a trusted name for a 
            wide range of print and copy services in Sri Lanka. From 
            Digital Offset Printing, Photocopying, AutoCAD Plotting, Plan 
            Copying and Blue Printing services to other related services including 
            Document Scanning, Laminating, Binding, Seal Making, ID Card Printing, Graphic 
            Designing and Flex Printing, Alston is indeed a one-stop-shop for all your printing
             and copying requirements.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-34">
    
            {
              services.map((services) => (
                <div key={services.id} className="bg-white p-4 rounded shadow cursor-pointer hover:scale-110 transform transition duration-300" title={services.name}>
                  <h3 className="font-semibold text-lg mb-2">{services.name}</h3>
                  {/* <p className="text-gray-700">{services.description}</p> */}
                  <Image src={services.image} alt={services.name} width={300} height={200} />
                </div>
              ))
            }
    
          </div>
          <div className='text-lg font-bold text-center 
                bg-blue-400 p-2 justify-center flex w-40 mx-auto mt-4 rounded-lg text-white hover:bg-blue-600'>
            <Link href={'/services'} className='cursor-pointer'>See More</Link>
          </div>
    
        </div>
  )
}

export default Services