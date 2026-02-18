import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import Footer from "../../components/footer";
import Log from "../../components/innerCallToLog";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";

function WebsiteDevelopment() {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Website Development</div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="">
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1"
            >
              <div className=" accordion-list1 ">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      <span></span> Our Expertise:{" "}
                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> As a premier website development company, we are dedicated to delivering innovative and customized solutions that not only meet but exceed the expectations of our clients.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> With a team of experienced developers, we bring technical expertise to ensure your website performs at its best.                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> From interactive web applications to complex functionalities, we turn your ideas into cutting-edge digital solutions.                        </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Elevate Your Online Presence:
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Partner with <strong>Fablead Developers Technolab</strong> to elevate your online presence and stay ahead in the digital landscape.
                      </p>
                      <p><ChevronDoubleRight className="service-icon" /> Let us be the architects of your digital success, turning concepts into captivating websites that leave a lasting impression.</p>
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
                      {accordionState.item3 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item3 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        {/* PHP (Laravel, CodeIgniter), Node.js, MySQL, WordPress, Python (Django) */}
                        {" "}PHP / MYSQL , LARAVEL , Codeigniter , Wordpress , Node JS , Python / Django, React JS , Angular JS, Shopify
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={5}
              className="col-lg-5 align-items-stretch  order-lg-2 img CmsImage"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </Col>
          </Row>
        </Container>
      </section>

      <Log />
      <Footer />
    </>);

}
export default React.memo(WebsiteDevelopment)