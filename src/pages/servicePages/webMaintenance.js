import React, { useEffect, useState, lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

const Footer = lazy(() => import("../../components/footer"));
const Log = lazy(() => import("../../components/innerCallToLog"));

function WebMaintenance() {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Web Maintenance & Customization</div>
        </div>
        <Container className=" mt-5" data-aos="fade-up">
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
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> At <strong>Fablead Developers Technolabs</strong>, we specialize in the fine art of web maintenance and customization. Whether you need regular updates, security patches, or a tailored approach to enhance your website's features, our skilled team is ready to optimize and refine your online presence.                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Our proactive approach ensures your website is always up-to-date, secure, and performing at its best.  Keep your content fresh and engaging with our regular updates and optimization services.                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Our support team is always ready to assist you, providing timely responses and solutions to any issues that may arise.                        </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Optimize, Customize, Thrive:
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" aria-hidden="true" /> : <ChevronDown className="icon-show float-end" aria-hidden="true" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Partner with <strong>Fablead Developers Technolab</strong> to optimize and customize your web presence for sustained success.

                      </p>
                      <p><ChevronDoubleRight className="service-icon" aria-hidden="true" /> Let us be your partner in ensuring your website not only meets but exceeds the expectations of your audience.</p>

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
                        {" "}WordPress, PHP (Laravel, CodeIgniter), Node.js, Python (Django), MySQL, Shopify
                        {/* PHP / MYSQL , LARAVEL , Codeigniter , Wordpress , Node JS , Python / Django */}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch  order-lg-2 img WebMaintenanceImage"

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
export default React.memo(WebMaintenance)