import React from "react";
import Header from "../../components/headers";
import Footer from "../../components/footer";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import TopBar from "../../components/topBar";
import { Link } from "react-router-dom";
import Reactimg from "../../assets/images/TrainingDevelopment/react.svg";
import Angular from "../../assets/images/TrainingDevelopment/angular.svg";
import Nodejs from "../../assets/images/TrainingDevelopment/node-js.svg";
import Python from "../../assets/images/TrainingDevelopment/python.svg";
import Wordpress from "../../assets/images/TrainingDevelopment/wordpress.svg";
import Php from "../../assets/images/TrainingDevelopment/codeigniter.svg";
import laravel from "../../assets/images/TrainingDevelopment/laravel.svg";
import Flutter from "../../assets/images/TrainingDevelopment/flutter.svg";
import Reactnative from "../../assets/images/TrainingDevelopment/react-native.svg";
import DevelopmentCTA from "../../components/caoursesCta";

function TrainingDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBar />
      <Header />
      <section className="services section-bg fade-up">
        <div className="section-title1">
          <div className="pt-5">Training & Courses</div>
          <p className="header-content mb-3">
            Gain practical insights, sharpen your skills, <br />
            and advance your career with us.
          </p>
        </div>
        <Container className=" content1" data-aos="fade-up">
          <Row className="mt-4">
            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Reactimg}
                      alt="react-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/front-end-development">
                    React Js Development
                  </Link>
                </h4>
                <div className="text-center">
                  <Link
                    to="/training-and-courses/front-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Angular}
                      alt="angular-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/front-end-development">
                    Angular JS
                  </Link>
                </h4>
                <div className="text-center">
                  <Link
                    to="/training-and-courses/front-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Nodejs}
                      alt="Nodejs-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/back-end-development">
                    Node Js Development
                  </Link>
                </h4>
                <div className="text-center">
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Python}
                      alt="Python-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/  ">
                    Python Development
                  </Link>
                </h4>
                <div className="text-center">
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Wordpress}
                      alt="Wordpress-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/full-stack-development">
                    Wordpress Development
                  </Link>
                </h4>
                {/* <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p> */}
                <div className="text-center">
                  <Link
                    to="/training-and-courses/cms-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img className="w-100 h-100" src={Php} alt="php-icon" />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/back-end-development">
                    PHP CodeIgniter Development
                  </Link>
                </h4>
                {/* <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p> */}
                <div className="text-center">
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img className="w-100 h-100" src={laravel} alt="php-icon" />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/back-end-development">
                    PHP Laravel Development
                  </Link>
                </h4>
                {/* <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p> */}
                <div className="text-center">
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Flutter}
                      alt="flutter-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/mobile-app-development">
                    Flutter App Development
                  </Link>
                </h4>
                {/* <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p> */}
                <div className="text-center">
                  <Link
                    to="/training-and-courses/mobile-app-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              xl={4}
              md={6}
              className="mb-3 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
            >
              <div className="icon-box">
                {/* <i ><FontAwesomeIcon icon={faMobileScreenButton} /></i> */}
                <div className="icon text-center  w-100">
                  <div className="mainicon-div">
                    <img
                      className="w-100 h-100"
                      src={Reactnative}
                      alt="Reactnative-icon"
                    />
                  </div>
                </div>
                <h4 className="text-center">
                  <Link to="/training-and-courses/mobile-app-development">
                    React Native App Development
                  </Link>
                </h4>
                {/* <p className="text-center">We are a mobile app development company , specializes in creating android & ios apps.</p> */}
                <div className="text-center">
                  <Link
                    to="/training-and-courses/mobile-app-development"
                    className="btn-learn-more mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <DevelopmentCTA />
      <Footer />
    </>
  );
}
export default React.memo(TrainingDevelopment);
