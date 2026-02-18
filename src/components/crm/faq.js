import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import crmImage from '../../assets/images/Hero_Banner/Mobile_App-.webp'; // Replace with the actual path to your image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { ChevronDoubleRight, ChevronDown, ChevronUp } from "react-bootstrap-icons";

function Faqs() {
    const [accordionState, setAccordionState] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
      });
    
      // Toggle accordion items
      const handleAccordionToggle = (item) => {
        setAccordionState((prevState) => ({
          ...prevState,
          [item]: !prevState[item],
        }));
      };
  return (
    <div id="faqherosectin" className="why-us section-bg fade-up py-5">
            <div className="container " data-aos="fade-up">
            <h1 className="mb-4 text-center">FAQS</h1>
              <Row className="row ">
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
                          <span></span> What are CRM Web & Mobile APP (CRM){" "}
                          {accordionState.item1 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                        </a>
                        <div
                          id="accordion-list-1"
                          className={`collapse ${accordionState.item1 ? "show" : ""
                            }`}
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            <ChevronDoubleRight className="service-icon" /> <strong> CRMs  </strong>  are customer management tools. They help businesses collect, consolidate in one place, and track their customers, prospects, and leads. This makes it easier to manage customer data, identify sales opportunities, and track progress toward goals.
<br></br>
<ChevronDoubleRight className="service-icon" /> <strong> CRMs  </strong> also typically include features like contact management, task management, and automation. Sales teams can then be more efficient and effective in their outreach, follow-up, and deal closing.
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
                          <span></span> What CRM software features should I be looking for to fit my company's needs?
                          {accordionState.item2 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                        </a>
                        <div
                          // id="accordion-list-2"
                          className={`collapse ${accordionState.item2 ? "show" : ""
                            }`}
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            <ChevronDoubleRight className="service-icon" /> Contact management is one of the most basic but vital features your CRM should have. Contact management includes adding and storing contact information, like names, phone numbers, and email addresses. It should also be easy to segment contacts into different groups, like customers and leads.
                            <br />
                            <ChevronDoubleRight className="service-icon" /> Another essential feature to look for is the ability to track customer interactions. You should have no problem keeping track of phone calls, emails, meetings, and social media interactions. This history can be extremely helpful in understanding a customer's needs and pain points.
                            <br />
                            <ChevronDoubleRight className="service-icon" /> SEO features are also becoming increasingly crucial for CRMs. You need to target the right keywords to attract leads that are actually interested in your products or services. Once you've attracted them, you need to be able to convert them into customers. Look for a CRM that can help you with both of these tasks.
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
                          <span></span> How much can I expect to pay for a CRM software platform?
                          {accordionState.item3 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                        </a>
                        <div
                          // id="accordion-list-2"
                          className={`collapse ${accordionState.item3 ? "show" : ""
                            }`}
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            <ChevronDoubleRight className="service-icon" />This is a difficult question to answer, as there are varied prices for CRM software. Some CRMs are free, while others can cost hundreds or even thousands of dollars per month.
                            <br />
                            <ChevronDoubleRight className="service-icon" />The price of a CRM will depend on the features it offers, as well as the size of your company. If you're a small business with a limited budget, you may want to consider a free CRM or one with a pay-as-you-go pricing model. However, if you have a larger budget and need more advanced features, you'll likely have to pay more for your CRM.
                            <br />
                            <ChevronDoubleRight className="service-icon" />The top-of-the-line CRMs, including HubSpot Sales Hub, will set you back $50 per month for limited features. The professional plan, which includes more features, starts at $500 per month. And the enterprise plan, which has all the bells and whistles, starts at $1,200 per month.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          className={`collapse ${accordionState.item4 ? "show" : ""
                            }`}
                          onClick={() => handleAccordionToggle("item4")}

                        >
                          <span></span>  How would a CRM system streamline our sales process?
                          {accordionState.item4 ? <ChevronUp className="icon-close float-end" /> : <ChevronDown className="icon-show float-end" />}
                        </a>
                        <div
                          // id="accordion-list-2"
                          className={`collapse ${accordionState.item4 ? "show" : ""
                            }`}
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            <ChevronDoubleRight className="service-icon" /> CRMs can help streamline the sales process in several ways. First, they provide a central place to store customer information and interactions. This makes it easy for sales teams to access the information they need when they need it.
                            <br />
                            <ChevronDoubleRight className="service-icon" />Second, CRMs typically include features like task management. They help sales teams keep track of their to-dos and ensure nothing falls through the cracks. CRMs typically include powerful workflow management features. This allows you to create custom workflows for different departments and teams.
                            <br />
                            <ChevronDoubleRight className="service-icon" />Third, CRMs can automate repetitive tasks. If you manually send follow-up emails after each customer interaction, a CRM can automate that process for you. This frees up time for sales teams to focus on more important tasks, like closing deals.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              
              </Row>
            </div>
          </div>
  );
}

export default React.memo(Faqs);
