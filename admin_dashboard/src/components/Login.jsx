import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    const username="ksrhostel@123"
    const pass="Password@123"

    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[hostel,setHostel]=useState('')

    const navigate=useNavigate("")
    const login=()=>{
        console.log(name);
        console.log(password);
        if(username===name && password===pass){
           navigate("/admindashboard")
        }
        navigate("/admindashboard")
    }
  return (
    <div className='container mt-5'>
        <div>
        <h2>Login Page</h2>
        <form>
            <div className='form-group my-2'>
                <label>Username:</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="username" className='form-control'/>
            </div>
            <div className='form-group my-2'>
                <label>Password:</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" className='form-control' />
            </div>

            <button type="button" className='btn btn-primary' onClick={login}>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login