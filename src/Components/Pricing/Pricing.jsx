import React from 'react'
import SelectPackage from '../SelectPackage/SelectPackage'
import styles from "./Pricing.module.css";


export default function Pricing() {
  return (
    <>
    
    <div className={`${styles.price}  `}>
        <div className={`${styles.layer} h-100 d-flex flex-column justify-content-end text-white `}>
          <div className="container pb-3">
            <p>30 days money back guarantee</p>
            <h2 className='fw-bold'>No Extra Fees. Friendly Support</h2>
          </div>
        </div>
      </div>

    <SelectPackage/>
    </>
  )
}
