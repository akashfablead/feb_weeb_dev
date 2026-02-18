import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Users, Mail, MapPin, Cookie, RefreshCcw } from 'lucide-react';
import TopBar from '../../topBar';
import Headers from '../../headers';
import InnerCallToLog from '../../innerCallToLog';
import Footer from '../../footer';
import '../../../assets/css/privacypolicy.css';

const HRManagementPrivacyPolicy = () => {
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
                        HR Management System Privacy Policy
                    </div>
                    <p className="header-content prodectpage-ecommerce-subheading">
                        Protecting your workforce data with transparency and trust
                    </p>
                    <span className="badge bg-secondary">Last updated: July 16, 2025</span>
                </div>

                <div className="bg-light pb-5">
                    <div className="container">
                        {/* Intro */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p className=" mb-3">
                                    At <strong className="text-primary-policy">Fablead Developers Technolab</strong>, we are committed to maintaining the confidentiality, integrity, and security of HR-related data managed through our HR Management System (HRMS).
                                </p>
                                <p className="">
                                    This Privacy Policy outlines how we collect, use, and protect employee, employer, and organizational data within our HRMS platform in accordance with labor laws, data privacy regulations, and industry best practices.
                                </p>
                            </div>
                        </div>

                        {/* Data Collected */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0 ">Information We Collect</h5>
                            </div>
                            <div className="card-body">
                                {[
                                    { type: 'Employee Information', items: ['Full name, contact details, ID numbers, job role'] },
                                    { type: 'HR Records', items: ['Leave records, performance reviews, payroll data, benefits'] },
                                    { type: 'System Usage', items: ['Login times, device used, access logs'] },
                                    { type: 'Documents', items: ['Resumes, offer letters, contracts, ID proof'] },
                                ].map((item, idx) => (
                                    <div key={idx} className="mb-3 ps-3 border-start border-2 border-primary-policy">
                                        <h6 className="fw-semibold">{item.type}</h6>
                                        <ul className="list-unstyled ">
                                            {item.items.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Usage Purpose */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Eye size={20} /></div>
                                <h5 className="mb-0 ">How We Use Your Information</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled  ps-3">
                                    {[
                                        'To manage employee lifecycle and records',
                                        'To process payroll and benefits',
                                        'To analyze performance and attendance',
                                        'To communicate updates and HR policies',
                                        'To comply with labor laws and audits',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Security */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Lock size={20} /></div>
                                <h5 className="mb-0 ">Data Security</h5>
                            </div>
                            <div className="card-body">
                                <p className="">
                                    We employ robust encryption, authentication, secure servers, and role-based access to ensure data confidentiality and integrity across your HRMS instance.
                                </p>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Users size={20} /></div>
                                <h5 className="mb-0 ">Data Sharing</h5>
                            </div>
                            <div className="card-body">
                                <p className="">
                                    Data may be shared only with authorized stakeholders (e.g., finance, compliance officers) or third-party processors (e.g., payroll providers) under NDA and regulatory obligations.
                                </p>
                            </div>
                        </div>

                        {/* Rights */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Shield size={20} /></div>
                                <h5 className="mb-0 ">Your Rights</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled  ps-3">
                                    {[
                                        'View or correct your HR records',
                                        'Request removal of outdated or irrelevant data',
                                        'Withdraw consent for non-essential processing',
                                    ].map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Cookies & Updates */}
                        <div className="row g-4 mt-3">
                            <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 d-flex align-items-center text-primary-policy"><Cookie size={20} /></div>
                                        <h5 className=" mb-0">Cookies Policy</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="">
                                            HRMS may use cookies for session management and personalization. You can manage cookie preferences in your browser settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 d-flex align-items-center text-primary-policy"><RefreshCcw size={20} /></div>
                                        <h5 className=" mb-0">Policy Updates</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="">
                                            This policy may be revised periodically. Please check this page for the latest updates.
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

export default HRManagementPrivacyPolicy;
