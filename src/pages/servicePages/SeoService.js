import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import Footer from "../../components/footer";
import Log from "../../components/innerCallToLog";
import {
  ChevronDoubleRight,
  ChevronDown,
  ChevronUp,
} from "react-bootstrap-icons";
import TopBar from "../../components/topBar";
import { Link } from "react-router-dom";

const SeoService = () => {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: true,
    item3: true,
    item4: true,
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
      <section id="why-us" className="why-us section-bg fade-up">
        <div className="section-title1">
          <div className="mt-5 contact_us" role="heading" aria-level="1">
            Search Engine Optimization
          </div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row>
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
            >
              <div className="accordion-list1">
                <ul>
                  {/* Accordion Item 1 */}
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      <span></span> Our Expertise:{" "}
                      {accordionState.item1 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> At{" "}
                        <strong>Fablead Developers Technolabs</strong>, we
                        specialize in delivering comprehensive SEO solutions
                        that enhance your online visibility and drive organic
                        traffic.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Our
                        data-driven approach ensures measurable result and
                        sustainable growth for your business.
                      </p>
                    </div>
                  </li>

                  {/* Accordion Item 2 */}
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Our SEO Services:{" "}
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> On-Page SEO:</strong> Optimize website elements
                        such as meta tags, headers, URLs, and content to improve
                        relevance and search engine rankings.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> Off-Page SEO:</strong> Build high-quality
                        backlinks and enhance domain authority through strategic
                        link-building techniques.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> Technical SEO:</strong> Ensure website health
                        by addressing issues like site speed,
                        mobile-friendliness, crawlability, and structured data.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> Local SEO:</strong> Optimize your online
                        presence for local searches, including Google My
                        Business optimization and local citations.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> E-commerce SEO:</strong> Enhance product
                        visibility and sales through optimized product
                        descriptions, images, and category pages.
                      </p>
                    </div>
                  </li>

                  {/* Accordion Item 3 */}
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item3")}
                    >
                      <span></span> Advanced SEO Strategies:{" "}
                      {accordionState.item3 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> SEO Audits:</strong> Conduct comprehensive
                        audits to identify and rectify SEO issues, providing a
                        roadmap for improvement.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> Content Strategy & Optimization:</strong>{" "}
                        Develop and implement content strategies that align with
                        user intent and target keywords.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong> Analytics & Reporting:</strong> Monitor
                        performance metrics and provide regular reports to track
                        progress and ROI.
                      </p>
                    </div>
                  </li>

                  {/* Accordion Item 4 */}
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item4 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item4")}
                    >
                      <span></span> Technologies/Platforms We Use:{" "}
                      {accordionState.item4 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item4 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> HTML,
                        CSS, JavaScript, XML, React, Google Analytics, Google
                        Search Console, Meta Tags, Sitemap, Structured Data
                        (Schema.org)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch order-lg-2 img seoService"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </Row>
        </Container>
      </section>

      <Log />
      <Footer />
    </>
  );
};

export default React.memo(SeoService);
