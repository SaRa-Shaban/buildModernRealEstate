import React from 'react'
import Featured from '../Featured/Featured';
import Listed from '../Listed/Listed';
import styles from "./Home.module.css";
import SelectPackage from './../SelectPackage/SelectPackage';

export default function
  () {
  return (
    <>

      <section className={`d-flex flex-column align-items-center justify-content-center pt-4 ${styles.home}`}>
        <div className={`${styles.bigContainer} `}>
          <h1 className={`text-center fs-bolder text-white `}>Search Your Next <br /> Home</h1>
          <p className={`${styles.pText} text-center mt-2 pt-2`}>Find new & featured property located in your local city</p>
        </div>

        <div className='container bg-white rounded-2 mt-4'>
          <div className="row">
            <div className="col-md-3 pt-2 pb-3 border-end ">
              <label htmlFor="" className='text-muted py-1'>City/Street</label>
              <input type="text" name="" id="" className='form-control mb-2' placeholder='Location' />
            </div>
            <div className="col-md-3 pt-2 pb-3 border-end ">
              <label htmlFor="" className='text-muted py-1'>Price Range</label>
              <input type="text" name="" id="" className='form-control mb-2' placeholder='Price Range' />
            </div>
            <div className="col-md-3 pt-2 pb-3 border-end ">
              <label htmlFor="" className='text-muted py-1'>Property Type</label>
              <input type="text" name="" id="" className='form-control mb-2' placeholder='Property Type' />
            </div>
            <div className="col-md-3 pt-2 pb-3 d-flex justify-content-around align-items-center">
              <div className="row mt-3">
                <div className="col-md-6">
                  <div>
                    <h5 className='text-muted py-1 '>Advance Filter</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='w-100 d-flex justify-content-center'>
                    <i className='fa fa-search mb-2 bg-success py-2 px-4 fa-2x rounded-2'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* featured */}
      <section className='bg-light '>
        <div className=''>
          <h2 className='text-center fw-bold pt-5'>Featured Property Types</h2>
          <p className='text-muted text-center'>Find All Type of Property.</p>
        </div>

        <Featured />

      </section>

      {/* recent */}
      <section className='bg-white p-5'>
        <div className='pt-5'>
          <h2 className='text-center fw-bold'>Recent Property Listed</h2>
          <p className='text-muted text-center w-75 px-5 pt-2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <Listed />

      </section>

      {/* award */}
      <section className={`${styles.bgDark} py-5`}>
        <div className='w-50 m-auto text-center py-2 mb-5'>
          <p className='text-success'> our awards</p>
          <h1 className={styles.awardText}>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>
        </div>

        <div className="container">
          <div className="row py-5">

            <div className="col-md-3">
              <div className="box text-white text-center">
                <div className={`${styles.icon} m-auto`}>
                  <i className='fa-solid fa-trophy'></i>
                </div>

                <h1>32 M</h1>
                <p className='text-muted'>Blue Burmin Award</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box text-white text-center">
                <div className={`${styles.icon} m-auto`}>
                  <i className='fa-solid fa-briefcase'></i>
                </div>

                <h1>43 M</h1>
                <p className='text-muted'>Mimo X11 Award</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box text-white text-center">
                <div className={`${styles.icon} m-auto`}>
                  <i className='fa-solid fa-lightbulb'></i>
                </div>

                <h1>51 M</h1>
                <p className='text-muted'>Australian UGC Award</p>
              </div>
            </div>


            <div className="col-md-3">
              <div className="box text-white text-center">
                <div className={`${styles.icon} m-auto`}>
                  <i className='fa-solid fa-heart'></i>
                </div>

                <h1>42 M</h1>
                <p className='text-muted'>IITCA Green Award</p>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* location */}
      <section className='bg-white p-5'>
        <div className='pt-5'>
          <h2 className='text-center fw-bold'>Explore By Location</h2>
          <p className='text-muted text-center w-75 px-5 pt-2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div className="container mt-3">
          <div className="row g-3 gx-4">

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-1.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>New Orleans, Louisiana </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-2.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>Lorem, ipsum </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-3.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>Lorem, ipsum </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-4.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>Lorem, ipsum </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-5.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>Lorem, ipsum </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.box} position-relative rounded-3 my-3`}>
                <img src="./../../images/city-6.png" className='w-100 rounded-3' alt="" />
                <div className={`${styles.layer} position-absolute rounded-3 text-center d-flex flex-column justify-content-center align-items-center text-white`}>
                  <h3>Lorem, ipsum </h3>
                  <ul className='list-unstyled d-inline-block'>
                    <li>12 villa</li>
                    <li>05 office</li>
                    <li>11 apartment</li>
                  </ul>
                </div>
              </div>
            </div>




          </div>
        </div>



      </section>


      {/* agents */}
      <section className='bg-light p-5'>
        <div className='pt-5'>
          <h2 className='text-center fw-bold'>Our Featured Agents</h2>
          <p className='text-muted text-center w-75 px-5 pt-2 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div className="container mt-2">
          <div className="row g-3">
            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-1.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-2.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-3.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-4.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-5.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${styles.content} bg-white shadoew-lg p-4 rounded-3 my-4 `}>
                <button className={`${styles.btnlist} btn rounded-5 mb-4 py-2 px-4`}>50 Listings</button>
                <div className={`${styles.brdr} d-flex m-auto position-relative`}>
                  <img src="./../../images/team-1.jpg" alt="" />
                  <i className='fa-solid fa-circle-check position-absolute '></i>
                </div>
                <p className='text-center pt-2 text-muted'><i className='fa fa-location-dot'></i> Liverpool, Canada</p>
                <h5 className='text-center'>Sargam S. Singh</h5>
                <div className='d-flex justify-content-center'>
                  <ul className='list-unstyled d-inline-block'>
                    <li><i className='fa-brands fa-facebook-f'></i></li>
                    <li><i className='fa-brands fa-linkedin'></i></li>
                    <li><i className='fa-brands fa-twitter'></i></li>
                    <li><i className='fa-brands fa-instagram'></i></li>
                  </ul>
                </div>

                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success rounded-2 p-3'> <i className="fa fa-envelope"></i> Message</button>
                  <button className='btn btn-dark rounded-2 p-3 px-4'><i className="fa fa-phone-alt"></i></button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* package */}
      <section className='bg-white p-5'>
        <div className='pt-5'>
          <h2 className='text-center fw-bold fs-1'>Select Your Package</h2>
          <p className='text-muted text-center w-75 px-5 pt-2 m-auto'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
        </div>

        <SelectPackage />

      </section>



    </>
  )
}
