'use client'
import React from 'react'
import Image from 'next/image'
import company from './company.jpg'

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Your Trusted Partner in Digital Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-700">
                Sebiro Technologies has been at the forefront of digital innovation since our inception. 
                We specialize in providing comprehensive printing and technology solutions that help businesses 
                thrive in the modern digital landscape.
              </p>
              <p className="text-gray-700">
                Our team of experts combines years of experience with cutting-edge technology to deliver 
                exceptional results for our clients. We believe in building lasting relationships through 
                quality service and innovative solutions.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              {/* Add your company image here */}
              <Image src={company} alt="Sebiro Office" fill className="object-fit" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of innovative printing and technology solutions, 
                empowering businesses to achieve their full potential in the digital age.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional quality and value through our comprehensive range of services, 
                while maintaining the highest standards of customer satisfaction and technological innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest quality in everything we do</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">Building trust through honest and ethical practices</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and creative solutions</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with years of industry experience</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Latest Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and modern solutions</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Quality Service</h3>
              <p className="text-gray-600">Commitment to excellence in every project</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Customer Focus</h3>
              <p className="text-gray-600">Dedicated to meeting your specific needs</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage