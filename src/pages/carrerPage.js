import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../components/headers";
import Footer from "../components/footer";
import Log from "../components/innerCallToLog";
import TopBar from "../components/topBar";
import "../assets/css/career.css";
import { BASE_URL } from "../utils";
import { Link } from "react-router-dom";

function CareerPage() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);

  const toggleJobDescription = (jobId) => {
    const job = jobsData.find(j => j.id === jobId);
    if (job && job.fullDescription) {
      setJobDetails(job);
      setShowDetailsModal(true);
    }
  };

  const commonFields = {
    location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    type: "Full Time",
    qualification: "BCA/MCA, B.Tech/M.Tech or equivalent",
  };

  const jobsData = [
    {
      id: 7,
      title: "Full Stack Developer (MERN)",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Work on full stack using MERN stack.",
      fullDescription:
        "Hiring a Full Stack Developer with experience in MongoDB, Express, React, and Node.js to develop scalable web applications end-to-end.",
      ...commonFields,
    },
    {
      id: 8,
      title: "Backend Developer (Node.js / PHP)",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Develop server-side logic and APIs.",
      fullDescription:
        "Looking for a Backend Developer with experience in Node.js or PHP to build secure, scalable APIs and handle server-side logic efficiently.",
      ...commonFields,
    },
    {
      id: 1,
      title: "React and Node JS Developer",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Build scalable web apps using React and Node.js.",
      fullDescription:
        "We are looking for a skilled React and Node.js Developer to develop high-performance and scalable web applications. The candidate should have experience with REST APIs, modern JavaScript frameworks, and backend integration.",
      ...commonFields,
    },
    {
      id: 2,
      title: "WordPress Web Developer",
      department: "Development",
      experience: "6+ months",
      shortDescription: "Develop and customize WordPress websites.",
      fullDescription:
        "Seeking a WordPress Developer who can build, customize, and maintain responsive websites. Experience with themes, plugins, and basic PHP is required.",
      ...commonFields,
    },
    {
      id: 3,
      title: "Frontend Developer (React JS)",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Create modern UI using React.js.",
      fullDescription:
        "Looking for a Frontend Developer with strong knowledge of React.js, HTML, CSS, and JavaScript to build responsive and user-friendly interfaces.",
      ...commonFields,
    },
    {
      id: 4,
      title: "Flutter Developer (Android / iOS)",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Develop cross-platform mobile apps using Flutter.",
      fullDescription:
        "We are hiring a Flutter Developer to build high-quality mobile applications for Android and iOS using Flutter and Dart. Experience with APIs and Firebase is a plus.",
      ...commonFields,
    },
    {
      id: 5,
      title: "Shopify Developer",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Build and manage Shopify stores.",
      fullDescription:
        "Looking for a Shopify Developer who can design, develop, and maintain eCommerce stores. Experience with themes, apps, and liquid templating is required.",
      ...commonFields,
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Management",
      experience: "2+ years",
      shortDescription: "Lead product planning and execution.",
      fullDescription:
        "We are seeking a Product Manager to manage product lifecycle, coordinate with teams, and deliver high-quality products aligned with business goals.",
      qualification: "MBA / B.Tech or equivalent",
      ...commonFields,
    },
    {
      id: 7,
      title: "Full Stack Developer (MERN)",
      department: "Development",
      experience: "1+ years",
      shortDescription: "Work on full stack using MERN stack.",
      fullDescription:
        "Hiring a Full Stack Developer with experience in MongoDB, Express, React, and Node.js to develop scalable web applications end-to-end.",
      ...commonFields,
    },

  ];
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    resume: null,
    cover_letter: "",
    city: "",
    timeline: "Immediately",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isVerified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);
  const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY || "";
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey.trim());

  const handleVerification = (value) => {
    setVerified(value);
  };

  // Filter states
  const [locationFilter, setLocationFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Get unique values for filters
  const locations = [...new Set(jobsData.map((job) => job.location))];
  const departments = [...new Set(jobsData.map((job) => job.department))];
  const jobTypes = [...new Set(jobsData.map((job) => job.type))];

  // Filter jobs based on all criteria
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation = locationFilter
      ? job.location === locationFilter
      : true;
    const matchesDepartment = departmentFilter
      ? job.department === departmentFilter
      : true;
    const matchesJobType = jobTypeFilter ? job.type === jobTypeFilter : true;
    return (
      matchesSearch && matchesLocation && matchesDepartment && matchesJobType
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setVerified(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setJobDetails(null);
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone_no || !phoneRegex.test(formData.phone_no)) {
      errors.phone_no = "Enter a valid 10-digit phone number";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    if (!formData.resume) {
      errors.resume = "Please upload your resume";
    } else {
      const allowedTypes = ["application/pdf"];
      if (!allowedTypes.includes(formData.resume.type)) {
        errors.resume = "Only PDF files are allowed";
      } else if (formData.resume.size > 2 * 1024 * 1024) {
        errors.resume = "File size should be less than 2MB";
      }
    }

    return errors;
  };
  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    if (isRecaptchaConfigured && !isVerified) {
      setErrorMessage("Please verify that you're not a robot by clicking the ReCAPTCHA checkbox.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    setIsSubmitting(true);

    // Convert resume file to base64
    const resumeBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(formData.resume);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });

    // Prepare form data for submission
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone_no,
      city: formData.city || "Surat",
      message:
        formData.cover_letter ||
        "Applying for " + (selectedJob?.title || "position"),
      resume_file: resumeBase64,
      resume_name: formData.resume.name,
      selection_type: "job",
      technology: selectedJob?.department,
      timeline: formData.timeline || "Immediately",
      timestamp: new Date().toISOString(),
      type: "job",
    };

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "hXuRUGsEGuhGf6KGeereSSas",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          setFieldErrors({});
          setSuccessMessage("Application submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone_no: "",
            resume: null,
            cover_letter: "",
            city: "",
            timeline: "Immediately",
          });
          handleCloseModal();
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          setErrorMessage("Failed to submit application. Please try again.");
          setTimeout(() => {
            setErrorMessage("");
          }, 1000);
        }
      } else {
        setErrorMessage("Failed to submit application. Server error.");

        setTimeout(() => {
          setErrorMessage("");
        }, 1000);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
    setFieldErrors((prev) => ({ ...prev, resume: "" }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <section id="why-us" className="why-us section-bg fade-up career-page">
        <div className="section-title1 d-flex justify-content-center align-items-center flex-column">
          <div className="text-center" role="heading" aria-level="1">
            Career
          </div>
          <p className="header-content contact-us-page">
            Join our team to grow your career in a dynamic environment focused on innovation, <br />
            continuous learning, and real-world impact.
          </p>
        </div>
        <Container className="mt-5 pb-5" data-aos="fade-up">
          {/* Search Bar and Filters */}
          <div className="career-search-filter-wrapper">
            {/* 🔍 Search Section */}
            <div className="career-search-section">
              <input
                type="text"
                placeholder="Search job name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="career-search-input"
              />

              {/* <Link
                to="/contact"
                className="get-quote-btn d-none d-lg-inline-flex align-items-center"
                rel="noopener noreferrer"
              >
                Search <i className="bi bi-arrow-right ms-2"></i>
              </Link> */}
              <button className="career-search-button">Search</button>
            </div>

            {/* 🔽 Filter Section */}
            <div className="career-filter-section">


              <select
                className="career-filter-select"
                value={departmentFilter}
                onChange={(e) => {
                  setDepartmentFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">All Departments</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                className="career-filter-select"
                value={jobTypeFilter}
                onChange={(e) => {
                  setJobTypeFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">All Job Types</option>
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Title */}
          <h2 className="career-jobs-count">
            {filteredJobs.length} Open Positions
          </h2>

          {/* Table */}
          <div className="career-jobs-table">
            {/* Header */}
            <div className="career-jobs-header">
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Job Name
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Qualification
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black", marginLeft: "10px" }}
              >
                Job Type
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black", marginLeft: "10px" }}
              >
                Experience
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Job Description
              </div>

              <div></div>
            </div>

            {/* Job Rows */}
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="career-job-row"
                  style={{ fontSize: "15px" }}
                >
                  <div className="career-job-title">{job.title}</div>

                  <div className="career-job-qualification">
                    {job.qualification}
                  </div>
                  <div>
                    <span className="career-job-type-badge">{job.type}</span>
                  </div>

                  <div className="career-job-experience">{job.experience}</div>
                  <div className="career-job-department">

                    {job.fullDescription}

                  </div>
                  {/* <div className="career-job-actions">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="career-apply-btn"
                    >
                      Apply
                    </button>
                  </div> */}
                </div>
              ))
            ) : (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#6c757d' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>No Jobs Found</h3>
                <p style={{ fontSize: '15px' }}>We currently don't have any positions matching your search criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="career-pagination">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="career-page-btn"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`career-page-btn ${currentPage === index + 1 ? "active" : ""}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="career-page-btn"
              >
                Next
              </button>
            </div>
          )}

          {/* <div className="career-jobs-count">
            Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
          </div> */}
        </Container>

        {/* Application Modal */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          size="lg"
          className="career-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="career-modal-title">
              Apply for {selectedJob?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitApplication} className="career-form">
              {/* Error Message */}
              {errorMessage && (
                <div className="alert alert-danger mb-3" role="alert">
                  {errorMessage}
                </div>
              )}
              {/* Success Message */}
              {successMessage && (
                <div className="alert alert-success mb-3" role="alert">
                  {successMessage}
                </div>
              )}



              {/* 🔥 2 Column Row */}
              <Row>
                {/* Left Column */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      Full Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}

                      className="career-form-control"
                    />
                    {fieldErrors.name && (
                      <p className="text-danger">{fieldErrors.name}</p>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      Email Address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}

                      className="career-form-control"
                    />
                    {fieldErrors.email && (
                      <p className="text-danger">{fieldErrors.email}</p>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      City *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleInputChange}

                      className="career-form-control"
                    />
                    {fieldErrors.city && (
                      <p className="text-danger">{fieldErrors.city}</p>
                    )}
                  </Form.Group>
                </Col>

                {/* Right Column */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      Phone Number *
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone_no"
                      placeholder="Enter your phone number"
                      value={formData.phone_no}
                      onChange={handleInputChange}

                      className="career-form-control"
                    />
                    {fieldErrors.phone_no && (
                      <p className="text-danger">{fieldErrors.phone_no}</p>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      Available to Join *
                    </Form.Label>
                    <Form.Select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}

                      className="career-form-control"
                    >
                      <option value="Immediately">Immediately</option>
                      <option value="1 Week">1 Week</option>
                      <option value="2 Weeks">2 Weeks</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="career-form-label">
                      Resume/CV *
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}

                      className="career-form-control"
                    />
                    {fieldErrors.resume && (
                      <p className="text-danger">{fieldErrors.resume}</p>
                    )}
                    <Form.Text className="career-form-text">
                      Accepted formats: PDF
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              {/* Remaining Fields Full Width */}
              <Form.Group className="mb-3">
                <Form.Label className="career-form-label">
                  Cover Letter
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="cover_letter"
                  placeholder="Tell us why you're a good fit"
                  value={formData.cover_letter}
                  onChange={handleInputChange}
                  className="career-form-control career-textarea"
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex justify-content-start">
                {isRecaptchaConfigured ? (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={handleVerification}
                  />
                ) : (
                  <div className="alert alert-warning mb-0" style={{ fontSize: '14px', padding: '10px' }}>
                    reCAPTCHA site key is not configured. Set REACT_APP_RECAPTCHA_SITE_KEY in .env
                  </div>
                )}
              </Form.Group>

              <div className="career-modal-actions">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="career-cancel-btn"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="career-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Submit Application"}
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Job Details Modal */}
        <Modal
          show={showDetailsModal}
          onHide={handleCloseDetailsModal}
          centered
          size="lg"
          className="career-modal career-details-modal"
        >
          <Modal.Header closeButton>
            <div className="career-details-head">
              <Modal.Title className="career-modal-title career-details-modal-title">
                {jobDetails?.title || "Job Details"}
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            {jobDetails && (
              <div className="career-details-wrap">
                <div className="career-details-desc">
                  <p className="career-details-paragraph">
                    {jobDetails.fullDescription}
                  </p>
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="career-details-footer">
            <button
              type="button"
              className="career-view-btn"
              onClick={handleCloseDetailsModal}
            >
              Close
            </button>
            <button
              type="button"
              className="career-apply-btn"
              onClick={() => {
                if (!jobDetails) return;
                handleCloseDetailsModal();
                handleApplyClick(jobDetails);
              }}
            >
              Apply Now
            </button>
          </Modal.Footer>
        </Modal>
      </section>
      <Log />
      <Footer />
    </>
  );
}

export default React.memo(CareerPage);
