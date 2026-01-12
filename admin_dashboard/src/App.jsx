import React from 'react'
import Login from './components/Login'
import AdminDashboard from './pages/AdminDashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HostelA from './components/HostelA'
import HostelB from './components/HostelB'
import HostelC from './components/HostelC'
import Queries from './pages/Queries'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/hostelA' element={<HostelA/>}/>
        <Route path='/hostelB' element={<HostelB/>}/>
        <Route path='/hostelC' element={<HostelC/>}/> 
        <Route path='/outpass' element={<AdminDashboard/>}/>
        <Route path='/queries' element={<Queries/>} />
      </Routes>
    </div>
  )
}

export default App