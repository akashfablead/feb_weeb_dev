import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/headers";
import Footer from "../../components/footer";
import Log from "../../components/innerCallToLog";
import { ChevronUp, ChevronDown, ChevronDoubleRight } from "react-bootstrap-icons";
import TopBar from "../../components/topBar";
function CmsWebsiteDevelopment() {
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
          <div className="mt-5 contact_us" role="heading" aria-level="1">CMS Website Development</div>
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

                      {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}

                    </a>
                    <div
                      id="accordion-list-1"
                      className={`collapse ${accordionState.item1 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> At <strong>Fablead Developers Technolabs</strong>, we specialize in harnessing the power of CMS platforms to create websites that are not only visually appealing but also easy to manage. Whether you're a small business looking for an intuitive platform or an enterprise seeking advanced content control, our experienced team of developers is here to bring your vision to life.                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Leverage data-driven insights to optimize your e-commerce strategy, improve user experiences, and drive sales.
                      </p>
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Ensure your e-commerce website looks and functions flawlessly on all devices, providing a seamless shopping experience for your customers.                        </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      onClick={() => handleAccordionToggle("item2")}
                    >
                      <span></span> Take Control of Your Content:
                      {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}

                    </a>
                    <div
                      // id="accordion-list-2"
                      className={`collapse ${accordionState.item2 ? "show" : ""
                        }`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        <ChevronDoubleRight className="service-icon" /> Partner with <strong>Fablead Developers Technolab</strong> to take control of your digital content with CMS solutions that blend functionality and ease of use.

                      </p>
                      <p><ChevronDoubleRight className="service-icon" /> Let us be your partner in navigating the world of content management, unlocking the full potential of your online presence.</p>
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
                        {" "}WordPress / WooCommerce, Shopify, Webflow, PHP (Laravel, CodeIgniter), Node.js, Python (Django), MySQL
                        {/* Wordpress/ Woocommerce , PHP / MYSQL , LARAVEL , Codeigniter , Wordpress , Node JS , Python / Django */}
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <div
              className="col-lg-5 align-items-stretch  order-lg-2 img CmsImage"

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
    </>);

}
export default React.memo(CmsWebsiteDevelopment)