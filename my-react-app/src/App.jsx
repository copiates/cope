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
        <Route path="" index element={<Home />} />
        <Route path="tax" element={<Tax />} />
        <Route path="services/itr" element={<Services1 />} />
        <Route path="services/partnership" element={<Services2 />} />
        <Route path="services/accounting" element={<Services3 />} />
        <Route path="about" element={<About />} />
        <Route path="/documents/esi" element={<ESI />} />
        <Route path="/documents/pf" element={<PF />} />
        <Route path="/documents/ptr" element={<PTR />} />
        <Route path="/documents/proprietorship" element={<Proprietorship />} />
        <Route path="/documents/partnership" element={<Partnership />} />
        <Route path="/documents/llp" element={<LLP />} />
        <Route path="/documents/opc" element={<OPC />} />
        <Route path="/documents/private-limited" element={<PrivateLimited />} />
        <Route path="/documents/ie-code" element={<IECode />} />
        <Route path="/documents/lei" element={<LEI />} />
        <Route path="/documents/labour" element={<Labour />} />
        <Route path="/documents/shops" element={<Shops />} />
        <Route path="/documents/gst" element={<GST />} />
      </Route>
    </Routes>
  )
}

export default App