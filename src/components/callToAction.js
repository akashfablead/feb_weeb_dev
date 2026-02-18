import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faUserSecret, faCoffee, faUsers } from "@fortawesome/free-solid-svg-icons";

function CallToAction() {
  return (
    <section id="cta" className="cta d-flex justify-content-center ">
      <Container data-aos="zoom-in">
        <Row className="d-flex justify-content-center ">
          <Col lg={3}  className="text-lg-center col-6 cta-div">
            <div className="text-center item-wow visible" data-number="700" >
              <i className="calltoactionfonts"> <FontAwesomeIcon icon={faDesktop} /></i>
              <p id="number1" className="number">3500+</p>
              <span></span>
              <hr className="hrStyle" />
              <p>Project Complete</p>
            </div>
          </Col>
          <Col lg={3}  className="text-lg-center col-6 ">
            <div className="text-center item-wow visible " data-number="550" >
              <i className="calltoactionfonts"><FontAwesomeIcon icon={faUserSecret} /></i>
              <p id="number2" className="number">4000+</p>
              <span></span>
              <hr className="hrStyle" />
              <p>Clients</p>
            </div>

          </Col>
          <Col lg={3}  className="text-lg-center col-6 ">
            <div className="text-center item-wow visible " data-number="700" >
              <i className="calltoactionfonts"><FontAwesomeIcon icon={faCoffee} /></i>
              <p id="number3" className="number">4000+</p>
              <span></span>
              <hr className="hrStyle" />
              <p>Cup Of Coffee</p>
            </div>
          </Col>
          <Col lg={3}  className=" text-lg-center col-6">
            <div className="text-center item-wow visible" data-number="12" >
              <i className="calltoactionfonts"> <FontAwesomeIcon icon={faUsers} /></i>
              <p id="number4" className="number">60+</p>
              <span></span>
              <hr className="hrStyle" />
              <p>Team Members</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default React.memo(CallToAction)
