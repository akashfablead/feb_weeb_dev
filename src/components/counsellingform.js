import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container, Form, FormGroup, FormLabel, FormControl, Button, Image } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils";

function CounsellingForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormReady, setFormReady] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    const currentDomain = window.location.origin;

    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
  }, [location.pathname]);

  const handleVerification = (value) => {
    setVerified(value);
    setFormReady(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      setErrorMessage("Please verify that you're not a robot by clicking the ReCAPTCHA checkbox.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return; // Do nothing further if ReCAPTCHA is not verified
    }

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }

    setVerified(false);
    setFormReady(false);

    console.log("Form Data:", formData);

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "hXuRUGsEGuhGf6KGeereSSas",
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        const data = await response.json();
        if (data.status === "success") {
          setSuccessMessage("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);

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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        role="form"
        className="php-email-form development-contact-form p-4"
      >

        <span className="applictiondevlopment-getfree mb-lg-3">
          <h5 className="mb-lg-3">GET FREE COUNSELLING NOW</h5>
        </span>

        <Row className="mb-2">
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {isVerified && <div className="alert alert-info">You've clicked the ReCAPTCHA!</div>}
          {/* {successMessage && <div className="alert alert-success">{successMessage}</div>} */}
          <Col md={12}>
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
          <Col md={12}>
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
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
        <Row className="re-captcha my-3">
          <Col lg={12} >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
              onChange={handleVerification}
            />
          </Col>
          <Col lg={12} className="mt-3 ">
            <div className="btn-learn-more">
              <button type="submit" >Send Message</button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default React.memo(CounsellingForm)
