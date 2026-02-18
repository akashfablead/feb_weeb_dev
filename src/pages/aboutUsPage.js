import React from "react";
import Header from "../components/headers";
import Footer from "../components/footer";
import { Row, Col, Button, Container } from "react-bootstrap";
import {
  ChevronDoubleRight,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "react-bootstrap-icons";
import Log from "../components/innerCallToLog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faRocket,
  faGift,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../components/testimonial";
import { useEffect } from "react";
import TopBar from "../components/topBar";
import { useState } from "react";

function AboutUsPage() {
  let Years = "10";
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: true,
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
  return (
    <>
      <TopBar />
      <Header />
      <section id="about" className="about section-bg fade-up">
        <div className="section-title1">
          <div className="about_us">About Us</div>
        </div>
        <Container className="aos-init aos-animate" data-aos="fade-up">
          <Row className="content1">
            <Col lg={12} className="text-center">
              <p className="about_inner_page">
                With Over {Years} Years Of Experience In Software/Web/Mobile App
                Development, We Always Aim To Provide Reliable And Quality
                Services To Our Customers Using Latest Technologies By
                Understanding Your Business Objective Expectations
              </p>
            </Col>
          </Row>
          <hr className="slider_hr"></hr>
          <div id="why-us" className="why-us section-bg fade-up">
            <div className="container-fluid " data-aos="fade-up">
              <Row className="row ">
                <Col
                  lg={7}
                  className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1 p-0"
                >
                  <div className="accordion-list1 ">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          className={`collapse ${accordionState.item1 ? "show" : ""
                            }`}
                          onClick={() => handleAccordionToggle("item1")}
                        >
                          <span></span> About Us{" "}
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
                          <p>
                            <ChevronDoubleRight className="service-icon" />{" "}
                            <strong> Fablead Developer Technolabs </strong> is a
                            leading IT solutions provider and dedicated to being
                            a strategic partner for our clients, guiding them
                            through the ever-evolving landscape of technology.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a
                          data-bs-toggle="collapse"
                          className={`collapse ${accordionState.item2 ? "show" : ""
                            }`}
                          onClick={() => handleAccordionToggle("item2")}
                        >
                          <span></span> Join Us on the Journey:
                          {accordionState.item2 ? (
                            <ChevronUp className="icon-close float-end" />
                          ) : (
                            <ChevronDown className="icon-show float-end" />
                          )}
                        </a>
                        <div
                          // id="accordion-list-2"
                          className={`collapse ${accordionState.item2 ? "show" : ""
                            }`}
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            <ChevronDoubleRight className="service-icon" />{" "}
                            Partner with{" "}
                            <strong> Fablead Developer Technolabs </strong> to
                            embark on a journey of digital transformation.
                            Together, we'll navigate the complexities of the
                            digital landscape and position your business for
                            sustained success in a rapidly evolving world.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <div
                  className="col-lg-5 align-items-stretch  order-lg-2 img aboutus-img-div"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  &nbsp;
                </div>
              </Row>
            </div>
          </div>
          <Row className="d-flex justify-content-between about-mid-div">
            <Col lg={4} md={6}>
              <div className="who_we_area ">
                <div className="service-about mt-2 mb-3">
                  <div className="text-center">
                    <div className="servise-right text-center wow fadeInUp">
                      <i>
                        <FontAwesomeIcon
                          icon={faRocket}
                          className=" abt_icon"
                        />
                      </i>
                    </div>
                  </div>
                  <div>
                    <h2 className="unify_about text-center">Our Mission</h2>

                    <p className="left-tabs-text-2 out_msn_li">
                      <span className="our_ms_txicn">
                        {" "}
                        <i>
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </i>
                      </span>
                      <p className="left-tabs-text-2">
                        Deliver the Best and High-Quality Services By using the
                        latest Web Technologies.
                      </p>
                    </p>
                    <p className="left-tabs-text-2 out_msn_li">
                      <span className="our_ms_txicn">
                        <i>
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </i>
                      </span>
                      <p className="left-tabs-text-2">
                        To Enhancing the Business Growth of all of our Clients
                        with Modern Design and Enterprise Level Development
                        which affect Consistent Competitive advantage for our
                        clients around the world.
                      </p>
                    </p>
                    <div className="d-flex justify-content-end btn-div">
                      <Button className="aboutus-btn mt-5" href="/contact"
                        rel="noopener"
                        title="Get in touch with Fablead for a free consultation"
                        aria-label="Get in touch with Fablead for a free consultation"
                      >
                        Contact Us <ChevronRight className=" right-arrow" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="who_we_area ">
                <div className="service-about mt-2 text-left">
                  <div className="text-center">
                    <div className="servise-right text-center wow fadeInUp">
                      <i>
                        <FontAwesomeIcon icon={faGift} className=" abt_icon" />
                      </i>
                    </div>
                  </div>
                  <h2 className="unify_about text-center">Advantages</h2>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    High Quality Development
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    Team of Development Leaders
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    Quick Support and Deliver on Time
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    Always exceeding client expectations.
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    Highly flexible and creative teams.
                  </p>
                  <div className="d-flex justify-content-end btn-div">
                    <Button
                      className="aboutus-btn mt-5"
                      href="/contact"
                      rel="noopener"
                      title="Get in touch with Fablead for a free consultation"
                      aria-label="Get in touch with Fablead for a free consultation"
                    >
                      Contact Us <ChevronRight className="right-arrow" />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="who_we_area ">
                <div className="service-about mt-2">
                  <div className="servise-right text-center wow fadeInUp">
                    <i>
                      <FontAwesomeIcon
                        icon={faHandshake}
                        className=" abt_icon"
                      />
                    </i>
                  </div>

                  <h2 className="unify_about text-center">What We Provide</h2>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/website-development">
                      Website Development
                    </a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/website-design">Website Designing</a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/mobile-apps">Mobile App Development</a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/e-commerce">E-commerce Development</a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/cms-website">
                      CMS Based Website Development
                    </a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a>Team of Development Leaders</a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a href="/services/web-maintenance">
                      Web Maintenance &amp; customization
                    </a>
                  </p>
                  <p className="left-tabs-text-2">
                    <span>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                    </span>
                    <a>Website SEO</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Testimonial />
        </Container>
      </section>
      <Log />

      <Footer />
    </>
  );
}
export default React.memo(AboutUsPage);
