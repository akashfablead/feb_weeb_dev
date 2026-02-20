import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl, Button, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormReady, setFormReady] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleVerification = (value) => {
    setVerified(value);
    setFormReady(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    company_name: "",
    interest_type: "",
    product_interest: "",
    service_interest: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Reset dependent fields when interest type changes
    if (name === 'interest_type') {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
        product_interest: "",
        service_interest: ""
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const isValidPhoneNumber = (phone) => {
    // Basic phone number validation - allows digits, spaces, hyphens, parentheses, plus signs
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone.replace(/[^\d\+]/g, ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!formData.phone_no || !isValidPhoneNumber(formData.phone_no)) {
      setErrorMessage("Please enter a valid phone number.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    // if (!isFormReady) {
    //   return; // Do nothing if the form is not ready
    // }

    if (!isVerified) {
      setErrorMessage("Please verify that you're not a robot by clicking the ReCAPTCHA checkbox.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000); // Clear error message after 5 seconds
      return; // Do nothing further if ReCAPTCHA is not verified
    }

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }

    setVerified(false);
    setFormReady(false);

    // Prepare form data for submission based on interest type
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone_no: formData.phone_no,
      company_name: formData.company_name,
      subject: formData.subject,
      message: formData.message,
      // Include the selected interest (either product or service)
      interest: formData.interest_type === 'product' ? formData.product_interest :
        formData.interest_type === 'service' ? formData.service_interest : '',
      interest_type: formData.interest_type
    };

    console.log("Form Data:", submissionData);

    try {
      // ${logoUrl}
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "hXuRUGsEGuhGf6KGeereSSas",
        },
        body: JSON.stringify(submissionData),
      });

      if (response) {
        const data = await response.json();
        if (data.status === "success") {
          setSuccessMessage("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            phone_no: "",
            company_name: "",
            interest_type: "",
            product_interest: "",
            service_interest: "",
            subject: "",
            message: "",
          });


          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);

        } else {
          console.error("Error sending message");
        }
      } else {
        console.error("Error sending message. Server returned status:", response.status);

      }
    } catch (error) {
      console.error("Error sending message:", error.message);

    }
  };

  return (
    <section>
      <div id="contact" className="contact">
        <Container data-aos="fade-up">
          <div className="section-title">
            <div role="heading" aria-level="2">Contact Us</div>
          </div>
          <Row>
            <Col lg={5} className="d-flex align-items-stretch ">
              <div className="info section-bg ">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A-5001, Ascon Plaza,
                    Adajan, Surat,
                    <br />
                    Gujarat 395009 – India</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <Link to="mailto:info@fableadtechnolabs.com">
                      <label>info@fableadtechnolabs.com</label>
                    </Link><br />
                    <small>We will respond within 24 hours.</small>
                  </p>
                </div>
                <div className="website">
                  <i className="bi bi-globe"></i>
                  <h4>Website:</h4>
                  <p>
                    <Link to="https://www.fableadtechnolabs.com" target="_blank" rel="noopener noreferrer">
                      <label> www.fableadtechnolabs.com </label>
                    </Link>
                  </p>
                </div>

                <div className="hours">
                  <i className="bi bi-clock"></i>
                  <h4>Support Hours:</h4>
                  <p>Monday – Friday, 10:00 AM – 6:00 PM IST</p>
                </div>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.978800847412!2d72.7962328743919!3d21.193001082118858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0bbb40f751%3A0xbacdb736bad4987!2sFablead%20Developers%20Technolab!5e0!3m2!1sen!2sin!4v1700121136280!5m2!1sen!2sin"
                  frameBorder="0"
                  allowFullScreen
                  className="google_map"
                  loading="lazy"
                >
                </iframe>
              </div>
            </Col>
            <Col lg={7} className="mt-5 mt-lg-0 d-flex align-items-stretch">
              <Form
                onSubmit={handleSubmit}
                role="form"
                className="php-email-form"
              >
                <Row className="mb-2">
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  {isVerified && <div className="alert alert-info">You've clicked the ReCAPTCHA!</div>}
                  {/* {successMessage && <div className="alert alert-success">{successMessage}</div>} */}
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormControl
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="email">Your Email</FormLabel>
                      <FormControl
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <FormControl
                        type="tel"
                        name="phone_no"   // ✅ FIX
                        id="phone"
                        value={formData.phone_no}   // ✅ FIX
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="company_name">Company Name</FormLabel>
                      <FormControl
                        type="text"
                        name="company_name"
                        id="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-2">

                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="interest_type">
                        Interest Type
                      </FormLabel>
                      <Form.Select
                        name="interest_type"
                        id="interest_type"
                        value={formData.interest_type}
                        onChange={handleInputChange}
                        style={{ height: "45px", borderRadius: "20px" }}
                        required
                      >
                        <option value="">Select Interest Type</option>
                        <option value="service">Services</option>
                        <option value="product">Products</option>
                      </Form.Select>
                    </FormGroup>
                  </Col>

                  {/* Conditional Service Selection */}
                  {formData.interest_type === 'service' && (
                    <Col md={6}>
                      <FormGroup>
                        <FormLabel htmlFor="service_interest">
                          Service Interest
                        </FormLabel>
                        <Form.Select
                          name="service_interest"
                          id="service_interest"
                          value={formData.service_interest}
                          onChange={handleInputChange}
                          style={{ height: "45px", borderRadius: "20px" }}
                          required
                        >
                          <option value="">Select Service</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Web Design">Web Design</option>
                          <option value="E-commerce Development">E-commerce Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="CMS Development">CMS Development</option>
                          <option value="SEO Services">SEO Services</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Software Development">Software Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Cloud Solutions">Cloud Solutions</option>
                          <option value="Other">Other Services</option>
                        </Form.Select>
                      </FormGroup>
                    </Col>
                  )}

                  {/* Conditional Product Selection */}
                  {formData.interest_type === 'product' && (
                    <Col md={6}>
                      <FormGroup>
                        <FormLabel htmlFor="product_interest">
                          Product Interest
                        </FormLabel>
                        <Form.Select
                          name="product_interest"
                          id="product_interest"
                          value={formData.product_interest}
                          onChange={handleInputChange}
                          style={{ height: "45px", borderRadius: "20px" }}
                          required
                        >
                          <option value="">Select Product</option>
                          <option value="CRM Web & Mobile APP">
                            CRM Web & Mobile APP (CRM)
                          </option>
                          <option value="Hospital Management">
                            Hospital Management
                          </option>
                          <option value="HR Management System">HR Management System</option>
                          <option value="Inventory & Billing Software">
                            Inventory & Billing Software (ERP)
                          </option>
                          <option value="Ecommerce Web & Mobile App">
                            E-commerce Web & Mobile App
                          </option>
                          <option value="WhatsApp Bulk Messaging">WhatsApp Bulk Messaging Platform</option>
                          <option value="Real Estate Management">Real Estate Management System</option>
                          <option value="Other">
                            Other
                          </option>
                        </Form.Select>
                      </FormGroup>
                    </Col>
                  )}
                </Row>

                <FormGroup className="mb-2">
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Form.Control
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormControl
                    as="textarea"
                    name="message"
                    rows="7"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <Row className="re-captcha">
                  <Col lg={6} >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                      onChange={handleVerification}
                    />
                  </Col>
                  <Col lg={6} className="mt-3 ">
                    <button type="submit" className="send-message-btn" >
                      Send Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default React.memo(Contact)
