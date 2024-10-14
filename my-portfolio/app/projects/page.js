
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../../app/globals.css'

export default function projects() {
  return (
    <div className='w-full min-w-full m-2'>
      <header className='text-center m-10 '>

        <h1 className='text-4xl font-bold'>Projects</h1>

      </header>


      <div className='w-full flex grid-cols-3 justify-around m-1'>
        
          <div class="w-1/3 h-80  bg-gray-100 rounded-xl shadow-2xl m-2">
            <div class="flex items-center p-3">
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
              </div>
            </div>
          </div>

          <div class="w-1/3 h-80  bg-gray-100 rounded-xl shadow-2xl m-2">
            <div class="flex items-center p-3">
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
              </div>
            </div>
          </div>



          <div class="w-1/3 h-80  bg-gray-100 rounded-xl shadow-2xl m-2">
            <div class="flex items-center p-3">
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
              </div>
              <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
              </div>
            </div>


            <div className='m-1 tracking-wide'>

                <h2 className='m-2 text-lg font-bold'>
                  Small Shell in C
                </h2>

                <p className='m-1'>
                    Created a shell that supported a subset of features of well-known shells such as bash.
                    features included: provided a prompt for running commands, executiion of commands such as cd, status, and exit.
                    It also allowed for the use of running commands in the foreground and/or background as well as custom handlers for 
                    SIGINT and SIGSTP. 
                </p>

                <span className='font-bold mt-10'>Link to Github: <Link className='underline' href='https://github.com/fuenteed/smallsh'>Github</Link> </span>



            </div>
          </div>



      </div>

    </div>
  )
}
