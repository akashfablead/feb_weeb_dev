import React from "react";
import { Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/Hero_Banner/mobile-app.webp";
import banner2 from "../assets/images/Hero_Banner/web design (3)-min.webp";
import banner3 from "../assets/images/Hero_Banner/web-development.webp";
import banner4 from "../assets/images/Hero_Banner/ecommerce.webp";
import crmBanner from "../assets/images/Hero_Banner/ecommerce.webp";

const slides = [
  {
    image: crmBanner,
    alt: "our-products",
    title: "Complete Business Solutions Portfolio",
    subtitle: "Discover our comprehensive range of products: CRM, Hospital Management, HR System, Inventory & Billing, E-commerce, and WhatsApp Bulk Messaging",
  },
  {
    image: banner1,
    alt: "mobile-app",
    title: "Developing robust applications for both iOS and Android platforms.",
    subtitle: "We prioritize user experience to create apps that users love and engage with effortlessly",
  },
  {
    image: banner4,
    alt: "ecommerce",
    title: "Make Your Online Presence with Website development services",
    subtitle: "We specialize in responsive, scalable, and future-ready solutions for Web.",
  },
  {
    image: banner2,
    alt: "web design",
    title: "Seamless Fusion of Design Excellence and Technical Prowess",
    subtitle: "Our designs prioritize user experience, ensuring your audience stays engaged and converts.",
  },
  {
    image: banner3,
    alt: "web-development",
    title: "CMS based Website development and designing",
    subtitle: "Popular CMS options include WordPress, Joomla, Squarespace, Wix and many others.",
  },
  {
    image: banner1,
    alt: "mobile-app",
    title: "Developing robust applications for both iOS and Android platforms.",
    subtitle: "We prioritize user experience to create apps that users love and engage with effortlessly",
  },
];

function Hero() {
  return (
    <div id="hero" className="align-items-center">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Image className="d-block w-100" src={slide.image} alt={slide.alt} />
            <Carousel.Caption>
              {index === 0 ? (
                <h1 role="heading" aria-level="1">{slide.title}</h1>
              ) : (
                <h2 className="heading-title" role="heading" aria-level="2">{slide.title}</h2>
              )}
              <h3 role="heading" aria-level="3">{slide.subtitle}</h3>
              <div className="d-flex justify-content-start">
                <Link to="/about" className="btn-get-started scrollto">
                  GET STARTED
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default React.memo(Hero);
