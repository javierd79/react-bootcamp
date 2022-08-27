import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../Config/routes'
import '../Assets/index.scss';

function Navbar() {
  return (
    <div className='navBar'>
        <nav>
          <a href='/'>
          <img src='digimon-logo.png' alt='Digimon' className="d-inline-block align-text-top"/>
          </a>
          <ul>
              {routes.reverse().map((route) => (
              <li>
                  <Link className='list' to={route.path}>{route.title}</Link>
              </li>
              ))}
          </ul>
        </nav>
    </div>
  )
}

export default Navbar