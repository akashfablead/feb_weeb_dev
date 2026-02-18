import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Calltoaction() {
  return (
    <div className="newsletter-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side with icon and text */}
          <div className="col-lg-6 col-md-12 col-sm-12 justify-content-around newsletter-text d-flex gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="newsletter-icon-callto-action-crm"
            />
            <div>
              <h2>Grow Your Business With Us.</h2>
              <p>
                Don't To Miss Our Special Offers! Flexible and cost-effective
                solutions.
              </p>
            </div>
          </div>
          {/* Right side with input field and button */}
          <div className="col-lg-6 col-md-12 col-sm-12  newsletter-form d-flex">
            <Link to="#">
              <button className="btn-learn-more-crm mt-4">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calltoaction;
