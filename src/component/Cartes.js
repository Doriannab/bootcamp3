import React from 'react'
import Cartemini from './Cartemini'

function Cartes() {
  return (
    <div>
    <div className="container" id="Services">
    <div className="row">
      
      <div className="icons-services d-flex flex-wrap">
        <Cartemini
          title={'7/24 LIVE HELP'}
        />
        <Cartemini
          title={'Cl'}
        />
        <Cartemini
          title={'bi fs-1 text-primary bi-signpost-split'}
        />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cartes