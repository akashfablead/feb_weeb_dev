import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function DevelopmentCTA() {
  return (
    <section id="cta" className="cta">
      <Container className="" data-aos="zoom-in">
        <Row className="">
          <Col lg={9} className="text-center text-lg-start">
            <h3 className="cta-heading"> Empower Your Future with In-Demand Skills.</h3>
            <p>Don't miss out on this chance to invest in yourself, Enroll now and embark on your journey to success!.</p>
          </Col>
          <Col lg={3} className="col-lg-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" to="/contact">Join Now</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default DevelopmentCTA;