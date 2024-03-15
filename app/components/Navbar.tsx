import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <nav className='flex items-center justify-between text-slate-950 m-2 px-7 py-3 w-11/12 h-16 bg-white rounded-3xl shadow-md'>
        <div className='font-serif text-lg font-thin'>
          AI Dermatologist: Melanoma Classification using Deep Learning
        </div>

        <div className=''>
          <Link href='/project' className='mx-3'> Project </Link>
          <Link href='/team' className='mx-3'> Team </Link>
          <Link href='/' className='mx-3'> Product </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
