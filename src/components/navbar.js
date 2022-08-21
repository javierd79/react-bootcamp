import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../config/routes'

function Navbar() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar