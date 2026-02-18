import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {  ChevronDoubleRight, Twitter, Facebook, Linkedin} from 'react-bootstrap-icons';
import logo from '../../assets/images/CRM/fablead_crm.png'
import { Link, useLocation } from "react-router-dom";

function CrmFooter() {
 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const currentDomain = window.location.origin;
    
    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(intervalId);
  }, [currentYear] [location.pathname]);
  return (
    <>
     
    <footer id="footer" >
      <div className="footer-bottom-crm ">
        <div className="conainer">
        <div className="row">
        < div className="col-md-6 col-sm-12 col-lg-6  align-items-lg-center">
        <Image src={logo} width={200} ></Image>
        </div>
        < div className="align-items-lg-center col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
          <p className="mt-3">
            © Copyright {currentYear}{' '}
            <strong >
              <Link to={logoUrl} className="text-light">
                - Fablead Developers Technolab
              </Link>
            </strong>
          </p>
        </div>
        </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default React.memo(CrmFooter)
