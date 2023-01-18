import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({setStatus, setPageNumber}) => {

  let status =["Alive", "Dead", "Unknown" ]
  return (
    <div>

   
    <div className="">
      <h5 className="mt-3 mb-2">

        Status
      </h5>
    </div>
      <div className="d-flex flex-wrap gap-3">
        {status.map((items, index) => (<FilterBTN 
        task={setStatus}
         setPageNumber={setPageNumber} 
         key="index" 
         name="status" 
         index={index} 
         items={items}/>))}
      </div>
    </div> 
  )
}

export default Status
