import React from 'react'
import Navigation from '../components/Navigation'
import Register from '../components/Register'

function Layout() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <div>
            <Register/>
        </div>
    </div>
  )
}

export default Layout