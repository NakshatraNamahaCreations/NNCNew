"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Import the next/image component for optimized image handling

const resume = "/media/NNCWebsite_CareerPage_PNG_CVSubmission.png";
const phone = "/media/NNCWebsite_CareerPage_PNG_PhoneScreening.png";
const skill = "/media/NNCWebsite_CareerPage_PNG_SkillAssessment.png";
const final = "/media/NNCWebsite_CareerPage_PNG_FinalInterview.png";
const stroke_curve = "/media/NNCWebsite_CareerPage_PNG_RecruitmentStroke.png";

// Recruitment Process Steps Data
const processSteps = [
  {
    title: "CV Submission",
    description:
      "Submit your CV or resume through our online portal if you meet our requirements.",
    image: resume,
    category: "Application",
    marginLeft: "32%",
    backgroundColor: "#F6F3F0",
  },
  {
    title: "Phone Screening",
    description:
      "After looking at your CV you will be invited for a telephone interview at a time of your choosing.",
    image: phone,
    category: "Screening",
    marginLeft: "38%",
    backgroundColor: "#F2F1F5",
  },
  {
    title: "Skill Assessment",
    description:
      "You will be invited at our head office to take a skills and knowledge assessment.",
    image: skill,
    category: "Interview",
    marginLeft: "29%",
    backgroundColor: "#F6F3F0",
  },
  {
    title: "Final Interview",
    description:
      "If you pass all stages, we will invite you for a final interview with our CEO and HR executive.",
    image: final,
    category: "Interview",
    marginLeft: "40%",
    backgroundColor: "#F2F1F5",
  },
];

export default function RecruitmentProcess() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter steps based on category selection
  const filteredSteps =
    selectedCategory === "All"
      ? processSteps
      : processSteps.filter((step) => step.category === selectedCategory);

  return (
    <div>
      <Container fluid>
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
            {filteredSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: step.backgroundColor,
                }}
              >
                <div style={{ marginLeft: step.marginLeft, padding: "45px" }} className="div-recuitment-process">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={120} // Adjust size accordingly
                    height={120} // Adjust size accordingly
                    style={{ objectFit: "cover" }}
                  />
                  <p
                    style={{
                      letterSpacing: "1px",
                      fontWeight: "bold",
                      fontSize: "22px",
                    }}
                    className="title-recruitment"
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      width: "60%",
                      letterSpacing: "1px",
                      fontWeight: "400",
                      fontSize: "20px",
                    }}
                    className="description-recrutiment"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{ position: "absolute", top: "15%", left: "22%" }}
            className="stroke-curve"
          >
            <Image
              src={stroke_curve}
              alt="stroke-curve"
              width={500} // Adjust the width
              height={300} // Adjust the height accordingly
              style={{ width: "46%", height: "auto" }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "28%",
              display: "inline-block",
              width: "35px",
              height: "35px",
            }}
            className="numberprocess-circle1"
          >
            <FontAwesomeIcon
              icon={faCircle}
              size="lg"
              style={{ color: "#000000", width: "100%", height: "100%" }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="span-numbers"
            >
              1
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "34%",
              left: "36%",
              display: "inline-block",
              width: "35px",
              height: "35px",
            }}
            className="numberprocess-circle2"
          >
            <FontAwesomeIcon
              icon={faCircle}
              size="lg"
              style={{ color: "#000000", width: "100%", height: "100%" }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="span-numbers"
            >
              2
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "27%",
              display: "inline-block",
              width: "35px",
              height: "35px",
            }}
            className="numberprocess-circle3"
          >
            <FontAwesomeIcon
              icon={faCircle}
              size="lg"
              style={{ color: "#000000", width: "100%", height: "100%" }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="span-numbers"
            >
              3
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "90%",
              left: "37%",
              display: "inline-block",
              width: "35px",
              height: "35px",
            }}
            className="numberprocess-circle4"
          >
            <FontAwesomeIcon
              icon={faCircle}
              size="lg"
              style={{ color: "#000000", width: "100%", height: "100%" }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="span-numbers"
            >
              4
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
