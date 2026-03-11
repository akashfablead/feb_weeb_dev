import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

function TestimonialAbout() {
  const testimonialData = [
    {
      name: "Michael B. - Sydney, AU",
      testimonial:
        "Working with this team transformed our business operations. Their innovative solutions and dedication to excellence exceeded our expectations. Highly recommended!",
    },
    {
      name: "Priya S. - Mumbai, IN",
      testimonial:
        "Exceptional service and outstanding results. The team demonstrated deep technical expertise and maintained clear communication throughout the project.",
    },
    {
      name: "David L. - Toronto, CA",
      testimonial:
        "Professional, efficient, and truly committed to delivering quality work. They understood our requirements perfectly and executed flawlessly.",
    },
    {
      name: "Emma W. - London, UK",
      testimonial:
        "The best development experience we've had. Timely delivery, excellent code quality, and great post-launch support. Will definitely work with them again.",
    },
    {
      name: "Carlos R. - Madrid, ES",
      testimonial:
        "Their attention to detail and problem-solving abilities are impressive. They delivered a solution that perfectly matched our business needs.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // for screens below 768px
        settings: {
          dots: false, // hide dots on mobile
        },
      },
      {
        breakpoint: 480, // for screens below 480px
        settings: {
          dots: false, // hide dots on mobile
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="testimonials section-bg p-1">
      <Container className="" data-aos="fade-up">
        <div className="section-heading">
          <i className="bi bi-quote testimonial_icon"></i>
          <h2>Testimonials</h2>
        </div>

        <Slider {...sliderSettings} className="text-center">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial">{testimonial.testimonial}</p>
              <h3 className="name">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default React.memo(TestimonialAbout);
