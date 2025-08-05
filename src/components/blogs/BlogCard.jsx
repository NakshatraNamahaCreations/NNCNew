// "use client";

// import { useSpring, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";
// import { Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const BlogCard = ({ card }) => {
//   // Detect if the entire BlogCard is in view
//   const [refCard, inViewCard] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const router = useRouter(); 
//   // Animated spring for the entire BlogCard
//   const cardSpring = useSpring({
//     opacity: inViewCard ? 1 : 0,
//     transform: inViewCard ? "scale(1)" : "scale(0.9)",
//     config: { tension: 170, friction: 26 },
//   });

  

//   return (
//     <animated.div
//       ref={refCard}
//       style={{
//         margin: "20px 0",
//         padding: "20px",
//         ...cardSpring,
//       }}
//       className="blogCard"
//     >
//       <Card style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}>
//         {/* Image is now using Next.js Image component */}
//         <Image 
//           src={card.banner} 
//           alt="Blog Banner" 
//           width={320} 
//           height={150} 
//           // objectFit="cover" 
//         />
//         <Card.Body>
//           <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>
//             {card.date}
//           </Card.Subtitle>
//           <Card.Text style={{ fontSize: "12px", fontWeight: "500" }}>
//             {card.title}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer
//           style={{
//             textAlign: "right",
//             backgroundColor: "transparent",
//             borderTop: "none",
//             position: "relative",
//           }}
//         >
//           {/* Use Next.js Link for navigation */}
        
//             <a
//               style={{
//                 textDecoration: "none",
//                 color: "gray",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "10px",
//                 fontSize: "10px",
//               }}
//             >
//               Read Blog
//               <FontAwesomeIcon icon={faArrowRight} />
//             </a>
       
//         </Card.Footer>
//       </Card>
//     </animated.div>
//   );
// };

// export default BlogCard;


"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({ card }) => {
  const [refCard, inViewCard] = useInView({ triggerOnce: true, threshold: 0.2 });
  const router = useRouter();

  const cardSpring = useSpring({
    opacity: inViewCard ? 1 : 0,
    transform: inViewCard ? "scale(1)" : "scale(0.95)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div
      ref={refCard}
      style={{
        margin: "20px 0",
        padding: "10px",
        ...cardSpring,
      }}
      className="blogCard"
    >
      <Card
        className="h-100"
        style={{
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Responsive Image */}
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src={card.banner}
            alt="Blog Banner"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        <Card.Body>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontSize: "0.75rem" }}
          >
            {card.date}
          </Card.Subtitle>
          <Card.Text
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              lineHeight: "1.4",
            }}
          >
            {card.title}
          </Card.Text>
        </Card.Body>

        <Card.Footer
          style={{
            textAlign: "right",
            backgroundColor: "transparent",
            borderTop: "none",
            paddingBottom: "10px",
            paddingRight: "10px",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#666",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "6px",
            }}
          >
            Read Blog
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Card.Footer>
      </Card>

      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 576px) {
          .blogCard {
            padding: 5px;
          }

          .blogCard :global(.card-text) {
            font-size: 0.85rem;
          }

          .blogCard :global(.card-subtitle) {
            font-size: 0.7rem;
          }

          .blogCard a {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </animated.div>
  );
};

export default BlogCard;
