import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  ChevronDoubleRight,
  Twitter,
  Facebook,
  Linkedin,
} from "react-bootstrap-icons";
import logo from "../assets/images/service-banners/250x150 (1).webp";
import { Link, useLocation } from "react-router-dom";
// import MetaTags from "react-meta-tags";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const currentDomain = window.location.origin;

    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(intervalId);
  }, [currentYear, location.pathname]);
  return (
    <>
      <footer id="footer">
        <div className="footer-top section-bg">
          <Container>
            <Row>
              <Col lg={3} md={6} className="footer-contact">
                <Link className=" logo-biss" to={logoUrl}>
                  {" "}
                  <Image
                    src={logo}
                    className="footerlogo"
                    alt="Fablead Developers Technolabs"
                  />
                </Link>
                <div className="social-links mt-3">
                  <a
                    href="https://twitter.com/fablead_tech"
                    rel="=noopener"
                    className="twitter mx-4"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.facebook.com/fableaddevelopers"
                    rel="=noopener"
                    className="facebook "
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
                    rel="=noreferrer"
                    className="linkedin  mx-4"
                  >
                    <Linkedin />
                  </a>
                </div>
              </Col>

              <Col lg={3} md={6} className="footer-links">
                <h4>QUICK LINKS</h4>
                <ul>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>
                    <Link to="/services"> Our Services</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/training-and-courses">Training & Courses</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/careers">Career</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </Col>

              <Col lg={3} md={6} className="footer-links">
                <h4>OUR SERVICES</h4>
                <ul>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/website-development">
                      Website Development
                    </Link>
                  </li>
                  {/* <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/website-design">Website Designing</Link>
                  </li> */}
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/mobile-apps">Mobile Apps</Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/e-commerce">
                      E-Commerce Development
                    </Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/cms-website">
                      CMS Based Website Development{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/web-maintenance">
                      Web Maintenance & Customization{" "}
                    </Link>
                  </li> */}
                  {/* add new services */}
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/shopify-development">
                      Shopify Development{" "}
                    </Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/graphics-design">
                      Graphic Designing{" "}
                    </Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/server-management">
                      Server Manage & Support{" "}
                    </Link>
                  </li>
                  <li>
                    <i>
                      <ChevronDoubleRight />
                    </i>{" "}
                    <Link to="/services/seo-service">Search Engine Optimization </Link>
                  </li>
                  {/* add new services */}
                </ul>
              </Col>

              <Col lg={3} md={6} className="footer-links ">
                <h4>CONTACT US</h4>
                <div className="info">
                  <div className="address">
                    <div className="footer-icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="address1">
                      <p>
                        A-5001, Ascon Plaza,
                        <br />
                        Adajan, Surat,
                        <br />
                        Gujarat 395009 – India
                      </p>
                    </div>
                  </div>
                  <div className="email">
                    <div className="footer-icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="address1">
                      <a href="mailto:info@fableadtechnolabs.com">
                        {" "}
                        <label>info@fableadtechnolabs.com</label>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom ">
          <div className="col-md-12 text-center">
            <p className="mt-3">
              © Copyright {currentYear}{" "}
              <strong>
                <Link to={logoUrl} className="text-light">
                  - Fablead Developers Technolab
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default React.memo(Footer);
