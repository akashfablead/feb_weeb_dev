import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/headers";
import Footer from "../components/footer";
import Log from "../components/innerCallToLog";
import TopBar from "../components/topBar";
import { ChevronUp, ChevronDown, ChevronDoubleRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CareerPage() {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: true,
    item3: false,
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
          <div className="contact_us" role="heading" aria-level="1">Career</div>
        </div>
        <Container className="mt-5" data-aos="fade-up">
          <Row className="row ">
            <Col
              lg={7}
              className="d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
            >
              <div className="content mb-3">
                <h3>
                  <strong>We are always eager to meet fresh talent.</strong>
                </h3>
                <h4>Current Openings!</h4>
              </div>
              <div className="accordion-list ">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item1")}
                    >
                      <span>01</span> React and Node JS Developer{" "}
                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      id="accordion-list-1"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> This position will involve working with Node JS, React JS, VUE JS, GraphQL in multitude of AWS, LARAVEL and Yii2.
                      </p>
                      <p><ChevronDoubleRight className="service-icon" /> Qualification - BCA/MCA, B.Tech/M.Tech or equivalent</p>
                      <p><ChevronDoubleRight className="service-icon" /> Experience - 1+ years of relevant experience</p>
                      <div className="send-email-to">
                        <p><ChevronDoubleRight className="service-icon" /> Send E-mail To : </p> <p className="px-1"><a href="mailto:info@fableadtechnolabs.com"><label>info@fableadtechnolabs.com</label></a></p></div>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""}`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span>02</span> PHP / Wordpress Web Developer
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Be a WordPress, Backend expert and have strong development skills and experience in hand-coding, Responsive Web Design.
                      </p>
                      <p><ChevronDoubleRight className="service-icon" /> Proficiency in PHP/Mysql , HTML5, CSS3, JavaScript, jQuery and Bootstrap.</p>
                      <p><ChevronDoubleRight className="service-icon" /> Will be responsible for creating great websites for our clients. Primary duties include conceptualizing and implementing creative ideas for client websites.</p>
                      <p><ChevronDoubleRight className="service-icon" /> Qualification - BCA/MCA, B.Tech/M.Tech or equivalent</p>
                      <p><ChevronDoubleRight className="service-icon" /> Experience - 6+ month of relevant experience</p>
                      <div className="send-email-to"><p><ChevronDoubleRight className="service-icon" />  Send E-mail To : </p> <p className="px-1"><a href="mailto:info@fableadtechnolabs.com"> <label>info@fableadtechnolabs.com</label></a></p></div>
                    </div>
                  </li>
                  <li>
                    <Link
                      className="collapse career-email"
                      to="mailto:info@fableadtechnolabs.com"
                      data-bs-parent=".accordion-list"
                    >
                      Send E-mail or CV: <label>info@fableadtechnolabs.com</label>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img carrerImage"

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
}

export default React.memo(CareerPage)
