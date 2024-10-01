'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import '../../app/globals.css'
import emailjs from '@emailjs/browser';

export default function contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r8wytjn', 'template_mvdin4h', form.current, {
        publicKey: 'CvpDEymCKSKv6Znuk',
      })
      .then(
        () => {
          
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

<div class=" mx-auto max-w-xl flex flex-col justify-center h-screen items-center bg-white font-[sans-serif]">
            <h1 class="text-3xl text-gray-800 font-extrabold text-center">Contact Me</h1>
            <p class="text-center text-gray-600 mt-1">Get in touch with me through the form below. I will get back to you as soon as possible.</p>

            <form InnerRef = {form} onSubmit={sendEmail} class="mt-8 space-y-4">
                <input name='user_name' type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <input name='user_email' type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <textarea name='message' placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                    {/* On Submit, Take back to home page with success message */}
                <button value='Send'  type = 'submit' 
                    class="flex items-center justify-center mx-auto  bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
                      Send
                      <svg
                        class="w-5 h-5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                  </button>
            </form>
        </div>

      


  )
}
