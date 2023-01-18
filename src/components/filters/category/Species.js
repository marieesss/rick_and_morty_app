import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = (setSpecies, setPageNumber) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>

   
    <div className="">
      <h5 className='mt-3 mb-2'>

        Species
      </h5>
    </div>
    <div className='d-flex flex-wrap gap-3'>
        {species.map((items, index) => (<FilterBTN 
        task={setSpecies}
        set={setSpecies}
        key="index" 
        name="species" 
        index={index} 
        items={items}/>))}
      </div>
    </div> 
    
  )
}

export default Species
