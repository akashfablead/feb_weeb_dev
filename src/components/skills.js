import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import SkillsImage1 from "../assets/images/service-banners/Group 106-min.webp";

function Skills() {
  const [skills, setSkills] = useState([
    { name: "PHP", percentage: 0 },
    { name: "Wordpress & WooCommerce", percentage: 0 },
    { name: "Laravel", percentage: 0 },
    { name: "Codeignitor", percentage: 0 },
    { name: "Squarespace", percentage: 0 },
    { name: "Flutter", percentage: 0 },
    { name: "Node / React / React Native", percentage: 0 },
    { name: "HTML / CSS / CSS3 / Bootstrap / Python", percentage: 0 },
    { name: "Shopify / Webflow", percentage: 0 },
    { name: "Graphic Designing", percentage: 0 },
    { name: "SEO", percentage: 0 },
    { name: "Django", percentage: 0 },
  ]);

  const startAnimation = () => {
    setSkills([
      { name: "PHP", percentage: 95 },
      { name: "Wordpress & WooCommerce", percentage: 95 },
      { name: "Laravel", percentage: 95 },
      { name: "Codeignitor", percentage: 90 },
      { name: "Squarespace", percentage: 90 },
      { name: "Flutter", percentage: 90 },
      { name: "Node / React / React Native", percentage: 95 },
      { name: "HTML / CSS / CSS3 / Bootstrap / Python", percentage: 90 },
      { name: "Shopify / Webflow", percentage: 95 },
      { name: "Graphic Designing", percentage: 90 },
      { name: "SEO", percentage: 95 },
      { name: "Django", percentage: 90 },
    ]);
  };

  useEffect(() => {
    const animationTimeout = setTimeout(startAnimation, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <section id="skills" className="skills ps-3 pe-3">
      <Container className="" data-aos="fade-up">
        <div className="section-title">
          <div role="heading" aria-level="2">What we Provide</div>
        </div>
        <Row>
          <Col
            lg={6}
            className="d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <Image
              src={SkillsImage1}
              className="skils-img-fluid"
              alt="Skills"
            />
          </Col>
          <Col
            lg={6}
            className="pt-4 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <div className="skills-content">
              {skills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.percentage}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className={`progress-bar progress-bar-striped progress-bar-animated ${skill.name.replace(
                        /\s+/g,
                        ""
                      )}`}
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default React.memo(Skills);
