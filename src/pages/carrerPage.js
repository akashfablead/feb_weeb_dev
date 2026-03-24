import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import Header from "../components/headers";
import Footer from "../components/footer";
import Log from "../components/innerCallToLog";
import TopBar from "../components/topBar";
import "../assets/css/career.css";
import { BASE_URL } from "../utils";

function CareerPage() {
  const jobsData = [
    {
      id: 1,
      title: "React and Node JS Developer",
      location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
      type: "Full Time",
      department: "Development",
      experience: "1+ years of relevant experience",
      qualification: "BCA/MCA, B.Tech/M.Tech or equivalent",
    },
    {
      id: 2,
      title: "PHP / Wordpress Web Developer",
      location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
      type: "Full Time",
      department: "Development",
      experience: "6+ months of relevant experience",
      qualification: "BCA/MCA, B.Tech/M.Tech or equivalent",
    },
    // {
    //   id: 3,
    //   title: "UI/UX Designer",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Design",
    //   experience: "1+ years of relevant experience",
    //   qualification: "Graduate in Design or equivalent",
    // },
    // {
    //   id: 4,
    //   title: "Frontend Developer (React)",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Development",
    //   experience: "1+ years of relevant experience",
    //   qualification: "BCA/MCA, B.Tech/M.Tech or equivalent",
    // },
    // {
    //   id: 5,
    //   title: "Backend Developer (Node.js)",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Development",
    //   experience: "1+ years of relevant experience",
    //   qualification: "BCA/MCA, B.Tech/M.Tech or equivalent",
    // },
    // {
    //   id: 6,
    //   title: "Digital Marketing Executive",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Marketing",
    //   experience: "1+ years of relevant experience",
    //   qualification: "Graduate in Marketing or equivalent",
    // },
    // {
    //   id: 7,
    //   title: "SEO Specialist",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Part Time",
    //   department: "Marketing",
    //   experience: "6+ months of relevant experience",
    //   qualification: "Graduate in Marketing or equivalent",
    // },
    // {
    //   id: 8,
    //   title: "HR Executive",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Human Resource",
    //   experience: "1+ years of relevant experience",
    //   qualification: "Graduate in HR or equivalent",
    // },
    // {
    //   id: 9,
    //   title: "Business Development Executive",
    //   location: "A-5001, Ascon Plaza, Adajan, Surat, Gujarat 395009 – India",
    //   type: "Full Time",
    //   department: "Sales",
    //   experience: "6+ months of relevant experience",
    //   qualification: "Graduate in Business or equivalent",
    // },
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

    console.log("Career Application Data:", submissionData);

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "hXuRUGsEGuhGf6KGeereSSas",
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
          console.error("Error sending application:", data.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 1000);
        }
      } else {
        setErrorMessage("Failed to submit application. Server error.");
        console.error(
          "Error sending application. Server returned status:",
          response.status,
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 1000);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error sending application:", error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
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
      <section id="why-us" className="why-us section-bg fade-up">
        <div className="section-title1">
          <div className="contact_us" role="heading" aria-level="1">
            Career
          </div>
        </div>
        <Container className="mt-5 mb-5" data-aos="fade-up">
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

              <button className="career-search-button">Search</button>
            </div>

            {/* 🔽 Filter Section */}
            <div className="career-filter-section">
              {/* <select 
                className="career-filter-select"
                value={locationFilter}
                onChange={(e) => {
                  setLocationFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">All Locations</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc.substring(0, 30)}...</option>
                ))}
              </select> */}

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
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Job Type
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Department
              </div>
              <div
                style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
              >
                Experience
              </div>
              <div></div>
            </div>

            {/* Job Rows */}
            {currentJobs.map((job) => (
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
                <div className="career-job-department">{job.department}</div>
                <div className="career-job-experience">{job.experience}</div>
                <div className="career-job-actions">
                  {/* <button className="career-view-btn">View</button> */}
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="career-apply-btn"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
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

              <div className="career-modal-actions">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="career-cancel-btn"
                  disabled={!formData.name || !formData.email || !formData.phone_no || !formData.city || !formData.resume}
                >
                  Cancel
                </button>
                <button type="submit" className="career-submit-btn">
                  Submit Application
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
      <Log />
      <Footer />
    </>
  );
}

export default React.memo(CareerPage);
