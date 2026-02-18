import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Header from "../components/headers";
import Log from "../components/innerCallToLog";
import Footer from "../components/footer";
import Isotope from "isotope-layout";
import TopBar from "../components/topBar";
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
import Jigshow from "../assets/images/portfolioImages/mobileApp/jigshow.webp";
import Eskil from "../assets/images/portfolioImages/react/reactimage-min.webp";
import ReactFablead from "../assets/images/portfolioImages/react/react-fablead.webp";
import newIcon from "../assets/images/portfolioImages/react/ToDoImage.webp";
import Fliho from "../assets/images/portfolioImages/Fliho.png";
import liveinaustralia from "../assets/images/portfolioImages/callsforspeakers.png";
import open_space from "../assets/images/portfolioImages/open-space.png";
import unp_medical_school from "../assets/images/portfolioImages/unp-medical-school.png";
import fastforward from "../assets/images/portfolioImages/fastforward.png";
import ecologicalGlazing from "../assets/images/portfolioImages/ecological-glazing.png";
import raaspro from "../assets/images/portfolioImages/raaspro.png";
import brags from "../assets/images/portfolioImages/brags.png";
import aim from "../assets/images/portfolioImages/aim.png";
import Pharmaxy from "../assets/images/portfolioImages/Pharmaxy.png";
import parkpal from "../assets/images/portfolioImages/parkpal.png";

const portfolioItems = [
  {
    id: 1,
    title: "Fliho",
    description: "React JS and Laravel",
    image: Fliho,
    filterClass: "filter-react",
  },
  {
    id: 2,
    title: "UNP Medical School",
    description: "Wordpress and PHP",
    image: unp_medical_school,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 3,
    title: "Fast Forward TMS",
    description: "Wordpress and PHP",
    image: fastforward,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 4,
    title: "Raaspro",
    description: "Wordpress and PHP",
    image: raaspro,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 5,
    title: "Ecological Glazing",
    description: "Wordpress and PHP",
    image: ecologicalGlazing,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 6,
    title: "Live in Australia",
    description: "WordPress",
    image: liveinaustralia,
    filterClass: "filter-wordpress",
  },
  {
    id: 7,
    title: "Open Space",
    description: "WordPress",
    image: open_space,
    filterClass: "filter-wordpress",
  },
  {
    id: 8,
    title: "Brags",
    description: "Wordpress and PHP",
    image: brags,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 9,
    title: "AIM Recruit",
    description: "Wordpress and PHP",
    image: aim,
    filterClass: "filter-wordpress filter-php",
  },
  {
    id: 10,
    title: "Pharmaxy",
    description: "Codeigniter / PHP",
    image: Pharmaxy,
    filterClass: "filter-php",
  },
  {
    id: 11,
    title: "Parkpal",
    description: "Laravel / PHP",
    image: parkpal,
    filterClass: "filter-php",
  },
  {
    id: 12,
    title: "Market Coach",
    description: "PHP",
    image: callsforspeakers,
    filterClass: "filter-php",
  },
  {
    id: 13,
    title: "Xero",
    description: "PHP",
    image: xero,
    filterClass: "filter-php",
  },
  {
    id: 14,
    title: "Health Nutricial",
    description: "PHP",
    image: healthNutricial,
    filterClass: "filter-php",
  },
  {
    id: 15,
    title: "Avaas",
    description: "PHP",
    image: avaas,
    filterClass: "filter-php",
  },
  {
    id: 16,
    title: "Ezen",
    description: "PHP",
    image: ezen,
    filterClass: "filter-php",
  },
  {
    id: 17,
    title: "Bally Bingos",
    description: "php",
    image: ballyBingos,
    filterClass: "filter-php",
  },
  {
    id: 18,
    title: "Econo Marketing",
    description: "PHP",
    image: econoMarketing,
    filterClass: "filter-php",
  },
  {
    id: 19,
    title: "Elite",
    description: "PHP",
    image: elite,
    filterClass: "filter-php",
  },
  {
    id: 20,
    title: "Camping",
    description: "PHP",
    image: camping,
    filterClass: "filter-php",
  },
  {
    id: 21,
    title: "Navlex Marina",
    description: "WordPress",
    image: navlexMarina,
    filterClass: "filter-wordpress",
  },
  {
    id: 22,
    title: "Jd Text Low",
    description: "WordPress",
    image: JdTextLow,
    filterClass: "filter-wordpress",
  },
  {
    id: 23,
    title: "Dillucci",
    description: "PHP",
    image: dillucci,
    filterClass: "filter-php",
  },
  {
    id: 24,
    title: "Daily Gp",
    description: "WordPress",
    image: DailyGp,
    filterClass: "filter-wordpress",
  },
  {
    id: 25,
    title: "Falcon Training",
    description: "WordPress",
    image: Falcon,
    filterClass: "filter-wordpress",
  },
  {
    id: 26,
    title: "Nuvulife",
    description: "WordPress",
    image: Nuvulife,
    filterClass: "filter-wordpress",
  },
  {
    id: 27,
    title: "ASR interiors",
    description: "WordPress",
    image: GSR,
    filterClass: "filter-wordpress",
  },
  {
    id: 28,
    title: "Shawn Furniture",
    description: "WordPress",
    image: Shawn,
    filterClass: "filter-wordpress",
  },
  {
    id: 29,
    title: "Life Balance",
    description: "WordPress",
    image: LifeBalance,
    filterClass: "filter-wordpress",
  },
  {
    id: 30,
    title: "Living London",
    description: "WordPress",
    image: LivingLondon,
    filterClass: "filter-wordpress",
  },
  {
    id: 31,
    title: "Partner With You",
    description: "WordPress",
    image: PartnerWithYou,
    filterClass: "filter-wordpress",
  },
  {
    id: 32,
    title: "Robert Day Fitness",
    description: "Squarespace",
    image: RobertDayFitness,
    filterClass: "filter-squarespace",
  },
  {
    id: 33,
    title: "Shater Shack",
    description: "Squarespace",
    image: ShaterShack,
    filterClass: "filter-squarespace",
  },
  {
    id: 34,
    title: "MIXAIDA",
    description: "Squarespace",
    image: MIXAIDA,
    filterClass: "filter-squarespace",
  },
  {
    id: 35,
    title: "Jackeames",
    description: "Squarespace",
    image: Jackeames,
    filterClass: "filter-squarespace",
  },
  {
    id: 36,
    title: "ParkPal App",
    description: "Mobile App",
    image: ParkPal,
    filterClass: "filter-mobile-app",
  },
  {
    id: 37,
    title: "Localwala",
    description: "Mobile App",
    image: Localwala,
    filterClass: "filter-mobile-app",
  },
  {
    id: 38,
    title: "Udibaba",
    description: "Mobile App",
    image: Udibaba,
    filterClass: "filter-mobile-app",
  },
  {
    id: 39,
    title: "Grubb",
    description: "Mobile App",
    image: Grubb,
    filterClass: "filter-mobile-app",
  },
  {
    id: 40,
    title: "Grubb Bolt",
    description: "Mobile App",
    image: GrubbBolt,
    filterClass: "filter-mobile-app",
  },
  {
    id: 41,
    title: "Grubb Merchant",
    description: "Mobile App",
    image: GrubbMerchant,
    filterClass: "filter-mobile-app",
  },

  {
    id: 42,
    title: "Wedding Touch",
    description: "Mobile App",
    image: Wedding,
    filterClass: "filter-mobile-app",
  },
  {
    id: 43,
    title: "Vzy Cart",
    description: "Mobile App",
    image: VzyCart,
    filterClass: "filter-mobile-app",
  },
  {
    id: 44,
    title: "Altallahcrc",
    description: "Mobile App",
    image: Altallahcrc,
    filterClass: "filter-mobile-app",
  },
  {
    id: 48,
    title: "ToDo App",
    description: "React Native",
    image: newIcon,
    filterClass: "filter-react",
  },
  {
    id: 45,
    title: "Jigsaw",
    description: "Mobile App",
    image: Jigshow,
    filterClass: "filter-mobile-app",
  },
  {
    id: 46,
    title: "Eskil",
    description: "React JS",
    image: Eskil,
    filterClass: "filter-react",
  },
  {
    id: 47,
    title: "Fablead Developers Technolab",
    description: "React JS",
    image: ReactFablead,
    filterClass: "filter-react",
  },

];

