"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import services from '@/app/data/services'

const Services = () => {
  const [serviceId, setServiceId] = useState(1);
  const selectedService = services.find((s) => s.id === serviceId) ?? services[0];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Comprehensive Solutions for Your Business
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Service Navigation - Desktop */}
          <nav className="md:w-1/4 shadow-xl/30 p-2">
            <ul className="hidden md:flex flex-col space-y-2 sticky top-4">
              {services.map((s) => (
                <li
                  key={s.id}
                  onClick={() => setServiceId(s.id)}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-200 
                    ${s.id === serviceId 
                      ? 'bg-blue-100 text-blue-800 font-semibold shadow-md' 
                      : 'hover:bg-gray-50'
                    }`}
                >
                  {s.name}
                </li>
              ))}
            </ul>

            {/* Mobile Dropdown */}
            <select 
              className="w-full p-3 border-2 rounded-lg mb-6 md:hidden"
              onChange={(e) => setServiceId(+e.target.value)}
              value={serviceId}
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </nav>

          {/* Service Content */}
          <div className="md:w-3/4 shadow-xl/30">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {selectedService?.name}
              </h2>

              {selectedService?.coverImage && (
                <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedService.coverImage}
                    alt={selectedService.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg mb-6">
                  {selectedService?.description}
                </p>

                {selectedService?.subDescription && (
                  <p className="text-gray-600 mb-6">
                    {selectedService.subDescription}
                  </p>
                )}

                {selectedService?.helps && selectedService.helps.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.helps.map((help, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <span className="text-blue-500">•</span>
                          <span>{help}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services