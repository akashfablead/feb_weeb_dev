// import React, { useEffect } from "react";
// import { Row, Col, Image, Container } from "react-bootstrap";
// import Isotope from "isotope-layout";
// import callsforspeakers from "../assets/images/portfolioImages/callsforspeakers.webp";
// import xero from "../assets/images/portfolioImages/xero.webp";
// import healthNutricial from "../assets/images/portfolioImages/health-nutricial.webp";
// import avaas from "../assets/images/portfolioImages/avaas.webp";
// import ezen from "../assets/images/portfolioImages/ezen.webp";
// import ballyBingos from "../assets/images/portfolioImages/bally-bingos.webp";
// import econoMarketing from "../assets/images/portfolioImages/econo-marketing.webp";
// import elite from "../assets/images/portfolioImages/elite-iitt.webp";
// import camping from "../assets/images/portfolioImages/camping-spot.webp";
// import navlexMarina from "../assets/images/portfolioImages/navlex-marina.webp";
// import JdTextLow from "../assets/images/portfolioImages/jd-text-low.webp";
// import dillucci from "../assets/images/portfolioImages/dillucci.webp";
// import DailyGp from "../assets/images/portfolioImages/daily-gp.webp";
// import Falcon from "../assets/images/portfolioImages/one-stopi.webp";
// import Nuvulife from "../assets/images/portfolioImages/nuvulife.webp";
// import GSR from "../assets/images/portfolioImages/gsr.webp";
// import Shawn from "../assets/images/portfolioImages/shawn-furniture.webp";
// import LifeBalance from "../assets/images/portfolioImages/life-balance.webp";
// import LivingLondon from "../assets/images/portfolioImages/living-london.webp";
// import PartnerWithYou from "../assets/images/portfolioImages/partner-with-you.webp";
// import RobertDayFitness from "../assets/images/portfolioImages/robert-day-fitness.webp";
// import ShaterShack from "../assets/images/portfolioImages/shuter-shack.webp";
// import MIXAIDA from "../assets/images/portfolioImages/MIXAIDA-WERF.webp";
// import SupremeLabs from "../assets/images/portfolioImages/jack-eames.webp";
// import ParkPal from "../assets/images/portfolioImages/mobileApp/parkpal.webp";
// import Localwala from "../assets/images/portfolioImages/mobileApp/Localwala.webp";
// import Udibaba from "../assets/images/portfolioImages/mobileApp/udibaba.webp";
// import Grubb from "../assets/images/portfolioImages/mobileApp/Grubb.webp";
// import GrubbBolt from "../assets/images/portfolioImages/mobileApp/Grubbbolt.webp";
// import GrubbMerchant from "../assets/images/portfolioImages/mobileApp/Grubbmerchant.webp";
// import Wedding from "../assets/images/portfolioImages/mobileApp/weddingTouch.webp";
// import VzyCart from "../assets/images/portfolioImages/mobileApp/VzyCart.webp";
// import Altallahcrc from "../assets/images/portfolioImages/mobileApp/Altallahcrc.webp";
// import Eskil from "../assets/images/portfolioImages/react/reactimage-min.webp";
// import ReactFablead from "../assets/images/portfolioImages/react/react-fablead.webp";
// import newIcon from "../assets/images/portfolioImages/react/ToDoImage.webp";
// import Fliho from "../assets/images/portfolioImages/Fliho.png";
// import liveinaustralia from "../assets/images/portfolioImages/callsforspeakers.png";
// import open_space from "../assets/images/portfolioImages/open-space.png";
// import unp_medical_school from "../assets/images/portfolioImages/unp-medical-school.png";
// import fastforward from "../assets/images/portfolioImages/fastforward.png";
// import ecological_glazing from "../assets/images/portfolioImages/ecological-glazing.png";
// import raaspro from "../assets/images/portfolioImages/raaspro.png";
// import brags from "../assets/images/portfolioImages/brags.png";
// import aim from "../assets/images/portfolioImages/aim.png";
// import Pharmaxy from "../assets/images/portfolioImages/Pharmaxy.png";
// import parkpal from "../assets/images/portfolioImages/parkpal.png";

