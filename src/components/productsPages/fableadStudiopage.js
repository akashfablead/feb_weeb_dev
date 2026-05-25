import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import Careers from "../pages/career";
import { faBolt, faDesktop, faEarthAmericas, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";

import fableadtechnolabs_fab_Studio_Gallery from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Gallery.png";
import inveory_profuct_list from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Groups.png";
import inventor_billing_software_main_feb from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-main.png";
import inventor_billing_software_page_img_feb from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Gallery.png";
import fableadtechnolabs_fab_Studio_dashboard from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Dashborad.png";
import purchase_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-purchase-list-management-page.png";
import fableadtechnolabs_fab_Studio_Groups from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Groups.png";
import sales_page_page_img_feb from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Create_Groups.png";
import add_purchase_page_img_feb from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Settings.png";
import accounts_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-accounts-management-page.png";
import sales_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-sales-list-management-page.png";
import expense_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-expense-list-management-page.png";
import fableadtechnolabs_fab_Studio_Settings from "../../assets/images/Products/fableadStudio/fableadtechnolabs-fab-Studio-Settings.png";
import InnerCallToLog from "../innerCallToLog";

import { Check2, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";

function FableadStudio() {
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
    img: fableadtechnolabs_fab_Studio_dashboard,
    title: "Studio Dashboard Overview",
    alt: "Fablead Studio dashboard overview",
    description:
      "Monitor event galleries, photo uploads, storage usage, and platform activity from a centralized dashboard.",
  },
  {
    img: fableadtechnolabs_fab_Studio_Gallery,
    title: "Event Gallery Management",
    alt: "Fablead Studio event gallery management",
    description:
      "Create, organize, and manage multiple event galleries for weddings, birthdays, corporate events, and more.",
  },
  {
    img: fableadtechnolabs_fab_Studio_Settings,
    title: "Account & Studio Settings",
    alt: "Fablead Studio account and settings management",
    description:
      "Manage profile information, branding preferences, security settings, and team access from a single place.",
  },
  {
    img: fableadtechnolabs_fab_Studio_Groups,
    title: "Group & Member Management",
    alt: "Fablead Studio group member management",
    description:
      "View event participants, manage permissions, and control access to private and public galleries.",
  },
  // {
  //   img: sales_list_page_img_feb,
  //   title: "Photo Collection & Organization",
  //   alt: "Fablead Studio photo organization",
  //   description:
  //     "Browse, filter, and organize thousands of event photos with a smooth and intuitive management experience.",
  // },
  // {
  //   img: sales_page_page_img_feb,
  //   title: "AI Face Match Technology",
  //   alt: "Fablead Studio AI face recognition",
  //   description:
  //     "Help guests instantly find their photos using advanced AI-powered face recognition and smart search features.",
  // },
  // {
  //   img: add_purchase_page_img_feb,
  //   title: "Smart Sharing & Guest Access",
  //   alt: "Fablead Studio gallery sharing",
  //   description:
  //     "Share galleries using event codes, QR codes, or direct links for seamless guest participation and uploads.",
  // },
  // {
  //   img: accounts_page_img_feb,
  //   title: "Downloads & Gallery Insights",
  //   alt: "Fablead Studio downloads and analytics",
  //   description:
  //     "Track gallery activity, monitor downloads, and manage photo access while maintaining complete control.",
  // },
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
  <div className="pt-5">
    Fablead Studio
  </div>
  <p className="header-content prodectpage-ecommerce-subheading">
    Create Event Galleries, Share Memories & Find Photos with AI Face Match
  </p>
</div>
        {/* content1 */}
        <div className="container  pt-lg-2" data-aos="fade-up">
          <Row>
            <Col
              lg={7}
              className="d-flex flex-column align-items-stretch order-sm-1"
            >
              <div className="pb-lg-0 pb-md-4">
                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                     Fablead Studio
                    </h1>
                  </span>
                </div>
              <div className="development-content">
<p>
  <strong className="development-content-span">Fablead Studio</strong> is an AI-powered event photo sharing
  platform for photographers, studios, and event organizers. Create event
  galleries, manage photos, and share memories from weddings, birthdays,
  corporate events, and more.
</p>

<p>
  Guests can join instantly using an event code, link, or QR code, while
  AI Face Match helps them quickly find their photos from thousands of
  event images.
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

  <div className="d-flex justify-content-between align-items-center">
    <div className="stats-container mt-5">
         <div className="stat-item">
        <div className="stat-value">10K+</div>
        <div className="stat-label">Photos Shared</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">99.9%</div>
        <div className="stat-label">Uptime Guarantee</div>
      </div>

   

      <div className="stat-item">
        <div className="stat-value">24/7</div>
        <div className="stat-label">Platform Access</div>
      </div>
    </div>
  </div>
</div>
              </div>
            </Col>
            {/* align-items-center */}
            <Col
              lg={5}
              className="d-flex justify-content-center order-lg-2 order-md-2 img satisfied"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                src={inventor_billing_software_main_feb}
                // className="img-fluid rounded shadow object-fit-cover zoom-img"
                className="img-fluid rounded shadow object-contain"
                loading="eager"
                alt="Fablead Technolabs inventory billing software dashboard"
              />
            </Col>
          </Row>

          <section className="py-5 ">
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
            to="/products/fablead-studio"
          >
            Fablead Studio
          </Link>{" "}
          is an AI-powered event photo sharing platform that helps
          photographers, studios, and guests collect, organize, and share
          event memories in one secure place. From weddings and birthdays to
          corporate events, every photo can be easily discovered, managed,
          and shared.
        </p>

        <div className="row key-features-div">
          <div id="why-us" className="why-us fade-up">
            <div data-aos="fade-up">
              <Col
                lg={12}
                className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
              >
                <div className="accordion-list1">
                  <ul>
                    {/* Event Gallery Management */}
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className={`collapse ${
                          accordionState.item1 ? "show" : ""
                        }`}
                        onClick={() => handleAccordionToggle("item1")}
                      >
                        01. Event Gallery Management
                        {accordionState.item1 ? (
                          <ChevronUp className="icon-close float-end" />
                        ) : (
                          <ChevronDown className="icon-show float-end" />
                        )}
                      </a>

                      <div
                        className={`collapse ${
                          accordionState.item1 ? "show" : ""
                        }`}
                      >
                        <ul className="list-unstyled">
                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Create Event Galleries:</strong> Create
                            dedicated galleries for weddings, birthdays,
                            engagements, corporate events, and more.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Private & Public Access:</strong> Control
                            who can view and contribute photos with flexible
                            privacy settings.
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Smart Sharing */}
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className={`collapse ${
                          accordionState.item2 ? "show" : ""
                        }`}
                        onClick={() => handleAccordionToggle("item2")}
                      >
                        02. Smart Sharing & Guest Access
                        {accordionState.item2 ? (
                          <ChevronUp className="icon-close float-end" />
                        ) : (
                          <ChevronDown className="icon-show float-end" />
                        )}
                      </a>

                      <div
                        className={`collapse ${
                          accordionState.item2 ? "show" : ""
                        }`}
                      >
                        <ul className="list-unstyled">
                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>6-Digit Event Code:</strong> Allow guests
                            to join galleries instantly using a unique event
                            code.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>QR Code & Link Sharing:</strong> Share
                            galleries quickly through QR codes and secure
                            links.
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Face Match */}
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className={`collapse ${
                          accordionState.item3 ? "show" : ""
                        }`}
                        onClick={() => handleAccordionToggle("item3")}
                      >
                        03. AI Face Match Technology
                        {accordionState.item3 ? (
                          <ChevronUp className="icon-close float-end" />
                        ) : (
                          <ChevronDown className="icon-show float-end" />
                        )}
                      </a>

                      <div
                        className={`collapse ${
                          accordionState.item3 ? "show" : ""
                        }`}
                      >
                        <ul className="list-unstyled">
                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Face Recognition:</strong> Automatically
                            identify and group photos of the same person.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Instant Photo Discovery:</strong> Guests
                            can upload a selfie and instantly find their
                            event photos.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Faster Search Experience:</strong>
                            Eliminate manual browsing through thousands of
                            images.
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Photo Management */}
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className={`collapse ${
                          accordionState.item4 ? "show" : ""
                        }`}
                        onClick={() => handleAccordionToggle("item4")}
                      >
                        04. Photo Management & Downloads
                        {accordionState.item4 ? (
                          <ChevronUp className="icon-close float-end" />
                        ) : (
                          <ChevronDown className="icon-show float-end" />
                        )}
                      </a>

                      <div
                        className={`collapse ${
                          accordionState.item4 ? "show" : ""
                        }`}
                      >
                        <ul className="list-unstyled">
                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Bulk Photo Downloads:</strong> Download
                            individual photos or complete albums in high
                            quality.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Secure Cloud Storage:</strong> Store and
                            manage event memories safely with cloud-based
                            access.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Watermark Protection:</strong> Protect
                            your photos with customizable watermark settings.
                          </li>

                          <li>
                            <Check2 className="service-icon me-2" />
                            <strong>Digital Flipbook Experience:</strong>
                            Present albums in an engaging and premium viewing
                            format.
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
      </div>
    </Col>
              {/* align-items-center  order-1 order-lg-2 */}
              <Col
                lg={5}
                className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2 "
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <Slider {...sliderSettings}>
                  <div>
                    <Image
                      src={inventor_billing_software_page_img_feb}
                      loading="lazy"
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs inventory and billing dashboard"
                    />
                  </div>
                  <div>
                    <Image
                      src={sales_page_page_img_feb}
                      loading="lazy"
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs sales management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={inveory_profuct_list}
                      loading="lazy"
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs inventory product list management"
                    />
                  </div>
                  <div>
                    <Image
                      src={add_purchase_page_img_feb}
                      loading="lazy"
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs add purchase entry page"
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
        <Link to="/products/fablead-studio">
          Event Gallery Management
        </Link>
      </h4>
      <p className="text-center">
        Create and manage private or public event galleries for weddings,
        birthdays, corporate events, and more.
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
        <Link to="/products/fablead-studio">
          AI Face Match
        </Link>
      </h4>
      <p className="text-center">
        Instantly find and organize photos using advanced AI-powered face
        recognition technology.
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
        <Link to="/products/fablead-studio">
          Smart Sharing
        </Link>
      </h4>
      <p className="text-center">
        Share event galleries through QR codes, links, and event codes for
        seamless guest access and photo uploads.
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
          Fablead Studio Screens
        </h2>
      </span>
    </div>

    <div className="grid-container">
      {portfolioItems.map(({ img, alt, title, description }, i) => (
        <div key={i} className="grid-item">
          <div
            className="card border-0 portfolio-img text-center mb-0"
            style={{ height: "auto" }}
          >
            <div className="image-container-prodect-screens">
              <Image
                src={img}
                loading="lazy"
                className="card-img-top"
                alt={alt}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              className="card-body-prodect-info text-center"
              style={{ height: "auto" }}
            >
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

export default React.memo(FableadStudio);