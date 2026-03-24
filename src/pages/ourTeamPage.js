import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";
import Header from "../components/headers";
import Footer from "../components/footer";
import TopBar from "../components/topBar";
import Log from "../components/innerCallToLog";
import Raj_Singh from "../assets/images/aboutnewImg/raj_singh.png";
import Hetal_Singh from "../assets/images/aboutnewImg/hetal_singh.png";

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
      role: "Founder and Owner",
      image:
        Hetal_Singh,
      bio: "An experienced Senior Software Engineer with 14+ years of experience in the IT industry. Skilled in SQL, PHP, web applications, and modern technologies, with a solid foundation in Information Technology from CGPIT.",
      details: [
        "She leads a dynamic team of talented developers and designers, delivering high-quality web and software solutions tailored to client needs.",

      ],
    },
    {
      name: "Raj Singh",
      role: "Co-Founder CEO-CTO",
      image:
        Raj_Singh,
        bio: "A passionate technology leader with 14+ years of experience in the IT industry. Leading the company with a focus on innovation, quality, and client satisfaction.",
        details: [
          "Experienced in web and mobile development, he has successfully delivered multiple projects across industries like e-commerce, real estate, and corporate solutions"
        ],
     
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <section className="about section-bg fade-up">
        <div className="section-title1">
          <div className="about_us">Team</div>
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
                    <div className="team-social social-links mt-3">
                      <a
                        href="https://twitter.com/fablead_tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter mx-4"
                        aria-label="Twitter"
                      >
                        <Twitter />
                      </a>
                      <a
                        href="https://www.facebook.com/fableaddevelopers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                        aria-label="Facebook"
                      >
                        <Facebook />
                      </a>
                      <a
                        href="https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin mx-4"
                        aria-label="LinkedIn"
                      >
                        <Linkedin />
                      </a>
                    </div>
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
