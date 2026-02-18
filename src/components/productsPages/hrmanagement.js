import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import Careers from "../pages/career";
import {
    faBolt,
    faCaretDown,
    faChartLine,
    faDesktop,
    faEarthAmericas,
    faMobile,
    faMobileScreenButton,
    faShield,
    faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";
import hr_management_main_feb from "../../assets/images/Products/HRMS/fableadtechnolabs-hr-management-system-dashboard.jpeg";
import attendance_page_img_feb from "../../assets/images/Products/HRMS/fableadtechnolabs-hrms-attendance-management-page.png";
import employee_page_img_feb from "../../assets/images/Products/HRMS/fableadtechnolabs-hrms-employee-management-page.png";
import leave_page_img_feb from "../../assets/images/Products/HRMS/fableadtechnolabs-hrms-leave-management-page.png";
import manage_attendance_page_img_feb from "../../assets/images/Products/HRMS/fableadtechnolabs-hrms-manage-attendance-page.png";

import InnerCallToLog from "../innerCallToLog";
import {
    Check2,
    ChevronDoubleRight,
    ChevronDown,
    ChevronUp,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";
import mobile_screenn_image from "../../assets/images/Products/HRMS/fableadtechnolabs-hrms-mobile-app-screens.png";
import { FaArrowCircleRight } from "react-icons/fa";
function HRManagement() {
    const [accordionState, setAccordionState] = useState({
        item1: true,
        item2: false,
        item3: false,
        item4: false,
    });

    const handleAccordionToggle = (item) => {
        setAccordionState((prevState) => ({
            ...prevState,
            [item]: !prevState[item],
        }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolioItems = [
        {
            items: [
                {
                    img: employee_page_img_feb,
                    title: "Employee Overview Dashboard",
                    alt: "Fablead Technolabs HRMS employee management dashboard",
                    description: "Centralized dashboard for employee activities, tasks, and HR notifications."
                },
                {
                    img: attendance_page_img_feb,
                    title: "Talent Acquisition Panel",
                    alt: "Fablead Technolabs HRMS attendance management page",
                    description: "Streamlined candidate tracking, resume review, and interview scheduling."
                }
            ]
        },
        {
            items: [
                {
                    img: leave_page_img_feb,
                    title: "Leave & Attendance Management",
                    alt: "Fablead Technolabs HRMS leave management page",
                    description: "Manage and monitor employee leaves, holidays, and attendance records."
                },
                {
                    img: manage_attendance_page_img_feb,
                    title: "Payroll & Compensation",
                    alt: "Fablead Technolabs HRMS payroll management page",
                    description: "Automated payroll generation, payslip distribution, and tax calculations."
                }
            ]
        }
    ];


    const [stats, setStats] = useState({
        happyClients: "500+",
        satisfactionRate: "99%",
        support: "24/7",
    });

    // Simulate fetching data
    useEffect(() => {
        const fetchStats = () => {
            // Simulate an API call or data fetch
            const newStats = {
                happyClients: "550+",
                satisfactionRate: "99.5%",
                support: "24/7",
            };
            setStats(newStats);
        };

        fetchStats();
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <TopBar />
            <Header />
            <section className="services section-bg fade-up">
                <div className="section-title1">
                    <div className="pt-5" role="heading" aria-level="1">HR Management System</div>
                    <p className="header-content prodectpage-ecommerce-subheading">
                        Manage employee and people operations efficiently.
                    </p>
                </div>
                {/* content1 */}
                <div className="container pt-lg-2" data-aos="fade-up">
                    <Row>
                        <Col
                            lg={7}
                            className="d-flex flex-column  align-items-stretch order-sm-1"
                        >
                            <div className="pb-lg-0 pb-md-4">
                                <div className="development-heading-div d-flex justify-content-between">
                                    <span className="heding-title-span">
                                        <h1 className="heading-title">HR Management System</h1>
                                    </span>
                                </div>
                                <div className="development-content">

                                    <p>
                                        Our <strong>HR Management System</strong> is a cloud-based, user-friendly platform designed to streamline HR processes, improve efficiency, and ensure compliance with regulations. It helps automate routine tasks and reduces administrative workload.
                                    </p>
                                    <p>Tailored for organizations of all sizes, the portal centralizes key HR functions and provides both employees and HR teams with easy access to essential tools and information, enhancing engagement and productivity.                                    </p>

                                    <Link
                                        className="btn-learn-more-prodect  align-items-center mt-2"
                                        to="/contact"
                                    >
                                        {" "}
                                        Contact Us <MdCall />
                                    </Link>
                                    <Link
                                        className="btn-learn-more align-items-center mt-2 ms-md-2"
                                        to="/services/web-maintenance"
                                    >
                                        Get Started <MdOutlineArrowOutward />
                                    </Link>

                                    <div className="stats-container mt-5">
                                        <div className="stat-item">
                                            <div className="stat-value">50+</div>
                                            <div className="stat-label">Happy Clients</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">99%</div>
                                            <div className="stat-label">Satisfaction Rate</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">24/7</div>
                                            <div className="stat-label">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* align-items-center */}
                        <Col
                            lg={5}
                            className="d-flex justify-content-center  order-lg-2 order-md-2 img satisfied "
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        >
                            <Image
                                src={hr_management_main_feb}
                                className="img-fluid rounded shadow object-fit-cover zoom-img"
                                alt="Fablead Technolabs HRMS employee management dashboard"
                            />
                        </Col>
                    </Row>

                    <section className="py-5 ">
                        <Row>

                            <Col lg={7} className="d-flex flex-column  align-items-stretch order-sm-1">
                                <div className="what-we-learn-prodect pt-4">
                                    <h4>KEY FEATURES</h4>
                                    <p>
                                        Simplify HR operations with<strong> Fablead Developer Technolabs </strong> HR Management solutions.
                                        Our platform helps you manage employees, automate HR workflows, and ensure compliance—all in one place.
                                    </p>
                                    <div className="row key-features-div">
                                        <div id="why-us" className="why-us fade-up">
                                            <div className="" data-aos="fade-up">
                                                <Col
                                                    lg={12}
                                                    className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1"
                                                >
                                                    <div className="accordion-list1 ">
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    data-bs-toggle="collapse"
                                                                    className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                                                    onClick={() => handleAccordionToggle("item1")}
                                                                >
                                                                    01. Employee Self-Service (ESS){" "}
                                                                    {accordionState.item1 ? (
                                                                        <ChevronUp className="icon-close float-end" />
                                                                    ) : (
                                                                        <ChevronDown className="icon-show float-end" />
                                                                    )}
                                                                </a>
                                                                <div
                                                                    id="accordion-list-1"
                                                                    className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                                                    data-bs-parent=".accordion-list"
                                                                >
                                                                    <ul className="list-unstyled">
                                                                        <li><Check2 className="service-icon me-2" /><strong>Personal Information Management:</strong> Employees can update personal details, contact information, and emergency contacts, reducing administrative workload.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Leave and Absence Management:</strong> Submit, track, and approve leave requests; view leave balances; and access holiday calendars.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Payroll Access:</strong> View and download payslips, track overtime, and manage tax-related documents.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Benefits Administration:</strong> Enroll in benefits programs, submit claims, and track claim statuses.</li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    data-bs-toggle="collapse"
                                                                    className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                                                    onClick={() => handleAccordionToggle("item2")}
                                                                >
                                                                    02. Recruitment and Onboarding{" "}
                                                                    {accordionState.item2 ? (
                                                                        <ChevronUp className="icon-close float-end" />
                                                                    ) : (
                                                                        <ChevronDown className="icon-show float-end" />
                                                                    )}
                                                                </a>
                                                                <div
                                                                    id="accordion-list-1"
                                                                    className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                                                    data-bs-parent=".accordion-list"
                                                                >
                                                                    <ul className="list-unstyled">
                                                                        <li><Check2 className="service-icon me-2" /><strong>Job Postings:</strong> Create and publish job openings on the company website or social media platforms.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Applicant Tracking:</strong> Automatically accept or reject applicants based on predefined criteria; conduct background checks.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Onboarding Workflow:</strong> Guide new hires through document submissions, training schedules, and policy introductions.</li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    data-bs-toggle="collapse"
                                                                    className={`collapse ${accordionState.item3 ? "show" : ""}`}
                                                                    onClick={() => handleAccordionToggle("item3")}
                                                                >
                                                                    03. Performance and Development{" "}
                                                                    {accordionState.item3 ? (
                                                                        <ChevronUp className="icon-close float-end" />
                                                                    ) : (
                                                                        <ChevronDown className="icon-show float-end" />
                                                                    )}
                                                                </a>
                                                                <div
                                                                    id="accordion-list-1"
                                                                    className={`collapse ${accordionState.item3 ? "show" : ""}`}
                                                                    data-bs-parent=".accordion-list"
                                                                >
                                                                    <ul className="list-unstyled">
                                                                        <li><Check2 className="service-icon me-2" /><strong>Job Postings:</strong> Create and publish job openings on the company website or social media platforms.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Applicant Tracking:</strong> Automatically accept or reject applicants based on predefined criteria; conduct background checks.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Onboarding Workflow:</strong> Guide new hires through document submissions, training schedules, and policy introductions.</li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    data-bs-toggle="collapse"
                                                                    className={`collapse ${accordionState.item4 ? "show" : ""}`}
                                                                    onClick={() => handleAccordionToggle("item4")}
                                                                >
                                                                    04. Time and Attendance Management{" "}
                                                                    {accordionState.item4 ? (
                                                                        <ChevronUp className="icon-close float-end" />
                                                                    ) : (
                                                                        <ChevronDown className="icon-show float-end" />
                                                                    )}
                                                                </a>
                                                                <div
                                                                    id="accordion-list-1"
                                                                    className={`collapse ${accordionState.item4 ? "show" : ""}`}
                                                                    data-bs-parent=".accordion-list"
                                                                >
                                                                    <ul className="list-unstyled">
                                                                        <li><Check2 className="service-icon me-2" /><strong>Job Postings:</strong> Create and publish job openings on the company website or social media platforms.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Applicant Tracking:</strong> Automatically accept or reject applicants based on predefined criteria; conduct background checks.</li>
                                                                        <li><Check2 className="service-icon me-2" /><strong>Onboarding Workflow:</strong> Guide new hires through document submissions, training schedules, and policy introductions.</li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* align-items-center  order-1 order-lg-2 */}
                            <Col lg={5} className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2 pb-sm-4" data-aos="zoom-in" data-aos-delay="150">
                                {/* <Image src={Crm_main_feb} className="img-fluid rounded shadow zoom-img" alt="CRM_main_feb" /> */}
                                <Slider {...sliderSettings}>
                                    <div>
                                        <Image src={attendance_page_img_feb} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs HRMS attendance management page" />
                                    </div>
                                    <div>
                                        <Image src={employee_page_img_feb} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs HRMS employee management dashboard" />
                                    </div>
                                    <div>
                                        <Image src={leave_page_img_feb} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs HRMS leave management page" />
                                    </div>
                                    <div>
                                        <Image src={manage_attendance_page_img_feb} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs HRMS manage attendance page" />
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </section>

                    <Row className="mt-0 g-4">
                        <Col
                            xl={4}
                            md={6}
                            className="d-flex align-items-stretch mt-md-2 "
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="Prodect-box">
                                <div className="icon text-center  w-100">
                                    <div className="mainicon-div">
                                        <i>
                                            {" "}
                                            <FontAwesomeIcon icon={faShield} />{" "}
                                        </i>
                                    </div>
                                </div>
                                <h4 className="text-center">
                                    <Link to="/products/hr-management-system" rel="noopener noreferrer">Data Security</Link>
                                </h4>
                                <p className="text-center">
                                    Keep employee records and sensitive HR data safe with
                                    enterprise-level encryption and access control.
                                </p>

                                <div className="text-center"></div>
                            </div>
                        </Col>

                        <Col
                            xl={4}
                            md={6}
                            className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="Prodect-box">
                                <div className="icon text-center w-100">
                                    <div className="mainicon-div">
                                        <i>
                                            <FontAwesomeIcon icon={faMobile} />
                                        </i>
                                    </div>
                                </div>
                                <h4 className="text-center">
                                    <Link to="/products/hr-management-system" rel="noopener noreferrer">Mobile Access</Link>
                                </h4>
                                <p className="text-center">
                                    HR on-the-go: Manage tasks, approvals, and updates from any
                                    device, anywhere.
                                </p>

                                <div className="text-center"></div>
                            </div>
                        </Col>
                        <Col
                            xl={4}
                            md={6}
                            className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="Prodect-box">
                                <div className="icon text-center  w-100">
                                    <div className="mainicon-div">
                                        <i>
                                            <FontAwesomeIcon icon={faChartLine} />
                                        </i>
                                    </div>
                                </div>
                                <h4 className="text-center">
                                    <Link to="/products/hr-management-system" rel="noopener noreferrer">Smart Analytics</Link>
                                </h4>
                                <p className="text-center">
                                    Track employee performance, hiring trends, and engagement
                                    metrics with real-time dashboards.
                                </p>
                                <div className="text-center"></div>
                            </div>
                        </Col>
                    </Row>
                    <section className="py-5">
                        <Row className="d-none d-lg-flex hr-screens-row portfolio-container1" data-aos="fade-up" data-aos-delay="200">
                            <Col lg={7}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="heding-title-span">
                                        <h2 className="heading-title">HR Management System Screens</h2>
                                    </span>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="heding-title-span">
                                        <h2 className="heading-title">Mobile App Screen</h2>
                                    </span>
                                </div>
                            </Col>
                        </Row>

                        {/* Mobile Layout */}
                        <Row className="d-lg-none mobile-layout">
                            <Col xs={12}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="heding-title-span">
                                        <h2 className="heading-title">HR Management System Web and Mobile Screens</h2>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="portfolio-row">
                            <Col lg={7}>
                                <div className="grid-container">
                                    {portfolioItems.map(({ items }, rowIndex) => (
                                        <div key={rowIndex} className="grid-item">
                                            <Row className="align-items-center">
                                                {items.map(({ img, alt, title, description }, colIndex) => (
                                                    <Col key={colIndex} md={12} lg={12} className="">
                                                        <div className="card border-0 portfolio-img text-center">
                                                            <div className="image-container-prodect-screens">
                                                                <Image src={img} className="card-img-top" alt={alt} />
                                                            </div>
                                                            <div className="card-body-prodect-info">
                                                                <h5 className="card-title">{title}</h5>
                                                                <p className="card-text text-muted">{description}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    ))}
                                </div>
                            </Col>

                            {/* <Col lg={5} className="">
      <div className="mobile-app-screen">
        <Image
          src={mobile_screenn_image}
          className="img-fluid rounded shadow object-fit-cover"
          alt="Mobile App Screen"
        />
      </div>
    </Col> */}

                            <Col lg={5} className="">
                                <div className="grid-container">
                                    <div className=" mobile-app-screen">
                                        <Image
                                            src={mobile_screenn_image}
                                            className="img-fluid rounded shadow object-fit-cover"
                                            alt="Fablead Technolabs HRMS mobile application screens"
                                        />
                                    </div>
                                    <div>
                                        <Link className="w-100 btn-learn-more-prodect text-center mt-3" to="/contact">Book Your Free Demo Now <FaArrowCircleRight className="appointment-btn mx-2 mb-1" /></Link>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </div>
            </section>
            <InnerCallToLog />
            <Footer />
        </>
    );
}

export default React.memo(HRManagement);
