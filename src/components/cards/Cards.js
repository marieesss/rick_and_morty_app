import React from 'react';
import styles from "./Cards.module.css";

const Cards = ({results}) => {

  let display;
  console.log(results);

  if(results){
    display=results.map(x=>{
      let {id, name, image, location, status} = x;
      return(
      <div className='col-4 position-relative mb-4'>
        <div className={styles.cards}>
          <img src={image} className={`${styles.img} img-fluid`}/>
          <div className='p-3'>
            <div className="fs-4 fw-bold mb-4">
              {name}
            </div>
            <div className="fs-6">
             Last location
            </div>
            <div className="fs-5">
             {location.name}
            </div>
          </div>
        </div>
        {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
      </div>
  
      )
    });
  }
  else{ display = "Np character found"}
  return (
    <>
      {display}
    </>
  )
}

export default Cards
