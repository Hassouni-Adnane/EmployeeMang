import React from 'react'
import Login from './assets/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashbord from './Dashboard'
import Profile from './assets/Profile'
import Home from './assets/Home'
import Employee from './assets/Employee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashbord />}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/employee' element={<Employee/>} />
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
