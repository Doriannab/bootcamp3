// Sidebar.js
import React from 'react';
import Logo from '../Components/Logo';
import Main from '../Components/Main';
import ReferenceItems from '../Components/ReferenceItems';
import UpgradeSection from '../Components/UpgradeSection';
import { FaHome, FaFile, FaMoneyBillAlt, FaEnvelope, FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import Art from '../art.png';
import '../sidebar.css';




const Sidebar = () => {
  
  const menuItems = [
    { href: '#', icon: <FaFile className="icoon" />, label: 'Documents' },
    { href: '#', icon: <FaMoneyBillAlt className="icoon" />, label: 'Payments' },
    { href: '#', icon: <FaEnvelope className="icoon" />, label: 'Messages' },
    { href: '#', icon: <FaChartBar className="icoon" />, label: 'Report Center' },
  ];

  const referencesItems = [
    { href: '#', icon: <FaUser  className="icoon"/>, label: 'Users' },
    { href: '#', icon: <FaCog  className="icoon"/>, label: 'Settings' },
  ];

  return (
    <div className="containerr">
      <div className="cont w-20">
        <Logo src={Art} alt="Logo" width="30" height="30" />
        
        <div className="menu">
          <div className="sidebar">
            <span>Main Menu</span>
            <ul className="main-menu">
            <li>
              <a href='#' className="rire">< FaHome /> Overview </a>
            </li>
              {menuItems.map((item, index) => (
                <Main key={index} {...item} />
              ))}
            </ul>
          </div>

          <div className="content">
            <span>REFERENCES</span>
            <ul className="report-center">
              {referencesItems.map((item, index) => (
                <ReferenceItems key={index} {...item} />
              ))}
            </ul>
          </div>

          <UpgradeSection 
            title="Upgrade to Enterprise Account!"
            description="Increase your sales by using special features of enterprise Membership"
          />
          <br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
