import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className="lg:flex  items-center lg:ml-56 ml-20 py-20 mt-28">
        <div className=''>
            <h1 className='text-pink-600'>SERVICES</h1>
            <h1 className='text-3xl font-bold'>Our top value<br/> categories for you</h1>
        </div>
        <div className='lg:ml-96 ml-8 lg:mt-0 mt-20'>
          <Image src="/destination 1.png" height={45} width={45} className='lg:ml-0 ml-8'/>
          <h1 className='text-lg font-bold mt-8'>Best Tour Guide</h1>
          <h1 className='mt-4'>What looked like a small<br/> patch of purple grass<br/> above five feet</h1>
        </div>
        <div className='lg:ml-8 ml-4 w-56 h-72 rounded-3xl shadow-2xl '>
          <div className='ml-24 lg:mt-8 mt-12'>
          <Image src="/booking 1.png" height={45} width={45} />
          </div>
          <h1 className='text-lg font-bold mt-8 lg:ml-16 ml-12'>Easy Booking</h1>
          <h1 className='text-sm mt-4 ml-12 text-stone-400'>Square,was moving<br/> across the sand in their<br/> direction</h1>
        </div>
    </div>
  )
}

export default Slider