import React from 'react'
import InputBanner from './InputBanner'

function Banner() {
  return (
  <div className="w-full p-7 flex md:flex-row flex-col gap-9">
    <div className="md:w-2/4 w-full">
     <h1 className='text-3xl md:text-4xl text-black dark:text-white font-bold mt-2'>
      Hello welcomes here to learn something <span className='pink-heading'>new everyday!!</span>
     </h1>
     <p className='lg:text-base text-black dark:text-white lg:font-semibold mt-4'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis aperiam eveniet earum vero repellat. Neque laborum laboriosam incidunt repudiandae suscipit, accusantium voluptates odit. Minima.
     </p>
     <InputBanner/>

     </div>

    <div className="md:w-2/4 w-full flex justify-center items-center">
      <img className='w-100 h-100' src="./Banner.png" />
    </div>
  </div>
  )
}

export default Banner

