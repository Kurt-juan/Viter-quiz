import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    

    <section className='h-screen w-full flex items-center justify-center'>
        <div className='bg-gray-100 shadow-md w-[500px] py-10 px-6 text-center rounded-md'>
            <h1 className='text-3xl mb-5 font-bold'>Welcome</h1>
            <p className='mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae expedita consequuntur sed ex! Sed explicabo tenetur omnis dicta sint!</p>
            <Link to="/quiz" className='bg-red-600 px-8 py-2 rounded-full text-white'>Start</Link>
        </div>
    </section>

  )
}

export default Welcome