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
        "Company's work is timely and of the highest standard. Company's professionalism is exemplary and his patience with clients is excellent. It is very clear that they understands his chosen field very well. I would definitely recommend their services to others. ",
    },
    {
      name: "Ryan S.",
      testimonial:
        "Rajkumar has completed the job in the time agreed and to the upmost professional standard. I am very pleased with his work, will be using him again and would recommend him to anyone. Thanks again Rajkumar.",
    },
    {
      name: "SACHIN K. - Lowell, MA, US",
      testimonial:
        "Appreciate their quality work and speed in which they completed the project. It was good working with them and will definitely contact them for any future work.",
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
        {/* <div className="section-title">
          <i className="bi bi-quote testimonial_icon"></i>
          <h1>Testimonials</h1>
        </div> */}  
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

export default React.memo(Testimonial);


// import React from "react";
// import Slider from "react-slick";
// import { Container } from "react-bootstrap";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../assets/css/testmonal.css";

// function Testimonial() {
//   const testimonialData = [
//     {
//       name: "STEFANO S. - Zurich, CH",
//       timeAgo: "8h",
//       text: "I strongly recommend this company because they did a great job with my devastated old Wordpress site. they showed analytics skill, speed, deep knowledge of Wordpress and php. Good cost per hour in view of a great job quality.Fast to reply, he has got patience and calmness! Absolutely positive!",
//       mediaThumb:
//         "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
//       mediaType: "youtube",
//       mediaUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       profile:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
//       reviewLink: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//     },
//     {
//       name: "GABRIEL O. - Manchester, GB",
//       timeAgo: "10h",
//       text: "Company's work is timely and of the highest standard. Company's professionalism is exemplary and his patience with clients is excellent. It is very clear that they understands his chosen field very well. I would definitely recommend their services to others.",
//       mediaThumb:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
//       mediaType: "youtube",
//       mediaUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
//       profile:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
//       reviewLink: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
//     },
//     {
//       name: "Ryan S.",
//       timeAgo: "12h",
//       text: "Rajkumar has completed the job in the time agreed and to the upmost professional standard. I am very pleased with his work, will be using him again and would recommend him to anyone. Thanks again Rajkumar.",
//       mediaThumb:
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
//       mediaType: "youtube",
//       mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       profile:
//         "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=100&q=80",
//       reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     },
//     {
//       name: "SACHIN K. - Lowell, MA, US",
//       timeAgo: "1d",
//       text: "Appreciate their quality work and speed in which they completed the project. It was good working with them and will definitely contact them for any future work.",
//       mediaThumb:
//         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
//       mediaType: "youtube",
//       mediaUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
//       profile:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
//       reviewLink: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
//     },
// {
//         name: "Issa T. - Dakar, SN",
//         timeAgo: "1d",
//         text: "I am genuinely satisfied with the entire process and the final product delivered. They were professional, responsive, and clearly very talented.",
//         mediaThumb:
//           "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
//         mediaType: "youtube",
//         mediaUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
//         profile:
//           "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
//         reviewLink: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
//       },
//   ];

//   const sliderSettings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1, dots: false } },
//     ],
//   };

//   return (
//     <section id="testimonials" className="testimonials modern-testimonials">
//       <Container data-aos="fade-up">
//             {/* <div className="section-title">
//           <i className="bi bi-quote testimonial_icon"></i>
//           <h1>Testimonials</h1>
//         </div>  */}
//         <div className="section-heading">
//              <i className="bi bi-quote testimonial_icon"></i>
//   <h1>Testimonials</h1>
// </div>

//         <Slider {...sliderSettings} className="testimonial-slider">
//           {testimonialData.map((item, index) => (
//             <div key={index} className="testimonial-slide">
//               <article className="testimonial-card-v2">
//                 <div className="testimonial-media">
//                   <img src={item.mediaThumb} alt={item.name} />
//                   <a
//                     href={item.mediaUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="play-btn"
//                     aria-label={`Open ${item.mediaType} review`}
//                   >
//                     <i className={item.mediaType === "image" ? "bi bi-image-fill" : "bi bi-play-fill"} />
//                   </a>
//                 </div>

//                 <div className="testimonial-body">
//                   <p>{item.text}</p>
//                 </div>

//                 <div className="testimonial-foot">
//                   <img src={item.profile} alt={item.name} className="profile-mini" />
//                   <div>
//                     <h4>{item.name}</h4>
//                     <span>{item.timeAgo} ago</span>
//                   </div>
//                 </div>

            
//               </article>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </section>
//   );
// }

// export default React.memo(Testimonial);
