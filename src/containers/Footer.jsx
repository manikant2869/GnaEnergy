import React from "react";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
export default function Footer() {
  return (
    <section>
      <div className="row bg-blue p-3 my-2 footer-width">
        <div className="col-lg-6">
           <div className="row">
            <div className="col-sm-2 mt-2">
              <DraftsOutlinedIcon sx={{fontSize:100 , color:'white'}} />
            </div>
            <div className="col-lg-10 ms-0 text-white p-3">
              <p className="fs-2">Your Travel Journey Starts Here</p>
              <p >Sign up and we'll send the best deals to you</p>
            </div>
           </div>
        </div>
        <div className="col-lg-6">
          <div className="row mt-5">
            <div className="col-lg-8 my-auto">
            <input type="text" placeholder="Your Email" className="p-2  border border-light rounded w-100 fw-light" />
            
            </div>
            <div className="col-lg-4 my-auto">
            <button type="button" className="btn btn-blue text-white  w-75" style={{padding:"12px"}}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gradient mt-5">
        <div className="footer-main">
          <div className="container">
            <div className="row mx-4 ">
              <div className="col-lg-2 col-md-12 ">
                <h6 className="fw-normal">Contact Us</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled ">
                  <li className="list-inline-item fs-6 fw-light">
                     Toll Free Customer Care
                  </li>
                  <li className="list-inline-item fw-light">
                    <a href="javascript">
                    +(1) 123 456 7890
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <h6 className="fw-normal">Company</h6>
                <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled mb-0">
                  <li className="fw-light">
                    About us
                  </li>
                  <li className="fw-light">
                    Carrers
                  </li>
                  
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <h6 className="fw-normal">Support</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="footer-conatct list-unstyled mb-0 contact-footer">
                  <li className="fw-light fs-6">
                    Contact 
                  </li>
                  <li className="fw-light fs-6">
                    Legal Notice
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-12">
                <h6 className="fw-normal">Other Services</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="footer-conatct list-unstyled mb-0 contact-footer">
                  <li  className="fs-6 fw-light">
                    Car Hire
                  </li>
                  <li className="fs-6 fw-light">
                    Activity Finder
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-12">
                <h6 className="fw-normal">Mobile</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="footer-conatct list-unstyled mb-0 contact-footer">
                  <li className="fs-6 fw-light">
                    Contact 
                  </li>
                  <li className="fs-6 fw-light">
                    Legal Notice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>   
      </footer>
    </section>
  );
}
