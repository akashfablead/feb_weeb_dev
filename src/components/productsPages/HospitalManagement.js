import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
  faBolt,
  faCaretDown,
  faChartLine,
  faDesktop,
  faEarthAmericas,
  faMobileScreenButton,
  faShield,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";
import Hospital_Managment from "../../assets/images/Products/Hospital/fableadtechnolabs-hospital-management-system-overview.png";
import appointntment_page_img_feb from "../../assets/images/Products/Hospital/fableadtechnolabs-hospital-appointment-management-page.png";
import calender_page_img_feb from "../../assets/images/Products/Hospital/fableadtechnolabs-hospital-calendar-scheduling-page.png";
import patient_detail_page_img_feb from "../../assets/images/Products/Hospital/fableadtechnolabs-patient-details-management-page.png";
import hopital_dashboard from "../../assets/images/Products/Hospital/fableadtechnolabs-hospital-management-dashboard.png";
import InnerCallToLog from "../innerCallToLog";
import { Check2, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";
import mobile_screen_image from "../../assets/images/Products/Hospital/fableadtechnolabs-hospital-management-mobile-app-screen.png"; // Importing the mobile screens image
import { FaArrowCircleRight } from "react-icons/fa";

const StatsItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-coral-600">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

function HospitalManagement() {
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
          img: hopital_dashboard,
          title: "Hospital Dashboard",
          alt: "Fablead Technolabs hospital management dashboard",
          description: "Overview of hospital operations with key metrics and quick access to features.",
        },
        {
          img: appointntment_page_img_feb,
          title: "All Appointments",
          alt: "Fablead Technolabs hospital appointment management page",
          description: "List of appointments with patient, doctor, date, and status tags. Add/export available.",
        },
      ],
    },
    {
      items: [
        {
          img: patient_detail_page_img_feb,
          title: "Patient Details",
          alt: "Fablead Technolabs patient detail management page",
          description: "Detailed profile of a single patient with edit and health record view.",
        },
        {
          img: calender_page_img_feb,
          title: "Calendar",
          alt: "Fablead Technolabs calendar view",
          description: "Visual calendar showing all appointments by date with color-coded statuses.",
        },
      ],
    },
  ];

  const [stats, setStats] = useState({
    happyClients: "500+",
    satisfactionRate: "99%",
    support: "24/7",
  });

  useEffect(() => {
    const fetchStats = () => {
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
          <div className="pt-5" role="heading" aria-level="1">Hospital & Clinic Management System (HMS)</div>
          <p className="header-content prodectpage-ecommerce-subheading">
            Manage Hospitals and Clinic operations efficiently
          </p>
        </div>
        {/* content1 */}
        <div className="container  pt-lg-2" data-aos="fade-up">
          <Row>
            <Col lg={7} className="d-flex flex-column align-items-stretch order-sm-1">
              <div className="pb-lg-0 pb-md-4">
                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      Hospital & Clinic Management System (HMS)
                    </h1>
                  </span>
                </div>
                <div className="development-content">
               
                  <p>Our <strong>Hospital & Clinic Management System (HMS)</strong> is a robust, cloud-based platform built to streamline administrative tasks and enhance the overall quality of patient care. It ensures complete compliance with healthcare regulations while simplifying day-to-day operations for clinic staff.                  </p>
                  <p>It efficiently manages appointments, patient records, and billing, while also handling inventory and other tasks. The system fits clinics of all sizes and integrates smoothly into existing workflows.</p>

                  <Link className="btn-learn-more-prodect align-items-center mt-2" to="/contact"> Contact Us <MdCall /></Link>
                  <Link className="btn-learn-more align-items-center mt-2 ms-md-2" to="/services/web-maintenance">Get Started <MdOutlineArrowOutward /></Link>

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
            <Col
              lg={5}
              className="d-flex justify-content-center order-lg-2 order-md-2 img satisfied"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                src={Hospital_Managment}
                className="img-fluid rounded shadow object-fit-cover zoom-img"
                alt="Hospital Management"
              />
            </Col>
          </Row>

          <section className="py-5">
            <Row>
              <Col lg={7} className="d-flex flex-column align-items-stretch order-sm-1">
                <div className="what-we-learn-prodect pt-4">
                  <h4>KEY FEATURES</h4>
                  <p>
                    Simplify your hospital operations with <strong> Fablead Developer Technolabs </strong>custom <strong>Hospital Management solutions</strong>. Our
                    platform helps you manage patient records, automate
                    administrative tasks, and improve healthcare service
                    delivery—all in one place.
                  </p>

                  <div className="row key-features-div">
                    <div id="why-us" className="why-us fade-up">
                      <div className="" data-aos="fade-up">
                        <Col
                          lg={12}
                          className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1"
                        >
                          <div className="accordion-list1">
                            <ul className="accordion-list1">
                              {/* 1. Patient Care */}
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                  onClick={() => handleAccordionToggle("item1")}
                                >
                                  01. Smart Features for Streamlined Patient Care{" "}
                                  {accordionState.item1 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li><Check2 className="service-icon me-2" /><strong>Digital Patient Profiles:</strong> Comprehensive health records including allergies & history.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Secure Access:</strong> Real-time, role-based access to records.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Appointment Scheduling:</strong> Easily manage appointments online.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Automated Reminders:</strong> SMS/email alerts to minimize no-shows.</li>
                                  </ul>
                                </div>
                              </li>

                              {/* 2. Administrative & Compliance */}
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                  onClick={() => handleAccordionToggle("item2")}
                                >
                                  02. Administration & Compliance{" "}
                                  {accordionState.item2 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li><Check2 className="service-icon me-2" /><strong>Regulatory Compliance:</strong> Adheres to HIPAA, GDPR for data protection.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>User Permissions:</strong> Manage role-based access levels.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Audit Logs:</strong> Track system changes and data access.</li>
                                  </ul>
                                </div>
                              </li>

                              {/* 3. Financial Operations */}
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item3 ? "show" : ""}`}
                                  onClick={() => handleAccordionToggle("item3")}
                                >
                                  03. Financial Operations{" "}
                                  {accordionState.item3 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  className={`collapse ${accordionState.item3 ? "show" : ""}`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li><Check2 className="service-icon me-2" /><strong>Billing & Invoicing:</strong> Generate and track patient bills.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Insurance Claims:</strong> Manage insurance verification and claim submission.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Payment Integration:</strong> Accept payments via UPI, cards, net banking.</li>
                                  </ul>
                                </div>
                              </li>

                              {/* 4. Inventory & Analytics */}
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item4 ? "show" : ""}`}
                                  onClick={() => handleAccordionToggle("item4")}
                                >
                                  04. Inventory & Analytics{" "}
                                  {accordionState.item4 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  className={`collapse ${accordionState.item4 ? "show" : ""}`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li><Check2 className="service-icon me-2" /><strong>Pharmacy Management:</strong> Monitor stock and prescriptions.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Inventory Alerts:</strong> Low-stock warnings and reorder suggestions.</li>
                                    <li><Check2 className="service-icon me-2" /><strong>Analytics & Reports:</strong> Visual dashboards for decision-making.</li>
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
              <Col
                lg={5}
                className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2 pb-sm-4"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <Slider {...sliderSettings}>

                  <div>
                    <Image
                      src={hopital_dashboard}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs hospital management dashboard"
                    />
                  </div>

                  <div>
                    <Image
                      src={appointntment_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs hospital appointment management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={patient_detail_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs patient detail management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={calender_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs calendar view page"
                    />
                  </div>

                </Slider>
              </Col>
            </Row>
          </section>

          <Row className="mt-0">
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 "
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faShield} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/hospital-clinic-management-system-hms" rel="noopener noreferrer">Data Security</Link>
                </h4>
                <p className="text-center">
                  Enterprise-grade security ensures your patient data is
                  protected with advanced encryption.
                </p>
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
                      <FontAwesomeIcon icon={faEarthAmericas} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/hospital-clinic-management-system-hms" rel="noopener noreferrer">Multi-Platform Access</Link>
                </h4>
                <p className="text-center">
                  Access your Hospital & Clinic Management System (HMS) from anywhere with
                  responsive design and mobile applications.
                </p>
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
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faChartLine} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/hospital-clinic-management-system-hms" rel="noopener noreferrer">Analytics & Reporting</Link>
                </h4>
                <p className="text-center">
                  Get detailed insights into hospital performance, patient data,
                  and healthcare service metrics.
                </p>
              </div>
            </Col>
          </Row>

          <section className="py-5">
            {/* <Row className="portfolio-container1" data-aos="fade-up" data-aos-delay="200">
              <Col lg={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">Hospital Management Screens</h2>
                  </span>
                </div>
              </Col>
              <Col lg={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">Mobile App Screen</h2>
                  </span>
                </div>
              </Col>
 </Row> */}

            <Row className="d-none d-lg-flex hr-screens-row portfolio-container1" data-aos="fade-up" data-aos-delay="200">
              <Col lg={7}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">Hospital Management Screens</h2>
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

            <Row className="d-lg-none mobile-layout">
              <Col xs={12}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">Hospital Management Web and Mobile Screens</h2>
                  </span>
                </div>
              </Col>
            </Row>
            <Row >
              <Col lg={7}>
                <div className="grid-container">
                  {portfolioItems.map(({ items }, rowIndex) => (
                    <Row key={rowIndex} className="">
                      {items.map(({ img, alt, title, description }, colIndex) => (
                        <Col key={colIndex} lg={12} md={12} className="">
                          <div className="card border-0 portfolio-img text-center">
                            <div className="image-container-prodect-screens">
                              <Image src={img} className="card-img-top" alt={alt} />
                            </div>
                            <div className="card-body-prodect-info text-center">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text text-muted">{description}</p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ))}
                </div>
              </Col>
              {/* <Col lg={5} className="">
                  <div className="mobile-app-screen">
                    <Image src={mobile_screen_image} className="img-fluid rounded shadow object-fit-cover" alt="Mobile App Screen" />
                  </div>
                </Col> */}

              <Col lg={5} className="">
                <div className="grid-container">
                  <div className=" mobile-app-screen">
                    <Image src={mobile_screen_image} className="img-fluid rounded shadow object-fit-cover" alt="Fablead Technolabs hospital management system mobile app screen" />
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

export default React.memo(HospitalManagement);
