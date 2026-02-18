import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Twitter,
  Facebook,
  Linkedin,
  EnvelopeFill,
} from "react-bootstrap-icons";
import { MetaTags } from "react-meta-tags";

// function TopBar() {
//   <MetaTags>
//     {/* Social media meta tags */}
//     <meta property="og:title" content="website" />
//     <meta
//       property="og:description"
//       content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
//     />
//     <meta property="og:url" content={window.location.href} />

//     {/* Twitter meta tags */}
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta
//       name="twitter:title"
//       content="Fablead Developers Technolab Twitter Handle"
//     />
//     <meta
//       name="twitter:description"
//       content=" Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
//     />

//     {/* Facebook meta tags */}
//     <meta property="og:type" content="website" />
//     <meta
//       property="og:title"
//       content="Fablead Developers Technolab Facebook Handle"
//     />
//     <meta
//       property="og:description"
//       content=" Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
//     />

//     {/* LinkedIn meta tags */}
//     <meta
//       property="og:title"
//       content="Fablead Developers Technolab Linkdean Handle"
//     />
//     <meta
//       property="og:description"
//       content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
//     />
//   </MetaTags>;
//   return (
//     <Row>
//       <Col lg={12} className="">
//         <div className=" top-bar d-flex justify-content-end ">
//           <Container className="">
//             <a href="mailto:info@fableadtechnolabs.com" className="topbar-icons">
//               <EnvelopeFill />
//             </a>
//             <a href="mailto:info@fableadtechnolabs.com" className=" mt-2">  
//               {" "}
//               <label className="email-text">info@fableadtechnolabs.com</label>
//             </a>
//             <a
//               href="https://twitter.com/fablead_tech"
//               rel="noopener"
//               className="topbar-icons2"
//             >
//               <Twitter />
//             </a>
//             <a
//               href="https://www.facebook.com/fableaddevelopers"
//               rel="noopener"
//               className="topbar-icons2"
//             >
//               <Facebook />
//             </a>
//             <a
//               href="https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
//               rel="noopener"
//               className="topbar-icons2"
//             >
//               <Linkedin />
//             </a>
//           </Container>
//         </div>
//       </Col>
//     </Row>
//   );
// }

function TopBar() {
  return (
    <>
      <MetaTags>
        {/* Social media meta tags */}
        <meta property="og:title" content="website" />
        <meta
          property="og:description"
          content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fablead Developers Technolab Twitter Handle"
        />
        <meta
          name="twitter:description"
          content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
        />

        {/* Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fablead Developers Technolab Facebook Handle"
        />
        <meta
          property="og:description"
          content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
        />

        {/* LinkedIn meta tags */}
        <meta
          property="og:title"
          content="Fablead Developers Technolab LinkedIn Handle"
        />
        <meta
          property="og:description"
          content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
        />
      </MetaTags>

      <Row>
        <Col lg={12}>
          <div className="top-bar d-flex justify-content-end">
            <Container>
              <a
                href="mailto:info@fableadtechnolabs.com"
                className="topbar-icons"
                rel="noopener"
                target="_blank"
              >
                <EnvelopeFill />
              </a>
              <a
                href="mailto:info@fableadtechnolabs.com"
                className="mt-2"
                rel="noopener"
                target="_blank"
              >
                <label className="email-text">
                  info@fableadtechnolabs.com
                </label>
              </a>
              <a
                href="https://twitter.com/fablead_tech"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Twitter />
              </a>
              <a
                href="https://www.facebook.com/fableaddevelopers"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Facebook />
              </a>
              <a
                href="https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Linkedin />
              </a>
            </Container>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(TopBar);