function PortfolioPage() {
  useEffect(() => {
    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      const portfolioFilters = document.querySelectorAll(
        "#portfolio-flters li"
      );
      portfolioFilters.forEach((filter) => {
        filter.addEventListener("click", (e) => {
          e.preventDefault();
          portfolioFilters.forEach((el) => {
            el.classList.remove("filter-active");
          });
          filter.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: filter.getAttribute("data-filter"),
          });
        });
      });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <section id="portfolio" className="portfolio fade-up section-bg">
        <div className="section-title1">
          <div className="pt-5" role="heading" aria-level="1">Portfolio</div>
          <p className="header-content">
            We build and develop web applications & mobile applications <br />
            to improve your business & take your Services to new heights.
          </p>
        </div>


        <ul
          id="portfolio-flters"
          className="text-center justify-content-center p-0 pt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li data-filter="*" className="filter-active">
            <span>All</span>
          </li>
          <li data-filter=".filter-php">
            <span>PHP</span>
          </li>
          <li data-filter=".filter-wordpress">
            <span>WORDPRESS</span>
          </li>
          <li data-filter=".filter-squarespace">
            <span>SQUARESPACE</span>
          </li>
          <li data-filter=".filter-mobile-app">
            <span>MOBILE APP</span>
          </li>
          <li data-filter=".filter-react">
            <span>REACT & REACT NATIVE</span>
          </li>
        </ul>
        <div className="container">
          <Row
            className="portfolio-container "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item) => (
              <Col
                lg={4} sm={6} xs={12}
                key={item.id}
                className={`portfolio-item ${item.filterClass}`}
              >
                <div className="position-div portfolio-div">
                  <div className="portfolio-img text-center">
                    <Image
                      src={item.image}
                      className="portfolio-img"
                      alt={item.title}
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
        </div>
      </section>
      <Log />
      <Footer />
    </>
  );
}

export default React.memo(PortfolioPage);
