import Contactform from '@/components/Contactform'
import React from 'react'

const page = () => {
  return (
    
    <div 
    style={{backgroundImage:"url(/mountains.jpg)"}}
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
      <div
      style={{backgroundImage:"url(/atom.webp)"}}
       className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white'>
        <div className='absolute left-20 bottom-16 w-[70%] md:w-[30%]'>
         <Contactform/>
         </div>
      </div>
      
    </div>
  )
}

export default page
