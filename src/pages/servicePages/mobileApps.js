import React, { useEffect, useState, Suspense, lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

const Log = lazy(() => import("../../components/innerCallToLog"));
const Footer = lazy(() => import("../../components/footer"));

function MobileApps() {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Mobile App</div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="">
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1"
            > <div className="accordion-list1 ">
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
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Our team of experienced developers brings technical expertise to the forefront, ensuring your app is built with the latest technologies and be
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> We specialize in creating seamless and native applications for both iOS and Android platforms, ensuring a broad reach for your target audience.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> We prioritize the end-user experience, creating apps that are not just functional but also delightful to use.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Elevate Your Ideas into Apps:
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" aria-hidden="true" /> : <ChevronDown className="icon-show float-end" aria-hidden="true" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" aria-hidden="true" /> Partner with <strong>Fablead Developers Technolab</strong> to transform your ideas into impactful mobile applications.
                      </p>
                      <p><ChevronDoubleRight className="service-icon" aria-hidden="true" /> Let us be your technology partner on the journey to digital success, providing solutions that set your brand apart in the mobile landscape.</p>
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
                        {" "}React Native, Flutter, PHP (Laravel, CodeIgniter), Node.js, Python (Django), MySQL, Firebase Firestore
                        {/* PHP / MYSQL , LARAVEL , Codeigniter , Wordpress , Node JS , Python / Django */}
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch  order-lg-2 img MobileApp"

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
export default React.memo(MobileApps)