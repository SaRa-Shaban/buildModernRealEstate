import React from 'react'
import styles from "./About.module.css";
import about from './../../images/about.jpg'


export default function About() {
  return (
    <>
      <div className={`${styles.about}  `}>
        <div className={`${styles.layer} h-100 d-flex flex-column justify-content-end text-white `}>
          <div className="container pb-3 ">
            <p>About Us</p>
            <h2 className='fw-bold'>About Us - Who We Are?</h2>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="content py-2">
              <h2 className='fw-bold'>Our Agency Story</h2>
              <p className='text-muted'>Check out our company story and work process</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nostrum iusto eligendi cum nobis dolorem culpa neque sapiente commodi aspernatur maxime recusandae laboriosam possimus deleniti in tempora aut, facilis architecto.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum. Facilis veritatis eveniet hic! Non necessitatibus placeat, maiores optio neque fugit quas eum molestias saepe accusantium iure nisi nemo quaerat!</p>
              <button className='btn btn-success rounded-5 fs-5 my-2'>More About Us</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="content py-2">
            <img src={about} className='w-100' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
