import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Forbidden, Register, Login, Home } from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path='/register' element={<Register /> }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="*" element={<Forbidden />}/>
      </Routes> 
    </>
  )
}

export default App