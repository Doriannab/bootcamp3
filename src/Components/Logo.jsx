// Logo.js
import React from 'react';

const Logos = ({ src, alt, width, height }) => (
  <div className="lour d-flex w-50">
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="d-inline-block align-top image"
    />
    <div className="anna">
      <h2 className="dash">Artisanal</h2>
      <p className="dire">Business & consulting</p>
    </div>
  </div>
);

export default Logos;
