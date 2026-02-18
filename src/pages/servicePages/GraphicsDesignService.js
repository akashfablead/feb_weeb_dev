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

const GraphicsDesignService = () => {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Graphic Design</div>
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
                        <ChevronDoubleRight className="service-icon" />
                        {""} At <strong>Fablead Developers Technolab</strong>,
                        we specialize in delivering innovative and visually
                        compelling graphic design solutions that elevate your
                        brand's identity.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> From
                        logo creation to marketing collateral, we craft designs
                        that resonate with your audience and drive engagement.
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
                      <span></span> Core Services Offered:{" "}
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
                        <strong>{""} Logo Design:</strong> Craft unique and
                        memorable logos that encapsulate your brand's essence.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong>{""} Brand Identity Development:</strong> Create
                        cohesive brand guidelines, including color palettes,
                        typography, and visual elements.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong>{""} Marketing Collateral:</strong> Design
                        brochures, flyers, posters, and other materials that
                        effectively communicate your message.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong>{""} Digital Graphics:</strong> Develop engaging
                        visuals for social media, websites, and email campaigns.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong>{""} Packaging Design:</strong> Design product
                        packaging that stands out on shelves and aligns with
                        your brand's identity.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        <strong>{""} Presentation Design:</strong> Create
                        professional and visually appealing presentations for
                        business meetings and pitches.
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
                        <ChevronDoubleRight className="service-icon" />{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open("https://www.figma.com", "_blank")
                          }
                        >
                          Figma
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open(
                              "https://www.adobe.com/products/xd.html",
                              "_blank"
                            )
                          }
                        >
                          Adobe XD
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open("https://www.sketch.com", "_blank")
                          }
                        >
                          Sketch
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open("https://www.invisionapp.com", "_blank")
                          }
                        >
                          InVision
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open("https://www.coreldraw.com", "_blank")
                          }
                        >
                          CorelDRAW
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open("https://www.canva.com", "_blank")
                          }
                        >
                          Canva
                        </p>
                        ,{" "}
                        <p
                          className="d-inline"
                          onClick={() =>
                            window.open(
                              "https://www.adobe.com/products/photoshop.html",
                              "_blank"
                            )
                          }
                        >
                          Adobe Photoshop
                        </p>
                        .
                      </p>
                      {/* <p>
                        <ChevronDoubleRight className="service-icon" />{" "}
                        <a
                          href="https://www.figma.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          Figma
                        </a>
                        ,{" "}
                        <a
                          href="https://www.adobe.com/products/xd.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          Adobe XD
                        </a>
                        ,{" "}
                        <a
                          href="https://www.sketch.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          Sketch
                        </a>
                        ,{" "}
                        <a
                          href="https://www.invisionapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          InVision
                        </a>
                        ,{" "}
                        <a
                          href="https://www.coreldraw.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          CorelDRAW
                        </a>
                        ,{" "}
                        <a
                          href="https://www.canva.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          Canva
                        </a>
                        ,{" "}
                        <a
                          href="https://www.adobe.com/products/photoshop.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline p-0"
                        >
                          Adobe Photoshop
                        </a>
                        .
                      </p> */}

                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch order-lg-2 img GraphicsDesign"
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

export default React.memo(GraphicsDesignService);
