import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
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
          {/* <Col lg={3} className="col-lg-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" to="/contact"><FiPhoneCall className="me-2" /> Contact Us</Link>
          </Col> */}
          <Col lg={3} className="text-center align-content-center">
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Link
                className="cta-btn m-0 align-middle d-flex align-items-center justify-content-center gap-2"
                to="/contact"
                style={{ padding: '10px 20px', fontSize: '16px', width: '180px' }}
              >
                Contact Us
                <FaPhone />
              </Link>
              <a
                className="cta-btn m-0 align-middle d-flex align-items-center justify-content-center gap-2"
                href="mailto:info@fableadtechnolabs.com"
                rel="noopener noreferrer"
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

// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhone } from "react-icons/fa";

// function Log() {
//   return (
//     <section id="cta" className="cta">
//       <Container data-aos="zoom-in">
//         <Row className="align-items-center justify-content-center">
//           <Col lg={9} className="text-center text-lg-start">
//             <h3 className="cta-heading">Grow Your Business With Us.</h3>
//             <p>Don't Miss Our Special Offers! Flexible and cost-effective solutions.</p>
//           </Col>
//           <Col lg={3} className="text-center">
//             <div className="d-flex justify-content-center justify-content-center gap-2 flex-wrap">
//               <Link className="cta-btn align-middle d-flex align-items-center gap-2" to="/contact">
//                 Contact Us
//                 <FaPhone />
//               </Link>
//               <a
//                 className="cta-btn align-middle d-flex align-items-center gap-2"
//                 href="mailto:info@example.com"
//               >
//                 Email Us
//                 <FaEnvelope />
//               </a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default React.memo(Log);
