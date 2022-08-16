import React from 'react'

function Navbar({children}) {
  return (
    <nav className={`navbar navbar-light bg-danger`}>
      <div className="container-fluid">
        {children}
      </div>
    </nav>
  )
}

export default Navbar