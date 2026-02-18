import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import Careers from "../pages/career";
import { faCartArrowDown, faDesktop, faMobileScreenButton, faTv, faDiamond, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import CmsImage from '../../assets/images/Hero_Banner/cmsImg.png'

import econoMarketing from '../../assets/images/portfolioImages/econo-marketing.png'
import elite from '../../assets/images/portfolioImages/elite-iitt.png'
import camping from '../../assets/images/portfolioImages/camping-spot.png'
import navlexMarina from '../../assets/images/portfolioImages/navlex-marina.png'
import JdTextLow from '../../assets/images/portfolioImages/jd-text-low.png'
import Dillucci from '../../assets/images/portfolioImages/dillucci.png'
import TopBar from "../topBar";
import Footer from "../footer";
import Headers from "../headers";
import { Link } from "react-router-dom";
function RealEstate() {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: false,
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
      <Headers />


      <section className="services section-bg fade-up">
        <div className="section-title1">
          <h1 className="mt-5 contact_us"> REAL ESTATE </h1>
        </div>
        <div className="container content1" data-aos="fade-up">
          <Row>
            <Col lg={7} className="d-flex justify-content-center align-items-stretch order-2 order-lg-1">
              <div className="content">
                <div class="about_left_text wow fadeInUp">
                  <p>Fablead Developers Technolab is the best IT company in surat <br />for Website Development , Website Designing , Mobile App Development , Ecommerce<br /> Solutions , SEO. </p>
                  <p>Our Company Include Web Development , Web Designing,  Mobile App Development , <br />Ecommerce Development , CMS Based Website Development and <br />Web Maintenance & Customization.  </p>
                  <p>We always aim to provide Reliable and Quality services to your <br />customers using Latest Technologies by understanding your<br /> Business Objective Expectations.</p>
                  <div class="top-about wow fadeInRight wow fadeInUp">
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="align-items-stretch order-1 order-lg-2 img satisfied" data-aos="zoom-in" data-aos-delay="150">
              <Image src={CmsImage} className="ecomerce-img object-fit-cover" alt="image" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xl={4} md={6} className="d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon text-center  w-100"><div className="mainicon-div"><i> <FontAwesomeIcon icon={faTv} /> </i></div></div>
                <h4 className="text-center"><Link to="/products/real-estate">Website Development</Link></h4>
                <p className="text-center">We provides High Quality Website Development & Website Designing for your Business.</p>
                <div className="text-center">
                </div>
              </div>

            </Col>

            <Col xl={4} md={6} className="d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon text-center w-100"><div className="mainicon-div"><i><FontAwesomeIcon icon={faDesktop} /></i></div></div>
                <h4 className="text-center"><Link to="/products/real-estate">Website Designing</Link></h4>
                <p className="text-center">We have a Dynamic and Talented team of Professional Designers, illustrators, animators, and programmers.</p>

                <div className="text-center">
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className="d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon text-center  w-100"><div className="mainicon-div"><i ><FontAwesomeIcon icon={faMobileScreenButton} /></i></div></div>
                <h4 className="text-center"><Link to="/products/real-estate">Mobile App</Link></h4>
                <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p>
                <div className="text-center">
                </div>
              </div>
            </Col>
          </Row>
          <Row className="portfolio-container1 mt-5" data-aos="fade-up" data-aos-delay="200">
            <Col lg={4} className="portfolio-item filter-php text-center">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={econoMarketing} className="portfolio-img " alt="image" />
                </div>
              </div>
            </Col>
            <Col lg={4} className="portfolio-item filter-php text-center">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={elite} className=" portfolio-img" alt="image" />
                </div>
              </div>
            </Col>
            <Col lg={4} className=" portfolio-item filter-php text-center">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={camping} className=" portfolio-img" alt="image" />
                </div>
              </div>
            </Col>
            <Col lg={4} className="portfolio-item filter-wordpress">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={navlexMarina} className="portfolio-img" alt="image" />
                </div>
              </div>
            </Col>
            <Col lg={4} className="portfolio-item filter-wordpress">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={JdTextLow} className="portfolio-img" alt="image" />
                </div>
              </div>
            </Col>
            <Col lg={4} className="portfolio-item filter-wordpress">
              <div>
                <div className="portfolio-img text-center">
                  <Image src={Dillucci} className="portfolio-img" alt="image" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* <Log /> */}
      <Footer />
    </>
  );
}

export default React.memo(RealEstate)
