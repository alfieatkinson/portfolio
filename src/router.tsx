import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ResumePage from '@/pages/ResumePage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/projects'
        element={<ProjectsPage />}
      />
      <Route
        path='/about'
        element={<AboutPage />}
      />
      <Route
        path='/resume'
        element={<ResumePage />}
      />
      <Route
        path='/*'
        element={<NotFoundPage />}
      />
    </Routes>
  )
}