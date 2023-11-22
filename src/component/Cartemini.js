import React from 'react'

function Cartemini({title,}) {
  return (
    <div className="col-md-3">
      <div className="icon mt-4">
        <h1 className={title}></h1>
      </div>
      <div className="text p-3">
        <h6>{title}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Quisquam sit hic, neque qui blanditiis illo culpa rerum.</p>
        <p>
          <a href="#" className="text-decoration-none">
            Read More
          </a>
        </p>
      </div>
    </div>
  )
}

export default Cartemini