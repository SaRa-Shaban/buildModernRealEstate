import React from 'react'
import styles from './SelectPackage.module.css'


export default function SelectPackage() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-4">
            <div className="basic shadow-lg rounded-3 py-3 my-5">

              <div className='text-center py-3'>
                <h5 className='fw-bold pt-2'>Basic</h5>
                <h1><small>$</small>29</h1>
                <p>per user, per month</p>
              </div>
              <ul className='list-unstyled px-4'>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>99.5% Uptime Guarantee</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>120GB CDN Bandwidth</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>5GB Cloud Storage</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgX} py-1 px-2 rounded-5`}><i className='fa fa-x text-danger'></i></span>
                  <span className='ms-3'>Personal Help Support</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgX} py-1 px-2 rounded-5`}><i className='fa fa-x text-danger'></i></span>
                  <span className='ms-3'>Enterprise SLA</span>
                </li>
              </ul>
              <div className='w-75 m-auto'>
                <button className='btn btn-light border-2 border-success text-success rounded-5 w-100 fs-5 py-3 mt-2 mb-5 '>Start basic</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="basic shadow-lg py-3 rounded-3 my-5">

              <div className='text-center py-3'>
                <button className={`${styles.best} btn rounded-5 my-2 mb-3`}>Best Value</button>
                <h5 className='fw-bold pt-2'>Standard</h5>
                <h1><small>$</small>49</h1>
                <p>per user, per month</p>
              </div>
              <ul className='list-unstyled px-4'>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>99.5% Uptime Guarantee</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>150GB CDN Bandwidth</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>10GB Cloud Storage</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>Personal Help Support</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgX} py-1 px-2 rounded-5`}><i className='fa fa-x text-danger'></i></span>
                  <span className='ms-3'>Enterprise SLA</span>
                </li>
              </ul>
              <div className='w-75 m-auto'>
                <button className='btn btn-success rounded-5 w-100 fs-5 py-3 py-3 mt-2 mb-5 '>Start Platinum</button>
              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="basic shadow-lg py-3 rounded-3 my-5">

              <div className='text-center py-3'>
                <h5 className='fw-bold pt-2'>Platinum</h5>
                <h1><small>$</small>79</h1>
                <p>2 user, per month</p>
              </div>
              <ul className='list-unstyled px-4'>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>100% Uptime Guarantee</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>200GB CDN Bandwidth</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>20GB Cloud Storage</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>Personal Help Support</span>
                </li>
                <li className='pb-3 mb-2'>
                  <span className={`${styles.bgCheck} py-1 px-2 rounded-5`}><i className='fa fa-check text-success'></i></span>
                  <span className='ms-3'>Enterprise SLA</span>
                </li>
              </ul>
              <div className='w-75 m-auto'>
                <button className='btn btn-light border-2 border-success text-success rounded-5 w-100 fs-5 py-3 mt-2 mb-5 '>Start Platinum</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
