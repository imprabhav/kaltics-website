import React from 'react'

const Hero = () => {
  return (
    
    // <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="text-4xl block">
               Kaltics
            </span>
            <span class="text-1xl block text-indigo-500">
                One stop for all your IT services.
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>


  )
}

export default Hero
