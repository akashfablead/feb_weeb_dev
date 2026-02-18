// import React from "react";
// import { Row, Col, Image, Container } from "react-bootstrap";
// import ReactNodeAngular from "../assets/images/client_logo/react-node-angular-js-min.webp";
// import Codeigniter from "../assets/images/client_logo/651_codeigniter-min.webp";
// import Flutter from "../assets/images/client_logo/flutter-min.webp";
// import Laravel from "../assets/images/client_logo/laravel_new-min.webp";
// import Wordpress from "../assets/images/client_logo/wordpress-min.webp";
// import Php from "../assets/images/client_logo/php-fablead-1-min.webp";
// import Squarespace from "../assets/images/client_logo/sqarespace-min.webp";
// import Python from "../assets/images/client_logo/Python (1)-min.webp";
// import react from "../assets/images/client_logo/react.webp";
// import Graphics from "../assets/images/client_logo/Graphics.png";
// import django from "../assets/images/client_logo/django.png";
// import SEO from "../assets/images/client_logo/seo.png";

// function Clients() {
//   return (
//     <section id="clients" className="clients section-bg1">
//       <Container>
//         <div className="section-title">
//           <div role="heading" aria-level="2">Our Technologies</div>
//         </div>

//         <Row data-aos="zoom-in ">
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-1">
//               <Image src={Php} className="img-fluid" alt="php" />
//             </div>
//           </Col>

//           <Col
//             lg={3}
//             md={6}
//             className="mb-3  d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-1">
//               <Image src={Wordpress} className="img-fluid" alt="wordpress" />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3  d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-3">
//               <Image src={Laravel} className="img-fluid" alt="laravel" />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-2">
//               <Image
//                 src={Codeigniter}
//                 className="img-fluid"
//                 alt="codeigniter"
//               />
//             </div>
//           </Col>

//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-3">
//               <Image
//                 src={Squarespace}
//                 className="img-fluid"
//                 alt="sqauarespace"
//               />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-3">
//               <Image src={Flutter} className="img-fluid" alt="flutter" />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img pt-3">
//               <Image
//                 src={ReactNodeAngular}
//                 className="img-fluid"
//                 alt="node/react/angular"
//               />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="mb-3 d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img">
//               <Image src={Python} className="img-fluid" alt="python" />
//             </div>
//           </Col>
//           {/* Add new clients  */}
//           <Col
//             lg={3}
//             md={6}
//             className="d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img">
//               <Image
//                 src={react}
//                 className="img-fluid"
//                 alt="reactJS % Native"
//                 style={{ width: "50%", height: "100%" }}
//               />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img">
//               <Image
//                 src={django}
//                 className="img-fluid mt-4"
//                 alt="django"
//               // style={{ width: "50%", height: "100%" }}
//               />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img">
//               <Image
//                 src={SEO}
//                 className="img-fluid"
//                 alt="SEO"
//                 style={{ width: "50%", height: "100%" }}
//               />
//             </div>
//           </Col>
//           <Col
//             lg={3}
//             md={6}
//             className="d-flex align-items-center justify-content-center"
//           >
//             <div className="technology_img">
//               <Image
//                 src={Graphics}
//                 className="img-fluid "
//                 alt="Graphics"
//                 style={{ width: "50%", height: "100%" }}
//               />
//             </div>
//           </Col>
//           {/* Add new clients  */}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default React.memo(Clients);
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Slider from "react-slick";

import ReactNodeAngular from "../assets/images/client_logo/react-node-angular-js-min.webp";
import Codeigniter from "../assets/images/client_logo/651_codeigniter-min.webp";
import Flutter from "../assets/images/client_logo/flutter-min.webp";
import Laravel from "../assets/images/client_logo/laravel_new-min.webp";
import Wordpress from "../assets/images/client_logo/wordpress-min.webp";
import Php from "../assets/images/client_logo/php-fablead-1-min.webp";
import Squarespace from "../assets/images/client_logo/sqarespace-min.webp";
import Python from "../assets/images/client_logo/Python (1)-min.webp";
import react from "../assets/images/client_logo/react.webp";
import Graphics from "../assets/images/client_logo/Graphics.png";
import django from "../assets/images/client_logo/django.png";
import SEO from "../assets/images/client_logo/seo.png";





function Clients() {
  const [isMobile, setIsMobile] = useState(false);
  const clients = [
    { src: Php, alt: "php" },
    { src: Wordpress, alt: "wordpress" },
    { src: Laravel, alt: "laravel" },
    { src: Codeigniter, alt: "codeigniter" },
    { src: Squarespace, alt: "squarespace" },
    { src: Flutter, alt: "flutter" },
    { src: ReactNodeAngular, alt: "node/react/angular" },
    { src: Python, alt: "python" },
    {
      src: react,
      alt: "reactJS % Native",
      style: { width: isMobile ? "50%" : "100%", height: isMobile ? "50%" : "100%" }
    },
    {
      src: django,
      alt: "django",
      style: { width: isMobile ? "50%" : "100%", height: isMobile ? "50%" : "100%" }
    },
    {
      src: Graphics,
      alt: "Graphics",
      style: { width: isMobile ? "50%" : "100%", height: isMobile ? "50%" : "100%" }
    },
    { src: SEO, alt: "SEO" ,style: { width: isMobile ? "50%" : "100%", height: isMobile ? "50%" : "100%" }},
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  // Detect window width and set isMobile flag
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="clients"
      className="clients section-bg1"
      style={{ padding: "40px 0" }}
    >
      <Container>
        <div className="section-title">
          {" "}
          <div role="heading" aria-level="2">
            Our Technologies
          </div>
          {" "}
        </div>
        {isMobile ? (
          // Mobile: Show slider with 2 logos per slide
          <Slider {...sliderSettings} className="">
          {clients.map(({ src, alt, style }, index) => (
            <div
              key={index}
              className="mb-3 d-flex align-items-center justify-content-center"
            >
              <div className="technology_img mobileView bg-white d-flex justify-content-center align-items-center p-2 mx-2">
                <Image
                  src={src}
                  className="img-fluid mobileViewImg"
                  alt={alt}
                  // style={style}
                />
              </div>
            </div>
          ))}
        </Slider>
        
        ) : (
          // Desktop & Tablet: Show grid exactly like your original code
          <Row data-aos="zoom-in">
            {clients.map(({ src, alt, style }, index) => (
              <Col
                key={index}
                lg={3}
                md={6}
                className="mb-3 d-flex align-items-center justify-content-center"
              >
                <div
                  className="technology_img"
                  style={{ paddingTop: style ? "0" : "10px" }}
                >
                  <Image
                    src={src}
                    className="img-fluid"
                    alt={alt}
                    style={style}
                  />
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default React.memo(Clients);
