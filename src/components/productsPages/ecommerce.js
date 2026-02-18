import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { faBolt, faCaretDown, faChartLine, faDesktop, faEarthAmericas, faMobileScreenButton, faShield, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";
import All_Products from '../../assets/images/Products/ecommerce/fableadtechnolabs-ecommerce-all-products-page.png';
import Ecom_admin from '../../assets/images/Products/ecommerce/fableadtechnolabs-ecommerce-admin-dashboard.jpeg';
import Cart from '../../assets/images/Products/ecommerce/fableadtechnolabs-ecommerce-shopping-cart-page.png';
import checkout from '../../assets/images/Products/ecommerce/fableadtechnolabs-ecommerce-secure-checkout-page.png';
import E_commerce from '../../assets/images/Products/ecommerce/Ecommerce.png';
import InnerCallToLog from "../innerCallToLog";
import { Check2, ChevronDown, ChevronUp, FastForward } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";
import mobile_screen from "../../assets/images/Products/ecommerce/fableadtechnolabs-mobile-app-screen-dashboard.png";
import { FaArrowCircleRight } from "react-icons/fa";
// Importing the mobile screens image
function EcommerceAndMobileApp() {
  const [accordionState, setAccordionState] = useState({
    item1: true,
    item2: false,
    item3: false,
    item4: false,
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
  const portfolioItems = [
    {
      items: [
        {
          img: All_Products,
          title: "All Products Screen",
          alt: "Fablead Technolabs ecommerce all products listing page",
          description: "Browse and shop products by category and price.",
        },
        {
          img: Cart,
          title: "Shopping Cart Screen",
          alt: "Fablead Technolabs ecommerce shopping cart page",
          description: "Fill in your details and complete your order securely.",
        },
      ],
    },
    {
      items: [
        {
          img: checkout,
          title: "Checkout Page Screen",
          alt: "Fablead Technolabs ecommerce checkout page",
          description: "Review your selected items, apply coupons, and proceed to checkout.",
        },
        {
          img: Ecom_admin,
          title: "E-commerce Admin Page Screen",
          alt: "Fablead Technolabs ecommerce admin dashboard",
          description: "Manage products, orders, and customers with ease.",
        },
      ],
    },
  ];

  const [stats, setStats] = useState({
    happyClients: "500+",
    satisfactionRate: "99%",
    support: "24/7",
  });

  useEffect(() => {
    const fetchStats = () => {
      const newStats = {
        happyClients: "550+",
        satisfactionRate: "99.5%",
        support: "24/7",
      };
      setStats(newStats);
    };

    fetchStats();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <TopBar />
      <Header />
      <section className="services section-bg fade-up">
        {/* <div className="section-title1">
          <div className="contact_us">Ecommerce Web & Mobile APP</div>
        </div> */}

        <div className="section-title1">
          <div className="pt-5" role="heading" aria-level="1">Ecommerce Web & Mobile APP</div>
          <p className="header-content prodectpage-ecommerce-subheading">
            eCommerce ready web & mobile app that is suitable for those of you who want to sell or promote products online. The web & mobiile has been well designed with a clean and modern design and an easy-to-use with admin panel.
          </p>
        </div>
        {/* content1 */}
        <div className="container pt-lg-2" data-aos="fade-up">
          <Row>
            <Col lg={7} className="d-flex flex-column align-items-stretch order-sm-1">
              <div className="pb-lg-0 pb-md-4">
                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      Ecommerce Web & Mobile APP
                    </h1>
                  </span>
                </div>
                <div className="development-content">
                  <p><strong>Fablead Developer Technolabs</strong> offers powerful <strong>e-commerce and mobile app</strong> solutions to help you manage your online store, automate sales, and boost customer engagement.</p>
                  <p>Our solutions help businesses streamline their online presence, track performance, and improve customer relationships with ease.</p>

                  <Link className="btn-learn-more-prodect align-items-center mt-2" to="/contact"> Contact Us <MdCall /></Link>
                  <Link className="btn-learn-more align-items-center mt-2 ms-md-2" to="/services/e-commerce">Get Started <MdOutlineArrowOutward /></Link>

                  <div className="stats-container mt-5">
                    <div className="stat-item">
                      <div className="stat-value">500+</div>
                      <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">99%</div>
                      <div className="stat-label">Satisfaction Rate</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">24/7</div>
                      <div className="stat-label">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-flex justify-content-center order-lg-2 order-md-2 img satisfied" data-aos="zoom-in" data-aos-delay="150">
              <Image
                src={E_commerce}
                className="img-fluid rounded shadow object-fit-cover zoom-img"
                alt="Fablead Technolabs ecommerce management dashboard"
              />
            </Col>
          </Row>

          <section className="py-5">
            <Row>
              <Col lg={7} className="d-flex flex-column align-items-stretch order-sm-1">

                <div className="what-we-learn-prodect pt-4">
                  <h4>KEY FEATURES</h4>
                  <p>
                    We specialize in creating high-performance <strong>Ecommerce Web & Mobile APP</strong> that not only look great but also convert visitors into loyal customers.
                    Our team combines cutting-edge design, seamless user experience, and robust functionality to build online stores that drive sales and foster brand loyalty.
                    Get started with our readymade package—user-friendly, visually appealing, and optimized to enhance the shopping experience while showcasing your products effectively.
                  </p>

                  <div id="why-us" className="why-us fade-up">
                    <div data-aos="fade-up">
                      <Col
                        lg={12}
                        className="d-flex flex-column justify-content-center align-items-stretch order-lg-1"
                      >
                        <div className="accordion-list1">
                          <ul>

                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                onClick={() => handleAccordionToggle("item1")}
                              >
                                01. UI/UX and Brand Design{" "}
                                {accordionState.item1 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-1"
                                className={`collapse ${accordionState.item1 ? "show" : ""}`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li><Check2 className="service-icon me-2" /><strong>Responsive Design:</strong> Ensuring your store looks and functions flawlessly across all devices.</li>
                                  <li><Check2 className="service-icon me-2" /><strong>User-Centric UI/UX:</strong> Crafting intuitive navigation and engaging interfaces to enhance customer experience.</li>
                                  <li><Check2 className="service-icon me-2" /><strong>Brand Consistency:</strong> Aligning design elements with your brand identity for a cohesive online presence.</li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                data-bs-toggle="collapse"
                                className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                onClick={() => handleAccordionToggle("item2")}
                              >
                                02. Technology and Payment Integration{" "}
                                {accordionState.item2 ? (
                                  <ChevronUp className="icon-close float-end" />
                                ) : (
                                  <ChevronDown className="icon-show float-end" />
                                )}
                              </a>
                              <div
                                id="accordion-list-2"
                                className={`collapse ${accordionState.item2 ? "show" : ""}`}
                                data-bs-parent=".accordion-list"
                              >
                                <ul className="list-unstyled">
                                  <li><Check2 className="service-icon me-2" /><strong>eCommerce Platforms:</strong> PHP,
                                    <Link className="d-inline pe-0 pregraft-link" to="/services/shopify-development">Shopify</Link>, WooCommerce, Magento – we build on the platform that best fits your business needs.</li>
                                  <li><Check2 className="service-icon me-2" /><strong>Payment Gateways:</strong> Integration with secure solutions like PayPal, Stripe, and Razorpay to ensure safe transactions.</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </div>
                  </div>

                </div>
              </Col>
              <Col lg={5} className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2 " data-aos="zoom-in" data-aos-delay="150">
                <Slider {...sliderSettings}>
                  <div>
                    <Image src={All_Products} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs ecommerce all products listing page" />
                  </div>
                  <div>
                    <Image src={Cart} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs ecommerce shopping cart page" />
                  </div>
                  <div>
                    <Image src={checkout} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs ecommerce checkout page" />
                  </div>
                  <div>
                    <Image src={Ecom_admin} className="img-fluid rounded zoom-img w-100" alt="Fablead Technolabs ecommerce admin dashboard" />
                  </div>
                </Slider>
              </Col>
            </Row>
          </section>

          <Row className="mt-5">
            <Col xl={4} md={6} className="d-flex align-items-stretch mt-md-2 " data-aos="zoom-in" data-aos-delay={100}>
              <div className="Prodect-box">
                <div className="icon text-center w-100"><div className="mainicon-div"><i><FontAwesomeIcon icon={faShield} /></i></div></div>
                <h4 className="text-center"><Link to="/products/ecommerce-web-mobile-app" rel="noopener noreferrer">Data Security</Link></h4>
                <p className="text-center">Enterprise-grade security ensures your customer data is protected with advanced encryption.</p>
              </div>
            </Col>

            <Col xl={4} md={6} className="d-flex align-items-stretch mt-md-2 Prodect-box-col" data-aos="zoom-in" data-aos-delay={200}>
              <div className="Prodect-box">
                <div className="icon text-center w-100"><div className="mainicon-div"><i><FontAwesomeIcon icon={faEarthAmericas} /></i></div></div>
                <h4 className="text-center"><Link to="/products/ecommerce-web-mobile-app" rel="noopener noreferrer">Multi-Platform Access</Link></h4>
                <p className="text-center">Access your e-commerce platform from anywhere with responsive design and mobile applications.</p>
              </div>
            </Col>

            <Col xl={4} md={6} className="d-flex align-items-stretch mt-md-2 Prodect-box-col" data-aos="zoom-in" data-aos-delay={300}>
              <div className="Prodect-box">
                <div className="icon text-center w-100"><div className="mainicon-div"><i><FontAwesomeIcon icon={faChartLine} /></i></div></div>
                <h4 className="text-center"><Link to="/products/ecommerce-web-mobile-app" rel="noopener noreferrer">Analytics & Reporting</Link></h4>
                <p className="text-center">Get detailed insights into sales performance, customer behavior, and business growth metrics.</p>
              </div>
            </Col>
          </Row>

          <section className="py-5">
            {/* <Row className="portfolio-container1" data-aos="fade-up" data-aos-delay="200">
    <Col lg={6}>
      <div className="d-flex justify-content-center align-items-center">
        <span className="heding-title-span">
          <h2 className="heading-title">E-commerce Website Screens</h2>
        </span>
      </div>
    </Col>
    <Col lg={6}>
      <div className="d-flex justify-content-center align-items-center">
        <span className="heding-title-span">
          <h2 className="heading-title">Mobile App Screen</h2>
        </span>
      </div>
    </Col>
  </Row> */}

            <Row className="d-none d-lg-flex hr-screens-row portfolio-container1" data-aos="fade-up" data-aos-delay="200">
              <Col lg={7}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">E-commerce Website Screens</h2>
                  </span>
                </div>
              </Col>
              <Col lg={5}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">Mobile App Screen</h2>
                  </span>
                </div>
              </Col>
            </Row>

            {/* Mobile Layout */}
            <Row className="d-lg-none mobile-layout">
              <Col xs={12}>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="heding-title-span">
                    <h2 className="heading-title">E-commerce Web and Mobile Screens</h2>
                  </span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={7}>
                <div className="grid-container">
                  {portfolioItems.map(({ items }, rowIndex) => (
                    <Row key={rowIndex} className="">
                      {items.map(({ img, title, alt, description }, colIndex) => (
                        <Col key={colIndex} lg={12} md={12} className="">
                          <div className="card border-0 portfolio-img text-center">
                            <div className="image-container-prodect-screens">
                              <Image src={img} className="card-img-top" alt={alt} />
                            </div>
                            <div className="card-body-prodect-info text-center">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text text-muted">{description}</p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ))}
                </div>
              </Col>

              <Col lg={5} className="">
                <div className="grid-container">
                  <div className=" mobile-app-screen">
                    <Image src={mobile_screen} className="img-fluid rounded shadow object-fit-cover" alt="Fablead Technolabs ecommerce mobile app screen" />
                  </div>
                  <div>
                    <Link className="w-100 btn-learn-more-prodect text-center mt-3" to="/contact">Book Your Free Demo Now <FaArrowCircleRight className="appointment-btn mx-2 mb-1" /></Link>

                  </div>
                </div>
              </Col>
              {/* <Col lg={5} className="">
      <div className="mobile-app-screen">
        <Image
          src={mobile_screen} // Replace with your mobile app screen image
          className="img-fluid rounded shadow object-fit-cover"
          alt="Mobile App Screen"
        />
      </div>
    </Col> */}
            </Row>
          </section>


        </div>
      </section>
      <InnerCallToLog />
      <Footer />
    </>
  );
}

export default React.memo(EcommerceAndMobileApp);
