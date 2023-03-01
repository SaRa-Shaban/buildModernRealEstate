import React from 'react'
import styles from "./Contact.module.css";


export default function Contact() {
  return (
    <>

      <div className={`${styles.price}  `}>
        <div className={`${styles.layer} h-100 d-flex flex-column justify-content-end text-white `}>
          <div className="container pb-3">
            <p>Contact Us</p>
            <h2 className='fw-bold'>Get Helps & Friendly Support</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shadow-lg py-5 my-5 px-4">
        <h6 className='py-3 fw-bold'>Fillup The Form</h6>
          <div className='mb-3 d-flex justify-content-center'>
          <input type="text" className="form-control me-2" id="exampleFormControlInput1" placeholder="name"/>
            
            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="email"/>
          </div>

          <div className='mb-3'>
          <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="subject"/>
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-success rounded-2'>Submit Request</button>
        </div>
      </div>

    </>
  )
}
