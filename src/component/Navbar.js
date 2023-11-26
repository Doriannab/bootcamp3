import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/App.css";
import woman from './woman.jpg'
import { FaChevronDown } from "react-icons/fa";




function Navbar() {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex" role="search">
        <div className="die d-flex position-relative align-items-center">
       
        <div className='post ms-2 text-center  fs-5'>
           <input  className="form-control me-2 border-0  text-center " type="search" placeholder="Search Data" aria-label="Search"/>
           < IoIosSearch className="pif"/>
           </div>
           
        </div>
        </form>
      </div>
      <div className='gal d-flex text-center '>
           < IoIosNotificationsOutline size={35} className="rie"/>
           
           <img src={woman} alt="woman" />
           <p className='text-center '>Coach Karl</p>
           < FaChevronDown />

      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;