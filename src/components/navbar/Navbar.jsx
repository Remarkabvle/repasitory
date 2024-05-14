import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Navbar.scss"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  let { pathname } = useLocation()

  if (pathname.includes("register")) {
    return <></>
  }

  return (
    <header className='header'>
      <nav className="navbar container">
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__center">
          <NavLink className='header__link' to={"/"}>Home</NavLink>
          <NavLink className='header__link' to={"/contact"}>Contact</NavLink>
          <NavLink className='header__link ' to={"/about"}>About</NavLink>
          <NavLink className='header__link ' to={"/register"}>Sign in</NavLink>
        </div>
        <div className="navbar__right">
          <input type="text"  placeholder='What are you looking for?'/>
          <button>Like</button>
          <button>Cart</button>
        </div>
      </nav>
          <hr />
    </header>
  )
}

export default Navbar