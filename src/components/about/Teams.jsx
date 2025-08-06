"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import TeamMember from "./TeamMember";

// Media imports
const line = "/media/NNCWebsite_AboutUsPage_Whychooseus.png";
const harish = "/media/NNCWebsite_AboutUsPage_HarishSir.webp";
const anasha = "/media/NNCWebsite_AboutUsPage_AnjanaMam.webp";
const lisha = "/media/NNCWebsite_AboutUsPage_Lisha.webp";
const anil = "/media/NNCWebsite_AboutUsPage_Anil.webp";
// import sherya from "/public/media/NNCWebsite_AboutUsPage_Shreya.png";
const yogesh = "/media/NNCWebsite_AboutUsPage_Yogesh.webp";
const suman = "/media/NNCWebsite_AboutUsPage_Suman.webp";
const kavana = "/media/NNCWebsite_AboutUsPage_Kavana.webp";
const kruthika = "/media/NNCWebsite_AboutUsPage_Kruthika.webp";
const jayapath = "/media/NNCWebsite_AboutUsPage_Jayanth.jpg";
const guru = "/media/NNCWebsite_AboutUsPage_Guru.webp";
const Dashavantha = "/media/NNCWebsite_AboutUsPage_Daswant.jpg";
// const Medini = "/media/NNCWebsite_AboutUsPage_Medini.jpg";
const Dhanalakshmi = "/media/NNCWebsite_AboutUsPage_Dhanlakshmi.jpg";
const Sonali = "/media/NNCWebsite_AboutUsPage_Sonali.jpg";
// const Anup = "/media/NNCWebsite_AboutUsPage_Anup.jpg";
const Sathish = "/media/NNCWebsite_AboutUsPage_Sathish.jpg";

export default function Teams() {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const headingAnimation = useSpring({
    opacity: headingInView ? 1 : 0,
    transform: headingInView ? "translateY(0)" : "translateY(-30px)",
    config: { tension: 120, friction: 14 },
    reset: false,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    transform: paragraphInView ? "translateY(0)" : "translateY(30px)",
    delay: 200,
    config: { tension: 120, friction: 14 },
    reset: false, 
  });

  const teamMembers = [
    { image: harish, alt: "harish", name: "Harish J N", title: "Founder & Managing Director" },
    { image: anasha, alt: "anasha", name: "Anjana DR", title: "Operation Manager" },
    { image: lisha, alt: "lisha", name: "Lisha KR", title: "Strategic Analyst & Business Development Manager" },
    { image: anil, alt: "anil", name: "Anil Dev", title: "Sr Analyst - Graphic Designer & Content Creator" },
    { image: yogesh, alt: "yogesh", name: "Yogesh PV", title: "Sr Analyst - Mobile App Developer" },
    { image: suman, alt: "suman", name: "Suman Raj", title: "Analyst - Mobile App Developer" },
    { image: kavana, alt: "kavana", name: "Kavana NP", title: "Sr Analyst - Website Developer" },
    { image: kruthika, alt: "kruthika", name: "Kiruthika M", title: "Mobile App Developer" },
    { image: jayapath, alt: "jayapath", name: "Jayanth P", title: "Associate Mobile App Developer" },
    { image: guru, alt: "guru", name: "GuruDarshan D Hegde", title: "SEO Analyst" },
    { image: Dashavantha, alt: "Dashavantha", name: "Dashavantha K.M.", title: "Motion Graphic Designer" },
    // { image: Medini, alt: "Medini", name: "Medini C.M.", title: "Accountant" },
    { image: Dhanalakshmi, alt: "Dhanalakshmi", name: "Dhanalakshmi S B", title: "Frontend Developer" },
    { image: Sonali, alt: "Sonali", name: "Sonali Keshri", title: "Frontend Developer" },
    // { image: Anup, alt: "Anup", name: "Anup Chakra", title: "Full Stack Developer" },
    { image: Sathish, alt: "Sathish", name: "Sathish", title: "QA Analyst" },
  ];

  // Helper: break teamMembers into chunks of 3 for responsive rows
  const chunkArray = (arr, chunkSize) =>
    Array(Math.ceil(arr.length / chunkSize))
      .fill()
      .map((_, i) => arr.slice(i * chunkSize, i * chunkSize + chunkSize));

  return (
    <div style={{ marginTop: "5%", textAlign: "center" }}>
      <animated.h2
        ref={headingRef}
        style={{
          ...headingAnimation,
          fontWeight: "bold",
          fontSize: "40px",
          letterSpacing: "1px",
        }}
        className="h1-teams"
      >
        Our Team
      </animated.h2>

      <div style={{ width: "20%", margin: "0 auto", marginTop: "-1%" }}>
        <Image src={line} alt="line" width={200} height={20} layout="responsive" />
      </div>

      <animated.p
        ref={paragraphRef}
        style={{
          ...paragraphAnimation,
          lineHeight: "1.7",
          letterSpacing: "1px",
          fontWeight: "500",
          textAlign: "left",
          margin: "2% 5%",
          fontSize: "16px",
        }}
        className="paragraph-teams"
      >
        Our team is a passionate blend of creativity, expertise and dedication. We collaborate together,
        applying innovative ideas with precision and care. Driven by a collective vision, we aspire to create
        memorable experiences that engender lasting impressions.
      </animated.p>

      <Container>
        {chunkArray(teamMembers, 3).map((group, groupIndex) => (
          <Row key={groupIndex} className="teams mb-4">
            {group.map((member, memberIndex) => (
              <Col key={memberIndex} sm={4}>
                <div style={{ position: "relative" }}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={300} // Specify width
                    height={300} // Specify height
                    layout="responsive" // Ensures responsive layout
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "0",
                      right: "0",
                      textAlign: "center",
                      color: "#fff",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "5px 0",
                    }}
                  >
                    <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>{member.name}</h5>
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>{member.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}
