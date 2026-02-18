import React from "react";
import "../assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
// import '../assets/vendor/aos/aos.css'
import { useEffect } from "react";

import ReactGA from "react-ga4";
import Cmsheader from "../components/cmsheaders";
import TopBar from "../components/topBar";
import Home from "../components/crm/home";
import TopCrm from "../components/crm/CRM";
import Crmfeatures from "../components/crm/Crmfeatures";
import Faqs from "../components/crm/faq";
import Calltoaction from "../components/crm/Calltoaction";
import Crmfooter from "../components/crm/crmfooter";

function CmsIndexPage() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });

      ReactGA.initialize("UA-111706629-1");
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    });
  }, []);
  return (
    <>
      <Cmsheader />
      <Home />
      <TopCrm />
      <Crmfeatures />
      <Faqs />
      <Calltoaction />
      <Crmfooter />
    </>
  );
}
export default CmsIndexPage;
