import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link
     href={'/'}
     className='font-bold text-3xl bg-black dark:bg-white text-transparent bg-clip-text hover:cursor-pointer'
    
    >PageForge</Link>
  )
}

export default Logo