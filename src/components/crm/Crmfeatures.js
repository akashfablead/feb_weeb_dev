import React from "react";
import { Col, Row } from "react-bootstrap";
import crmImage from '../../assets/images/Hero_Banner/Mobile_App-.webp'; // Replace with the actual path to your image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

function CrmFeatures() {
  return (
    <div id="herocrmfeatures" className="align-items-center py-5">
      <div className="container">
        <h1 className="mb-4 text-center">Features</h1>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Calls from CRM with call recording</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Launch SMS and email marketing campaigns</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>AI scoring</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Facebook, Instagram, WhatsApp integration</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Forms and landing pages</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Set-and-forget automation rules</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Automated sales funnels</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Invoicing and online payments</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Invoice payment status tracking</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Powerful analytics and reports</p>
                  <p className="left-tabs-text-2"><span> <i><FontAwesomeIcon icon={faCheckCircle} /></i></span>Customer support chat</p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img src={crmImage} alt="CRM Feature" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default React.memo(CrmFeatures);
