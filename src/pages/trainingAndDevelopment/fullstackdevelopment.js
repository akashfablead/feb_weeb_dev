import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import fullstackimg from "../../assets/images/TrainingDevelopment/fullstack.png";
import {
  ChevronUp,
  ChevronDown,
  ChevronDoubleRight,
  Check2,
  HandIndex,
  UniversalAccessCircle,
  FastForwardBtnFill,
} from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import TopBar from "../../components/topBar";
import ReCAPTCHA from "react-google-recaptcha";
import DevelopmentCTA from "../../components/caoursesCta";
import { BASE_URL } from "../../utils";
import Counsellingform from "../../components/counsellingform";

function FullStackDevelopment() {
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();

  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    const currentDomain = window.location.origin;

    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
  }, [location.pathname]);

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

  const [innerAccordionState, setInnerAccordionState] = useState({
    items1: true,
    items2: false,
    items3: false,
    items3: false,
    items3: false,
    items4: false,
  });

  const handleInnerAccordionToggle = (item) => {
    setInnerAccordionState((prevState) => ({
      items1: item === "items1" ? !prevState.items1 : false,
      items2: item === "items2" ? !prevState.items2 : false,
      items3: item === "items3" ? !prevState.items3 : false,
      items4: item === "items4" ? !prevState.items4 : false,
    }));
  };

  const handleAccordionToggle = (item) => {
    setAccordionState((prevState) => ({
      item1: item === "item1" ? !prevState.item1 : false,
      item2: item === "item2" ? !prevState.item2 : false,
      item3: item === "item3" ? !prevState.item3 : false,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Headers />
      <section
        id="fullstackdevelopment"
        className="why-us section-bg fade-up full-stack-section"
      >
        <div className="section-title2">
          <div className="contact_us1">FullStack Development</div>
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
                  <Image src={fullstackimg} alt="Full Stack Development" className="front-end-img mb-4" />
                </div> */}

                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      FULLSTACK DEVELOPMENT COURSE
                    </h1>
                  </span>
                  <Link class="btn-aplly-now" to="/contact">
                    Join Now
                  </Link>
                </div>
                <div className="development-content">
                  <p>
                    Are you ready to become a proficient Full-Stack Developer?
                    We're dedicated to helping you become a Full-Stack
                    Development expert.
                  </p>
                  <p>
                    Immerse yourself in a dynamic learning environment where
                    you'll acquire proficiency in both frontend and backend
                    technologies.
                  </p>
                  <p>
                    From crafting captivating user interfaces with HTML, CSS,
                    and JavaScript to architecting robust server-side solutions
                    with frameworks like Node.js and Python, Codeigniter and
                    Laravel, our curriculum is designed to provide you with a
                    holistic understanding of the development process.
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
                  {/* <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      FULL STACK Development - WORDPRESS DEVELOPMENT
                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`wordpress-development collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p><strong> Basic & Advance Training Course Topics </strong></p>
                      <p><ChevronDoubleRight className="service-icon" /> HTML / HTML5, CSS / CSS3, Bootstrap, JavaScript, JQuery</p>
                      <p><ChevronDoubleRight className="service-icon" /> Setting up a Local PHP Development Environment (e.g., XAMPP, WAMP)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Basics of PHP , Functions and Parameters</p>
                      <p><ChevronDoubleRight className="service-icon" /> Arrays and Associative Arrays, Forms (GET and POST methods)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Handling User Input and Form Validation</p>
                      <p><ChevronDoubleRight className="service-icon" /> Error Handling and Debugging Techniques</p>
                      <p><ChevronDoubleRight className="service-icon" /> Object-Oriented Programming (OOP) in PHP</p>
                      <p><ChevronDoubleRight className="service-icon" /> MySQL Database and complex SQL Queries</p>
                      <p><ChevronDoubleRight className="service-icon" /> Setup WordPress Locally, WordPress Architecture (Core Files, Themes, Plugins)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Theme Development Basics (Creating a Basic Theme Structure)</p>
                      <p><ChevronDoubleRight className="service-icon" /> Enqueuing Stylesheets and Scripts in WordPress</p>
                      <p><ChevronDoubleRight className="service-icon" /> Actions and Filters, Custom Functions in WordPress</p>
                      <p><ChevronDoubleRight className="service-icon" /> WordPress Plugin Development</p>
                      <p><ChevronDoubleRight className="service-icon" /> Creating Custom Post Types and Taxonomies</p>
                      <p><ChevronDoubleRight className="service-icon" /> Advanced Custom Fields (ACF) and Custom Meta Boxes</p>
                      <p><ChevronDoubleRight className="service-icon" /> Security Best Practices for WordPress Development</p>
                      <p><ChevronDoubleRight className="service-icon" /> SEO and Performance Optimization Techniques in WordPress</p>
                      <p><ChevronDoubleRight className="service-icon" /> Deploying and Managing WordPress Websites</p>


                    </div>
                  </li> */}
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${
                        accordionState.item2 ? "show" : ""
                      }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      FullStack Development - FrontEnd
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      id="accordion-list-2"
                      className={`collapse  angular-development ${
                        accordionState.item2 ? "show" : ""
                      }`}
                    >
                      <div className="inner-accordian-list">
                        {" "}
                        <span
                          onClick={() => handleInnerAccordionToggle("items1")}
                        >
                          <strong>
                            React JS{" "}
                            {innerAccordionState.items1 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>{" "}
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items1 ? "show" : ""
                        }`}
                      >
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
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Payment Gateway Integration
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Project Hosting on server
                        </p>
                      </div>

                      <div className="section-titles">
                        <b></b>
                        <span>
                          <strong>OR</strong>
                        </span>
                        <b></b>
                      </div>

                      <div className="inner-accordian-list">
                        {" "}
                        <span
                          onClick={() => handleInnerAccordionToggle("items2")}
                        >
                          <strong>
                            Angular JS
                            {innerAccordionState.items2 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items2 ? "show" : ""
                        }`}
                      >
                        <p>
                          <ChevronDoubleRight className="service-icon" /> HTML /
                          HTML5, CSS / CSS3, Bootstrap, JavaScript, JQuery, OOPs
                          Concepts
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Environment and setup NPM, Angular JS
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
                          <ChevronDoubleRight className="service-icon" /> Cookie
                          & Session
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Forms
                          & Validations with Advance Practical
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Routing and Services
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
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Project Hosting on server
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${
                        accordionState.item2 ? "show" : ""
                      }`}
                      onClick={() => handleAccordionToggle("item3")}
                    >
                      Full Stack Development - BackEnd
                      {accordionState.item3 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      id="accordion-list-2"
                      className={`collapse  angular-development ${
                        accordionState.item3 ? "show" : ""
                      }`}
                    >
                      <div className="inner-accordian-list">
                        {" "}
                        <span
                          onClick={() => handleInnerAccordionToggle("items1")}
                        >
                          <strong>
                            Node JS Developement{" "}
                            {innerAccordionState.items1 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items1 ? "show" : ""
                        }`}
                      >
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Basic
                          & Advances Training Course Topics
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Environment and setup Node.js
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Asynchronous JavaScript (Callbacks, Promises,
                          Async/Await){" "}
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Modules in Node.js (Built-in Modules vs. External
                          Modules)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Express.js (Routing, Middleware)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> HTTP
                          Request and Response{" "}
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          RESTful API Development with Express.js{" "}
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Handling Forms and Form Validation
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Node
                          JS with MYSQL/Mongo DB
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Advanced Database Operations (Aggregation, Indexing)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Authentication and Authorization
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> REST
                          API Security (JWT, OAuth)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Unit
                          Testing and Test-Driven Development (TDD) in Node.js
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Microservices Architecture with Node.js
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Performance Optimization Techniques (Caching, Load
                          Balancing)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Deployment
                        </p>
                      </div>

                      <div className="section-titles">
                        <b></b>
                        <span>
                          <strong>OR</strong>
                        </span>
                        <b></b>
                      </div>
                      <div className="inner-accordian-list">
                        {" "}
                        <span
                          onClick={() => handleInnerAccordionToggle("items2")}
                        >
                          <strong>
                            Python Development{" "}
                            {innerAccordionState.items2 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items2 ? "show" : ""
                        }`}
                      >
                        <p>
                          <ChevronDoubleRight className="service-icon" /> OOPs
                          Concepts
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Environment and setup Python{" "}
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Modules and Packages (Importing Modules, Creating
                          Packages)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Debugging Techniques in Python
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Advanced Data Structures
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Data
                          Analysis and Visualization
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Client
                          Server Architecture
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Chat
                          App
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" /> Web
                          Scraping with Python (Beautiful Soup, Scrapy)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Working with Databases (SQLite, Mongo DB,MYSQL)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Testing in Python (Unit Testing, Test-Driven
                          Development)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />{" "}
                          Deployment and DevOps Practices (Docker, Continuous
                          Integration/Continuous Deployment)
                        </p>
                      </div>
                      <div className="section-titles">
                        <b></b>
                        <span>
                          <strong>OR</strong>
                        </span>
                        <b></b>
                      </div>
                      <div className="inner-accordian-list">
                        <span
                          onClick={() => handleInnerAccordionToggle("items3")}
                        >
                          <strong>
                            PHP Codeigniter Development{" "}
                            {innerAccordionState.items3 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items3 ? "show" : ""
                        }`}
                      >
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          HTML / HTML5, CSS / CSS3, Bootstrap, JavaScript,
                          JQuery
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Setting up a Local PHP Development Environment (e.g.,
                          XAMPP, WAMP)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Basics of PHP , Functions and Parameters
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Arrays and Associative Arrays, Forms (GET and POST
                          methods)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Handling User Input and Form Validation
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Error Handling and Debugging Techniques
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Object-Oriented Programming (OOP) in PHP
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          MySQL Database and complex SQL Queries
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Environment and setup CodeIgniter
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Models and Database Interaction
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Routing, Forms and Form Validation, FIle Uploading
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Sessions and Cookies Management
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Error Handling and Debugging in CodeIgniter
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Basic Security Practices in CodeIgniter
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          CodeIgniter Drivers, Custom Libraries and Custom
                          Helpers
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          RESTful APIs in CodeIgniter
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Authentication and Authorization
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Role-Based Access Control (RBAC) Implementation
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Caching Techniques (Page Caching, Data Caching)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Database Transactions and Query Builder
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Security Best Practices (Cross-Site Request Forgery,
                          Cross-Site Scripting)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Performance Optimization Techniques
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Unit Testing and Deployment
                        </p>
                      </div>
                      <div className="section-titles">
                        <b></b>
                        <span>
                          <strong>OR</strong>
                        </span>
                        <b></b>
                      </div>
                      <div className="inner-accordian-list">
                        {" "}
                        <span
                          onClick={() => handleInnerAccordionToggle("items4")}
                        >
                          <strong>
                            PHP Laravel Development{" "}
                            {innerAccordionState.items4 ? (
                              <ChevronUp className="icon-close float-end" />
                            ) : (
                              <ChevronDown className="icon-show float-end" />
                            )}
                          </strong>
                        </span>
                      </div>
                      <div
                        className={`collapse${
                          innerAccordionState.items4 ? "show" : ""
                        }`}
                      >
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          HTML / HTML5, CSS / CSS3, Bootstrap, JavaScript,
                          JQuery
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Setting up a Local PHP Development Environment (e.g.,
                          XAMPP, WAMP)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Basics of PHP , Functions and Parameters
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Handling User Input and Form Validation
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Error Handling and Debugging Techniques
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Object-Oriented Programming (OOP) in PHP
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          MySQL Database and complex SQL Queries
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Environment and setup Laravel via Composer
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Routing in Laravel,Blade Templating Engine
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Eloquent ORM (Object-Relational Mapping)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Database Migrations and Seeding
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Query Builder and Raw SQL Queries
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Form Handling and Validation, Authentication and
                          Authorization Basics
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Middleware, Error Handling and Debugging in Laravel
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          RESTful API Development, Resourceful Controllers and
                          Resource Routing
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Advanced Eloquent Techniques (Scopes, Accessors,
                          Mutators)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Task Scheduling and Cron Jobs in Laravel
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Queues and Background Processing
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Laravel Events and Listeners
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Performance Optimization Techniques (Caching, Eager
                          Loading)
                        </p>
                        <p>
                          <ChevronDoubleRight className="service-icon" />
                          Unit Testing and Deployment and Deployment
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-4 text-center">  <Link class="btn-aplly-now" to="/contact">Join Now</Link></div> */}
            </Col>
            <div
              className="col-lg-4 align-items-stretch"
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
              <Counsellingform />

              <div className="popular-coarses mt-4">
                <span className="popularcourses">
                  <h5 className="mt-3 mb-lg-2">POPULAR COURSES</h5>
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
                  <Link className="btn-learn-more align-middle" to="/contact">
                    Join Now
                  </Link>
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

export default React.memo(FullStackDevelopment);
