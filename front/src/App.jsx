import React from 'react'
import Login from './assets/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashbord from './Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashbord />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
