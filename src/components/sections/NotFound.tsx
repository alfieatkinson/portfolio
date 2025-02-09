import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound(): React.JSX.Element {
  return (
    <div className='flex h-screen items-center justify-center'>
      <h2 className='text-center text-3xl font-bold mt-20'>
        404 | Page Not Found
        <NavLink
          to='/'
          className='block text-center mt-4 text-blue-500 hover:text-blue-600'
        >
          Go back home
        </NavLink>
      </h2>
    </div>
  )
}