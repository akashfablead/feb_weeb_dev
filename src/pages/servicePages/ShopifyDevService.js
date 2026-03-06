import React, { useEffect, useState, Suspense, lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import { ChevronDoubleRight, ChevronDown, ChevronUp, } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

const Log = lazy(() => import("../../components/innerCallToLog"));
const Footer = lazy(() => import("../../components/footer"));

const ShopifyDevService = () => {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Shopify Development</div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="">
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
            >
              <div className="accordion-list1">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      <span></span> Our Expertise:{" "}
                      {accordionState.item1 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        {""} At <strong>Fablead Developers Technolab</strong>,
                        we specialize in building tailored Shopify stores that
                        not only look stunning but also drive sales.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        {""} From custom theme development to seamless payment
                        integrations, we ensure your online store delivers an
                        exceptional shopping experience.
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
                      <span></span> Our Shopify Services:{" "}
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        {""} <strong>Custom Shopify Theme Development:</strong>{" "}
                        Design and develop unique themes that align with your
                        brand identity.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        <strong>
                          {""} Shopify Store Setup & Configuration:
                        </strong>{" "}
                        {""} Complete store setup, including payment gateway
                        integration, shipping configurations, and tax settings.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        <strong>{""} Responsive Design:</strong> Ensure your
                        store is mobile-friendly and provides a seamless
                        experience across all devices.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        <strong>{""} SEO Optimization:</strong> Implement
                        on-page <strong>SEO</strong>
                        strategies to enhance visibility and drive organic
                        traffic.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        <strong>{""} App Integrations:</strong> Integrate
                        essential Shopify apps to extend functionality, such as
                        email marketing tools, inventory management, and
                        customer support systems.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        <strong>
                          {""} Ongoing Maintenance & Support:
                        </strong>{" "}
                        Offer post-launch support to address any issues and keep
                        the store updated.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item3")}
                    >
                      <span></span> Technologies/Platforms We Use:{" "}
                      {accordionState.item3 ? (
                        <ChevronUp className="icon-close float-end" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="icon-show float-end" aria-hidden="true" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Shopify,
                        HTML, CSS, XML, JavaScript, PHP
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch order-lg-2 img ShopifyDev"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </Row>
        </Container>
      </section>

      <Suspense fallback={null}>
        <Log />
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(ShopifyDevService);
