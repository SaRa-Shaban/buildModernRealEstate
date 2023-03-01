import React from 'react'

export default function Featured() {
  return (
    
    <>
      {/* Featured  // services*/}
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src="./../../images/h1.png" width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Family House</h6>
              <p className='text-muted pt-0'>122 Property</p>
            </div>
          </div>


          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src="./../../images/h2.png" width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Villa/ House</h6>
              <p className='text-muted pt-0'>122 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src="./../../images/h3.png" width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Apartment</h6>
              <p className='text-muted pt-0'>720 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src="./../../images/h4.png" width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Office & Studio</h6>
              <p className='text-muted pt-0'>80 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src="./../../images/h6.png" width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Villa & Condo</h6>
              <p className='text-muted pt-0'>300 Property</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
