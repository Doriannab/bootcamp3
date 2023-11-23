import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

import woman from './woman.jpg'
import { FaChevronDown } from "react-icons/fa";




function Navbar() {
  return (
    <div className=''>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
        <div className="die d-flex position-relative align-items-center">
           <div className='position-absolute ms-2 text-center  fs-5'> < IoIosSearch /></div>
           <input  className="form-control me-2 bg-0 border-0 fw-light fs-5 text-center " type="search" placeholder="Search Data" aria-label="Search"/>
        </div>
        </form>
      </div>
      <div className='gal d-flex text-center '>
           < IoIosNotificationsOutline className='fs-3 me-3' / >
           
           <img src={woman} alt="woman" />
           <p className='text-center '>big boss</p>
           < FaChevronDown />

      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar