import React, { useEffect, useState, Suspense, lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

const Log = lazy(() => import("../../components/innerCallToLog"));
const Footer = lazy(() => import("../../components/footer"));

function AIToolsService() {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: true,
    item3: true,
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
            AI Tools & Automation
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
                  <li>
                    <a
                      className={`collapse ${accordionState.item1 ? "show" : ""}`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      <span></span> Our AI Expertise:
                      {accordionState.item1 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div className={`collapse ${accordionState.item1 ? "show" : ""}`}>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        We build AI tools that work alongside our website development, design, mobile app, ecommerce, CMS, and maintenance services to automate workflows and boost business outcomes.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        From intelligent chatbots and content automation to data-driven personalisation, we integrate AI capabilities into digital products for smarter user experiences.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      className={`collapse ${accordionState.item2 ? "show" : ""}`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> AI for your digital services:
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div className={`collapse ${accordionState.item2 ? "show" : ""}`}>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        We enhance websites and mobile apps with automation, predictive analytics, and AI-powered CMS workflows that simplify management and improve conversions.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        AI tools also support ecommerce product recommendations, customer support bots, and process automation for faster, smarter online business operations.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      className={`collapse ${accordionState.item3 ? "show" : ""}`}
                      onClick={() => handleAccordionToggle("item3")}
                    >
                      <span></span> Technologies & platforms:
                      {accordionState.item3 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div className={`collapse ${accordionState.item3 ? "show" : ""}`}>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        We leverage modern AI toolkits, APIs, natural language processing, automation scripts, and data integration to create solutions that fit your existing web and app ecosystem.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col
              lg={5}
              className="col-lg-5 align-items-stretch order-lg-2 img serverManage"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </Col>
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

export default React.memo(AIToolsService);
