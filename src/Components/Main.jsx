// MenuItem.js
import React from 'react';
import '../sidebar.css';

const Main = ({ href, icon, label, }) => (
  
  <li>
  <a href={href} className="">
      {icon} {label}
      
    </a>
  </li>
  
);


export default Main;


 