// function Portfolio() {
//   useEffect(() => {
//     try {
//       const portfolioContainer = document.querySelector(".portfolio-container");
//       if (portfolioContainer) {
//         const portfolioIsotope = new Isotope(portfolioContainer, {
//           itemSelector: ".portfolio-item",
//         });

//         const portfolioFilters = document.querySelectorAll("#portfolio-flters li");

//         portfolioFilters.forEach((filter) => {
//           filter.addEventListener("click", (e) => {
//             e.preventDefault();
//             portfolioFilters.forEach((el) => {
//               el.classList.remove("filter-active");
//             });
//             filter.classList.add("filter-active");
//             portfolioIsotope.arrange({
//               filter: filter.getAttribute("data-filter"),
//             });
//           });
//         });
//       }
//     } catch (error) {
//       console.error("Error initializing Isotope:", error);
//     }
//   }, []);

//   const portfolioItems = [
//     {
//       id: 1,
//       image: Fliho,
//       title: "Fliho",
//       category: "filter-react",
//       description: "React JS and Laravel",
//     },
//     {
//       id: 2,
//       image: unp_medical_school,
//       title: "UNP Medical School",
//       category: "filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 3,
//       image: fastforward,
//       title: "Fast Forward TMS",
//       category: "filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 4,
//       title: "Live in Australia",
//       description: "WordPress",
//       image: liveinaustralia,
//       category: "filter-wordpress",
//     },
//     {
//       id: 5,
//       title: "Open Space",
//       description: "WordPress",
//       image: open_space,
//       category: "filter-wordpress",
//     },
//     {
//       id: 6,
//       image: raaspro,
//       title: "Raaspro",
//       category: "filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 7,
//       image: ecological_glazing,
//       title: "Ecological glazing",
//       category: "filter-wordpress filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 8,
//       image: brags,
//       title: "Brags",
//       category: "filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 9,
//       image: aim,
//       title: "AIM Recruit",
//       category: "filter-wordpress filter-php",
//       description: "Wordpress and PHP",
//     },
//     {
//       id: 10,
//       image: Pharmaxy,
//       title: "Pharmaxy",
//       category: "filter-php",
//       description: "Codeigniter / PHP",
//     },
//     {
//       id: 11,
//       image: parkpal,
//       title: "Parkpal",
//       category: "filter-php",
//       description: "Laravel / PHP",
//     },
//     {
//       id: 12,
//       image: callsforspeakers,
//       title: "Market Coach",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 13,
//       image: xero,
//       title: "Xero",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 14,
//       image: healthNutricial,
//       title: "Health-nutricial",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 15,
//       image: avaas,
//       title: "Avaas",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 16,
//       image: ezen,
//       title: "Ezen",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 17,
//       image: ballyBingos,
//       title: "Bally-bingos",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 18,
//       image: econoMarketing,
//       title: "Econo-marketing",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 19,
//       image: elite,
//       title: "Elite",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 20,
//       image: camping,
//       title: "Camping",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 21,
//       image: navlexMarina,
//       title: "Navlex-marina",
//       category: "filter-wordpress",
//       description: "Wordpress",
//     },
//     {
//       id: 22,
//       image: JdTextLow,
//       title: "Jd-text-low",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 23,
//       image: dillucci,
//       title: "Dillucci",
//       category: "filter-php",
//       description: "PHP",
//     },
//     {
//       id: 24,
//       image: DailyGp,
//       title: "Daily-gp",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 25,
//       image: Falcon,
//       title: "Falcon Training",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 26,
//       image: Nuvulife,
//       title: "Nuvulife",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 27,
//       image: GSR,
//       title: "ASR interiors",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 28,
//       image: Shawn,
//       title: "Shawn-furniture",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 29,
//       image: LifeBalance,
//       title: "Life-balance",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 30,
//       image: LivingLondon,
//       title: "Living-london",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 31,
//       image: PartnerWithYou,
//       title: "Partner-with-you",
//       category: "filter-wordpress",
//       description: "WordPress",
//     },
//     {
//       id: 32,
//       image: RobertDayFitness,
//       title: "Robert-day-fitness",
//       category: "filter-squarespace",
//       description: "Squarespace",
//     },
//     {
//       id: 33,
//       image: ShaterShack,
//       title: "Shuter-shack",
//       category: "filter-squarespace",
//       description: "Squarespace",
//     },
//     {
//       id: 34,
//       image: MIXAIDA,
//       title: "MIXAIDA",
//       category: "filter-squarespace",
//       description: "Squarespace",
//     },
//     {
//       id: 35,
//       image: SupremeLabs,
//       title: "Jackeames",
//       category: "filter-squarespace",
//       description: "Squarespace",
//     },
//     {
//       id: 36,
//       image: ParkPal,
//       title: "ParkPal",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 37,
//       image: Localwala,
//       title: "Localwala",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 38,
//       image: Udibaba,
//       title: "Udibaba",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 39,
//       image: Grubb,
//       title: "Grubb",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 40,
//       image: GrubbBolt,
//       title: "Grubb Bolt",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 41,
//       image: GrubbMerchant,
//       title: "Grubb Merchant",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 42,
//       image: VzyCart,
//       title: "Vzy Cart",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 43,
//       image: Altallahcrc,
//       title: "Altallahcrc",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 44,
//       image: Wedding,
//       title: "Wedding Touch",
//       category: "filter-mobile-app",
//       description: "Mobile App",
//     },
//     {
//       id: 45,
//       image: Eskil,
//       title: "eSkil",
//       category: "filter-react",
//       description: "React JS",
//     },
//     {
//       id: 46,
//       image: ReactFablead,
//       title: "Fablead Developers Technolab",
//       category: "filter-react",
//       description: "React JS",
//     },
//     {
//       id: 47,
//       image: newIcon,
//       title: "ToDo-App",
//       category: "filter-react",
//       description: "React Native",
//     },
//   ];

