// import { useSpring, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";
// import TestimonialSlider from "./TestimonialSlider"; // Assuming this is the correct import path for the component
// import Image from "next/image"; // Next.js image component

// const smile = "/media/NNCWebsite_V3_CustomersSmilling.png"; // Ensure the image is placed in the "public" directory or use the appropriate image path

// export default function TestimonialsSlick({ testimonials }) {
//   // Observe when the section enters the viewport
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // Slow-motion animation for heading
//   const headingAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateX(0px)" : "translateX(-80px)",
//     config: { tension: 80, friction: 40 },
//     delay: 200,
//   });

//   // Pop-up animation for the image
//   const imageAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(0.5)",
//     config: { tension: 80, friction: 20 },
//   });

//   // Fade-in animation for the text
//   const textAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateY(0px)" : "translateY(30px)",
//     config: { tension: 60, friction: 20 },
//     delay: 600,
//   });

//   return (
//     <>
//       <div ref={ref} className="testimonials">
//         <animated.h3
//           style={{
//             fontWeight: "600",
//             marginBottom: "2%",
//             fontSize: "30px",
//             ...headingAnimation,
//           }}
//           className="h1-testimonal"
//         >
//           Testimonials
//         </animated.h3>

//         {/* Testimonial Slider */}
//         <TestimonialSlider testimonials={testimonials} />

//         <div ref={ref} style={{ textAlign: "center", marginTop: "5%" }}>
//           {/* Image with popup effect */}
//           <animated.div style={{ marginBottom: "25px", ...imageAnimation }}>
//             <Image
//               src={smile}
//               alt="smile-icon"
//               width={65} // Set width explicitly
//               height={65} // Set height explicitly
//               priority // Optimize image for faster loading
//             />
//           </animated.div>

//           {/* Text with fade-in effect */}
//           <animated.h3 style={{ letterSpacing: "2px", ...textAnimation }} className="h3-smile-love">
//             We love to have
//           </animated.h3>

//           <animated.h3
//             style={{
//               fontWeight: "bold",
//               letterSpacing: "2px",
//               fontSize: "30px",
//               ...textAnimation,
//             }}
//             className="h3-customer-smile"
//           >
//             Our Customers Smiling
//           </animated.h3>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import TestimonialSlider from "./TestimonialSlider";  // Ensure this path is correct
const smile = "/media/NNCWebsite_V3_CustomersSmilling.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function TestimonialsSlick({ testimonials }) {
  // Observe when the section enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Slow-motion animation for heading
  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-80px)",
    config: { tension: 80, friction: 40 },
    delay: 200,
  });

  // Pop-up animation for the image
  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.5)",
    config: { tension: 80, friction: 20 },
  });

  // Fade-in animation for the text
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 60, friction: 20 },
    delay: 600,
  });

  return (
    <>
      <div ref={ref} className="testimonials">
        <animated.h3
          style={{
            fontWeight: "600",
            marginBottom: "2%",
            fontSize: "30px",
            ...headingAnimation,
          }}
          className="h1-testimonal"
        >
          Testimonials
        </animated.h3>

        <TestimonialSlider testimonials={testimonials} />

        <div ref={ref} style={{ textAlign: "center", marginTop: "5%" }}>
          {/* Image with popup effect */}
          <animated.img
            src={smile}
            alt="smile-icon"
            width="65px"
            height="auto"
            style={{ marginBottom: "25px", ...imageAnimation }}
          />

          {/* Text with fade-in effect */}
          <animated.h3 style={{ letterSpacing: "2px", ...textAnimation }} className="h3-smile-love">
            We love to have
          </animated.h3>

          <animated.h3
            style={{
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "30px",
              ...textAnimation,
            }}
            className="h3-customer-smile"
          >
            Our Customers Smiling
          </animated.h3>
        </div>
      </div>
    </>
  );
}
