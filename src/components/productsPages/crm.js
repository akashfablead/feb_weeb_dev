import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
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
import Deal from "../../assets/images/Products/CRM/fableadtechnolabs-crm-deal-management-page.png";
import followup from "../../assets/images/Products/CRM/fableadtechnolabs-crm-followup-tracking-page.png";
import Lead from "../../assets/images/Products/CRM/fableadtechnolabs-crm-lead-management-page.png";
import Pipeline from "../../assets/images/Products/CRM/fableadtechnolabs-crm-sales-pipeline-page.png";
import Crm_main_feb from "../../assets/images/Products/CRM/fableadtechnolabs-crm-dashboard-main.png";
import InnerCallToLog from "../innerCallToLog";
import { Check2, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";
import mobile_screens from "../../assets/images/Products/CRM/fableadtechnolabs-crm-mobile-app-screen.png"; // Importing the mobile screens image
import { FaArrowCircleRight } from "react-icons/fa";
function CRM() {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: false,
    item3: false,
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
          img: Lead,
          title: "Lead Management",
          description:
            "View, qualify, and manage leads with quick access to details and one-click lead conversion.",
        },

        {
          img: followup,
          title: "Follow-Up Management",
          description:
            "Track all follow-ups by lead, date, and status to ensure timely engagement. Edit, view, or delete entries instantly.",
        },
      ],
    },
    {
      items: [
        {
          img: Deal,
          title: "Deal Management",
          description:
            "Track deal value, stage, and status to manage opportunities and close more sales effectively.",
        },
        {
          img: Pipeline,
          title: "Pipeline Management",
          description:
            "Visualize your sales pipeline with stages, deal values and color coded statuses to optimize your sales process.",
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
    autoplaySpeed: 3000,
  };

  return (
    <>
      <TopBar />
      <Header />
      <section className="services section-bg fade-up">
        <div className="section-title1">
          <div className="pt-5" role="heading" aria-level="1">
            CRM Web & Mobile APP (CRM)
          </div>
          <p className="header-content prodectpage-ecommerce-subheading">
            Be the Master of Client Management using CRM
          </p>
        </div>
        <div className="container pt-lg-2" data-aos="fade-up">
          <Row>
            <Col
              lg={7}
              className="d-flex flex-column align-items-stretch order-sm-1"
            >
              <div className="pb-lg-0 pb-md-4">
                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      CRM Web & Mobile APP (CRM)
                    </h1>
                  </span>
                </div>
                <div className="development-content">
                  <p>
                    Our <strong>CRM Web & Mobile APP (CRM)</strong> are designed
                    to streamline customer interactions and enhance sales
                    processes. By simplifying communication and automating
                    tasks, businesses can focus on building stronger customer
                    relationships and improving overall efficiency.
                  </p>
                  <p>
                    By integrating sales, marketing, and customer service
                    functions, our <strong>CRM</strong> offers a unified view of
                    customer data. This allows businesses to make informed
                    decisions and deliver personalized experiences that drive
                    long-term customer loyalty.
                  </p>
                  <Link
                    className="btn-learn-more-prodect align-items-center mt-2"
                    to="/contact"
                  >
                    Contact Us <MdCall />
                  </Link>
                  <Link
                    className="btn-learn-more align-items-center mt-2 ms-md-2"
                    to="/services/cms-website"
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
            <Col
              lg={5}
              className="d-flex justify-content-center order-lg-2 order-md-2 img satisfied"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                src={Crm_main_feb}
                className="img-fluid rounded shadow object-fit-cover zoom-img"
                alt="Fablead Technolabs CRM dashboard for lead and sales management"
              />
            </Col>
          </Row>
          <section className="py-5">
            <Row>
              <Col
                lg={7}
                className="d-flex flex-column align-items-stretch order-sm-1"
              >
                <div className="what-we-learn-prodect pt-4">
                  <h4>KEY FEATURES</h4>
                  <p>
                    Simplify your business operations with{" "}
                    <strong>Fablead Developer Technolabs</strong> custom{" "}
                    <strong>CRM Web & Mobile APP (CRM)</strong>. Our platform
                    helps you manage leads, automate sales tasks, and improve
                    team collaboration—all in one place.
                  </p>
                  <div id="why-us" className="why-us fade-up">
                    <div data-aos="fade-up">
                      {/* <Col lg={12} className="d-flex flex-column justify-content-center align-items-stretch order-lg-1">
                        <div className="accordion-list1">
                          <ul>
                            <li>
                              <a data-bs-toggle="collapse" className={`collapse ${accordionState.item1 ? "show" : ""}`} onClick={() => handleAccordionToggle("item1")}>
                                01. Our CRM is ideal for:{" "}
                                {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                              </a>
                              <div id="accordion-list-1" className={`collapse ${accordionState.item1 ? "show" : ""}`} data-bs-parent=".accordion-list">
                                <ul className="list-unstyled">
                                  <li><Check2 className="service-icon me-2" /><strong>Small to Medium Enterprises (SMEs):</strong> Looking to centralize customer data and improve team collaboration.</li>
                                  <li><Check2 className="service-icon me-2" /><strong>Sales Teams:</strong> Seeking tools for lead management, sales forecasting, and performance tracking.</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col> */}
                      <Col
                        lg={12}
                        className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
                      >
                        <div className="accordion-list1">
                          <ul>
                            {/* Item 1 */}
                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item1 ? "show" : ""
                                  }`}
                                onClick={() => handleAccordionToggle("item1")}
                              >
                                01. Our CRM is ideal for:{" "}
                                {accordionState.item1 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-1"
                                className={`collapse ${accordionState.item1 ? "show" : ""
                                  }`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>
                                      Small to Medium Enterprises (SMEs):
                                    </strong>{" "}
                                    Looking to centralize customer data and
                                    improve team collaboration.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Sales Teams:</strong> Seeking tools
                                    for lead management, sales forecasting, and
                                    performance tracking.
                                  </li>
                                </ul>
                              </div>
                            </li>

                            {/* Item 2 */}
                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item2 ? "show" : ""
                                  }`}
                                onClick={() => handleAccordionToggle("item2")}
                              >
                                02. Key CRM Features
                                {accordionState.item2 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-1"
                                className={`collapse ${accordionState.item2 ? "show" : ""
                                  }`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Lead Management:</strong> Track
                                    leads from inquiry to conversion in one
                                    unified dashboard.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Automation:</strong> Automate
                                    repetitive tasks like email follow-ups,
                                    reminders, and status updates.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Analytics:</strong> Gain insights
                                    into sales performance and customer behavior
                                    through interactive reports.
                                  </li>
                                </ul>
                              </div>
                            </li>

                            {/* Item 3 */}
                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item3 ? "show" : ""
                                  }`}
                                onClick={() => handleAccordionToggle("item3")}
                              >
                                03. Benefits of Using Our CRM{" "}
                                {accordionState.item3 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-1"
                                className={`collapse ${accordionState.item3 ? "show" : ""
                                  }`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Improved Productivity:</strong> Save
                                    hours by streamlining data entry and team
                                    coordination.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>
                                      Stronger Customer Relationships:
                                    </strong>{" "}
                                    Access full customer history to provide
                                    personalized service.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Data-Driven Decisions:</strong> Use
                                    metrics and analytics to optimize your sales
                                    process.
                                  </li>
                                </ul>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={5}
                className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <Slider {...sliderSettings}>
                  <div>
                    <Image
                      src={Lead}
                      className="img-fluid rounded zoom-img"
                      alt="Fablead Technolabs CRM lead management dashboard"
                    />
                  </div>
                  <div>
                    <Image
                      src={Deal}
                      className="img-fluid rounded zoom-img"
                      alt="Fablead Technolabs CRM deal management dashboard"
                    />
                  </div>
                  <div>
                    <Image
                      src={followup}
                      className="img-fluid rounded zoom-img"
                      alt="Fablead Technolabs CRM follow-up management dashboard"
                    />
                  </div>
                  <div>
                    <Image
                      src={Pipeline}
                      className="img-fluid rounded zoom-img"
                      alt="Fablead Technolabs CRM pipeline management dashboard"
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
              className="d-flex align-items-stretch mt-md-2"
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
                  <Link
                    to="/products/crm-web-mobile-app-crm"
                    rel="noopener noreferrer"
                  >
                    Data Security
                  </Link>
                </h4>
                <p className="text-center">
                  Enterprise-grade security ensures your customer data is
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
                  <Link
                    to="/products/crm-web-mobile-app-crm"
                    rel="noopener noreferrer"
                  >
                    Multi-Platform Access
                  </Link>
                </h4>
                <p className="text-center">
                  Access your CRM from anywhere with responsive design and
                  mobile applications.
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
                  <Link
                    to="/products/crm-web-mobile-app-crm"
                    rel="noopener noreferrer"
                  >
                    Analytics & Reporting
                  </Link>
                </h4>
                <p className="text-center">
                  Get detailed insights into sales performance, customer
                  behavior, and business growth metrics.
                </p>
              </div>
            </Col>
          </Row>
          <section className="py-5">
            {/* <Row className="portfolio-container1" data-aos="fade-up" data-aos-delay="200">
      <Col lg={6}>
             <div className="d-flex justify-content-center align-items-center">
                <span className="heding-title-span">
                  <h2 className="heading-title">CRM Screens</h2>
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

            <Row
              className="d-none d-lg-flex hr-screens-row portfolio-container1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Col lg={7}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">CRM Screens</h2>
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
                    <h2 className="heading-title">
                      CRM Web and Mobile Screens
                    </h2>
                  </span>
                </div>
              </Col>
            </Row>

            <Row className="">
              <Col lg={7} md={12}>
                <div className="grid-container">
                  {portfolioItems.map(({ items }, rowIndex) => (
                    <Row key={rowIndex} className="">
                      {items.map(({ img, title, description }, colIndex) => (
                        <Col key={colIndex} lg={12} md={12} className="">
                          <div className="card border-0 portfolio-img text-center">
                            <div className="image-container-prodect-screens">
                              <Image
                                src={img}
                                className="card-img-top"
                                alt={title}
                              />
                            </div>
                            <div className="card-body-prodect-info text-center">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text text-muted">
                                {description}
                              </p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ))}
                </div>
              </Col>
              <Col lg={5} className="">
                <div className="grid-container">
                  <div className=" mobile-app-screen">
                    <Image
                      src={mobile_screens}
                      className="img-fluid rounded shadow object-fit-cover"
                      alt="Mobile App Screen"
                    />
                  </div>
                  <div>
                    <Link
                      className="w-100 btn-learn-more-prodect text-center mt-3"
                      to="/contact"
                    >
                      Book Your Free Demo Now{" "}
                      <FaArrowCircleRight className="appointment-btn mx-2 mb-1" />
                    </Link>
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

export default React.memo(CRM);
