import React from 'react'
import Head from './Head'
import "./header.css";
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import About from '../../about/About';
const Header = () => {
    const [click,setClick] = useState(false)
  return (
    <>
    <Head/>
    <header>
        <nav className='flexSB'>
            <ul className={click ? "mobile-nav": "flexSB"} onClick={()=> setClick(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="start">
                <div className="button">GET CERTIFICATE</div>
            </div>
            <button className="toggle"onClick={()=> setClick(!click)}>
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
        
    </header>
    <Outlet/>
    </>
  )
}

export default Header