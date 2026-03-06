
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

const Log = lazy(() => import("../../components/innerCallToLog"));
const Footer = lazy(() => import("../../components/footer"));

function EcomDevelopment() {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">E-Commerce Development</div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="">
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1"
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
                      <span></span> Our Expertise:{" "}
                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" aria-hidden="true" /> : <ChevronDown className="icon-show float-end" aria-hidden="true" />}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> We design and develop customized e-commerce solutions that align with your brand identity and business goals.                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Whether you're launching a new online store or seeking to optimize and expand your existing e-commerce platform, our experienced team of developers is here to turn your vision into reality.                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Boost Your Online Business:
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" aria-hidden="true" /> : <ChevronDown className="icon-show float-end" aria-hidden="true" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Partner with <strong>Fablead Developers Technolab</strong> to boost your online business with e-commerce solutions that combine innovation and functionality.
                      </p>
                      <p><ChevronDoubleRight className="service-icon" aria-hidden="true" /> Let us be your catalyst for success in the competitive e-commerce landscape.</p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item3")}
                    >
                      <span></span> Technologies/Platforms We Use :
                      {accordionState.item3 ? <ChevronUp className="icon-close float-end" aria-hidden="true" /> : <ChevronDown className="icon-show float-end" aria-hidden="true" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" />
                        {" "}PHP / MYSQL , LARAVEL , Codeigniter , Wordpress , Node JS , Python / Django, React JS , Angular JS, Shopify
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch  order-lg-2 img EcommerceImage"

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
}
export default React.memo(EcomDevelopment)