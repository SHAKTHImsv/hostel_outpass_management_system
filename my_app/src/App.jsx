import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import ApplyForm from './components/ApplyForm'
import Contact from './pages/Contact'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/pass' element={<ApplyForm/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
      
    </>
  )
}

export default App
