import React from 'react'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'
import Singin from './Singin'
import Signup from './Singup'


export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singin" element={<Singin />} />
      <Route path="/singup" element={<Signup />}/>
    </Routes>
    </div>
  )
}
