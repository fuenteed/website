'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../app/globals.css'

 
export default function Home() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "Welcome to my portfolio. Let's build something amazing together!"

  useEffect(() => {
    let index = 0
    let interval

    const type = () => {
      interval = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setIsTyping(false)
          }, 1500) // Pause at the end
        }
      }, 50)
    }

    const erase = () => {
      interval = setInterval(() => {
        if (index > 0) {
          setText(fullText.slice(0, index - 1))
          index--
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setIsTyping(true)
          }, 500) // Pause before retyping
        }
      }, 30)
    }

    if (isTyping) {
      type()
    } else {
      erase()
    }

    return () => clearInterval(interval)
  }, [isTyping])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-4 t">Edson Fuentes</h1>
      <h2 className="text-2xl mb-8 ">Computer Science & Statistics Student at Oregon State University</h2>
      <div className="text-lg mb-8 h-16 flex items-center justify-center">
        <span>{text}</span>
        <span className="vim-cursor blink"></span>
      </div>

      {/* Social links */}

      {/* Instagram */}
      <div class="flex items-center gap-4">
        <Link href="https://www.instagram.com/eddy_sonn/" target="_blank">
        <div class="social-button">
          <button class="relative w-12 h-12 rounded-full group">
            <div
              class="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  class="group-hover:fill-[#171543] fill-white duration-300"
                  d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                ></path>
                <path
                  class="group-hover:fill-[#171543] fill-white duration-300"
                  d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        </Link>

        {/* Github */}
        <Link href="https://github.com/fuenteed" target="_blank">
        <div class="social-button">
          <button class="relative w-12 h-12 rounded-full group">

            <div
              class="floater w-full h-full absolute top-0 left-0 bg-slate-900 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-slate-900 rounded-full"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:fill-[#171543] fill-white duration-300"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        </Link>
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/edson-fuentes-211001254/" target="_blank">
        <div class="social-button">

        </div>
        </Link>

      </div>


      <div class="flex items-center gap-4 mt-4">
        <div>
          <Link href='/about'>
          <button class="relative inline-flex items-center text-black text-lg font-normal transition ease-[cubic-bezier(0.25,0.8,0.25,1)] duration-[400ms] border-none bg-none hover:text-white focus:text-white">
            <span>Více informací</span>
            <span class="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-[0.9em] h-[0.8em] fill-black transform rotate-[-45deg] transition-transform duration-[500ms] ease-out hover:fill-white hover:rotate-0"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </span>
            <span
              class="absolute bottom-[-7px] left-0 w-0 h-[1px] bg-black transition-all duration-[500ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:w-full"
            ></span>
          </button>
            About
          </Link>
        </div>

        <div>
          <Link href='/education'>
            Education
          </Link>
        </div>

        <div>
          <Link href='/projects'>
            Projects
          </Link>
        </div>


        <div>
          <Link href='/contact'>
            Contact
          </Link>
        </div>
        
      </div>


    </main>
  )
}
