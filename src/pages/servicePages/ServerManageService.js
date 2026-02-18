
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

const ServerManageService = () => {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">Server Manage & Support</div>
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
                      <span></span> Our Expertise:{" "}
                      {accordionState.item1 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item1 ? "show" : ""}`}
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        {" "}At{" "}
                        <strong>
                          Fablead Developers Technolab
                        </strong>
                        , we specialize in delivering comprehensive server
                        management and support solutions that ensure optimal
                        performance, security, and reliability of your IT
                        infrastructure.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      className={`collapse ${accordionState.item2 ? "show" : ""}`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Our Services:{" "}
                      {accordionState.item2 ? (
                        <ChevronUp className="icon-close float-end" />
                      ) : (
                        <ChevronDown className="icon-show float-end" />
                      )}
                    </a>
                    <div
                      className={`collapse ${accordionState.item2 ? "show" : ""}`}
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                          {" "}<strong>24/7 Server Monitoring:</strong> Continuous
                          monitoring of server performance to detect and resolve
                          issues proactively.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        {" "}<strong>Security Management:</strong> Firewalls,
                        intrusion detection, and security audits.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        {" "}<strong>Software Updates & Patch Management:</strong>{" "}
                        Regular OS and application updates.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" />
                        {" "}<strong>Backup & Disaster Recovery:</strong> Automated
                        backups and recovery planning.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      className={`collapse ${accordionState.item4 ? "show" : ""}`}
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
                      className={`collapse ${accordionState.item4 ? "show" : ""}`}
                    >
                      <p>
                      <ChevronDoubleRight className="service-icon" />
                        {" "}AWS (Amazon Server), Shared Hosting (GoDaddy, Hostinger,
                        Bluehost, Namecheap, One.com, 123reg), WordPress Server,
                        Linux, Windows, and Cloud Servers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch order-lg-2 img serverManage"
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

export default React.memo(ServerManageService);
