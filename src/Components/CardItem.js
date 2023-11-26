// CardItem.js
import React from 'react';
// import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CardItem = ({ title, category, image, description }) => {
  return (
    <div className="menus">
      <div className="cii">
        <h6>{title}</h6>
        <p className="chat">{category}</p>
      </div>
      <div className="age">
        <img src={image} alt="" className="phase" />
      </div>
      <p className="sat">{description}</p>
      <div className="faq">
        <button className="grid">
          Read More <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

// CardItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default CardItem;
