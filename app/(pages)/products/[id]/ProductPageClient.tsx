'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import products from '@/app/data/product'
import { Product, ProductCategory } from '@/app/types/product'
import Link from 'next/link'

// We now accept 'categoryId' as a simple prop
export default function ProductPageClient({ categoryId }: { categoryId: string }) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // We use the 'categoryId' prop directly
      const id = parseInt(categoryId);
      const foundCategory = products.find(p => p.id === id);
      
      if (!foundCategory) {
        setError('Category not found');
      } else {
        setCategory(foundCategory);
      }
    } catch (err) {
      setError('Failed to load category');
    } finally {
      setIsLoading(false);
    }
  }, [categoryId]); // The dependency is now the prop

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">{error || 'Category not found'}</h1>
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {category.cName}
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            {category.cDescription}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your specific requirements. {` We're `} here to help you find the perfect solution.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}