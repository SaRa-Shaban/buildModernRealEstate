import React from 'react'
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <>

      <section className='bg-success'>
        <div className="container py-5">
          <div className="d-flex justify-content-between">
            <div className="content text-white">
              <h2 className='fs-1'>Do You Have Questions ?</h2>
              <p>We'll help you to grow your career and growth.</p>
            </div>

            <div className="content text-white">
              <button className={`btn btn-white rounded-5 py-3 px-4 fs-5 ${styles.btnCustom}`}>Contact Us Today</button>
            </div>
          </div>

        </div>
      </section>

      <div className={`pt-5 ${styles.footer}`}>
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <img src="./images/logo-light.png" className='w-25' alt="" />
              <h3 className='py-3'>Do You Need Help With Anything?</h3>
              <p className='text-muted pb-2'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="row gx-0">
                <div className="col-md-8">
                  <input type="text" className='form-control py-2' name="" id="" placeholder='Email Address' />
                </div>
                <div className="col-md-4">
                  <button className='btn btn-success py-2'>subscribe</button>
                </div>
              </div>

            </div>

            <div className="col-md-2">
              <h5 className='py-3'>LAYOUTS</h5>
              <ul className='list-unstyled text-white'>
                <li className='text-muted mb-2'>Home Page</li>
                <li className='text-muted mb-2'>Abou Page</li>
                <li className='text-muted mb-2'>Service Page</li>
                <li className='text-muted mb-2'>Contact age</li>
                <li className='text-muted mb-2'>Properity Page</li>
                <li className='text-muted mb-2'>Single Page</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className='py-3 text-white'>ALL SECTIONS</h5>
              <ul className='list-unstyled'>
                <li className='text-muted mb-2'>Header </li>
                <li className='text-muted mb-2'>Features </li>
                <li className='text-muted mb-2'>Services </li>
                <li className='text-muted mb-2'>Testimonials </li>
                <li className='text-muted mb-2'>Properity </li>
                <li className='text-muted mb-2'>Attractive </li>
                <li className='text-muted mb-2'>Videos </li>
                <li className='text-muted mb-2'>Footers </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className='py-3 text-white'>COMPANY</h5>
              <ul className='list-unstyled'>
                <li className='text-muted mb-2'>About </li>
                <li className='text-muted mb-2'>Blog </li>
                <li className='text-muted mb-2'>Pricing </li>
                <li className='text-muted mb-2'>Testimonials </li>
                <li className='text-muted mb-2'>Affiliate </li>
                <li className='text-muted mb-2'>Login </li>
                <li className='text-muted mb-2'>Changlog </li>
              </ul>
            </div>
          </div>

        </div>
        <hr />
        <p className='text-center pb-3 text-muted mb-0'>© 2021 RentUP. Designd By GorkCoder.</p>
      </div>
    </>
  )
}
