import React from 'react';
import Image from 'next/image'
import codle from '../assets/codlecloseup.png'

export default function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-gray-50 dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-gray-50">
          Projects
        </h1>
      </div>
      {/* start grid */}
      <div className='bg-[#F1F1F1] dark:bg-gray-900'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* card */}
          <a href='https://tailwindmasterkit.com'
          className='w-full block shadow-2xl'
          >
            <div className="relative overflow-hidden">
              <Image
                src={codle}
                alt="codle"
                width="500"
                height="700"
                className="transform hover:scale-125 transition duration-2000 ease-out"
                />
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                  Codle
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  01
                </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
    // mmore!
  )
}