// UpgradeSection.js
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const UpgradeSection = ({ title, description }) => (
  <div className="triple">
    <h3 className="title">
      {title}
      <RxCross2 className="rince" />
    </h3>
    <p className="para">{description}</p>
    <button className="button">Upgrade</button>
  </div>
);

export default UpgradeSection;
