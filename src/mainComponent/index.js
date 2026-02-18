import React from "react";
import "../assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
// import '../assets/vendor/aos/aos.css'
import { useEffect } from "react";
import Header from "../components/headers";
import Hero from "../components/hero";
import Clients from "../components/clients";
import AboutUs from "../components/aboutUs";
import Skills from "../components/skills";
import Services from "../components/services";
import CallToAction from "../components/callToAction";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Testimonial from "../components/testimonial";
import TopBar from "../components/topBar";
import ReactGA from "react-ga4";

function IndexPage() {
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
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <CallToAction />
      <Clients />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
export default IndexPage;
