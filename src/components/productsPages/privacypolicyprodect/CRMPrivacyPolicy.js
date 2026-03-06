import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Users, Mail, MapPin, Cookie, RefreshCcw } from 'lucide-react';
import TopBar from '../../topBar';
import Headers from '../../headers';
import InnerCallToLog from '../../innerCallToLog';
import Footer from '../../footer';
import '../../../assets/css/privacypolicy.css';

const CRMPrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <TopBar />
            <Headers />
            <section className="services section-bg fade-up">
                <div className="text-center mb-5 section-title1">
                    <div className="pt-5" role="heading" aria-level="1">
                        CRM System Privacy Policy
                    </div>
                    <p className="header-content prodectpage-ecommerce-subheading">
                        We value your trust and safeguard your business data
                    </p>
                    <span className="badge bg-secondary">Last updated: July 17, 2025</span>
                </div>

                <div className="bg-light pb-5">
                    <div className="container">

                        {/* Intro */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p className="mb-3">
                                    At <strong className="text-primary-policy">Fablead Developers Technolab</strong>, we are dedicated to safeguarding the privacy and confidentiality of our clients and CRM users. This Privacy Policy explains how we collect, use, store, and protect your business and user data within our CRM Web & Mobile APP (CRM) solutions.
                                </p>
                                <p>
                                    By accessing and using our CRM platform, you acknowledge and agree to the terms outlined in this Privacy Policy. If you have any questions or concerns, we encourage you to contact us prior to continuing use of our services.
                                </p>
                            </div>
                        </div>

                        {/* Information Collected */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">Information We Collect</h5>
                            </div>
                            <div className="card-body">
                                {[
                                    { type: 'Business Data', items: ['Company name, address, and tax identification details.'] },
                                    { type: 'User Data', items: ['Names, roles, email addresses, and contact numbers of CRM users.'] },
                                    { type: 'Interaction Data', items: ['Leads, contacts, communication records, and activity history within the CRM platform.'] },
                                    // { type: 'Usage Data', items: ['IP address, login times, pages visited.'] },
                                ].map((section, idx) => (
                                    <div key={idx} className="mb-3 ps-3 border-start border-2 border-primary-policy">
                                        <h6 className="fw-semibold">{section.type}</h6>
                                        <ul className="list-unstyled">
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How We Use */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Eye size={20} /></div>
                                <h5 className="mb-0">How We Use Your Information</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    {[
                                        'Facilitate effective CRM Web & Mobile APP (CRM) and communication.',
                                        'Deliver business insights and analytics to promote growth.',
                                        'Enhance platform functionality, improve user experience, and maintain system security.',
                                        'Provide timely updates, alerts, and essential service notifications.',
                                        'Fulfill legal, regulatory, and business obligations.',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Lock size={20} /></div>
                                <h5 className="mb-0">Data Security</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    {[
                                        'Encryption of data during transmission and at rest.',
                                        'Role-based access controls and robust user authentication mechanisms.',
                                        'Secure data storage on encrypted and protected servers.',
                                        'Routine security audits and proactive risk assessments.',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Users size={20} /></div>
                                <h5 className="mb-0">Data Sharing & Third Parties</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    {[
                                        'Authorized service providers or partners involved in delivering CRM services under strict confidentiality agreements.',
                                        'Legal authorities where disclosure is mandated by law or necessary to protect our rights.',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p className="mt-2">We do not sell or exploit your data for commercial gain.</p>
                            </div>
                        </div>

                        {/* Data Retention */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">Data Retention</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    We retain your data only for the duration necessary to provide our services and comply with legal obligations. Upon account closure or data deletion requests, your information will be securely deleted in accordance with legal and contractual requirements.
                                </p>
                            </div>
                        </div>

                        {/* Rights */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Shield size={20} /></div>
                                <h5 className="mb-0">Your Rights</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    {[
                                        'Access and correction of your business or personal information.',
                                        'Request a copy of your data for portability purposes.',
                                        'Request deletion of your data, subject to legal allowances.',
                                        'Withdraw consent for non-essential data processing activities.',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p className="mt-2">
                                    For all data-related inquiries, please contact us at: <strong className="text-primary-policy"> <a href="mailto:info@fableadtechnolabs.com" className="text-primary-policy" >info@fableadtechnolabs.com </a></strong>
                                </p>
                            </div>
                        </div>

                        {/* Cookies & Updates */}

                        {/* <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 d-flex align-items-center text-primary-policy"><Cookie size={20} /></div>
                                        <h5 className="mb-0">Cookies Policy</h5>
                                    </div>
                                    <div className="card-body">
                                       
                                        <ul>
                                            <li>Managing user sessions and authentication.</li>
                                            <li>Remembering user preferences to enhance personalization.</li>
                                            <li>Conducting performance analysis and improving platform features.</li>
                                        </ul>
                                        <p>
                                            You can manage or disable cookies through your browser settings at any time.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                        <div className="col-md-12">
                            <div className="card shadow-sm">
                                <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                    <div className="me-2 d-flex align-items-center text-primary-policy"><RefreshCcw size={20} /></div>
                                    <h5 className="mb-0">Policy Updates</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        This Privacy Policy may be updated periodically to reflect changes in our services or legal obligations. Any updates will be published on this page along with the date of the latest revision. We recommend reviewing this policy regularly to stay informed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Compliance */}
                        <div className="card mt-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Lock size={20} /></div>
                                <h5 className="mb-0">Compliance with Data Protection Regulations</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    We adhere to all applicable data protection regulations, including the General Data Protection Regulation (GDPR), the Indian Digital Personal Data Protection (DPDP) Act, and other relevant privacy frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InnerCallToLog />
            <Footer />
        </>
    );
};

export default CRMPrivacyPolicy;
