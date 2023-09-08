import React from 'react'
import Login from './assets/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashbord from './Dashboard'
import Profile from './assets/Profile'
import Home from './assets/Home'
import Employee from './assets/Employee'
import AddEmployee from './assets/AddEmployee'
import EmployeeEdit from './assets/EmployeeEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashbord />}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/employee' element={<Employee/>} />
          <Route path='/creat' element={<AddEmployee />} />
          <Route path='/employeeEdit/:id' element={<EmployeeEdit />} />
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
