import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "../pages/aboutUsPage";
import ServicePage from "../pages/servicePage";
import PortfolioPage from "../pages/portfolioPage";
import CareerPage from "../pages/carrerPage";
import ContactPage from "../pages/contactPage";
import WebMaintenance from "../pages/servicePages/webMaintenance";
import CmsWebsiteDevelopment from "../pages/servicePages/cmsWebsiteDev";
import WebsiteDesign from "../pages/servicePages/websiteDesign";
import WebsiteDevelopment from "../pages/servicePages/websiteDev";
import MobileApps from "../pages/servicePages/mobileApps";
import EcomDevelopment from "../pages/servicePages/ecommerceDevelopment";
import ShopifyDevService from "../pages/servicePages/ShopifyDevService";
import GraphicsDesignService from "../pages/servicePages/GraphicsDesignService";
import ServerManageService from "../pages/servicePages/ServerManageService";
import SeoService from "../pages/servicePages/SeoService";
import PageNotFound from "../components/pageNotFound";
import MetaTags from "react-meta-tags";
import IndexPage from ".";
import FrontEndDevelopment from "../pages/trainingAndDevelopment/frontEnddevelopment";
import Trainingdevelopment from "../pages/trainingDevelopment/trainingdevelopment";
import BackendDevelopment from "../pages/trainingAndDevelopment/backenddevelopment";
import FullStackDevelopment from "../pages/trainingAndDevelopment/fullstackdevelopment";
import ApplicationDevelopment from "../pages/trainingAndDevelopment/applicationdevelopment";
import CmsDevelopment from "../pages/trainingAndDevelopment/cmsdevelopment";
import CrmIndexPage from "./cmsindex";
import RealEstate from "../components/productsPages/realEstate";
import Crm from "../components/productsPages/crm";
import EcommerceAndMobileApp from "../components/productsPages/ecommerce";
import Hrmanagement from "../components/productsPages/hrmanagement";
import Inventorbilling from "../components/productsPages/inventorbilling";
import HospitalManagement from "../components/productsPages/HospitalManagement";
import HMPrivacyPolicy from "../components/productsPages/privacypolicyprodect/HMPrivacyPolicy";
import CRMPrivacyPolicy from "../components/productsPages/privacypolicyprodect/CRMPrivacyPolicy";
import HRManagementPrivacyPolicy from "../components/productsPages/privacypolicyprodect/HRManagementPrivacyPolicy";
import InventoryBillingPrivacyPolicy from "../components/productsPages/privacypolicyprodect/InventoryBillingPrivacyPolicy";
import SupportPage from "../components/Support";
import WhatsAppbulk from "../components/productsPages/whatsAppbulk";

function RoutesPage() {
   return (
      <>
         <Routes>
            <Route
               exact
               path="/"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Fablead Technolabs | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab is the best IT company in Surat for Website Development, Website Designing, Ecommerce Solutions, SEO."
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/" />
                        <meta
                           property="og:title"
                           content="Fablead Technolabs | Web Development &amp; Design Company"
                        />
                        <meta
                           property="og:description"
                           content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="Fablead Developers Technolab Twitter Handle"
                        />
                        <meta
                           name="twitter:description"
                           content=" Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
                        />
                        <meta property="og:type" content="website" />
                        <meta
                           property="og:title"
                           content="Fablead Developers Technolab Facebook Handle"
                        />
                        <meta
                           property="og:description"
                           content=" Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
                        />
                        <meta
                           property="og:title"
                           content="Fablead Developers Technolab Linkdean Handle"
                        />
                        <meta
                           property="og:description"
                           content="Fablead Developers Technolab is the best IT company in surat for Website Development ,Website Designing ,Ecommerce Solutions ,SEO."
                        />
                     </MetaTags>

                     <IndexPage />
                  </>
               }
            />
            <Route
               exact
               path="/crm"
               element={
                  <>
                     <MetaTags>
                        <title>
                           CRM Software with Mobile App | Customer Relationship Management | Fablead Technolabs
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Complete CRM software solution with web and mobile access. Manage customer relationships, track leads, and automate sales processes."
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/crm" />
                        <meta
                           property="og:title"
                           content="CRM Software with Mobile App | Fablead Technolabs"
                        />
                        <meta
                           property="og:description"
                           content="Boost your sales with our advanced CRM system. Track leads, manage customer relationships, and grow your business."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="CRM Software with Mobile App | Fablead Technolabs"
                        />
                        <meta
                           name="twitter:description"
                           content="Complete CRM solution with web and mobile access for modern businesses."
                        />
                        <meta property="og:type" content="website" />
                     </MetaTags>

                     <CrmIndexPage />
                  </>
               }
            />
            <Route
               exact
               path="/about"
               element={
                  <>
                     <MetaTags>
                        <title>
                           About Fablead Technolabs | Web Development & Design
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab provides Web Development, Web Designing, Mobile App Development, Ecommerce Development, CMS Based Website Development and Web Maintenance & Customization. "
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/about" />
                     </MetaTags>
                     <AboutUsPage />
                  </>
               }
            />
            <Route
               exact
               path="/services"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Services | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab provides Accelerate internal process to Develop and Design Web Applications & Mobile Applications as per requirements."
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services" />
                        <meta
                           name="keywords"
                           content="IT services, web development, mobile app development, ecommerce solutions, CMS development, UI/UX design, Fablead Developers Technolab"
                        />
                        <meta
                           property="og:title"
                           content="Top-Tier IT Services | Web & Mobile App Development | Fablead Developers Technolab"
                        />
                        <meta
                           property="og:description"
                           content="Explore top-tier IT services at Fablead Developers Technolab. We offer expert Website Development, Mobile App Development, Ecommerce Solutions, and more."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="Top-Tier IT Services | Fablead Developers Technolab"
                        />
                        <meta
                           name="twitter:description"
                           content="Explore expert IT services at Fablead Developers Technolab. We offer Website Development, Mobile App Development, and Ecommerce Solutions."
                        />
                     </MetaTags>
                     <ServicePage />
                  </>
               }
            />
            <Route
               exact
               path="/portfolio"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Portfolio | Fablead Technolabs | Web Projects
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab build and develop web applications & mobile applications to improve your business & take your Service to new heights."
                        />
                        <meta
                           name="keywords"
                           content="Portfolio, Web Development Projects, Mobile App Development Portfolio, Ecommerce Website Examples, UI/UX Design Showcase, Fablead Developers Technolab Projects, Software Development Case Studies"
                        />
                        <meta
                           property="og:title"
                           content="Portfolio | Fablead Developers Technolab | Web Development & Design Company"
                        />
                        <meta
                           property="og:description"
                           content="Explore our portfolio of cutting-edge web development, mobile app development, and UI/UX design projects. Fablead Developers Technolab delivers high-quality software solutions tailored to elevate your business."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <link rel="canonical" href={window.location.origin + "/portfolio"} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="Portfolio | Fablead Developers Technolab"
                        />
                        <meta
                           name="twitter:description"
                           content="Explore our portfolio of cutting-edge web development, mobile app development, and UI/UX design projects."
                        />
                     </MetaTags>
                     <PortfolioPage />
                  </>
               }
            />

            <Route
               exact
               path="/training-and-courses"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Training & Courses | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab build and develop web applications & mobile applications to improve your business & take your Service to new heights."
                        />
                        <meta
                           name="keywords"
                           content="IT Training, Software Development Courses, Web Development Training, Mobile App Development Training, React JS Course, Node JS Course, PHP Development Training, Fablead Developers Technolab Training"
                        />
                        <meta
                           property="og:title"
                           content="Training & Courses | Fablead Developers Technolab | Web Development & Design Company"
                        />
                        <meta
                           property="og:description"
                           content="Fablead Developers Technolab build and develop web applications & mobile applications to improve your business & take your Service to new heights."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <link rel="canonical" href={window.location.origin + "/training-and-courses"} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="Training & Courses | Fablead Developers Technolab"
                        />
                        <meta
                           name="twitter:description"
                           content="Empower your career with professional IT training and courses at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <Trainingdevelopment />
                  </>
               }
            />

            <Route
               exact
               path="/careers"
               element={
                  <>
                     <MetaTags>
                        <title>
                           {" "}
                           Career at Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab is hiring skilled PHP developers, Wordpress developers, React and Node JS developers and Mobile App developers. Contact us on info@fableadtechnolabs.com."
                        />
                        <meta
                           name="keywords"
                           content="IT Careers, PHP Developer Jobs, WordPress Developer Hiring, React JS Jobs, Node JS Developer Vacancy, Mobile App Developer Jobs, Career at Fablead Developers Technolab, IT Jobs in Surat"
                        />
                        <meta
                           property="og:title"
                           content="Career at Fablead Developers Technolab | Web Development & Design Company"
                        />
                        <meta
                           property="og:description"
                           content="Fablead Developers Technolab is hiring skilled PHP developers, Wordpress developers, React and Node JS developers and Mobile App developers. Join our team!"
                        />
                        <meta property="og:url" content={window.location.href} />
                        <link rel="canonical" href={window.location.origin + "/careers"} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="Careers | Fablead Developers Technolab"
                        />
                        <meta
                           name="twitter:description"
                           content="Join our team of skilled developers and take your career to the next level at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <CareerPage />
                  </>
               }
            />
            <Route
               exact
               path="/products/crm-web-mobile-app-crm"
               element={
                  <>
                     <MetaTags>
                        <title>
                           CRM Software with Mobile App | Customer Relationship Management | Fablead Technolabs
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Complete CRM software with web and mobile app. Manage leads, deals, follow-ups, and sales pipeline efficiently."
                        />
                        <meta
                           name="keywords"
                           content="CRM Software, Mobile CRM App, Customer Relationship Management, Business Automation, CRM Development, Web CRM Solution, Fablead CRM, Enterprise CRM Systems"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/crm-web-mobile-app-crm" />
                        <meta property="og:title" content="CRM Software with Mobile App | Fablead Developers Technolab" />
                        <meta property="og:description" content="Boost your sales with our advanced CRM system. Track leads, manage customer relationships, and grow your business." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="CRM Software with Mobile App | Fablead Technolabs" />
                        <meta name="twitter:description" content="Complete CRM solution with web and mobile access for modern businesses." />
                     </MetaTags>
                     <Crm />
                  </>
               }
            />

            <Route
               exact
               path="/products/ecommerce-web-mobile-app"
               element={
                  <>
                     <MetaTags>
                        <title>
                           {" "}
                           Ecommerce Web & Mobile APP | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Custom Ecommerce Website & Mobile App Development. Build your online store with payment gateway integration, inventory management, and multi-vendor support."
                        />
                        <meta
                           name="keywords"
                           content="Ecommerce Development, Online Store Builder, Shopping Cart Development, Mobile Ecommerce App, Payment Gateway Integration, Multi-vendor Marketplace, Surat Ecommerce Solutions"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/ecommerce-web-mobile-app" />
                        <meta property="og:title" content="Ecommerce Website & Mobile App Development | Fablead Developers Technolab" />
                        <meta property="og:description" content="Launch your online store with our complete ecommerce solutions. Web and mobile apps with advanced features." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Ecommerce Web & Mobile App Solutions | Fablead Technolabs" />
                        <meta name="twitter:description" content="Full-featured ecommerce platforms for retail and B2B businesses." />
                     </MetaTags>
                     <EcommerceAndMobileApp />
                  </>
               }
            />
            <Route
               exact
               path="/products/hospital-clinic-management-system-hms"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Hospital & Clinic Management System (HMS) | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Complete Hospital & Clinic Management System (HMS) for healthcare providers. Patient management, appointments, billing, EMR, pharmacy, and lab integration."
                        />
                        <meta
                           name="keywords"
                           content="Hospital Management System, Clinic Software, HMS Software, Patient Management, EMR Software, Healthcare IT, Medical Practice Software, Surat HMS Solution"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/hospital-clinic-management-system-hms" />
                        <meta property="og:title" content="Hospital & Clinic Management System (HMS) | Fablead Developers Technolab" />
                        <meta property="og:description" content="Comprehensive healthcare management software for hospitals and clinics. Digitize patient records and streamline operations." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Hospital & Clinic HMS Software | Fablead Technolabs" />
                        <meta name="twitter:description" content="Modern healthcare management solution for efficient hospital and clinic operations." />
                     </MetaTags>
                     <HospitalManagement />
                  </>
               }
            />

            <Route
               exact
               path="/hospital-clinic-management-system-hms-privacy-policy"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Privacy Policy | Hospital Management | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Learn about the privacy practices and policies for Hospital Management software by Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <HMPrivacyPolicy />
                  </>
               }
            />


            <Route
               exact
               path="/crm-web-mobile-app-crm-privacy-policy"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Privacy Policy | CRM Web & Mobile APP (CRM) | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Review our CRM system privacy practices at Fablead Developers Technolab. We ensure secure handling of client and customer data."
                        />
                     </MetaTags>
                     <CRMPrivacyPolicy />
                  </>
               }
            />

            <Route
               exact
               path="/hr-management-system-privacy-policy"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Privacy Policy | HR Management System | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Review our privacy practices for HR Management System by Fablead Developers Technolab. Learn how we handle HR data securely and lawfully."
                        />
                     </MetaTags>
                     <HRManagementPrivacyPolicy />
                  </>
               }
            />

            <Route
               exact
               path="/products/whatsapp-bulk-messaging-platform"
               element={
                  <>
                     <MetaTags>
                        <title>
                           WhatsApp Bulk Messaging Platform | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="WhatsApp Bulk Messaging Platform for business marketing. Send bulk messages, automated campaigns, broadcast lists, and customer engagement tools. API integration available."
                        />
                        <meta
                           name="keywords"
                           content="WhatsApp Bulk Messaging, Bulk SMS India, WhatsApp Marketing, Business Messaging API, Automated Messages, Customer Engagement, Surat Digital Marketing Tools"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/whatsapp-bulk-messaging-platform" />
                        <meta property="og:title" content="WhatsApp Bulk Messaging Platform | Fablead Developers Technolab" />
                        <meta property="og:description" content="Reach thousands of customers instantly with our WhatsApp bulk messaging and marketing automation platform." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="WhatsApp Bulk Messaging Platform | Fablead Technolabs" />
                        <meta name="twitter:description" content="Powerful WhatsApp marketing automation for businesses of all sizes." />
                     </MetaTags>
                     <WhatsAppbulk />
                  </>
               }
            />


            <Route
               exact
               path="/inventory-billing-software-erp-privacy-policy"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Privacy Policy | Inventory & Billing Software (ERP) | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Learn how Fablead Developers Technolab protects inventory and billing data in our secure enterprise software."
                        />
                     </MetaTags>
                     <InventoryBillingPrivacyPolicy />
                  </>
               }
            />

            <Route
               exact
               path="/products/real-estate"
               element={
                  <>
                     <MetaTags>
                        <title>
                           {" "}
                           Real Estate | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab provides Accelerate internal process to Develop and Design Web Applications & Mobile Applications as per requirements."
                        />
                     </MetaTags>
                     <RealEstate />
                  </>
               }
            />

            <Route
               exact
               path="/products/hr-management-system"
               element={
                  <>
                     <MetaTags>
                        <title>
                           HR Management System Software | Complete HRMS Solution in Surat
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Complete HR Management System (HRMS) for businesses. Payroll management, attendance tracking, leave management, recruitment, and employee self-service portal."
                        />
                        <meta
                           name="keywords"
                           content="HR Management System, HRMS Software, Payroll Software, Attendance Tracking, Leave Management, Recruitment Software, Employee Portal, Surat HR Solutions"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/hr-management-system" />
                        <meta property="og:title" content="HR Management System Software | Fablead Developers Technolab" />
                        <meta property="og:description" content="Streamline HR operations with our comprehensive HRMS software. Automate payroll, attendance, and employee management." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="HR Management System (HRMS) | Fablead Technolabs" />
                        <meta name="twitter:description" content="Modern HR software for efficient workforce management." />
                     </MetaTags>
                     <Hrmanagement />
                  </>
               }
            />

            <Route
               exact
               path="/products/inventory-billing-software-erp"
               element={
                  <>
                     <MetaTags>
                        <title>
                           {" "}
                           Inventory & Billing Software (ERP) | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Advanced Inventory & Billing Software (ERP) for businesses in Surat. Streamline inventory management, billing, GST invoicing, and reporting. Web & Mobile app available."
                        />
                        <meta
                           name="keywords"
                           content="Inventory Software, Billing Software, ERP System, GST Billing, Stock Management, Inventory Tracking, Business Management Software, Surat ERP Solution"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/products/inventory-billing-software-erp" />
                        <meta property="og:title" content="Inventory & Billing Software (ERP) | Fablead Developers Technolab" />
                        <meta property="og:description" content="Complete inventory management and billing solution with GST compliance for retail, wholesale, and manufacturing businesses." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Inventory & Billing ERP Software | Fablead Technolabs" />
                        <meta name="twitter:description" content="Automate your business operations with our advanced Inventory & Billing ERP software." />
                     </MetaTags>
                     <Inventorbilling />
                  </>
               }
            />

            <Route
               exact
               path="/contact"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Contact Us | Get in Touch | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Get in touch with Fablead Developers Technolab for web development, design, and digital marketing services. Request a quote or consultation."
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/contact" />
                     </MetaTags>
                     <ContactPage />
                  </>
               }
            />
            <Route
               exact
               path="/services/cms-website"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Cms-Website-development | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="CMS Website Development Services in Surat. WordPress, Joomla, Drupal development. Custom themes, plugins, migration. Easy-to-manage content management systems."
                        />
                        <meta
                           name="keywords"
                           content="CMS Development, WordPress Development, Joomla Development, Drupal, Custom CMS, Theme Development, Plugin Development, Website Migration, Surat CMS Experts"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/cms-website" />
                        <meta property="og:title" content="CMS Website Development | Fablead Developers Technolab" />
                        <meta property="og:description" content="Professional CMS development services for easy website management. WordPress experts and custom solutions." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="CMS Website Development Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Powerful content management systems for dynamic websites." />
                     </MetaTags>
                     <CmsWebsiteDevelopment />
                  </>
               }
            />
            <Route
               exact
               path="/services/web-maintenance"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Website Maintenance Services | Web Support & Updates | Fablead Technolabs
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional website maintenance services including security updates, bug fixes, backups, and performance optimization. 24/7 support available."
                        />
                        <meta
                           name="keywords"
                           content="Website Maintenance, Web Support, Website Updates, Security Patches, Bug Fixes, Website Backup, Performance Optimization, Monthly Maintenance, Surat IT Support"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/web-maintenance" />
                        <meta property="og:title" content="Website Maintenance Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Reliable website maintenance services to keep your site running smoothly. 24/7 support available." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Website Maintenance Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Expert web support and maintenance for business continuity." />
                     </MetaTags>
                     <WebMaintenance />
                  </>
               }
            />
            <Route
               exact
               path="/services/website-design"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Website-Design | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Creative Website Design Services in Surat. Modern, responsive, user-friendly web design. UI/UX design, landing pages, redesign services. Get stunning website designs."
                        />
                        <meta
                           name="keywords"
                           content="Website Design, Web Design Company, Responsive Web Design, UI UX Design, Creative Website, Landing Page Design, Website Redesign, Surat Web Designers"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/website-design" />
                        <meta property="og:title" content="Professional Website Design Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Beautiful, modern website designs that convert visitors into customers. Professional web design services." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Website Design Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Creative web design solutions for modern businesses." />
                     </MetaTags>
                     <WebsiteDesign />
                  </>
               }
            />

            <Route
               exact
               path="/services/website-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Website-Development | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional Website Development Services in Surat. Custom web development, responsive design, e-commerce solutions, CMS development. Build your business website with experts."
                        />
                        <meta
                           name="keywords"
                           content="Website Development, Web Development Company, Custom Website Design, Responsive Web Development, Business Website, Professional Web Developers, Surat IT Services"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/website-development" />
                        <meta property="og:title" content="Professional Website Development Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Custom website development services for businesses. Responsive, fast, and SEO-friendly websites built with latest technologies." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Website Development Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Expert web developers creating custom websites for your business success." />
                     </MetaTags>
                     <WebsiteDevelopment />
                  </>
               }
            />

            <Route
               exact
               path="/services/mobile-apps"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Mobile App Development Company | iOS & Android App Developers Surat
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional Mobile App Development Services in Surat. Native iOS, Android, and hybrid apps. React Native, Flutter development. Build your dream mobile app."
                        />
                        <meta
                           name="keywords"
                           content="Mobile App Development, iOS App Development, Android App Development, React Native, Flutter, Hybrid Apps, Mobile App Developers, Surat App Company"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/mobile-apps" />
                        <meta property="og:title" content="Mobile App Development Company | Fablead Developers Technolab" />
                        <meta property="og:description" content="Expert mobile app developers creating innovative iOS and Android applications for businesses." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Mobile App Development Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Transform your ideas into powerful mobile applications." />
                     </MetaTags>
                     <MobileApps />
                  </>
               }
            />

            <Route
               exact
               path="/services/e-commerce"
               element={
                  <>
                     <MetaTags>
                        <title>
                           E-Commerce-Development | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Ecommerce Development Services in Surat. Custom online stores, shopping cart development, payment gateway integration, multi-vendor marketplaces. Sell online successfully."
                        />
                        <meta
                           name="keywords"
                           content="Ecommerce Development, Online Store Development, Shopping Cart Development, WooCommerce, Magento, Shopify, Payment Integration, Multi-vendor Marketplace, Surat Ecommerce"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/e-commerce" />
                        <meta property="og:title" content="Ecommerce Development Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Build successful online stores with our ecommerce development services. Feature-rich and conversion-optimized." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Ecommerce Development Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Complete ecommerce solutions for online retail success." />
                     </MetaTags>
                     <EcomDevelopment />
                  </>
               }
            />
            {/* NEW ROUTES ADD  */}
            <Route
               exact
               path="/services/shopify-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Shopify-Development | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Shopify Development Services in Surat. Custom Shopify stores, theme development, app integration, migration to Shopify. Build your online store on world's best platform."
                        />
                        <meta
                           name="keywords"
                           content="Shopify Development, Shopify Store Design, Shopify Theme Development, Shopify Apps, Shopify Migration, Ecommerce Platform, Shopify Experts, Surat Shopify Developers"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/shopify-development" />
                        <meta property="og:title" content="Shopify Development Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Expert Shopify developers creating high-converting online stores. Complete Shopify solutions." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Shopify Development Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Launch successful Shopify stores with expert development support." />
                     </MetaTags>
                     <ShopifyDevService />
                  </>
               }
            />
            <Route
               exact
               path="/services/graphics-design"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Graphics-Design | Fablead Developers Technolab | Web Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional Graphic Design Services in Surat. Logo design, branding, marketing materials, social media graphics, UI design. Creative designs that stand out."
                        />
                        <meta
                           name="keywords"
                           content="Graphic Design, Logo Design, Branding Services, Creative Design, Marketing Materials, Social Media Graphics, UI Design, Surat Graphic Designers"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/graphics-design" />
                        <meta property="og:title" content="Graphic Design Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Creative graphic design services for brand identity and marketing. Professional designers team." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Graphic Design Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Stunning visual designs that elevate your brand." />
                     </MetaTags>
                     <GraphicsDesignService />
                  </>
               }
            />
            <Route
               exact
               path="/services/seo-service"
               element={
                  <>
                     <MetaTags>
                        <title>
                           SEO Services | Search Engine Optimization Company Surat | Fablead Technolabs
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional SEO services to improve your website ranking. On-page, off-page optimization, keyword research, and link building strategies."
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/seo-service" />
                        <meta
                           property="og:title"
                           content="SEO Services | Search Engine Optimization | Fablead Technolabs"
                        />
                        <meta
                           property="og:description"
                           content="Boost your online presence with expert SEO services. Increase organic traffic and improve search rankings."
                        />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta
                           name="twitter:title"
                           content="SEO Services | Fablead Technolabs"
                        />
                        <meta
                           name="twitter:description"
                           content="Expert SEO strategies to grow your business online visibility."
                        />
                     </MetaTags>
                     <SeoService />
                  </>
               }
            />
            <Route
               exact
               path="/services/server-management"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Server Management & Support | Cloud Infrastructure
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Professional Server Management Services in Surat. AWS, Azure, Google Cloud management. Server setup, monitoring, security, backups. 24/7 DevOps support."
                        />
                        <meta
                           name="keywords"
                           content="Server Management, Cloud Management, AWS Services, Azure Cloud, Google Cloud, DevOps Support, Server Security, Cloud Migration, Surat IT Infrastructure"
                        />
                        <link rel="canonical" href="https://www.fableadtechnolabs.com/services/server-management" />
                        <meta property="og:title" content="Server Management Services | Fablead Developers Technolab" />
                        <meta property="og:description" content="Expert server management and cloud infrastructure services. Reliable 24/7 monitoring and support." />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Server Management Services | Fablead Technolabs" />
                        <meta name="twitter:description" content="Secure and scalable cloud server management solutions." />
                     </MetaTags>
                     <ServerManageService />
                  </>
               }
            />
            {/* NEW ROUTES ADD  */}

            <Route
               exact
               path="/training-and-courses/front-end-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Frontend Development | React JS | Angular JS | Fablead Developers Technolab{" "}
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Empower Your Future with Premier Frontend Development Course at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <FrontEndDevelopment />
                  </>
               }
            />
            <Route
               exact
               path="/training-and-courses/back-end-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Backend Development | Node JS | Python | Codeigniter | Laravel | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Empower Your Future with Premier Backend Development Course at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <BackendDevelopment />
                  </>
               }
            />

            <Route
               exact
               path="/training-and-courses/full-stack-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Full Stack Development | Wordpress | React JS | Angular JS | Node JS | Python | Codeigniter | Laravel | Fablead Developers Technolab{" "}
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Empower Your Future with Premier Fullstack Development Course at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <FullStackDevelopment />
                  </>
               }
            />

            <Route
               exact
               path="/training-and-courses/mobile-app-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           Mobile Application Development | Flutter | React Native | Fablead Developers Technolab
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Empower Your Future with Premier Mobile Application Development Course at Fablead Developers Technolab."
                        />
                     </MetaTags>
                     <ApplicationDevelopment />
                  </>
               }
            />

            <Route
               exact
               path="/training-and-courses/cms-development"
               element={
                  <>
                     <MetaTags>
                        <title>
                           CMS Development Course | WordPress & Squarespace Training | Fablead Technolabs
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Learn CMS development with WordPress and Squarespace. Build custom themes, plugins, and manage content effectively."
                        />
                     </MetaTags>
                     <CmsDevelopment />
                  </>
               }
            />
            <Route
               exact
               path="/support"
               element={
                  <>
                     <MetaTags>
                        <title>Support | Fablead Developers Technolab</title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta name="description" content="Get help and contact Fablead Developers Technolab. Explore FAQs, request support, or speak with our support team." />
                     </MetaTags>
                     <SupportPage />
                  </>
               }
            />
            <Route
               exact
               path="/404"
               element={
                  <>
                     <PageNotFound />
                  </>
               }
            />
            <Route
               path="*"
               element={
                  <>
                     <Navigate to="/404" />
                  </>
               }
            />
         </Routes>
      </>
   );
}
export default RoutesPage;
