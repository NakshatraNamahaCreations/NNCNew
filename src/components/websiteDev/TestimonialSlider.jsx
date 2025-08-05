// import { useSpring, animated } from "@react-spring/web";
// import Slider from "react-slick";
// import { useInView } from "react-intersection-observer";
// import { Container } from "react-bootstrap";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing react-icons
// import Image from "next/image"; // Next.js Image component

// const TestimonialItem = ({ image, name, text }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // Fade-in animation
//   const fadeInAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateY(0px)" : "translateY(50px)",
//     config: { tension: 60, friction: 20 },
//   });

//   return (
//     <animated.div ref={ref} className="image-container">
//       <Image
//         src={image}  // The image path should be inside the "public" folder for Next.js optimization
//         alt={name}
//         className="image-fluid"
//         width={300} // Set a specific width (adjust as per your layout)
//         height={200} // Set a specific height (adjust as per your layout)
//         priority // Helps load image faster for better performance
//       />
//       <div className="content-overlay">
//         <p className="content-text">{text}</p>
//         <h5 className="content-name">{name}</h5>
//       </div>
//     </animated.div>
//   );
// };

// // Custom Previous and Next Arrow Components
// const CustomPrevArrow = ({ onClick }) => (
//   <div onClick={onClick} className="custom_prev_arrow">
//     <FaChevronLeft className="testimonials-icon" />
//   </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <div onClick={onClick} className="custom_next_arrow">
//     <FaChevronRight className="testimonials-icon" />
//   </div>
// );

// // Slider Component
// const TestimonialSlider = ({ testimonials }) => {
//   // Slick settings with custom arrows
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <Container className="mx-auto position-relative">
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-slide">
//             <TestimonialItem {...testimonial} />
//           </div>
//         ))}
//       </Slider>
//     </Container>
//   );
// };

// export default TestimonialSlider;


"use client";

import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing react-icons
import Image from "next/image";

const TestimonialItem = ({ image, name, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Fade-in animation
  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 60, friction: 20 },
  });

  return (
    <animated.div ref={ref} className="image-container">
      {/* <img src={image} alt={name} className="image-fluid" /> */}
      <Image src={image} width={200} height={200} alt={name} className="image-fluid" />
      <div className="content-overlay">
        <p className="content-text">{text}</p>
        <h5 className="content-name">{name}</h5>
      </div>
    </animated.div>
  );
};

// Custom Previous and Next Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="custom_prev_arrow" style={{zIndex:"-1"}}>
    <FaChevronLeft className="testimonials-icon" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="custom_next_arrow" style={{zIndex:"-1"}}>
    <FaChevronRight className="testimonials-icon" />
  </div>
);

// Slider Component
const TestimonialSlider = ({ testimonials }) => {
  // Slick settings with custom arrows
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container className="mx-auto position-relative">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <TestimonialItem {...testimonial} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;
