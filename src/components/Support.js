import { useRef, useState } from "react";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { BASE_URL } from "../utils";
import TopBar from "./topBar";
import Headers from "./headers";
import InnerCallToLog from "./innerCallToLog";
import Footer from "./footer";
import { ChevronDoubleRight, ChevronDown, ChevronUp, FileText } from "react-bootstrap-icons";
import Contact from "./contact";
import { FaBookOpen, FaBug, FaCreditCard, FaShieldAlt, FaUserCog, FaWrench } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBug, faShieldAlt, faUserCog, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import '../assets/css/privacypolicy.css'

const SupportPage = () => {
    const [accordionState, setAccordionState] = useState({
        item1: true,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
    });

    const handleAccordionToggle = (itemKey) => {
        setAccordionState((prevState) => ({
            ...Object.fromEntries(Object.keys(prevState).map((key) => [key, false])),
            [itemKey]: !prevState[itemKey],
        }));
    };

    return (
        <>
            <TopBar />
            <Headers />
            <section>
                <div id="contact" className="contact  section-bg ">
                    <div className="text-center mb-5 section-title1">
                        <div className="pt-5" role="heading" aria-level="1">
                            Need Assistance? We’re Here to Help.
                        </div>
                        <p className="header-content prodectpage-ecommerce-subheading">
                            Whether you have a technical issue, billing concern, or product question — our support team is ready to guide you every step of the way.
                        </p>
                    </div>


                    <Container className="aos-init aos-animate" data-aos="fade-up">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p>
                                    At <strong className="text-primary-policy">Fablead Developers Technolab</strong>, we are dedicated to delivering fast, responsive, and personalized support to ensure you get the most out of our CRM platform. Whether you are facing technical difficulties, need step-by-step guidance on features, or require assistance with your account settings, our knowledgeable and friendly support team is here to help.
                                </p>
                                <p>
                                    We pride ourselves on offering clear communication, quick resolutions, and proactive assistance. Our goal is to let you focus on growing your business while we take care of your support needs with confidence and efficiency.
                                </p>

                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">How Can We Assist You?</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    Our support team is equipped to assist with a wide range of queries, including:
                                </p>
                                <ul>
                                    <li><strong>Login Difficulties:</strong> If you're unable to log in, please confirm your credentials and internet connection. For continued issues, contact our support team for secure resolution or send an email with details and credential-related issues.</li>
                                    <li><strong>Account Deletion Requests:</strong> To request permanent deletion of your account, please email us using your registered email address. All deletion requests are processed securely and in accordance with our data privacy policy.</li>
                                    <li><strong>Deletion Period:</strong> Requested permanent deletion of your account will delete all user data within 90 days automatically.</li>
                                </ul>
                            </div>
                        </div>



                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">Further Assistance</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    If your issue is not listed above or requires additional support, our team is available to provide tailored assistance. We strive to resolve all inquiries promptly and professionally.
                                </p>

                                <p>Thank you for choosing <strong className="text-primary-policy">Fablead Developers Technolab</strong>.</p>
                            </div>
                        </div>

                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">Contact Support</h5>
                            </div>
                            <div className="card-body">
                                <ul className="support-list">
                                    <li >📧 Email:<a href="mailto:info@fableadtechnolabs.com?subject=Support%20Request&body=Hi%20Fablead%20Support" className="text-primary-policy"> info@fableadtechnolabs.com</a></li>
                                    <li>⏱ Response Time: Within 24 business hours</li>
                                    <li>🌐 Website: <a className="text-primary-policy" href="https://www.fableadtechnolabs.com" target="_blank" rel="noreferrer"> www.fableadtechnolabs.com</a></li>
                                    <li>🕒 Support Hours: Monday – Friday, 10:00 AM – 6:00 PM IST</li>
                                </ul>
                            </div>
                        </div>

                        <div id="why-us" className="why-us fade-up">
                            <div className="container-fluid " data-aos="fade-up">
                                <div className="section-title py-1">
                                    <div role="heading" aria-level="2"> Frequently Asked Questions</div>
                                </div>
                                <Row className="pb-0">
                                    <Col
                                        lg={7}
                                        className="d-flex flex-column justify-content-center align-items-stretch  order-lg-1  "
                                    >
                                        <div className="accordion-list1 ">
                                            <ul >
                                                {[
                                                    {
                                                        id: "item1",
                                                        title: "Technical Support",
                                                        content:
                                                            "Encountering a bug or facing a system error? Our technical team is ready to assist. Email us at  info@fableadtechnolabs.com with a brief description and screenshot if possible.",
                                                    },
                                                    {
                                                        id: "item2",
                                                        title: "Billing & Payments",
                                                        content:
                                                            "Need clarification on invoices, charges, or subscriptions? Reach out to our billing department at  info@fableadtechnolabs.com with your invoice number or transaction ID.",
                                                    },
                                                    {
                                                        id: "item3",
                                                        title: "Refund & Cancellation Policy",
                                                        content:
                                                            "You can request a refund within 7 days of activation under eligible conditions. Please email  info@fableadtechnolabs.com with your order details and reason for cancellation.",
                                                    },
                                                    {
                                                        id: "item4",
                                                        title: "Product Customization",
                                                        content:
                                                            "Looking for a customized solution? We offer tailored features based on your business needs. Connect with us at  info@fableadtechnolabs.com to share your requirements.",
                                                    },
                                                    {
                                                        id: "item5",
                                                        title: "Support Hours & Response Time",
                                                        content:
                                                            "Our support team is available Monday to Friday, from 9:00 AM to 7:00 PM IST. We aim to respond to all queries within 12 to 24 business hours.",
                                                    },
                                                    {
                                                        id: "item6",
                                                        title: "General Queries & Demo Requests",
                                                        content:
                                                            "For product information, partnership inquiries, or to request a personalized demo, contact us at info@fableadtechnolabs.com. We’re always happy to hear from you!",
                                                    },
                                                ].map((item) => (
                                                    <li key={item.id}>
                                                        <a
                                                            data-bs-toggle="collapse"
                                                            className={`collapse ${accordionState[item.id] ? "show" : ""}`}
                                                            onClick={() => handleAccordionToggle(item.id)}
                                                        >
                                                            <span></span> {item.title}
                                                            {accordionState[item.id] ? (
                                                                <ChevronUp className="icon-close float-end" />
                                                            ) : (
                                                                <ChevronDown className="icon-show float-end" />
                                                            )}
                                                        </a>
                                                        <div className={`collapse ${accordionState[item.id] ? "show" : ""}`}>
                                                            <p>
                                                                <ChevronDoubleRight className="service-icon" /> {item.content}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                    <div
                                        className="col-lg-5 align-items-stretch  order-lg-2 img aboutus-img-div"
                                        data-aos="zoom-in"
                                        data-aos-delay="150"
                                    >
                                        &nbsp;
                                    </div>
                                </Row>
                            </div>
                        </div>

                        <section className="services section-bg fade-up">
                            <Container>
                                <div className="section-title py-1">
                                    <div role="heading" aria-level="2">Browse Help Topics</div>
                                </div>
                                <Row className="mt-0">
                                    {[
                                        {
                                            icon: faUserCog,
                                            title: "Account Management",
                                            description: "Update your profile, manage login credentials, and resolve account access issues.",
                                        },
                                        {
                                            icon: faCreditCard,
                                            title: "Billing & Payments",
                                            description: "View invoices, manage payment methods, and track transaction history.",
                                        },
                                        {
                                            icon: faWrench,
                                            title: "Product How-Tos",
                                            description: "Follow step-by-step guides, feature walkthroughs, and usage tutorials.",
                                        },
                                        {
                                            icon: faBug,
                                            title: "Technical Issues",
                                            description: "Report bugs, get troubleshooting help, and request urgent support.",
                                        },
                                        {
                                            icon: faShieldAlt,
                                            title: "Privacy & Security",
                                            description: "Learn about data protection practices and how we keep your information safe.",
                                        },
                                        {
                                            icon: faBookOpen,
                                            title: "Documentation",
                                            description: "Access API references, developer guides, and integration documents.",
                                        },
                                    ].map((item, index) => (
                                        <Col
                                            key={index}
                                            xl={4}
                                            md={6}
                                            className="d-flex align-items-stretch mt-md-2" data-aos="zoom-in"
                                            data-aos-delay={(index + 1) * 100}
                                        >
                                            <div className="Prodect-box">
                                                <div className="icon text-center w-100">
                                                    <div className="mainicon-div">
                                                        <i>
                                                            <FontAwesomeIcon icon={item.icon} />
                                                        </i>
                                                    </div>
                                                </div>
                                                <h4 className="text-center">{item.title}</h4>
                                                <p className="text-center">{item.description}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </section>


                        <Contact />
                    </Container>

                </div >
            </section >
            <InnerCallToLog />
            <Footer />
        </>
    );
};

export default SupportPage;
