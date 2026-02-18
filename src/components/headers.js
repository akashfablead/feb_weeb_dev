import React, { useEffect } from "react";
import { Navbar, Image, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/service-banners/250x150 (1).webp";
import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const currentDomain = window.location.origin;

    const dynamicLogoUrl = `${currentDomain}/`;

    setLogoUrl(dynamicLogoUrl);
  }, [location.pathname]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     const nav = document.getElementById("navbar");

  //     // If menu is open AND click is outside the nav element
  //     if (mobileMenuOpen && nav && !nav.contains(event.target)) {
  //       setMobileMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isNavLinkActive = (to) => {
    return location.pathname === to;
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive); // Toggle dropdown state
  };
  return (
    <header id="header" className="fixed-top">
      <Container className=" d-flex align-items-center">
        <div className="logo me-auto">
          <Link to={logoUrl}>
            {" "}
            <Image
              src={logo}
              className="img-fluid"
              alt="Fablead Developers Technolab"
            />
          </Link>
        </div>

        <Navbar
          id="navbar"
          className={`navbar ${mobileMenuOpen ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <Link
                to="/"
                rel="noopener noreferrer"
                className={`nav-link scrollto ${
                  isNavLinkActive("/") ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/crm"
                rel="noopener noreferrer"
                className={`nav-link scrollto d-none  ${
                  isNavLinkActive("/crm") ? "active" : ""
                }`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                rel="noopener noreferrer"
                className={`nav-link scrollto ${
                  isNavLinkActive("/about") ? "active" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                rel="noopener noreferrer"
                className={`nav-link scrollto ${
                  isNavLinkActive("/services") ||
                  isNavLinkActive("/services/website-development") ||
                  isNavLinkActive("/services/website-design") ||
                  isNavLinkActive("/services/mobile-apps") ||
                  isNavLinkActive("/services/e-commerce") ||
                  isNavLinkActive("/services/cms-website") ||
                  isNavLinkActive("/services/web-maintenance")
                    ? "active"
                    : ""
                }`}
              >
                Services
              </Link>
            </li>

            {/* Start Hide serices Detail pages */}
            <li className="d-none">
              <Link to="/services/cms-website">CMS-Website</Link>
            </li>
            <li className="d-none">
              <Link to="/services/web-maintenance">web-maintenance</Link>
            </li>
            <li className="d-none">
              <Link to="/services/website-design">website-design</Link>
            </li>
            <li className="d-none">
              <Link to="/services/website-development">
                Website development
              </Link>
            </li>
            <li className="d-none">
              <Link to="/services/mobile-apps">Mobile-apps</Link>
            </li>
            <li className="d-none">
              <Link to="/services/e-commerce">E-commerce</Link>
            </li>
            <li className="d-none">
              <Link to="/404">404</Link>
            </li>

            {/* END Hide serices Detail pages */}
            <li>
              <Link
                to="/portfolio"
                rel="noopener noreferrer"
                className={`nav-link scrollto ${
                  isNavLinkActive("/portfolio") ? "active" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li className="dropdown">
              <Link to="#" onClick={toggleDropdown}>
                <span className="nav-link scrollto">Products</span>{" "}
                <i className="bi bi-chevron-down pt-1"></i>
              </Link>
              <ul className={dropdownActive ? "dropdown-active" : ""}>
                <li>
                  <Link
                    to="/products/inventory-billing-software-erp"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled"
                  >
                    Inventory & Billing Software (ERP)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/crm-web-mobile-app-crm"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled "
                  >
                    CRM Web & Mobile APP (CRM)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/hospital-clinic-management-system-hms"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled"
                  >
                    Hospital & Clinic Management System (HMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/whatsapp-bulk-messaging-platform"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled"
                  >
                    WhatsApp Bulk Messaging
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/ecommerce-web-mobile-app"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled"
                  >
                    Ecommerce Web & Mobile App
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/hr-management-system"
                    rel="noopener noreferrer"
                    className="product-dropdown disabled"
                  >
                    HR Management System
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li className="dropdown" onClick={toggleDropdown}>
              <Link
                to="/training-and-courses"
                className={`${isNavLinkActive("/training-and-courses") ? "active" : ""
                  }`}
              >
                <span className="nav-link scrollto">Training & Courses</span>
                <i className="bi bi-chevron-down pt-1"></i>
              </Link>
              <ul className={dropdownActive ? "dropdown-active" : ""}>
                <li>
                  <Link
                    to="/training-and-courses/front-end-development"
                    className="product-dropdown"
                  >
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training-and-courses/back-end-development"
                    className="product-dropdown"
                  >
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training-and-courses/full-stack-development"
                    className="product-dropdown"
                  >
                    Fullstack Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training-and-courses/cms-development"
                    className="product-dropdown"
                  >
                    Wordpress CMS Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training-and-courses/mobile-app-development"
                    className="product-dropdown"
                  >
                    Mobile App Development
                  </Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link
                to="/careers"
                rel="noopener noreferrer"
                className={`nav-link scrollto ${
                  isNavLinkActive("/careers") ? "active" : ""
                }`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link scrollto ${
                  isNavLinkActive("/contact") ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* <i
            className="bi bi-list mobile-nav-toggle"
            onClick={toggleMobileMenu}
          ></i> */}
          <i
            onClick={toggleMobileMenu}
            className={`bi ${
              mobileMenuOpen ? "bi-x" : "bi-list"
            } mobile-nav-toggle`}
          />
        </Navbar>
      </Container>
    </header>
  );
}

export default React.memo(Header);
