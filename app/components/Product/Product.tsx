import Image from 'next/image'
import React from 'react'
import img1 from '../home/OIP.webp'

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of Product 1.',
      image: img1,
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description of Product 1.',
      image: img1,
    },
    // Add more products as needed
  ];
  return (
    <div className=" bg-amber-100 mx-auto px-2 mt-2 pb-2" id="products">
      <div className="font-bold text-2xl mb-4 text-center pt-4">Our Products</div>

      <div className='mb-4 mx-64 text-justify'>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Amet commodi hic eum ea quia nam, corporis
        sapiente laudantium alias explicabo, asperiores repellat assumenda
        officiis beatae voluptas modi, porro quasi omnis.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-34">

        {
          products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <Image src={product.image} alt={product.name} width={300} height={200} />
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

export default Product