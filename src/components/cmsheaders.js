import React, { useEffect, useRef, useState } from "react";
import { Navbar, Image, Container, Modal, Row, Col, FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/CRM/fablead_crm.png';
import ReCAPTCHA from "react-google-recaptcha";

function Cmsheader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("");
  const [isVerified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);
  const [isFormReady, setFormReady] = useState(false);
  useEffect(() => {
    const currentDomain = window.location.origin;
    const dynamicLogoUrl = `${currentDomain}/`;
    setLogoUrl(dynamicLogoUrl);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isNavLinkActive = (to) => {
    return location.pathname === to;
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleVerification = (value) => {
    setVerified(value);
    setFormReady(value);
  };
  return (
    <>
      <header id="header" className="fixed-top1">
        <Container className="d-flex align-items-center">
          <div className="logo me-auto">
            <Link to={logoUrl}>
              <Image src={logo} className="img-fluid" alt="Fablead Developers Technolab" />
            </Link>
          </div>

          <Navbar id="navbar" className={`navbar ${mobileMenuOpen ? "navbar-mobile" : ""}`}>
            <ul>
              <li>
                <div className="text-center">
                  <button className="btn-learn-more-crm mt-4" onClick={handleShowModal}>
                    Get started
                  </button>
                </div>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle-crm" onClick={toggleMobileMenu}></i>
          </Navbar>
        </Container>
      </header>

      {/* Modal component */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form
         
                role="form"
                className="php-email-form"
              >
              <Row>
                <Col lg={6}>
                    <FormGroup >
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormControl
                        type="text"
                        name="name"
                        id="name"
                       
                        required
                      />
                    </FormGroup>
                    </Col>
                    <Col lg={6}>
                    <FormGroup>
                      <FormLabel htmlFor="email">Your Email</FormLabel>
                      <FormControl
                        type="email"
                        name="email"
                        id="email"
                       
                        required
                      />
                    </FormGroup>
                    </Col>
                    </Row>

                <FormGroup className="mt-2">
                  <FormLabel htmlFor="subject">Phone Number</FormLabel>
                  <Form.Control
                    type="text"
                    name="subject"
                    id="subject"
                    
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormControl
                    as="textarea"
                    name="message"
                    rows="5"
                   id="message"
                    required
                  />
                </FormGroup>
         
                <FormGroup className="mt-3">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                      onChange={handleVerification}
                    />
                  </FormGroup>
              </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <button type="submit" className="send-message-btn-getstarted-form-crm">
            Submit
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default React.memo(Cmsheader);
