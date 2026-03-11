import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Log() {
  return (
    <section id="cta" className="cta">
      <Container className="" data-aos="zoom-in">
        <Row className="">
          <Col lg={9} className="text-center text-lg-start">
            <h3 className="cta-heading">Grow Your Business With Us.</h3>
            <p>Don't To Miss Our Special Offers! Flexible and cost-effective solutions.</p>
          </Col>

          <Col lg={3} className="text-center align-content-center">
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Link
                className="cta-btn m-0 align-middle d-flex align-items-center justify-content-center gap-2"
                to="/contact"
                title="Contact Fablead for a free consultation"
                aria-label="Contact Fablead Developers Technolab"
                style={{ padding: '10px 20px', fontSize: '16px', width: '180px' }}
              >
                Contact Us
                <FaPhone />
              </Link>
              <a
                className="cta-btn m-0 align-middle d-flex align-items-center justify-content-center gap-2"
                href="mailto:info@fableadtechnolabs.com"
                rel="noopener noreferrer"
                title="Send email to Fablead team"
                aria-label="Email info@fableadtechnolabs.com"
                style={{ padding: '10px 20px', fontSize: '16px', width: '180px' }}
              >
                Email Us
                <FaEnvelope />
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </section >
  );
}

export default React.memo(Log)
