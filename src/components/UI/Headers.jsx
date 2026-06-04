import {NavLink} from 'react-router-dom';
// imports icons
import { CgMenu } from "react-icons/cg";


function Headers () {
  function showNavbar() {
    document.querySelector('.nav').classList.toggle("showNav")
  }

  return (
    <>
      <header>
        <div className="container flex">
          <div className="navbar flex">
            <div className="logo">
              <NavLink to="/">
                <h1> World Atlas </h1>
              </NavLink>
            </div>

            <nav className="nav flex">
              <ul className="nav-lists flex">
                <li>
                  <NavLink to="/" onClick={showNavbar}> Home </NavLink>
                </li>

                <li>
                  <NavLink to="/about" onClick={showNavbar}> About </NavLink>
                </li>

                <li>
                  <NavLink to="/country" onClick={showNavbar}> Country </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" onClick={showNavbar}> Contact </NavLink>
                </li>
              </ul>
            </nav>

            <div className="nav-toggle" onClick={showNavbar}>
              <CgMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Headers;