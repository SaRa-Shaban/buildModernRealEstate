import React from 'react'
import Listed from '../Listed/Listed'
import styles from "./Blog.module.css";


export default function Blog() {
  return (
    <>
      <div className={`${styles.blog}  `}>
        <div className={`${styles.layer} h-100 d-flex flex-column justify-content-end text-white `}>
          <div className="container pb-3">
            <p>Blog</p>
            <h2 className='fw-bold'>Blog Grid - Our Blogs</h2>
          </div>

        </div>
      </div>

    <Listed/>
    
    </>
  )
}