//   return (
//     <section id="portfolio" className="portfolio section-bg">
//       <Container className="" data-aos="fade-up">
//         <div className="section-title">
//           <div role="heading" aria-level="2">Our Works</div>
//         </div>

//         <ul
//           id="portfolio-flters"
//           className="text-center justify-content-center p-0"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <li data-filter="*" className="filter-active">
//             <span>All</span>
//           </li>
//           <li data-filter=".filter-php">
//             <span>PHP</span>
//           </li>
//           <li data-filter=".filter-wordpress">
//             <span>WORDPRESS</span>
//           </li>
//           <li data-filter=".filter-squarespace">
//             <span>SQUARESPACE</span>
//           </li>
//           <li data-filter=".filter-mobile-app">
//             <span>MOBILE APP</span>
//           </li>
//           <li data-filter=".filter-react">
//             <span>REACT & REACT NATIVE</span>
//           </li>
//         </ul>

//         <Row className="portfolio-container">
//           {portfolioItems.map((item) => (
//             <Col
//               key={item.id}
//               lg={4} sm={6} xs={12}
//               className={`portfolio-item ${item.category}`}
//             >
//               <div className="position-div portfolio-div">
//                 <div className="portfolio-img text-center">
//                   <Image
//                     src={item.image}
//                     style={{ marginLeft: "1.5px" }}
//                     className="portfolio-img"
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="portfolio-info text-center">
//                   <h4>{item.title}</h4>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//         <div className="text-center">
//           <a href="/portfolio" rel="noopener noreferrer"
//             className="btn-learn-more portifolio_btn">
//             VIEW ALL
//           </a>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default React.memo(Portfolio);

//  


