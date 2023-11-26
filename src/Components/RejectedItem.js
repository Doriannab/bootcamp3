// RejectedItem.js
import React from 'react';
import '../Components/chart.css';
import { RxCross2 } from "react-icons/rx";
import { FaPen } from "react-icons/fa6";

const RejectedItem = ({ icon, title, description,button }) => (
    <div className='dark'>
  <div className="name">
    <div className="croix">
       {icon === 'cross' ? (
          <RxCross2 className="crai" />
        ) : (
          <div className="ienne">
            <FaPen className="craie" />
          </div>
        )}
    </div>
    
    <div className="blanc">
      <h5 className="griff">{title}</h5>
      <p className="soule">{description}</p>
     
    </div>
  </div>
  </div>
);

export default RejectedItem;
