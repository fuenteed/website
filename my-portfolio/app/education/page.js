
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../../app/globals.css'
import EducationTimeline from './timeline'

/**
 * The education page.
 *
 * This page will contain information about my academic background.
 *
 * @return {JSX.Element} The JSX element representing the education page.
 */
export default function education() {
  return (
   

      <div>
        <EducationTimeline />
      </div>

 
  )
}