import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Isotope from "isotope-layout";
import callsforspeakers from "../assets/images/portfolioImages/callsforspeakers.webp";
import xero from "../assets/images/portfolioImages/xero.webp";
import healthNutricial from "../assets/images/portfolioImages/health-nutricial.webp";
import avaas from "../assets/images/portfolioImages/avaas.webp";
import ezen from "../assets/images/portfolioImages/ezen.webp";
import ballyBingos from "../assets/images/portfolioImages/bally-bingos.webp";
import econoMarketing from "../assets/images/portfolioImages/econo-marketing.webp";
import elite from "../assets/images/portfolioImages/elite-iitt.webp";
import camping from "../assets/images/portfolioImages/camping-spot.webp";
import navlexMarina from "../assets/images/portfolioImages/navlex-marina.webp";
import JdTextLow from "../assets/images/portfolioImages/jd-text-low.webp";
import dillucci from "../assets/images/portfolioImages/dillucci.webp";
import DailyGp from "../assets/images/portfolioImages/daily-gp.webp";
import Falcon from "../assets/images/portfolioImages/one-stopi.webp";
import Nuvulife from "../assets/images/portfolioImages/nuvulife.webp";
import GSR from "../assets/images/portfolioImages/gsr.webp";
import Shawn from "../assets/images/portfolioImages/shawn-furniture.webp";
import LifeBalance from "../assets/images/portfolioImages/life-balance.webp";
import LivingLondon from "../assets/images/portfolioImages/living-london.webp";
import PartnerWithYou from "../assets/images/portfolioImages/partner-with-you.webp";
import RobertDayFitness from "../assets/images/portfolioImages/robert-day-fitness.webp";
import ShaterShack from "../assets/images/portfolioImages/shuter-shack.webp";
import MIXAIDA from "../assets/images/portfolioImages/MIXAIDA-WERF.webp";
import Jackeames from "../assets/images/portfolioImages/jack-eames.webp";
import ParkPal from "../assets/images/portfolioImages/mobileApp/parkpal.webp";
import Localwala from "../assets/images/portfolioImages/mobileApp/Localwala.webp";
import Udibaba from "../assets/images/portfolioImages/mobileApp/udibaba.webp";
import Grubb from "../assets/images/portfolioImages/mobileApp/Grubb.webp";
import GrubbBolt from "../assets/images/portfolioImages/mobileApp/Grubbbolt.webp";
import GrubbMerchant from "../assets/images/portfolioImages/mobileApp/Grubbmerchant.webp";
import Wedding from "../assets/images/portfolioImages/mobileApp/weddingTouch.webp";
import VzyCart from "../assets/images/portfolioImages/mobileApp/VzyCart.webp";
import Altallahcrc from "../assets/images/portfolioImages/mobileApp/Altallahcrc.webp";
import Eskil from "../assets/images/portfolioImages/react/reactimage-min.webp";
import ReactFablead from "../assets/images/portfolioImages/react/react-fablead.webp";
import newIcon from "../assets/images/portfolioImages/react/ToDoImage.webp";
import Fliho from "../assets/images/portfolioImages/Fliho.png";
import liveinaustralia from "../assets/images/portfolioImages/callsforspeakers.png";
import open_space from "../assets/images/portfolioImages/open-space.png";
import unp_medical_school from "../assets/images/portfolioImages/unp-medical-school.png";
import fastforward from "../assets/images/portfolioImages/fastforward.png";
import ecological_glazing from "../assets/images/portfolioImages/ecological-glazing.png";
import raaspro from "../assets/images/portfolioImages/raaspro.png";
import brags from "../assets/images/portfolioImages/brags.png";
import aim from "../assets/images/portfolioImages/aim.png";
import Pharmaxy from "../assets/images/portfolioImages/Pharmaxy.png";
import parkpal from "../assets/images/portfolioImages/parkpal.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import whatsappbluk from "../assets/images/portfolioImages/react/whatsappBulk.png";
import tanishphysiofitness from "../assets/images/portfolioImages/react/tanishphysiofitness.png";


