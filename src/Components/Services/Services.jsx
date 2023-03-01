import React from 'react'
import styles from "./Services.module.css";
import Featured from './../Featured/Featured';


export default function Services() {
  return (
    <>

      <div className={`${styles.service}  `}>
        <div className={`${styles.layer} h-100 d-flex flex-column justify-content-end text-white `}>
          <div className="container pb-3">
            <p>Services</p>
            <h2 className='fw-bold'>Services -All Services</h2>
          </div>

        </div>
      </div>


      <Featured />

    </>
  )
}
