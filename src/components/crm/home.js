import React from "react";
import { Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from '../../assets/images/Hero_Banner/mobile-app.webp'
import banner2 from '../../assets/images/Hero_Banner/web design (3)-min.webp'
import banner3 from '../../assets/images/Hero_Banner/web-development.webp'
import banner4 from '../../assets/images/Career/career.webp'
function Home() {
  return (
    <div id="herocrm" className="align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="crm-home-pages">
              <h1>Customer Relationship Management</h1>
              <h3>We specialize in responsive, scalable, and future-ready solutions for Web.</h3>
              <div className="d-flex justify-content-start">
                <Link to="/about" className="btn-get-started scrollto">ABOUT US </Link>
                <Link to="/contact" className="btn-get-started scrollto">CONTACT US</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image className="d-block w-100" src={banner4} alt="ecommerce" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Home)
