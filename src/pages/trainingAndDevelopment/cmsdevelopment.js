import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, FormGroup, FormLabel, FormControl, Image } from "react-bootstrap";
import backend from "../../assets/images/TrainingDevelopment/ProfessionBackend-Developer.png"
import { ChevronUp, ChevronDown, ChevronDoubleRight, FastForwardBtnFill, UniversalAccessCircle, HandIndex, Check2 } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import TopBar from "../../components/topBar";
import ReCAPTCHA from "react-google-recaptcha";
import DevelopmentCTA from "../../components/caoursesCta";
import { BASE_URL } from "../../utils";
import Counsellingform from "../../components/counsellingform";

function CmsDevelopment() {
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
        item4: false,
    });

    const handleAccordionToggle = (item) => {
        setAccordionState((prevState) => ({
            item1: item === 'item1' ? !prevState.item1 : false,
            item2: item === 'item2' ? !prevState.item2 : false,
            item3: item === 'item3' ? !prevState.item3 : false,
            item4: item === 'item4' ? !prevState.item4 : false,
        }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <TopBar />
            <Headers />
            <section className="why-us section-bg fade-up backend-development">
                <div className="section-title2">
                    <div className="cms-contact_us1 contact_us1">WordPress CMS Development</div>
                </div>
                <Container className="mt-5" data-aos="fade-up">
                    <Row>
                        <Col
                            lg={8}
                            // justify-content-center
                            className="d-flex flex-column  align-items-stretch "
                        >
                            <div className="pb-4">
                                {/* <div>
                  <Image src={backend} alt="Back-End Development" className="back-end-img mb-4" />
                </div> */}

                                <div className="development-heading-div d-flex justify-content-between">
                                    <span className="heding-title-span">
                                        <h1 className="heading-title ">WORDPRESS CMS DEVELOPMENT COURSE</h1>
                                    </span>

                                    <Link class="btn-aplly-now" to="/contact">Join Now</Link>

                                </div>
                                <div className="development-content">
                                    <p>
                                        Are you eager to become a WordPress CMS developer and leverage the power of this versatile platform to build stunning websites that not only showcase your talents but also help businesses grow their online presence, generate leads, and drive conversions through compelling content and engaging user experiences?
                                    </p>
                                    {/* <p>
                                        Led by industry experts with years of hands-on experience, our training program offers a blend of theoretical concepts and practical applications, allowing you to gain a deep understanding of backend development principles while honing your coding skills through real-world projects.
                                    </p> */}
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
                                            Wordpress Development - CMS                                            {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                                        </a>
                                        <div
                                            id="accordion-list-1"
                                            className={`collapse ${accordionState.item1 ? "show" : ""
                                                }`}
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p><strong>Basic & Advanced Training Course Topics</strong></p>
                                            <p><ChevronDoubleRight className="service-icon" /> Basic concepts of HTML, CSS, Bootstrap, JavaScript, JQuery</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Setting up a Local PHP Development Environment (e.g., XAMPP, WAMP) </p>
                                            <p><ChevronDoubleRight className="service-icon" /> Basics of PHP , Functions and Parameters</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Arrays and Associative Arrays, Forms (GET and POST methods)</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Handling User Input and Form Validation</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Error Handling and Debugging Techniques </p>
                                            <p><ChevronDoubleRight className="service-icon" /> Object-Oriented Programming (OOP) in PHP</p>
                                            <p><ChevronDoubleRight className="service-icon" /> MySQL Database and complex SQL Queries</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Theme Development</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Plugin Development</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Advanced WordPress Development Like  Custom post types and taxonomies, Custom fields and meta boxes, REST API</p>
                                            <p><ChevronDoubleRight className="service-icon" /> eCommerce Development with Payment gateway integration, Managing orders and inventory </p>
                                            <p><ChevronDoubleRight className="service-icon" /> WordPress Security</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Performance Optimization</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Wordpress SEO</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Wordpress  Multisite Development</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Wordpress Theme Customization</p>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            className={`collapse ${accordionState.item2 ? "show" : ""
                                                }`}
                                            onClick={() => handleAccordionToggle("item2")}

                                        >
                                            CMS Development - Squarespace Development
                                            {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                                        </a>
                                        <div
                                            id="accordion-list-2"
                                            className={`collapse ${accordionState.item2 ? "show" : ""
                                                }`}
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                <strong>Basic & Advances Training Course Topics</strong>

                                            </p>
                                            <p><ChevronDoubleRight className="service-icon" /> OOPs Concepts</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Environment and setup Python </p>
                                            <p><ChevronDoubleRight className="service-icon" /> Modules and Packages (Importing Modules, Creating Packages)</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Debugging Techniques in Python</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Advanced Data Structures</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Data Analysis and Visualization</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Client Server Architecture</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Chat App</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Web Scraping with Python (Beautiful Soup, Scrapy)</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Working with Databases (SQLite, Mongo DB,MYSQL)</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Testing in Python (Unit Testing, Test-Driven Development)</p>
                                            <p><ChevronDoubleRight className="service-icon" /> Deployment and DevOps Practices (Docker, Continuous Integration/Continuous Deployment)</p>

                                        </div>
                                    </li> */}
                                </ul>
                            </div>

                            {/* <div className="mt-4 text-center">  <Link class="btn-aplly-now" to="/contact">Join Now</Link></div> */}

                        </Col>
                        <div
                            className="col-lg-4 "

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

export default React.memo(CmsDevelopment)
