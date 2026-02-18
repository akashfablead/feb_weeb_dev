import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Users, Mail, MapPin, Cookie, RefreshCcw } from 'lucide-react';
import TopBar from '../../topBar';
import Headers from '../../headers';
import InnerCallToLog from '../../innerCallToLog';
import Footer from '../../footer';
import '../../../assets/css/privacypolicy.css';

const HMPrivacyPolicy = () => {
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
                        Hospital & Clinic Management System (HMS) App – Privacy Policy
                    </div>
                    <p className="header-content prodectpage-ecommerce-subheading">
                        How we collect, use, and safeguard your information
                    </p>
                    <span className="badge bg-secondary">Effective Date: July 16, 2025</span>
                </div>

                <div className="bg-light pb-5">
                    <div className="container">

                        {/* Intro */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p>
                                    This Privacy Policy explains how <strong className="text-primary-policy">Fablead Developers Technolab</strong> our collects, uses, and safeguards the information you provide while using our Hospital Management System (HMS) mobile and web application . By using our App, you agree to the practices described in this policy.
                                </p>
                            </div>
                        </div>

                        {/* Information We Collect */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0">Information We Collect</h5>
                            </div>
                            <div className="card-body">
                                {[
                                    { type: 'Patient Information', items: ['Name, contact details, date of birth, gender, medical history, appointment records'] },
                                    { type: 'Staff Information', items: ['Name, role, qualifications, contact details, work schedule'] },
                                    { type: 'Hospital Information', items: ['Name, address, departments and services'] },
                                    { type: 'Usage Data', items: ['Device details, IP address, browser type, in-app activity logs'] },
                                    { type: 'Uploaded Documents', items: ['Medical reports, prescriptions, patient-related files'] },
                                ].map((item, idx) => (
                                    <div key={idx} className="mb-3 ps-3 border-start border-2 border-primary-policy">
                                        <h6 className="fw-semibold">{item.type}</h6>
                                        <ul className="list-unstyled">
                                            {item.items.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How We Use the Information */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><Eye size={20} /></div>
                                <h5 className="mb-0">How We Use the Information</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    {[
                                        'Book, update, and manage appointments',
                                        'Add, update, and manage hospital staff details',
                                        'Maintain and organize hospital records',
                                        'Send reminders, notifications, and service updates',
                                        'Improve our services and app performance',
                                        'Comply with healthcare regulations and legal requirements'
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sharing of Information */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><Users size={20} /></div>
                                <h5 className="mb-0">Sharing of Information</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    We do not sell your personal information. Data may only be shared with:
                                </p>
                                <ul>
                                    <li>Authorized hospital staff for patient care and operational management</li>
                                    <li>Third-party service providers assisting in service delivery (bound by confidentiality agreements)</li>
                                    <li>Government authorities, if legally required</li>
                                </ul>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><Lock size={20} /></div>
                                <h5 className="mb-0">Data Security</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    We implement industry-standard security measures, including encryption and restricted access controls, to protect your data from unauthorized access, disclosure, alteration, or destruction.
                                </p>
                            </div>
                        </div>

                        {/* Data Retention */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><Shield size={20} /></div>
                                <h5 className="mb-0">Data Retention</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    We retain patient and hospital-related records for as long as necessary to provide our services and comply with applicable laws.
                                </p>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><Shield size={20} /></div>
                                <h5 className="mb-0">Your Rights</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled ps-3">
                                    <li>Request access to your personal data</li>
                                    <li>Request corrections or deletion of your data (subject to legal/medical record retention requirements)</li>
                                    <li>Withdraw consent for certain data uses</li>
                                </ul>
                            </div>
                        </div>

                        {/* Third-Party Links */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 text-primary-policy"><MapPin size={20} /></div>
                                <h5 className="mb-0">Third-Party Links</h5>
                            </div>
                            <div className="card-body">
                                <p>
                                    Our App may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.
                                </p>
                            </div>
                        </div>

                        {/* Cookies & Policy Updates */}
                        <div className="row g-4 mt-3">
                            <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 text-primary-policy"><Cookie size={20} /></div>
                                        <h5 className="mb-0">Cookies Policy</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Our platform may use cookies to enhance the user experience. You can control cookie preferences through your browser settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 text-primary-policy"><RefreshCcw size={20} /></div>
                                        <h5 className="mb-0">Policy Updates</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                                        </p>
                                    </div>
                                </div>
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

export default HMPrivacyPolicy;
