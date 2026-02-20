import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
  faBolt,
  faDesktop,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";
import whattsupProductMainImage1 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-product-main-feature.png";
import whattsupProductsImage10 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-marketing-platform.png";
import whattsupProductsImage2 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-product-catalog-image-2.png";
import whattsupProductsImage7 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-product-marketing-image-7.png";
import whattsupProductsImage9 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-product-marketing-image-9.png";
import whattsupProductsImage11 from "../../assets/images/Products/whattsup/fableadtechnolabs-whatsapp-product-marketing-image-11.png";
import InnerCallToLog from "../innerCallToLog";
import { Check2, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";

function WhatsAppbulk() {
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
      img: whattsupProductsImage10,
      title: "All-in-One Messaging Dashboard",
      alt: "Fablead Technolabs WhatsApp marketing platform overview",
      description:
        "Monitor active campaigns, message delivery status, and performance from one intuitive dashboard.",
    },
    {
      img: whattsupProductsImage7,
      title: "Campaign Management",
      alt: "Fablead Technolabs WhatsApp bulk messaging feature",
      description:
        "Manage and monitor your WhatsApp campaigns effortlessly with real-time insights and tools.",
    },
    {
      img: whattsupProductsImage11,
      title: "WhatsApp Bulk Sender",
      alt: "Fablead Technolabs WhatsApp bulk messaging sender feature",
      description:
        "Send personalized WhatsApp messages to multiple contacts at once. Schedule, manage, and track all your campaigns effortlessly, ensuring every message reaches the right audience on time.",
    },
    {
      img: whattsupProductsImage9,
      title: "Contact Management",
      alt: "Fablead Technolabs WhatsApp contact management feature",
      description:
        "Import, organize, and segment your WhatsApp contacts efficiently for personalized and targeted messaging campaigns.",
    },
    {
      img: whattsupProductsImage2,
      title: "Engaging Rich Media Support",
      alt: "Fablead Technolabs WhatsApp rich media messaging feature",
      description:
        "Send images, videos, documents, and links to make your WhatsApp campaigns more impactful.",
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
          <div className="pt-5" role="heading" aria-level="1">
            WhatsApp Bulk Messaging
          </div>
          <p className="header-content prodectpage-ecommerce-subheading">
            Reach your audience instantly with automated WhatsApp bulk messaging.
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
                      WhatsApp Bulk Messaging
                    </h1>
                  </span>
                </div>
                <div className="development-content">
                  <p>
                    Our <strong>WhatsApp Bulk Messaging Software</strong> helps
                    businesses automate and personalize communication at scale.
                    Send promotional, transactional, or informational messages
                    to thousands of users — quickly, reliably, and in compliance
                    with WhatsApp policies.
                  </p>
                  <p>
                    Built for marketing, support, and enterprise operations, the
                    platform offers advanced campaign analytics, real-time
                    delivery tracking, audience segmentation, and customizable
                    templates — all in one easy-to-use dashboard.
                  </p>

                  <Link
                    className="btn-learn-more-prodect align-items-center mt-2"
                    to="/contact"
                  >
                    Contact Us <MdCall />
                  </Link>
                  <Link
                    className="btn-learn-more align-items-center mt-2 ms-md-2"
                    to="#"
                  >
                    Get Started <MdOutlineArrowOutward />
                  </Link>

                  <div className="stats-container mt-5">
                    <div className="stat-item">
                      <div className="stat-value">{stats.happyClients}</div>
                      <div className="stat-label">Active Clients</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{stats.satisfactionRate}</div>
                      <div className="stat-label">Delivery Success Rate</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{stats.support}</div>
                      <div className="stat-label">Technical Support</div>
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
                src={whattsupProductMainImage1}
                className="img-fluid rounded shadow object-fit-cover zoom-img"
                alt="Fablead Technolabs WhatsApp marketing platform overview"
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
                    <Link
                      className="development-content-span"
                      to="/products/whatsapp-bulk-messaging-platform"
                    >
                      Fablead Developers Technolab
                    </Link>{" "}
                    WhatsApp Bulk Messaging simplifies communication
                    and campaign management with intelligent automation,
                    detailed analytics, and real-time reporting.
                  </p>

                  <div className="row key-features-div">
                    <div id="why-us" className="why-us fade-up">
                      <Col
                        lg={12}
                        className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
                      >
                        <div className="accordion-list1">
                          <ul>
                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                onClick={() => handleAccordionToggle("item1")}
                              >
                                01. Campaign Management{" "}
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
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Bulk Campaigns:</strong> Create and send thousands of messages instantly with attachments and templates.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Scheduling:</strong> Automate your campaigns with flexible scheduling and smart retries.
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                onClick={() => handleAccordionToggle("item2")}
                              >
                                02. Contact Management{" "}
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
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Import Contacts:</strong> Upload lists from Excel or CSV effortlessly.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Segmentation:</strong> Organize contacts by behavior, location, or engagement.
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item3 ? "show" : ""
                                  }`}
                                onClick={() => handleAccordionToggle("item3")}
                              >
                                03. Message Personalization{" "}
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
                                    <strong>Dynamic Fields:</strong> Personalize
                                    messages with customer names or order
                                    details.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Rich Media:</strong> Add images,
                                    PDFs, and links to enhance engagement.
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item4 ? "show" : ""
                                  }`}
                                onClick={() => handleAccordionToggle("item4")}
                              >
                                04. Analytics & Tracking{" "}
                                {accordionState.item4 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-1"
                                className={`collapse ${accordionState.item4 ? "show" : ""
                                  }`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Delivery Tracking:</strong> Monitor
                                    sent messages and delivery rates live.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Insights:</strong> Analyze message
                                    performance and engagement data.
                                  </li>
                                  <li>
                                    <Check2 className="service-icon me-2" />
                                    <strong>Compliance:</strong> Stay aligned
                                    with WhatsApp messaging policies.
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
                      src={whattsupProductsImage10}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs WhatsApp marketing platform overview"
                    />
                  </div>

                </Slider>
              </Col>
            </Row>
          </section>

          <Row className="mt-0 g-4">
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faDesktop} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/whatsapp-bulk-messaging-platform">
                    Real-Time Message Tracking
                  </Link>
                </h4>
                <p className="text-center">
                  Monitor delivery, read receipts, and message performance
                  instantly.
                </p>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
              data-aos="zoom-in"
              data-aos-delay={500}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faBolt} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/whatsapp-bulk-messaging-platform">
                    Automated Campaigns
                  </Link>
                </h4>
                <p className="text-center">
                  Plan and send automated WhatsApp campaigns effortlessly.
                </p>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
              data-aos="zoom-in"
              data-aos-delay={600}
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
                  <Link to="/products/whatsapp-bulk-messaging-platform">
                    Customer Management
                  </Link>
                </h4>
                <p className="text-center">
                  Organize contacts and deliver targeted campaigns effectively.
                </p>
              </div>
            </Col>
          </Row>

          <section className="py-5">
            <Row
              className="portfolio-container1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="d-flex justify-content-center align-items-center">
                <span className="heding-title-span">
                  <h2 className="heading-title">
                    WhatsApp Bulk Messaging Screens
                  </h2>
                </span>
              </div>

              <div className="grid-container">
                {portfolioItems
                  .slice(0, 4)
                  .map(({ img, alt, title, description }, i) => (
                    <div key={i} className="grid-item">
                      <div className="card border-0 portfolio-img text-center mb-0">
                        <div className="image-container-prodect-screens">
                          <Image
                            src={img}
                            className="card-img-top"
                            alt={alt}
                          />
                        </div>
                        <div className="card-body-prodect-info text-center">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text text-muted">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Row>
          </section>
        </div>
      </section>
      <InnerCallToLog />
      <Footer />
    </>
  );
}

export default React.memo(WhatsAppbulk);
