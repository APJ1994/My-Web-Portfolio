import React from 'react'

const Contactform = () => {
  return (
    <form>
      <h1 className='text-2xl font-bold mb-5 text-white'>Contact Form</h1>
      <div className='mb-3'>
        <input
        type='text'
        placeholder='Your Name'
        name='name'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        
        />
      </div>

      <div className='mb-3'>
        <input
        type='email'
        placeholder='Your Email'
        name='email'
        className='w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>

      <div className='mb-3'>
        <input
        type='text'
        placeholder='Message'
        name='message'
        className='w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow'
        
        />

      </div>
      <button className='px-6 mb-10 py-6 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear
      bg-blue-500 hover:bg-blue-400'
      >Send Message</button>
    </form>
  )
}

export default Contactform
