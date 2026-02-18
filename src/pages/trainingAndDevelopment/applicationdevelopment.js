import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, FormGroup, FormLabel, FormControl, Button, Image } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha";
import { ChevronUp, ChevronDown, ChevronDoubleRight, EnvelopeFill, Twitter, Facebook, Linkedin, FastForwardBtnFill, Building, HandIndex, UniversalAccessCircle, Check, Check2 } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import TopBar from "../../components/topBar";
import applicationdev from "../../assets/images/TrainingDevelopment/imagesss.png"
import DevelopmentCTA from "../../components/caoursesCta";
import { BASE_URL } from "../../utils";
import Counsellingform from "../../components/counsellingform";

function ApplicationDevelopment() {
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    const currentDomain = window.location.origin;

    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
  }, [location.pathname]);

  const [isVerified, setVerified] = useState(true);
  const handleVerification = () => {

    setVerified(!isVerified);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: false,
    item3: false,
  });

  const handleAccordionToggle = (item) => {
    setAccordionState((prevState) => ({
      item1: item === "item1" ? !prevState.item1 : false,
      item2: item === "item2" ? !prevState.item2 : false,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBar />
      <Headers />
      <section className="why-us section-bg application-development">
        <div className="section-title2">
          <span className="dev-border">
            <div className=" contact_us1">Mobile App Development</div>
          </span>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="row ">
            <Col
              lg={8}
              // justify-content-center
              className="d-flex flex-column  align-items-stretch "
            >
              <div className="pb-4">

                {/* <div>
                  <Image src={applicationdev} alt="Application Development" className="front-end-img mb-4" />
                </div> */}

                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title ">MOBILE APP DEVELOPMENT COURSE</h1>
                  </span>

                  <Link class="btn-aplly-now" to="/contact">Join Now</Link>

                </div>
                <div className="development-content">
                  <p>
                    Are you ready to become a proficient Mobile App Developer? We're dedicated to helping you become a Mobile App Development expert.
                  </p>
                  <p>
                    we're dedicated to shaping the next generation of mobile app developers. Our comprehensive program covers the latest tools, techniques, and platforms used in mobile app development, empowering you to create innovative and user-friendly applications for iOS and Android devices.
                  </p>
                </div>
                <div className="d-flex develop-content-flex">

                  <div className="d-flex development-icons p-4  my-4 text-center">

                    <FastForwardBtnFill className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">
                        Live
                      </h5>
                      <p className="ms-2">Project Training</p>
                    </div>
                  </div>


                  <div className="d-flex development-icons p-4  my-4 text-center">

                    <UniversalAccessCircle className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">100%</h5>
                      <p className="ms-2">Job Placement</p>
                    </div>
                  </div>


                  <div className="d-flex development-icons  p-4  my-4 text-center">

                    <HandIndex className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">Practical</h5>
                      <p className="ms-2">100% Practical</p>
                    </div>
                  </div>
                  {/* <div  className="col-md-6 col-6 pt-3 pt-3  my-4 text-center development-icons">
<span className="text-blue">
<Building className="" size={32} />
</span>
<h5 className="mb-0">Career Support</h5>
</div> */}
                </div>
                <div className="what-we-learn pt-4">
                  <h4 className="">KEY FEATURES</h4>
                  <div className="d-flex justify-content-between key-features-div">
                    <ul className="">
                      <li cla>
                        <Check2 className="service-icon" />
                        <span className="">Course Duration : 6 To 12 Months</span>

                      </li>
                      <li><Check2 className="service-icon" />
                        <span className="w">Structured Curriculum</span>
                      </li>
                      <li>
                        <Check2 className="service-icon" />
                        <span className="">100% Job Oriented Training</span>

                      </li>
                    </ul>
                    <ul className="second-ul"> <li>
                      <Check2 className="service-icon" />
                      <span className="">Interactive Learning</span>
                    </li>
                      <li>
                        <Check2 className="service-icon" />
                        <span className="">Experienced Instructors</span>
                      </li>
                      <li>
                        <Check2 className="service-icon" />
                        <span className="">Certification</span>
                      </li></ul>
                  </div>
                </div>
              </div>
              <div className="accordion-list ">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      Flutter App Development {" "}
                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`react-development collapse ${accordionState.item1 ? "show" : ""
                        }`}

                    >
                      <p><strong> Basic & Advanced Training Course Topics </strong></p>
                      <p><ChevronDoubleRight className="service-icon" /> Introduction of Basic Programming Concepts</p>
                      <p><ChevronDoubleRight className="service-icon" /> Object-Oriented Programming (OOPs)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Control Structures, Data Structures,</p>
                      <p><ChevronDoubleRight className="service-icon" /> Software Development Lifecycle</p>
                      <p><ChevronDoubleRight className="service-icon" /> Dart for Mobile Development</p>
                      <p><ChevronDoubleRight className="service-icon" /> Dart Syntax and Basic Concepts</p>
                      <p><ChevronDoubleRight className="service-icon" /> Functions and Methods, Classes and Objects</p>
                      <p><ChevronDoubleRight className="service-icon" /> Functional Programming in Dart</p>
                      <p><ChevronDoubleRight className="service-icon" /> Streams and Reactive Programming with Stream API</p>
                      <p><ChevronDoubleRight className="service-icon" /> Advanced Error Handling Techniques</p>
                      <p><ChevronDoubleRight className="service-icon" /> Setting up Development Environment</p>
                      <p><ChevronDoubleRight className="service-icon" /> Widgets, Layouts and UI Components</p>
                      <p><ChevronDoubleRight className="service-icon" /> Handling User Input, Navigation and Routing</p>
                      <p><ChevronDoubleRight className="service-icon" /> Packages and Dependencies Management</p>
                      <p><ChevronDoubleRight className="service-icon" /> Styling and Theming in Flutter</p>
                      <p><ChevronDoubleRight className="service-icon" /> Asynchronous Programming in Dart</p>
                      <p><ChevronDoubleRight className="service-icon" /> APIs and HTTP Requests</p>
                      <p><ChevronDoubleRight className="service-icon" /> Debugging and Testing</p>
                      <p><ChevronDoubleRight className="service-icon" /> Custom Libraries and External Packages</p>
                      <p><ChevronDoubleRight className="service-icon" /> Animation and Motion in Flutter</p>
                      <p><ChevronDoubleRight className="service-icon" /> Custom Paint and Custom Widgets</p>
                      <p><ChevronDoubleRight className="service-icon" /> Advanced Layouts (Stack, Positioned, SingleChildScrollView)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Localization and Internationalization (i18n) in Flutter</p>
                      <p><ChevronDoubleRight className="service-icon" /> Using Firebase with Flutter (Authentication, Firestore, Cloud Functions)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Implementing Push Notifications</p>
                      <p><ChevronDoubleRight className="service-icon" /> Offline Data Persistence (SQLite, Shared Preferences)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Integrating Native Features (Camera, Location Services)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Performance Optimization Techniques in Flutter</p>
                      <p><ChevronDoubleRight className="service-icon" /> Testing and Debugging Techniques for Complex Apps</p>
                      <p><ChevronDoubleRight className="service-icon" /> Deployment for Flutter Apps</p>
                      <p><ChevronDoubleRight className="service-icon" /> Custom Paint and Custom Widgets</p>

                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      React Native App Development
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      id="accordion-list-2"
                      className={`collapse  angular-development ${accordionState.item2 ? "show" : ""
                        }`}
                    >
                      <p><strong> Basic & Advanced anced nced Training Course Topics </strong></p>
                      <p><ChevronDoubleRight className="service-icon" /> Basic and Advanced concepts of Javascript</p>
                      <p><ChevronDoubleRight className="service-icon" /> Setting up React Native Development Environment (Expo CLI, React Native CLI)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Understanding JSX (JavaScript XML)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Components and Props</p>
                      <p><ChevronDoubleRight className="service-icon" /> State Management and Styling</p>
                      <p><ChevronDoubleRight className="service-icon" /> Layouts and Flexbox</p>
                      <p><ChevronDoubleRight className="service-icon" /> Handling User Input (Touchable Components, Forms)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Navigation and Routing</p>
                      <p><ChevronDoubleRight className="service-icon" /> Fetching Data from APIs (Using Fetch, Axios)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Handling Images and Media</p>
                      <p><ChevronDoubleRight className="service-icon" /> Authentication and Authorization</p>
                      <p><ChevronDoubleRight className="service-icon" /> Advanced State Management (Redux, MobX)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Animations and Gestures</p>
                      <p><ChevronDoubleRight className="service-icon" /> Maps and Geolocation</p>
                      <p><ChevronDoubleRight className="service-icon" /> Push Notifications</p>
                      <p><ChevronDoubleRight className="service-icon" /> Localization and Internationalization (i18n)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Integrating with Device Features (Camera, Contacts, Sensors)  </p>
                      <p><ChevronDoubleRight className="service-icon" /> Offline Data Persistence (AsyncStorage, Realm)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Debugging React Native Apps</p>
                      <p><ChevronDoubleRight className="service-icon" /> Performance Optimization Techniques</p>
                      <p><ChevronDoubleRight className="service-icon" /> Testing React Native Apps (End-to-End Testing, UI Testing)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Building and Deploying Apps</p>
                      <p><ChevronDoubleRight className="service-icon" /> React Native for Web Development (React Native Web)</p>

                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="mt-4 text-center">  <Link class="btn-aplly-now" to="/contact">Join Now</Link></div> */}

            </Col>
            <div
              className="col-lg-4"

              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Counsellingform />

              {/* <Form
                onSubmit={handleSubmit}
                role="form"
                className="php-email-form development-contact-form p-4"
              >

                <span className="applictiondevlopment-getfree mb-lg-3">
                  <h5 className="mb-lg-3">GET FREE COUNSELLING NOW</h5>
                </span>

                <Row className="mb-2">
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
                </div> 
                <Row className="re-captcha my-3">
                  <Col lg={12} >

                    <ReCAPTCHA
                      sitekey="6LeARuMUAAAAAE1lFiqVl4FXq8bWKV-xrgRB5y-D"
                      onChange={handleVerification}
                    />
                  </Col>
                  <Col lg={12} className="mt-3 ">
                    <div class="btn-learn-more" >
                      <button type="Submit">Send Message</button>
                    </div>
                  </Col>
                </Row>
              </Form> */}
              <div className="popular-coarses mt-4">
                <span className="popularcourses">
                  <h5 className="mt-3 mb-lg-2 ">POPULAR COURSES</h5>
                </span>
                <div class="icon-box-content ">
                  <ChevronDoubleRight className="service-icon" />
                  <Link to="/training-and-courses/front-end-development" className="popular-link-title mx-2">
                    FrontEnd Development
                  </Link>
                  <ul className="sublinks">
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/front-end-development" className="mx-2">
                        React JS
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/front-end-development" className="mx-2">
                        Angular JS
                      </Link>
                    </li>

                  </ul>
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link to="/training-and-courses/back-end-development" className="popular-link-title  mx-2">
                    BackEnd Developement
                  </Link>


                  <ul className="sublinks">
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/back-end-development" className="mx-2">
                        Node JS Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/back-end-development" className="mx-2">
                        Python Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/back-end-development" className="mx-2">
                        PHP Codeigniter Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/back-end-development" className="mx-2">
                        PHP Laravel Development
                      </Link>
                    </li>

                  </ul>
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link to="/training-and-courses/full-stack-development" className="popular-link-title  mx-2">
                    FullStack Development
                  </Link>
                  {/* <ul className="sublinks">

                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/full-stack-development" className="mx-2">
                        WordPress Development
                      </Link>
                    </li>
                    
                  </ul> */}
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link to="/training-and-courses/cms-development" className="popular-link-title mx-2">
                    WordPress CMS Development
                  </Link>

                </div>

                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link to="/training-and-courses/mobile-app-development" className="popular-link-title mx-2">
                    Mobile App Development
                  </Link>

                  <ul className="sublinks">

                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/mobile-app-development" className="mx-2">
                        Flutter App Development
                      </Link>
                    </li>



                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link to="/training-and-courses/mobile-app-development" className="mx-2">
                        React Native App Development
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="cta1 mt-4">
                <div className="text-center">
                  {/* <h3 className="cta-heading"> Empower Your Future with In-Demand Skills.</h3> */}
                  <p>Don't miss out on this chance to invest in yourself, Enroll now and embark on your journey to success!.</p>
                </div>
                <div className=" cta-btn-container text-center">
                  <Link className="btn-learn-more align-middle" to="/contact">Join Now</Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* <Log /> */}
      <DevelopmentCTA />
      <Footer />
    </>
  );
}

export default React.memo(ApplicationDevelopment)
