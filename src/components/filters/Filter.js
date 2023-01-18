import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filter = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-4'>
        Filter
      </div>
      <div style={{cursor:"pointer"}}className='text-center text-primary text-decoration-underline'> Clear Filters</div>
        <div id="accordion">
          <Gender setGender={setGender} setPageNumber={setPageNumber}/>
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
          <Status setStatus={setStatus} setPageNumber={setPageNumber} />
 
        </div>
    </div>
  )
}

export default Filter
