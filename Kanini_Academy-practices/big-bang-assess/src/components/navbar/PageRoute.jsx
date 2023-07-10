import React from 'react'
import { Link } from 'react-router-dom'

function PageRoute() {
  return (
    <div>
      {localStorage.role   === "Admin" ? 
      <Link to="/Home/Admin">
        <button className="navButton">Admin</button>
      </Link>
     : null}

    {/* Doctor panel */}
    {localStorage.role === "doctor" ? 
      <Link to="/Home/Doctor">
        <button className="navButton">Appointments</button>
      </Link>
     : null}

    {/* Reserve appointment */}
    {localStorage.role === "patient" ? 
      <>
      <Link to="/Home/patient">
        <button className="navButton">Services</button>
      </Link>
      </>
     : null}
    </div>
  )
}

export default PageRoute
