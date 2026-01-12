import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container flex items-center justify-center h-screen'>
        <form className='w-[80%]'>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Name : </label>
            <input type="email" className="form-control my-2" placeholder='Enter email....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Email : </label>
            <input type="password" className="form-control my-2" placeholder='Enter password....' />
          </div>
          
          <Link to="/dashboard" className="btn btn-primary my-2">Login</Link>
        </form>
    </div>
  )
}

export default Login