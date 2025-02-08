import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import NotFound from '@/pages/NotFound'

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/projects'
        element={<Projects />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/*'
        element={<NotFound />}
      />
    </Routes>
  )
}