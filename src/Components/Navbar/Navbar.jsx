import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
    <>

      <nav className={`navbar navbar-expand-sm navbar-light  position-sticky top-0 bg-white ${styles.header}`} >
        <div className="container d-flex justify-content-between">
          <a className={`navbar-brand   ${styles.logo}`} href="#">
            <img src="./images/logo.png" className='w-100 ' alt="" />
          </a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to='' aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to='about'>About</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to='services'>Services</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to='blog'>Blog</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to='pricing'>Pricing</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to='contact'>Contact</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link px-2 mx-3" to=''><span className='bg-success px-2 rounded-5'>2</span> My List</NavLink>
              </li>
              <button className={`btn btn-outline-success my-2 my-sm-0 ${styles.customBtn}`} type="submit" >
                SignIn
                <i className='fa fa-sign-out px-2'></i>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

