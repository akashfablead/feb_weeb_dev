import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Users, Cookie, RefreshCcw } from 'lucide-react';
import TopBar from '../../topBar';
import Headers from '../../headers';
import InnerCallToLog from '../../innerCallToLog';
import Footer from '../../footer';
import '../../../assets/css/privacypolicy.css';

const InventoryBillingPrivacyPolicy = () => {
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
                        Inventory & Billing System Privacy Policy
                    </div>
                    <p className="header-content prodectpage-ecommerce-subheading">
                        Safeguarding your inventory and transaction data is our priority
                    </p>
                    <span className="badge bg-secondary">Last updated: July 16, 2025</span>
                </div>

                <div className="bg-light pb-5">
                    <div className="container">
                        {/* Introduction */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p className="  mb-3">
                                    <strong className="text-primary-policy">Fablead Developers Technolab</strong> is committed to ensuring the security and confidentiality of data handled through our Inventory & Billing System. This policy outlines how we collect, use, and protect business, customer, and transactional data within our system.
                                </p>
                                <p className="">
                                    By using our Inventory & Billing software, you agree to the terms of this Privacy Policy. If you have concerns or questions, please contact our support team.
                                </p>
                            </div>
                        </div>

                        {/* Data Collection */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><FileText size={20} /></div>
                                <h5 className="mb-0 text-primary-policy">Information We Collect</h5>
                            </div>
                            <div className="card-body">
                                {[
                                    { type: 'Business Data', items: ['Company name, GST details, billing address'] },
                                    { type: 'Inventory Records', items: ['Product names, SKUs, stock levels, purchase history'] },
                                    { type: 'Customer & Vendor Data', items: ['Names, contact info, billing/shipping details'] },
                                    { type: 'Transaction Data', items: ['Invoices, payments, taxes, discounts'] },
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
                                <h5 className="mb-0 text-primary-policy">How We Use Your Information</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled  ps-3">
                                    {[
                                        'To manage inventory, sales, and purchases efficiently',
                                        'To generate accurate billing, tax reports, and invoices',
                                        'To streamline vendor and customer communication',
                                        'To comply with accounting, auditing, and tax regulations',
                                        'To improve system features and technical support',
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
                                <h5 className="mb-0 text-primary-policy">Data Security</h5>
                            </div>
                            <div className="card-body">
                                <p className="">
                                    We utilize modern encryption, secure storage, access control, and regular audits to ensure that all inventory and billing data remains confidential and protected from unauthorized access.
                                </p>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Users size={20} /></div>
                                <h5 className="mb-0 text-primary-policy">Data Sharing</h5>
                            </div>
                            <div className="card-body">
                                <p className="">
                                    We do not sell or trade business data. Information is shared only with authorized accounting software, payment gateways, or government agencies as legally required or to provide integrated services.
                                </p>
                            </div>
                        </div>

                        {/* Rights */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                <div className="me-2 d-flex align-items-center text-primary-policy"><Shield size={20} /></div>
                                <h5 className="mb-0 text-primary-policy">Your Rights</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled  ps-3">
                                    {[
                                        'View, update, or correct your business and inventory data',
                                        'Export transaction history or reports on request',
                                        'Request removal of obsolete or test data (where applicable)',
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
                                        <h5 className="text-primary-policy mb-0">Cookies Policy</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="">
                                            Our system may use cookies to improve user experience, manage sessions, and track user interactions. You may disable cookies through your browser settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm">
                                    <div className="card-header-policy d-flex align-items-center bg-opacity-10">
                                        <div className="me-2 d-flex align-items-center text-primary-policy"><RefreshCcw size={20} /></div>
                                        <h5 className="text-primary-policy mb-0">Policy Updates</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="">
                                            This Privacy Policy may be updated periodically. Revisions will be posted here with the updated effective date. We recommend reviewing it regularly.
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

export default InventoryBillingPrivacyPolicy;
