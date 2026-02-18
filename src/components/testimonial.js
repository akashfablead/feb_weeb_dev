import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

function Testimonial() {
  const testimonialData = [
    {
      name: "STEFANO S. - Zurich, CH",
      testimonial:
        "I strongly recommend this company because they did a great job with my devastated old Wordpress site. they showed analytics skill, speed, deep knowledge of Wordpress and php. Good cost per hour in view of a great job quality.Fast to reply, he has got patience and calmness! Absolutely positive!",
    },
    {
      name: "GABRIEL O. - Manchester, GB",
      testimonial:
        "Company’s work is timely and of the highest standard. Company’s professionalism is exemplary and his patience with clients is excellent. It is very clear that they understands his chosen field very well. I would definitely recommend their services to others. ",
    },
    {
      name: "Ryan S.",
      testimonial:
        "Rajkumar has completed the job in the time agreed and to the upmost professional standard. I am very pleased with his work, will be using him again and would recommend him to anyone. Thanks again Rajkumar.",
    },
    {
      name: "SACHIN K. - Lowell, MA, US",
      testimonial:
        "Appreciate their quality work and speed in which they completed the project. It was good working with them and will definitely contact them for any future work ..",
    },
    {
      name: "Issa T. - Dakar, SN",
      testimonial:
        "I am genuinely satisfied with the entire process and the final product delivered. They were professional, responsive, and clearly very talented.",
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
        <div className="section-title">
          <i className="bi bi-quote testimonial_icon"></i>
          <div >Testimonials</div>
          {/* <h1 role="heading" aria-level="1">
            <div>Testimonials</div>
          </h1> */}
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

export default React.memo(Testimonial);
