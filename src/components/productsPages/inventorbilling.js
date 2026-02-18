import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import Careers from "../pages/career";
import {
  faBolt,
  faCaretDown,
  faChartLine,
  faDesktop,
  faEarthAmericas,
  faMobile,
  faMobileScreenButton,
  faShield,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import TopBar from "../topBar";
import inveory_profuct_list from "../../assets/images/Products/Inventory/fableadtechnolabs-inventory-product-list-page.png";

import inventor_billing_software_main_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-inventory-billing-software-dashboard.png";
import inventor_billing_software_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-inventory-billing-management-page.png";
import purchase_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-purchase-list-management-page.png";
import sales_page_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-sales-management-page.png";
import add_purchase_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-add-purchase-entry-page.png";
import accounts_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-accounts-management-page.png";
import sales_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-sales-list-management-page.png";
import expense_list_page_img_feb from "../../assets/images/Products/Inventory/fableadtechnolabs-expense-list-management-page.png";
import InnerCallToLog from "../innerCallToLog";
import { Check2, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCall, MdOutlineArrowOutward } from "react-icons/md";

function Inventorbilling() {
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
      img: inventor_billing_software_page_img_feb,
      title: "Comprehensive Inventory & Billing Dashboard",
      alt: "Fablead Technolabs inventory and billing dashboard",
      description:
        "Gain a complete overview of your business operations with our intuitive dashboard. Track sales,",
    },
    {
      img: inveory_profuct_list,
      title: "Inventory Product List Management",
      alt: "Fablead Technolabs inventory product list management",
      description:
        "Easily manage your product inventory with our detailed product list. Add, edit, and track products",
    },
    {
      img: expense_list_page_img_feb,
      title: "Detailed Expense Tracking & Reporting",
      alt: "Fablead Technolabs detailed expense tracking",
      description:
        "Keep a precise record of all your business expenditures with our detailed expense list.",
    },
    {
      img: purchase_list_page_img_feb,
      title: "Organized Purchase Order Management",
      alt: "Fablead Technolabs purchase order management",
      description:
        "Take control of your procurement with our comprehensive purchase list. Monitor all your purchase",
    },
    {
      img: sales_list_page_img_feb,
      title: "Efficient Sales Management & Tracking",
      alt: "Fablead Technolabs sales management and tracking",
      description:
        "Streamline your sales process with our robust sales list. Easily view, track, and manage",
    },
    {
      img: sales_page_page_img_feb,
      title: "Intuitive Point-of-Sale (POS) Interface",
      alt: "Fablead Technolabs point-of-sale interface",
      description:
        "Simplify your sales transactions with our user-friendly POS page. Quickly add products from",
    },
    {
      img: add_purchase_page_img_feb,
      title: "Quick & Easy Purchase Entry",
      alt: "Fablead Technolabs quick and easy purchase entry",
      description:
        "Effortlessly add new purchases to your system. Our streamlined 'Add Purchase' page allows you",
    },
    {
      img: accounts_page_img_feb,
      title: "Financial Performance Overview",
      alt: "Fablead Technolabs financial performance overview",
      description:
        "Complete view of payments, profits, and balance — a snapshot of overall business performance.",
    },
  ];

  const [stats, setStats] = useState({
    happyClients: "500+",
    satisfactionRate: "99%",
    support: "24/7",
  });

  // Simulate fetching data
  useEffect(() => {
    const fetchStats = () => {
      // Simulate an API call or data fetch
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
        <div className="section-title1">
          <div className="pt-5" role="heading" aria-level="1">
            Inventory & Billing Software (ERP)
          </div>
          <p className="header-content prodectpage-ecommerce-subheading">
            Manage your inventory and billing process easily.
          </p>
        </div>
        {/* content1 */}
        <div className="container  pt-lg-2" data-aos="fade-up">
          <Row>
            <Col
              lg={7}
              className="d-flex flex-column align-items-stretch order-sm-1"
            >
              <div className="pb-lg-0 pb-md-4">
                <div className="development-heading-div d-flex justify-content-between">
                  <span className="heding-title-span">
                    <h1 className="heading-title">
                      Inventory & Billing Software (ERP)
                    </h1>
                  </span>
                </div>
                <div className="development-content">
                  <p>
                    Our Inventory and Billing Management System is a robust,
                    cloud-based platform <strong> Designed </strong> to
                    integrate inventory tracking with billing processes.
                    Tailored for businesses of all sizes, it centralizes
                    operations, providing real-time insights into stock levels,
                    sales, and financial transactions, thereby enhancing
                    efficiency and accuracy.
                  </p>
                  <Link
                    className="btn-learn-more-prodect  align-items-center mt-2"
                    to="/contact"
                  >
                    {" "}
                    Contact Us <MdCall />
                  </Link>
                  <Link
                    className="btn-learn-more align-items-center mt-2 ms-md-2"
                    to="#"
                  >
                    Get Started <MdOutlineArrowOutward />
                  </Link>

                  <div className="stats-container mt-5">
                    <div className="stat-item">
                      <div className="stat-value">50+</div>
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
            {/* align-items-center */}
            <Col
              lg={5}
              className="d-flex justify-content-center order-lg-2 order-md-2 img satisfied"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                src={inventor_billing_software_main_feb}
                className="img-fluid rounded shadow object-fit-cover zoom-img"
                alt="Fablead Technolabs inventory billing software dashboard"
              />
            </Col>
          </Row>

          <section className="py-5 ">
            <Row>
              <Col
                lg={7}
                className="d-flex flex-column align-items-stretch order-sm-1"
              >
                <div className="what-we-learn-prodect pt-4">
                  <h4>KEY FEATURES</h4>
                  <p>
                    <Link
                      className="development-content-span"
                      to="/products/inventory-billing-software-erp"
                    >
                      Fablead Developers Technolab
                    </Link>{" "}
                    Inventory & Billing Software (ERP) simplifies inventory
                    control and billing operations with real-time data, seamless
                    tracking, and automated invoicing.
                  </p>
                  <div className="row key-features-div">
                    <div id="why-us" className="why-us fade-up">
                      <div className="" data-aos="fade-up">
                        <Col
                          lg={12}
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
                                  01. Sales Order Management{" "}
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
                                  <ul className="list-unstyled">
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>
                                        Order Creation and Tracking:
                                      </strong>{" "}
                                      Generate and monitor sales orders from
                                      initial inquiry to final delivery.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Customer Management:</strong>{" "}
                                      Maintain detailed records of customer
                                      information, including contact details and
                                      purchase history.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item2 ? "show" : ""
                                    }`}
                                  onClick={() => handleAccordionToggle("item2")}
                                >
                                  02. Purchase Order Management{" "}
                                  {accordionState.item2 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  id="accordion-list-1"
                                  className={`collapse ${accordionState.item2 ? "show" : ""
                                    }`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Supplier Management:</strong>{" "}
                                      Maintain detailed records of supplier
                                      information, including contact details and
                                      delivery terms.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>
                                        Order Creation and Tracking:
                                      </strong>{" "}
                                      Generate and monitor purchase orders from
                                      requisition to receipt of goods.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item3 ? "show" : ""
                                    }`}
                                  onClick={() => handleAccordionToggle("item3")}
                                >
                                  03. Supplier and Purchase Management{" "}
                                  {accordionState.item3 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  id="accordion-list-1"
                                  className={`collapse ${accordionState.item3 ? "show" : ""
                                    }`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Vendor Management:</strong>{" "}
                                      Maintain detailed records of suppliers,
                                      including contact information, payment
                                      terms, and transaction history.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Purchase Orders:</strong> Create
                                      and track purchase orders, ensuring timely
                                      procurement of goods.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Cost Tracking:</strong> Monitor
                                      costs associated with each supplier to
                                      identify the most cost-effective options.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  className={`collapse ${accordionState.item4 ? "show" : ""
                                    }`}
                                  onClick={() => handleAccordionToggle("item4")}
                                >
                                  04. Reporting and Analytics{" "}
                                  {accordionState.item4 ? (
                                    <ChevronUp className="icon-close float-end" />
                                  ) : (
                                    <ChevronDown className="icon-show float-end" />
                                  )}
                                </a>
                                <div
                                  id="accordion-list-1"
                                  className={`collapse ${accordionState.item4 ? "show" : ""
                                    }`}
                                  data-bs-parent=".accordion-list"
                                >
                                  <ul className="list-unstyled">
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Sales Insights:</strong> Analyze
                                      sales trends, identify top-selling
                                      products, and assess customer purchasing
                                      behavior.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Inventory Turnover:</strong>{" "}
                                      Evaluate how quickly inventory is sold and
                                      replaced, aiding in stock optimization.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Custom Reports:</strong> Generate
                                      tailored reports to support
                                      decision-making and strategic planning.
                                    </li>
                                    <li>
                                      <Check2 className="service-icon me-2" />
                                      <strong>Purchase Insights:</strong>{" "}
                                      Evaluate supplier performance, monitor
                                      procurement costs, and identify
                                      opportunities for cost savings.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* align-items-center  order-1 order-lg-2 */}
              <Col
                lg={5}
                className="img satisfied align-content-around prodect-slider-img order-lg-2 order-md-2 "
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <Slider {...sliderSettings}>
                  <div>
                    <Image
                      src={inventor_billing_software_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs inventory and billing dashboard"
                    />
                  </div>
                  <div>
                    <Image
                      src={sales_page_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs sales management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={inveory_profuct_list}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs inventory product list management"
                    />
                  </div>
                  <div>
                    <Image
                      src={add_purchase_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs add purchase entry page"
                    />
                  </div>
                  <div>
                    <Image
                      src={sales_list_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs sales list management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={expense_list_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs expense list management page"
                    />
                  </div>
                  <div>
                    <Image
                      src={purchase_list_page_img_feb}
                      className="img-fluid rounded zoom-img w-100"
                      alt="Fablead Technolabs purchase list management page"
                    />
                  </div>
                </Slider>
              </Col>
            </Row>
          </section>

          <Row className="mt-0 g-4">
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 "
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faDesktop} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/inventory-billing-software-erp">
                    Inventory Tracking
                  </Link>
                </h4>
                <p className="text-center">
                  Monitor stock levels, item movements, and real-time inventory
                  updates across all locations.
                </p>
              </div>
            </Col>

            {/* INVENTORY Feature 2 */}
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
              data-aos="zoom-in"
              data-aos-delay={500}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faBolt} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/inventory-billing-software-erp">
                    Auto Billing
                  </Link>
                </h4>
                <p className="text-center">
                  Generate invoices instantly, manage taxes, and track payments
                  effortlessly.
                </p>
              </div>
            </Col>

            {/* INVENTORY Feature 3 */}
            <Col
              xl={4}
              md={6}
              className="d-flex align-items-stretch mt-md-2 Prodect-box-col"
              data-aos="zoom-in"
              data-aos-delay={600}
            >
              <div className="Prodect-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <i>
                      <FontAwesomeIcon icon={faEarthAmericas} />
                    </i>
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/products/inventory-billing-software-erp">
                    Vendor Management
                  </Link>
                </h4>
                <p className="text-center">
                  Manage vendor contacts, purchase orders, and payment tracking
                  with ease.
                </p>
              </div>
            </Col>
          </Row>

          <section className="py-5">
            <Row
              className="portfolio-container1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="d-flex justify-content-center align-items-center ">
                <span className="heding-title-span">
                  <h2 className="heading-title">
                    Inventory & Billing Software (ERP) Screens
                  </h2>
                </span>
              </div>

              <div className="grid-container">
                {portfolioItems.map(({ img, alt, title, description }, i) => (
                  <div key={i} className="grid-item">
                    <div className="card border-0 portfolio-img text-center mb-0">
                      <div className="image-container-prodect-screens">
                        <Image src={img} className="card-img-top" alt={alt} />
                      </div>
                      <div className="card-body-prodect-info text-center">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-muted">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </section>
        </div>
      </section>
      <InnerCallToLog />
      <Footer />
    </>
  );
}

export default React.memo(Inventorbilling);
