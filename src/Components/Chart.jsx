// Chart.js
import React from 'react';
import '../Components/chart.css';
import Arc from "../arc.png";
import RejectedItem from './RejectedItem';
import { RxCross2 } from 'react-icons/rx';

function Chart() {
  return (
    <div className="containe">
      <div className="row">
        <div className='chart'>
          <h5 className="over">Overview</h5>
        </div>
        <div className="lion">
          <img src={Arc} alt='rio' className="mage" />
          <h4>Blaze | Service Main <RxCross2 className="io" /></h4>
          <p className="pist">REJECTED</p>
        </div>
        <p className="fag">Create 23/11/2023</p>
        <div className='dark'>
        <RejectedItem
          icon="cross"
          title="Your application is rejected"
          description="You submitted on your Letter of Authorization (LOA) is different from what is on file with your carrier in their Customer Service Record (CSR). A CSR is a copy of how your telephone ."
        />
       <div className=''>
       <div className=''>
        <RejectedItem
          icon="pen"
          title="Edit Your Service"
          description="You may edit your service and then send it for the approval."
        />
        <div className="break">
        <button className="but">Edit Service</button>
        </div>
        </div>
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chart;
