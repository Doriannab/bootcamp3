import React, { useState } from 'react';
import { FaHome, FaFile, FaMoneyBillAlt, FaEnvelope, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import Art from "../art.png";
import { RxCross2 } from "react-icons/rx";
import '../App.css';


 function Sidebar() {
  return (
    <div className="container">
    <div className="cont">
     <div className="mb-4 lour">
          <img
            src={Art}  // Ajoutez le chemin de votre logo ici
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2 image"
          />
          <h2 className="dash">Artics</h2><br/>
          <p className="dire">Business & consulting</p>
          {/* <p>Business & Consulting</p> */}
        </div>
        {/* <div className="menu"> */}
    <div className="sidebar">
    <span className="">Main Menu</span>
    <ul className="main-menu">
    <li><a href="#" className="rire"><FaHome className="icon" /> Overview</a></li>
    <li><a href="#"><FaFile /> Documents</a></li>
    <li><a href="#"><FaMoneyBillAlt/> Payments</a></li>
    <li><a href="#"><FaEnvelope /> Messages</a></li>
    <li><a href="#"><FaChartBar /> Report Center</a></li>
    </ul>
    </div>

    <div className="content">
    <span>REFERENCES</span>
    <ul className="report-center">
    <li><a href="#"><FaUser /> Users</a></li>
    <li><a href="#"><FaCog /> Settings</a></li>
    </ul>
    </div>
    {/* </div> */}

    <div className="triple">
    <div className="close">
        <h3 className="title">Upgrade to Enterprise Account!<RxCross2 className="rince" /></h3>
        <p className="para">Increase your sales by using special features of enterprise Membership </p>
        <button className="button">Upgrade</button>

    </div>
    </div>
    </div>
    </div>
  )
}
export default Sidebar;


   
 


