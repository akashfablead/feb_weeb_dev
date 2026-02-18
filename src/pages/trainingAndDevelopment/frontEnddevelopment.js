import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import Reactdev from "../../assets/images/TrainingDevelopment/filters_format(webp)_quality(90).webp";
import {
  ChevronUp,
  ChevronDown,
  ChevronDoubleRight,
  EnvelopeFill,
  Twitter,
  Facebook,
  Linkedin,
  FastForwardBtnFill,
  Building,
  HandIndex,
  UniversalAccessCircle,
  Check,
  Check2,
} from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import TopBar from "../../components/topBar";
import ReCAPTCHA from "react-google-recaptcha";
import angularimg from "../../assets/images/TrainingDevelopment/angular.jpg";
import DevelopmentCTA from "../../components/caoursesCta";
import { BASE_URL } from "../../utils";
import Counsellingform from "../../components/counsellingform";

function FrontEndDevelopment() {
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
      // ${logoUrl}
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "hXuRUGsEGuhGf6KGeereSSas",
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
      <section id="development-course" className="why-us section-bg fade-up">
        <div className="section-title2">
          <span className="dev-border">
            <div className=" contact_us1">FrontEnd Development</div>
          </span>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="row ">
            <Col
              lg={8}
              // justify-content-center
              className="d-flex flex-column  align-items-stretch"
            >
              <div className="pb-4">

                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      FRONTEND DEVELOPMENT COURSE
                    </h1>
                  </span>

                  <Link class="btn-aplly-now" to="/contact">
                    Join Now
                  </Link>
                </div>
                <div className="development-content">
                  <p>
                    Are you ready to become a proficient frontend developer?
                    We're dedicated to helping you become a frontend development
                    expert.
                  </p>
                  <p>
                    Led by industry experts, our hands-on training approach will
                    empower you to tackle real-world projects with confidence.
                  </p>
                  <p>
                    From mastering HTML, CSS, and JavaScript to exploring
                    advanced frameworks and responsive design principles, our
                    comprehensive curriculum ensures you're well-equipped to
                    build captivating and functional websites and applications.
                  </p>
                </div>
                <div className="d-flex develop-content-flex">
                  <div className="d-flex development-icons p-4  my-4 text-center">
                    <FastForwardBtnFill className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">Live</h5>
                      <p className="ms-2">Project Training</p>
                    </div>
                  </div>

                  <div className="d-flex development-icons p-4  my-4 text-center ">
                    <UniversalAccessCircle className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">100%</h5>
                      <p className="ms-2">Job Placement</p>
                    </div>
                  </div>

                  <div className="d-flex development-icons  p-4  my-4 text-center ">
                    <HandIndex className="" size={50} />
                    <div>
                      <h5 className="mb-0 mt-2 mx-2 ms-2">Practical</h5>
                      <p className="ms-2">100% Practical</p>
                    </div>
                  </div>
                </div>
                <div className="what-we-learn pt-4">
                  <h4 className="">KEY FEATURES</h4>
                  <div className="d-flex justify-content-between key-features-div">
                    <ul className="">
                      <li cla>
                        <Check2 className="service-icon" />
                        <span className="">
                          Course Duration : 6 To 12 Months
                        </span>
                      </li>
                      <li>
                        <Check2 className="service-icon" />

                        <span className="w">Structured Curriculum</span>
                      </li>
                      <li>
                        <Check2 className="service-icon" />
                        <span className="">100% Job Oriented Training</span>
                      </li>
                    </ul>
                    <ul className="second-ul">
                      {" "}
                      <li>
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
                      </li>
                    </ul>
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
                      Frontend Development - REACT JS{" "}
                      {accordionState.item1 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      id="accordion-list-1 "
                      className={`react-development collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <span>
                        <strong>
                          {" "}
                          Basic & Advanced Training Course Topics{" "}
                        </strong>
                      </span>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> HTML /
                        HTML5, CSS / CSS3, Bootstrap, JavaScript, JQuery, OOPs
                        Concepts
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        Environment and setup ReactJS
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        Lifecycle methods, Components, Inbuilt Hooks & Custom
                        Hooks
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> State
                        ,Props, Events, Array, Object, Error handling
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Local
                        Storage, Session Storage, Routing and Navigation
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Form
                        Validation and Filtering ,React Bootstrap components
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Redux,
                        API Integration
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        Firebase, Google Authentication
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Custom
                        Higher-Order components
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Payment
                        Gateway Integration
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Project
                        Hosting on server
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      Frontend Development - ANGULAR JS
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse  angular-development ${accordionState.item2 ? "show" : ""
                        }`}
                    >
                      <span>
                        <strong>
                          {" "}
                          Basic & Advanced Training Course Topics{" "}
                        </strong>
                      </span>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> HTML /
                        HTML5, CSS / CSS3, Bootstrap, JavaScript, JQuery, OOPs
                        Concepts
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        Environment and setup NPM, Angular JS{" "}
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        MVC(Model, View, Controller),DOM & Events
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> HTTP
                        Request and Response
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Cookie &
                        Session
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Forms &
                        Validations with Advance Practical
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Routing
                        and Services
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        Ng-bootstrap
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> API
                        Integration
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Google
                        Authentication and Payment Gateway Integration
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Project
                        Hosting on server
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="mt-4 text-center">  <Link class="btn-aplly-now" to="/contact">Join Now</Link></div> */}
            </Col>
            <Col
              lg={4}
              className="align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
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
              <Counsellingform />

              <div className="popular-coarses mt-4">
                <span className="popularcourses">
                  <h5 className="mt-3 mb-lg-2 ">POPULAR COURSES</h5>
                </span>
                <div class="icon-box-content ">
                  <ChevronDoubleRight className="service-icon" />
                  <Link
                    to="/training-and-courses/front-end-development"
                    className="popular-link-title mx-2"
                  >
                    FrontEnd Development
                  </Link>
                  <ul className="sublinks">
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/front-end-development"
                        className="mx-2"
                      >
                        React JS
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/front-end-development"
                        className="mx-2"
                      >
                        Angular JS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="popular-link-title  mx-2"
                  >
                    BackEnd Developement
                  </Link>

                  <ul className="sublinks">
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/back-end-development"
                        className="mx-2"
                      >
                        Node JS Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/back-end-development"
                        className="mx-2"
                      >
                        Python Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/back-end-development"
                        className="mx-2"
                      >
                        PHP Codeigniter Development
                      </Link>
                    </li>
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/back-end-development"
                        className="mx-2"
                      >
                        PHP Laravel Development
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link
                    to="/training-and-courses/full-stack-development"
                    className="popular-link-title  mx-2"
                  >
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
                  <Link
                    to="/training-and-courses/cms-development"
                    className="popular-link-title mx-2"
                  >
                    WordPress CMS Development
                  </Link>
                </div>
                <div class="icon-box-content">
                  <ChevronDoubleRight className="service-icon" />
                  <Link
                    to="/training-and-courses/mobile-app-development"
                    className="popular-link-title mx-2"
                  >
                    Mobile App Development
                  </Link>

                  <ul className="sublinks">
                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/mobile-app-development"
                        className="mx-2"
                      >
                        Flutter App Development
                      </Link>
                    </li>

                    <li>
                      <ChevronDoubleRight className="service-icon" />
                      <Link
                        to="/training-and-courses/mobile-app-development"
                        className="mx-2"
                      >
                        React Native App Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cta1 mt-4">
                <div className="text-center">
                  {/* <h3 className="cta-heading"> Empower Your Future with In-Demand Skills.</h3> */}
                  <p>
                    Don't miss out on this chance to invest in yourself, Enroll
                    now and embark on your journey to success!.
                  </p>
                </div>
                <div className=" cta-btn-container text-center">
                  <Link className="btn-learn-more  align-middle" to="/contact">
                    Join Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Log /> */}
      <DevelopmentCTA />
      <Footer />
    </>
  );
}

export default React.memo(FrontEndDevelopment);
