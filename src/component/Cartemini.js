import React from 'react'


function Cartemini({title, para, image, text}) {
  return (
    <div className="col-md-3">
      <div className=" mt-5 ">
       
      <div className="card border-0 text-center">
          <div className='text pt-3'>
          <h5>{title}</h5>
          <p>{para}</p>
          </div>
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">{text} "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
        <div class="text-end">
           <a href="#" class="card-link text-uppercase text-decoration-none text-black">read more <span></span></a>
         </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cartemini