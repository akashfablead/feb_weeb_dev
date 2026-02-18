import React from "react";
import { Image } from "react-bootstrap";
import crmImage from '../../assets/images/service-banner/mobile-app.png'; // Replace with the actual path to your image
import '../../assets/css/style.css'
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function TopCrm() {
  return (
    <div id="herocrmsection" className="align-items-center  py-5">
      <div className="container">
        <div className="row">
            
          <div className="col-md-6">
            <Image src={crmImage} alt="CRM dashboard" fluid />
          </div>
         
          <div className="col-md-6">
            <h1>
             Top CRM Reviews
            </h1>
            <p className="lead">
              CRM built for salespeople, by salespeople.
            </p>
            <ul className="list-unstyled">
              <li className="mb-4 d-flex align-items-start">
                <FaRocket className="text-danger me-3" size={30} />
                <div>
                  <h5>Fast setup</h5>
                  <p>
                    Close takes just minutes to fire up. And rep onboarding? 
                    Give us a few hours—not weeks.
                  </p>
                </div>
              </li>
              <li className="mb-4 d-flex align-items-start">
                <FaGift className="text-danger me-3" size={30} />
                <div>
                  <h5>Simple, but flexible</h5>
                  <p>
                    With Custom Activities, Custom Fields, and Custom Objects, 
                    you can customize Close to work for you.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <FaPhoneAlt className="text-danger me-3" size={30} />
                <div>
                  <h5>All-in-one selling</h5>
                  <p>
                    Calling, SMS, Zoom, and email + calendar integrations. 
                    It's all included—no additional apps required.
                  </p>
                </div>
              </li>
            </ul>

            <div className="">
                <Link to="#">
                  <button className="btn-learn-more-crm mt-4">
                 Contact Us
                  </button></Link>
              </div>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default React.memo(TopCrm);
