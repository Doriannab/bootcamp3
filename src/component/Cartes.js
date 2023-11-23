import React from 'react'
import Cartemini from './Cartemini'
import fleur from './fleur.jpg'



function Cartes() {
  return (
    <div>
    <div className="container" id="Cartes">
    <div className="row">
      
      <div className="icons-services d-flex justify-content-between flex-wrap py-5  bg-light "> 
        <Cartemini
          title={'Art H24'}
          para={'Entreprise Solutions'}
          image={fleur}
          
        />
      
        
        <Cartemini
          title={'ClOUD DATABASE'}
          para={'Entreprise Solutions'}
          image={fleur}
        />
        <Cartemini
          title={'ENTREPRISE ACCOUNT'}
          para={'Entreprise Solutions'}
          image={fleur}
        />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cartes