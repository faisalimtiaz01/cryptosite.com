import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=' text-center h-80 font-mono flex text-white flex-col justify-center bg-gradient-to-l  from-indigo-500'>
        <h1 className='text-8xl font-bold'>Contact Us</h1>
        <p className='text-2xl mt-3'>Home |
Contact Us</p>
      </div>

<div className='text-center  bg-gradient-to-l  from-indigo-500'>

</div>
<div className='flex flex-col w-[100%] h-96 items-center justify-center font-mono gap-5 bg-black'>
<h1 className='text-6xl text-white font-bold mb-14 font-mono'>Get In Touch</h1>
  <label className='text-2xl font-bold text-white font-mono'>Email</label>
<input type="email" className="w-[30%] h-8 rounded "/>
  <label className='text-2xl font-bold text-white font-mono'>Password</label>
<input type="email" className="w-[30%] h-8 rounded"/>

</div>
    </div>
  )
}

export default Contact