import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUsImage from "../assets/images/Home_Page/satisfiedClientFablead.png";
function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="why-us" className="why-us section-bg">
      <Container data-aos="fade-up">
        <div className="section-title">
          <div role="heading" aria-level="2">About Us</div>
        </div>
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-stretch  order-lg-1 "
          >
            <div className="content-div">
              <div className="about_left_text wow fadeInUp">
                <p>
                  Fablead Developers Technolab is the best IT company in surat
                  for{" "}
                  <Link to="/services/website-development">
                    Website Development
                  </Link>{" "}
                  , <Link to="/services/website-design">Website Designing</Link>{" "}
                  ,{" "}
                  <Link to="/services/mobile-apps">Mobile App Development</Link>{" "}
                  , <Link to="/services/e-commerce">Ecommerce Solutions</Link> ,
                  SEO.{" "}
                </p>
                <p>
                  Our Company Include{" "}
                  <Link
                    to="/services/website-development"
                    rel="noopener noreferrer"
                  >
                    Web Development
                  </Link>{" "}
                  , <Link to="/services/website-design">Web Designing</Link>,{" "}
                  <Link to="/services/mobile-apps">Mobile App Development</Link>{" "}
                  , <Link to="/services/e-commerce">Ecommerce Development</Link>{" "}
                  ,{" "}
                  <Link to="/services/cms-website">
                    CMS Based Website Development
                  </Link>{" "}
                  and{" "}
                  <Link to="/services/web-maintenance">
                    Web Maintenance & Customization.
                  </Link>{" "}
                </p>
                <p>
                  We always aim to provide Reliable and Quality services to your
                  customers using Latest Technologies by understanding your
                  Business Objective Expectations.
                </p>
                <div className="top-about wow fadeInRight wow fadeInUp">
                  <Link to="/about" className="btn-learn-more mt-4 aboutus_btn">
                    {" "}
                    READ MORE ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="align-items-stretch order-lg-2 img satisfied"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Image
              src={AboutUsImage}
              className="about_image"
              alt="Fablead Developers Technolab"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default React.memo(AboutUs);
