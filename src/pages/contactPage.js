import React, { useRef, useState } from "react";
import Header from "../components/headers";
import Footer from "../components/footer";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useEffect } from "react";
import TopBar from "../components/topBar";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

function ContactPage() {
  const recaptchaRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormReady, setFormReady] = useState(false);
  const [isVerified, setVerified] = useState(false);

  const handleVerification = (value) => {
    setVerified(value);
    setFormReady(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "", // New field for phone_no number
    company_name: "",
    interest_type: "",
    product_interest: "",
    service_interest: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number input with digit filtering
    if (name === "phone_no") {
      // Filter out non-digit characters
      const filteredValue = value.replace(/\D/, "");

      // Limit to 10 digits
      if (filteredValue.length <= 10) {
        setFormData({
          ...formData,
          [name]: filteredValue,
        });
      }
    } else if (name === 'interest_type') {
      // Reset dependent fields when interest type changes
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
        product_interest: "",
        service_interest: ""
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      setErrorMessage(
        "Please verify that you're not a robot by clicking the ReCAPTCHA checkbox."
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
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
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "hXuRUGsEGuhGf6KGeereSSas",
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
            phone_no: "", // Reset phone_no number field
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
        console.error(
          "Error sending message. Server returned status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <section id="contact" className=" contact section-bg fade-up">
        <div className="section-title1">
          <div className="pt-5">Contact Us</div>
          <p className="header-content contact-us-page">
            We are here to help you with any queries and questions you may have. <br />
            Get familiar with us and kick-start with our services.
          </p>
        </div>
        <div
          className="container mt-3 content1 aos-init aos-animate"
          data-aos="fade-up"
        >
          <Row>
            <Col lg={5} className="d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    A-5001, Ascon Plaza, Adajan, Surat,
                    <br />
                    Gujarat 395009 – India
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <Link to="mailto:info@fableadtechnolabs.com">
                      <label>info@fableadtechnolabs.com</label>
                    </Link>
                  </p>
                </div>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.978800847412!2d72.7962328743919!3d21.193001082118858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0bbb40f751%3A0xbacdb736bad4987!2sFablead%20Developers%20Technolab!5e0!3m2!1sen!2sin!4v1700121136280!5m2!1sen!2sin"
                  frameBorder="0"
                  allowFullScreen
                  className="google_map"
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
            <Col lg={7} className="mt-5 mt-lg-0 d-flex align-items-stretch">
              <Form onSubmit={handleSubmit} role="form" className="php-email-form">
                <Row className="mb-2">
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
                  {isVerified && (
                    <div className="alert alert-info">
                      You've clicked the ReCAPTCHA!
                    </div>
                  )}
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel htmlFor="name">Name</FormLabel>
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
                      <FormLabel htmlFor="email">Email</FormLabel>
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
                      <FormLabel htmlFor="phone_no">Phone Number</FormLabel>
                      <FormControl
                        type="tel"
                        name="phone_no"
                        id="phone_no"
                        value={formData.phone_no}
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
                <Row className="mb-2">
                  <Col md={12}>
                    <FormGroup className="mb-2">
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
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
                  <Col lg={6}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                      onChange={handleVerification}
                    />
                  </Col>
                  <Col lg={6} className="mt-3">
                    <button type="submit" className="send-message-btn">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default React.memo(ContactPage);
