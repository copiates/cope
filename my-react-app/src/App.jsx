import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, Services1, Services2, Services3, About } from './Pages'
import { Tax } from './containers'
import './App.css'

const App = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/tax" element={<Tax />} />
      <Route path="/services/itr" element={<Services1 />} />
      <Route path="/services/partnership" element={<Services2 />} />
      <Route path="/services/accounting" element={<Services3 />} />
      <Route path="/about" element={<About />} />
    </Route>
  </Routes>
  )
}

export default App