function Portfolio() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const maxItems = isMobile ? 6 : 9;

  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      const iso = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      const filters = document.querySelectorAll("#portfolio-flters li");

      filters.forEach((filter) => {
        filter.addEventListener("click", function (e) {
          e.preventDefault();
          filters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");

          const filterValue = this.getAttribute("data-filter");
          setActiveFilter(filterValue);
        });
      });

      return () => {
        if (iso) iso.destroy();
      };
    }
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: Fliho,
      title: "Fliho",
      category: "filter-react",
      description: "React JS and Laravel",
    },
    {
      id: 2,
      image: unp_medical_school,
      title: "UNP Medical School",
      category: "filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 3,
      image: fastforward,
      title: "Fast Forward TMS",
      category: "filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 4,
      title: "Live in Australia",
      description: "WordPress",
      image: liveinaustralia,
      category: "filter-wordpress",
    },
    {
      id: 5,
      title: "Open Space",
      description: "WordPress",
      image: open_space,
      category: "filter-wordpress",
    },
    {
      id: 6,
      image: raaspro,
      title: "Raaspro",
      category: "filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 7,
      image: ecological_glazing,
      title: "Ecological glazing",
      category: "filter-wordpress filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 8,
      image: brags,
      title: "Brags",
      category: "filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 9,
      image: aim,
      title: "AIM Recruit",
      category: "filter-wordpress filter-php",
      description: "Wordpress and PHP",
    },
    {
      id: 10,
      image: Pharmaxy,
      title: "Pharmaxy",
      category: "filter-php",
      description: "Codeigniter / PHP",
    },
    {
      id: 11,
      image: parkpal,
      title: "Parkpal",
      category: "filter-php",
      description: "Laravel / PHP",
    },
    {
      id: 12,
      image: callsforspeakers,
      title: "Market Coach",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 13,
      image: xero,
      title: "Xero",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 14,
      image: healthNutricial,
      title: "Health-nutricial",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 15,
      image: avaas,
      title: "Avaas",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 16,
      image: ezen,
      title: "Ezen",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 17,
      image: ballyBingos,
      title: "Bally-bingos",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 18,
      image: econoMarketing,
      title: "Econo-marketing",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 19,
      image: elite,
      title: "Elite",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 20,
      image: camping,
      title: "Camping",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 21,
      image: navlexMarina,
      title: "Navlex-marina",
      category: "filter-wordpress",
      description: "Wordpress",
    },
    {
      id: 22,
      image: JdTextLow,
      title: "Jd-text-low",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 23,
      image: dillucci,
      title: "Dillucci",
      category: "filter-php",
      description: "PHP",
    },
    {
      id: 24,
      image: DailyGp,
      title: "Daily-gp",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 25,
      image: Falcon,
      title: "Falcon Training",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 26,
      image: Nuvulife,
      title: "Nuvulife",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 27,
      image: GSR,
      title: "ASR interiors",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 28,
      image: Shawn,
      title: "Shawn-furniture",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 29,
      image: LifeBalance,
      title: "Life-balance",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 30,
      image: LivingLondon,
      title: "Living-london",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 31,
      image: PartnerWithYou,
      title: "Partner-with-you",
      category: "filter-wordpress",
      description: "WordPress",
    },
    {
      id: 32,
      image: RobertDayFitness,
      title: "Robert-day-fitness",
      category: "filter-squarespace",
      description: "Squarespace",
    },
    {
      id: 33,
      image: ShaterShack,
      title: "Shuter-shack",
      category: "filter-squarespace",
      description: "Squarespace",
    },
    {
      id: 34,
      image: MIXAIDA,
      title: "MIXAIDA",
      category: "filter-squarespace",
      description: "Squarespace",
    },
    {
      id: 35,
      image:Jackeames,   
      title: "Jackeame ",
      category:"filter-squarespace",
      description:"Squarespace",
    },
    {
      id: 36,
      image: ParkPal,
      title: "ParkPal",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 37,
      image: Localwala,
      title: "Localwala",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 38,
      image: Udibaba,
      title: "Udibaba",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 39,
      image: Grubb,
      title: "Grubb",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 40,
      image: GrubbBolt,
      title: "Grubb Bolt",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 41,
      image: GrubbMerchant,
      title: "Grubb Merchant",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 42,
      image: VzyCart,
      title: "Vzy Cart",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 43,
      image: Altallahcrc,
      title: "Altallahcrc",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 44,
      image: Wedding,
      title: "Wedding Touch",
      category: "filter-mobile-app",
      description: "Mobile App",
    },
    {
      id: 45,
      image: Eskil,
      title: "eSkil",
      category: "filter-react",
      description: "React JS",
    },
    {
      id: 46,
      image: ReactFablead,
      title: "Fablead Developers Technolab",
      category: "filter-react",
      description: "React JS",
    },
  {
      id: 47,
      image: newIcon,
      title: "ToDo-App",
      category: "filter-react",
      description: "React Native",
    },
    {
      id: 48,
      image: whatsappbluk,
      title: "WhatsApp Bulk Messaging",
      category: "filter-react",
      description: "React JS",
    },
    {
      id: 49,
      image: tanishphysiofitness,
      title: "Tanish Physio & Fitness",
      category: "filter-react",
      description: "React JS",
    },
  ];
  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "*") return true;
    return item.category.split(" ").includes(activeFilter.replace(".", ""));
  });

  const limitedItems = filteredItems.slice(0, maxItems);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <Container data-aos="fade-up">
        <div className="section-title">
          <div role="heading" aria-level="2">Our Works</div>
        </div>

        <ul
          id="portfolio-flters"
          className="text-center justify-content-center p-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            data-filter="*"
            className={activeFilter === "*" ? "filter-active" : ""}
            onClick={() => setActiveFilter("*")}
          >
            <span>All</span>
          </li>
          <li
            data-filter=".filter-php"
            className={activeFilter === ".filter-php" ? "filter-active" : ""}
            onClick={() => setActiveFilter(".filter-php")}
          >
            <span>PHP</span>
          </li>
          <li
            data-filter=".filter-wordpress"
            className={activeFilter === ".filter-wordpress" ? "filter-active" : ""}
            onClick={() => setActiveFilter(".filter-wordpress")}
          >
            <span>WORDPRESS</span>
          </li>
          <li
            data-filter=".filter-squarespace"
            className={activeFilter === ".filter-squarespace" ? "filter-active" : ""}
            onClick={() => setActiveFilter(".filter-squarespace")}
          >
            <span>SQUARESPACE</span>
          </li>
          <li
            data-filter=".filter-mobile-app"
            className={activeFilter === ".filter-mobile-app" ? "filter-active" : ""}
            onClick={() => setActiveFilter(".filter-mobile-app")}
          >
            <span>MOBILE APP</span>
          </li>
          <li
            data-filter=".filter-react"
            className={activeFilter === ".filter-react" ? "filter-active" : ""}
            onClick={() => setActiveFilter(".filter-react")}
          >
            <span>REACT & REACT NATIVE</span>
          </li>
        </ul>

        <Row className="portfolio-container">
          {limitedItems.map((item) => (
            <Col
              key={item.id}
              lg={4}
              sm={6}
              xs={12}
              className={`portfolio-item ${item.category}`}
            >
              <div className="position-div portfolio-div">
                <div className="portfolio-img text-center">
                  <Image
                    src={item.image}
                    className="portfolio-img"
                    alt={item.title}
                    style={{ marginLeft: "1.5px" }}
                  />
                </div>
                <div className="portfolio-info text-center">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center">
          <a
            href="/portfolio"
            rel="noopener noreferrer"
            className="btn-learn-more portifolio_btn"
          >
            VIEW ALL
          </a>
        </div>
      </Container>
    </section>
  );
}

export default React.memo(Portfolio);
