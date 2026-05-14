import React, { useEffect, Suspense, lazy } from "react";
import Header from "../components/headers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faCartArrowDown, faDesktop, faMobileScreenButton, faTv, faDiamond, faCogs, faStore, faPaintBrush, faServer, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBar from "../components/topBar";
import { Link } from "react-router-dom";

const Log = lazy(() => import("../components/innerCallToLog"));
const Footer = lazy(() => import("../components/footer"));

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBar />
      <Header />
      <section className="services section-bg fade-up">
        <div className="section-title1">
          <div className=" pt-5" role="heading" aria-level="1">Services</div>
          <p className="header-content">
            Accelerate internal process & develop / design <br />
            web applications & mobile applications as per requirements.
          </p>
        </div>
        <Container className=" content1" data-aos="fade-up">
          <Row className="mt-4">
            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={faTv} aria-hidden="true" />{" "}
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/website-development">
                    Website Development
                  </Link>
                </h4>
                <p className="text-center">
                  We provides High Quality Website Development & Website
                  Designing for your Business.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/website-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                    {/* <button>Read More</button> */}
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faDesktop} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/website-design">Website Designing</Link>
                </h4>
                <p className="text-center">
                  We have a Dynamic and Talented team of Professional Designers,
                  illustrators, animators, and programmers.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/website-design"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faMobileScreenButton} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/mobile-apps">Mobile App</Link>
                </h4>
                <p className="text-center">
                  We are a mobile app development company , specializes in
                  creating android & ios apps.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/mobile-apps"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faCartArrowDown} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/e-commerce">E-Commerce Development</Link>
                </h4>
                <p className="text-center">
                  We provides enterprise Level E-commerce Store, E-commerce
                  Website, E-commerce Shopping Website Design and Development.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/e-commerce"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faDiamond} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center ">
                  <Link to="/services/cms-website">
                    CMS Based Website Development
                  </Link>
                </h4>
                <p className="text-center">
                  We have Expertise in Website development using Wordpress, WIX,
                  Squarespace, Magento CMS according to requirement.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/cms-website"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box ">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faCogs} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/web-maintenance">
                    Web Maintenance & Customization
                  </Link>
                </h4>
                <p className="text-center">
                  We have Expertise in all types of Websites Maintenance and
                  Customization according to requirement.{" "}
                </p>
                <div className="text-center">
                  <Link
                    to="/services/web-maintenance"
                    className="btn-learn-more mt-4"
                  >
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </Col>

            {/* add more new services */}
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch pt-4 pb-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box ">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faStore} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/shopify-development">
                    Shopify Development
                  </Link>
                </h4>
                <p className="text-center">
                  We offer top-notch Shopify development services, including
                  custom e-commerce store design, seamless integrations, and
                  scalable solutions for businesses of all sizes.{" "}
                </p>
                <div className="text-center">
                  <Link
                    to="/services/shopify-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch pt-4 pb-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box ">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faPaintBrush} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/graphics-design">
                    Graphic Designing Development
                  </Link>
                </h4>
                <p className="text-center">
                  We specialize in developing visually stunning and responsive
                  designs for websites, mobile apps, and digital platforms. From
                  UI/UX to brand visuals, we craft pixel-perfect graphics that
                  elevate user experience.{" "}
                </p>
                <div className="text-center">
                  <Link
                    to="/services/graphics-design"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch pt-4 pb-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box ">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faServer} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/server-management">
                    Server Manage / Support
                  </Link>
                </h4>
                <p className="text-center">
                  We provide reliable server management and website maintenance
                  services, including performance monitoring, security updates,
                  backups, and issue resolution to keep your site running smoothly
                  24/7.{" "}
                </p>
                <div className="text-center">
                  <Link
                    to="/services/server-management"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch pt-4 pb-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box ">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faRobot} aria-hidden="true" />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/services/ai-tools">
                    AI Tools & Automation
                  </Link>
                </h4>
                <p className="text-center">
                  We deliver AI tools and automation support that enhance digital workflows, optimize customer engagement, and power smarter websites, apps, and business systems.
                </p>
                <div className="text-center">
                  <Link
                    to="/services/ai-tools"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            {/* add more new services */}
          </Row>
        </Container>
      </section>
      <Suspense fallback={null}>
        <Log />
        <Footer />
      </Suspense>
    </>
  );
}
export default React.memo(ServicePage);
