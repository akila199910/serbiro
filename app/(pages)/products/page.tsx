'use client'
import React from 'react'
import Image from 'next/image'
import products from '@/app/data/product'

const ProductsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gradient-to-r from-amber-500 to-amber-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Quality Solutions for Your Business Needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  
                  {/* Add any additional product details here */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-amber-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your specific requirements. {"We're great"} here to help you find the perfect solution.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductsPage