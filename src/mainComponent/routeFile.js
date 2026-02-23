import React from "react";
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
                           Fablead Developers Technolab | Web Development & Design
                           Company
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
                        <meta
                           property="og:title"
                           content="Fablead Developers Technolab | Web Development &amp; Design Company"
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
                           Fablead Developers Technolab | Web Development & Design
                           Company
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
                        <meta
                           property="og:title"
                           content="Fablead Developers Technolab | Web Development &amp; Design Company"
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
                           About Fablead Developers Technolab | Web Development & Design
                           Company
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
                           Services | Fablead Developers Technolab | Web Development &
                           Design Company
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
                           Portfolio | Fablead Developers Technolab | Web Development &
                           Design Company
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
                           Training & Courses | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Career at Fablead Developers Technolab | Web Development &
                           Design Company
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
                           {" "}
                           CRM Web & Mobile APP (CRM) | Fablead Developers Technolab | Web Development & Design
                           Company
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
                           Ecommerce Web & Mobile APP | Fablead Developers Technolab | Web Development &
                           Design Company
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
                           Hospital & Clinic Management System (HMS) | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           WhatsApp Bulk Messaging Platform | Fablead Developers Technolab | Web
                           Development & Design Company
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                           name="viewport"
                           content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                           name="description"
                           content="Fablead Developers Technolab provides WhatsApp Bulk Messaging Platform service to send bulk messages to your customers and clients."
                        />
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
                           Real Estate | Fablead Developers Technolab | Web Development &
                           Design Company
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
                           {" "}
                           HR Management System | Fablead Developers Technolab | Web Development
                           & Design Company
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
                           Inventory & Billing Software (ERP) | Fablead Developers Technolab | Web Development
                           & Design Company
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
                           Contact | Fablead Developers Technolab | Web Development &
                           Design Company
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
                           Cms-Website-development | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Web-Maintenance | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Website-Design | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Website-Development | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Mobile-Apps Fablead Developers Technolab | Web Development &
                           Design Company
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
                           E-Commerce-Development | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Shopify-Development | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Graphics-Design | Fablead Developers Technolab | Web
                           Development & Design Company
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
                           Search-Engine-Optimization-Development | Fablead Developers
                           Technolab | Web Development & Design Company
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
                           Server-Management & Support | Fablead Developers Technolab |
                           Web Development & Design Company
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
                           Frontend Development | React JS | Angular JS | Fablead
                           Developers Technolab{" "}
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
                           Backend Development | Node JS | Python | Codeigniter | Laravel
                           | Fablead Developers Technolab
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
                           Full Stack Development | Wordpress | React JS | Angular JS |
                           Node JS | Python | Codeigniter | Laravel | Fablead Developers
                           Technolab{" "}
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
                           Mobile Application Development | Flutter | React Native |
                           Fablead Developers Technolab
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
                           CMS Development | Wordpress Development | Squarespace
                           Development | Fablead Developers Technolab
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
