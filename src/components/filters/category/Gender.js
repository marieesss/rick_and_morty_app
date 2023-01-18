import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = (setGender, setPageNumber) => {
  let genders = ["female", "male", "genderless", "uknown"];
  return (
    <div>

   
    <div className="">
      <h5 className="mt-3 mb-2">

        Genders
      </h5>
    </div>
      <div className="d-flex flex-wrap gap-3">
        {genders.map((items, index) => (<FilterBTN 
        task={setGender}
        setPageNumber={setPageNumber}
        key="index" 
        name="genders" 
        index={index} 
        items={items}/>))}
      </div>
    </div> 
  )
}

export default Gender
