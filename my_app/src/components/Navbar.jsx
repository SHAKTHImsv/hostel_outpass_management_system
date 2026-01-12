import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex items-center justify-between bg-primary p-2'>
        <div>
            <h1 className="text-white">KSR</h1>
        </div>
        <div className="flex gap-4">
            <Link to='/dashboard' className="text-white" style={{textDecoration:'none'}}>Home</Link>
            <Link to="/pass" className="text-white" style={{textDecoration:'none'}}>Apply Pass</Link>
            <Link to="/contact" className="text-white" style={{textDecoration:'none'}}>Send Queries</Link>
        </div>
    </div>
  )
}

export default Navbar