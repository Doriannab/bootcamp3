// ReferenceItem.js
import React from 'react';

const ReferenceItems = ({ href, icon, label }) => (
  <li>
    <a href={href}>
      {icon} {label}
    </a>
  </li>
);

export default ReferenceItems;
