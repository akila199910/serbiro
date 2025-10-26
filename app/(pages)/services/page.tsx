"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import services from '@/app/data/services'

const Services = () => {
  const [serviceId, setServiceId] = useState(1);
  const selectedService = services.find((s) => s.id === serviceId) ?? services[0];

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full'>
        <Image src={selectedService.coverImage} alt='serviceImg' />
      </div>

      <div className='flex w-full gap-6'>

        <ul className='min-w-[220px] mx-6 hidden sm:flex sm:flex-col'>
          {
            services.map((s) => {
              return (
                <li
                  onClick={() => setServiceId(s.id)}
                  key={s.id}
                  className={`cursor-pointer p-2 rounded border-b-2 ${s.id === serviceId ? 'bg-amber-200 font-semibold' : 'hover:bg-amber-50'}`}
                >
                  {s.name}
                </li>
              )
            })
          }
        </ul>

        <div className='flex flex-col p-2'>
            <select name="" className='max-w-2/3 mx-auto py-3 px-2 border-2 rounded-sm mb-2 sm:hidden' onChange={(e)=>{
              setServiceId(+e.target.value);
            }}>
              {
                services.map((s) => {
                  return (
                    <option key={s.id} value={s.id} >{s.name}</option>
                  )
                })
              }
            </select>

          <div className='font-bold text-2xl mb-4 uppercase'>{selectedService?.name}</div>

          <div className='max-w-2xl mb-2'>{selectedService?.description}</div>

          <div className='flex flex-col'>
            <p className='max-w-2xl'>{selectedService?.subDescription}</p>
            <div className='relative top-2 left-5'>
              <ul className='list-disc pl-5 space-y-1'>
                {
                  selectedService?.helps?.map((help, idx) => (
                    <li key={idx}>{help}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services