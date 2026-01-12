import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container flex items-center justify-center h-screen'>
        <form className='w-[80%]'>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Name : </label>
            <input type="text" className="form-control my-2" placeholder='Enter name....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Email : </label>
            <input type="email" className="form-control my-2" placeholder='Enter email....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Password : </label>
            <input type="password" className="form-control my-2" placeholder='Enter Password....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Password : </label>
            <input type="number" className="form-control my-2" placeholder='Enter Mobile no....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary">Password : </label>
            <input type="number" className="form-control my-2" placeholder='Enter Register no....' />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary my-2">Hostel name : </label>
            <select className='form-control my-2'>
                <option value="Himalayan Hostel">Himalayan Hostel</option>
                <option value="Marina Hostel">Marina Hostel</option>
                <option value="Tirchy House">Tirchy House</option>
            </select>
          </div>
          <Link to="/login" className="btn btn-primary my-2">Register</Link>
        </form>
    </div>
  )
}

export default Register