import React from 'react'
import cardPng from './images/chart.png'

const NoPage = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col items-center justify-center py-60'>
        <h1 className='text-4xl font-bold text-center'>Secure solutions for your digital<br /> assets and money</h1>
        <p className='text-center py-5'>With Zuzu Card, you can buy, sell and trade 40+ crypto assets at competitive prices <br /> and store them securely in one convenient place.</p>
      </div>
      <div className='flex  justify-center' >
        <img src={cardPng} alt='card2' className='w-[80%]' />
      </div>
    </div>
  )
}

export default NoPage