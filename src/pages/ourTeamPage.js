import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";
import Header from "../components/headers";
import Footer from "../components/footer";
import TopBar from "../components/topBar";
import Log from "../components/innerCallToLog";
import Raj_Singh from "../assets/images/aboutnewImg/raj_singh.jpg";
import Hetal_Singh from "../assets/images/aboutnewImg/hetal_singh.jpg";

function OurTeamPage() {
  const highlightExperience = (bioText) => {
    const experienceText = "14+ years of experience in the IT industry";
    const parts = bioText.split(experienceText);

    if (parts.length === 1) return bioText;

    return parts.reduce((acc, part, index) => {
      acc.push(part);
      if (index < parts.length - 1) {
        acc.push(
          <span
            key={`experience-highlight-${index}`}
            style={{ color: "#e66136" }}
          >
            {experienceText}
          </span>
        );
      }
      return acc;
    }, []);
  };

  const teamMembers = [
    {
      name: "Hetal Singh",
      role: "Founder & Owner",
      image: Hetal_Singh,
      linkedinUrl: "https://www.linkedin.com/in/hetal-raj-singh-02ab4065/",
      bio: "An experienced Senior Software Engineer with 14+ years of experience in the IT industry, delivering high-quality, scalable, and robust software solutions with a strong focus on performance, reliability, and innovation.",
      details: [
        "She leads a dynamic team of talented developers and designers, delivering high-quality web and software solutions tailored to client needs.",

      ],
      skills: [
        "ASP.NET",
        "React.js",
        "Angular",
        "Node.js",
        "Next.js",
        "PHP / MySQL",
        "Laravel",
        "WordPress",
        "Product Management",
      ],
      skillsHeader:"Technology Specialist & Expertise in"
    },
    {
      name: "Raj Singh",
      role: "Co-Founder & CEO-CTO",
      image: Raj_Singh,
      linkedinUrl: "https://www.linkedin.com/in/raj-singh-4ba95465/",
      bio: "He is a technology leader with 14+ years of experience in the IT industry, driving innovation and delivering high-quality solutions. Leading the company with a strong focus on performance, scalability, and client satisfaction.",
      details: [
        "Experienced in web and mobile development, he has successfully delivered multiple projects across industries like e-commerce, real estate, and corporate solutions.",
      ],
      skills: [
        "PHP / MySQL",
        "Laravel",
        "CodeIgniter",
        "WordPress",
        "Magento",
        "Server & Cloud Management",
        "Product Management",
      ],
      skillsHeader:"IT Evangelist & Expertise in"
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <section className="about section-bg fade-up our-team-page">
       
    <div className="section-title1">
          <div className="pt-5">Our Team</div>
          <p className="header-content contact-us-page">
          Meet the experts driving innovation with strong technical leadership. <br />
          Backed by years of hands-on development experience.
          </p>
        </div>
        <Container className="py-5" data-aos="fade-up">
          <Row className="g-4 team-members-row">
            {teamMembers.map((member, index) => (
              <Col key={index} md={6} lg={6}>
                <div className="team-card h-100">
                  <div className="team-img-wrap">
                    <img src={member.image} alt={member.name} className="team-img" />
                  </div>
                  <div className="team-content">
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{highlightExperience(member.bio)}</p>
                    <ul className="team-details">
                      {member.details.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                    {member.skills?.length > 0 && (
                      <div className="team-skills">
                        <p className="team-skills-label">{member.skillsHeader}</p>
                        <div className="team-skills-tags" role="list">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="team-skill-tag"
                              role="listitem"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                <div className="team-linkedin-bottom">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-card-icon"
                    aria-label={`LinkedIn — ${member.name}`}
                  >
                    <Linkedin />
                  </a>
                </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Log />
      <Footer />
    </>
  );
}

export default React.memo(OurTeamPage);
