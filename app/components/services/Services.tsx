import React from 'react'
import img1 from '../home/OIP.webp'
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Service 1',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 2,
      name: 'Service 2',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 3,
      name: 'Service 3',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 4,
      name: 'Service 4',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 5,
      name: 'Service 5',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 6,
      name: 'Service 6',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 7,
      name: 'Service 7',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 8,
      name: 'Service 8',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 9,
      name: 'Service 9',
      description: 'Description of Product 1.',
      image: img1,
    },
    // Add more products as needed
  ];
  return (
    <div className=" bg-amber-100 mx-auto px-2 mt-2 pb-2" id="products">
          <div className="font-bold text-2xl mb-4 text-center pt-4">Our Services </div>
    
          <div className='mb-4 mx-64 text-justify '>Alston is also a trusted name for a 
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
                <div key={services.id} className="bg-white p-4 rounded shadow">
                  <h3 className="font-semibold text-lg mb-2">{services.name}</h3>
                  {/* <p className="text-gray-700">{services.description}</p> */}
                  <Image src={services.image} alt={services.name} width={300} height={200} />
                </div>
              ))
            }
    
          </div>
          <div className='text-lg font-bold text-center 
                bg-blue-400 p-2 justify-center flex w-40 mx-auto mt-4 rounded-lg text-white hover:bg-blue-600'>
            <button className='cursor-pointer'>See More</button>
          </div>
    
        </div>
  )
}

export default Services