"use client";

import { useState, useEffect } from "react";
import { Button, Container, Modal, Form, Row, Col, FormControl } from "react-bootstrap";
import ApplyBtn from "./ApplyBtn";
import SubmitApplication from "./SubmitApplication";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image"; // Use Next.js Image component

// Job Listings Data
const jobs = [
  {
    title: "React Native Developer",
    type: "Full time",
    category: "Development",
    location: "Bangalore",
  },
  {
    title: "MERN Stack Developer",
    type: "Full time",
    category: "Development",
    location: "Mysore",
  },
  {
    title: "Node JS Developer",
    type: "Full time",
    category: "Development",
    location: "Bangalore",
  },
  {
    title: "DevOps Engineer",
    type: "Full time",
    category: "Development",
    location: "Mysore",
  },
  {
    title: "Automation (Selenium) Tester",
    type: "Full time",
    category: "Development",
    location: "Bangalore",
  },
];

export default function CurrentJobs() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [fadeIn, setFadeIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Bangalore",
    position: "",
    availability: "",
    currentCTC: "",
    expectedCTC: "",
    resume: "",
    resumeFilename: "",
  });

  // const router = useRouter();
  const [formErrors, setFormErrors] = useState({});

  // Handle Filter Change
  const handleFilterChange = (location) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedLocation(location);
      setFadeIn(true);
    }, 100);
  };

  // Open Modal
  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ ...formData, position: jobTitle });
    setShowModal(true);
  };

  // Close Modal
  const handleClose = () => {
    setShowModal(false);
    setFormErrors({});
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate Form
  const validateForm = () => {
    const errors = {};

    // Full Name Validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    } else if (!nameRegex.test(formData.name)) {
      errors.name = "Full name must contain only alphabets and spaces.";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    // Phone Number Validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const invalidPhones = [
      "0000000000",
      "1111111111",
      "2222222222",
      "3333333333",
      "4444444444",
      "5555555555",
      "6666666666",
      "7777777777",
      "8888888888",
      "9999999999",
      "1234567890",
    ];
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (
      !phoneRegex.test(formData.phone) ||
      invalidPhones.includes(formData.phone)
    ) {
      errors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    // Current CTC
    const numberRegex = /^\d{1,3}(\.\d{1,2})?$/;
    if (formData.currentCTC && !numberRegex.test(formData.currentCTC)) {
      errors.currentCTC = "Current CTC must be a valid number.";
    }

    // Expected CTC
    if (formData.expectedCTC && !numberRegex.test(formData.expectedCTC)) {
      errors.expectedCTC = "Expected CTC must be a valid number.";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Form Submitted");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "Bangalore",
      position: "",
      availability: "",
      currentCTC: "",
      expectedCTC: "",
      resume: "",
      resumeFilename: "",
    });
    handleClose();
  };

  // Filter jobs based on location
  const filteredJobs =
    selectedLocation === "All"
      ? jobs
      : jobs.filter((job) => job.location === selectedLocation);

  return (
    <div>
      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          margin: "3% 0",
        }}
        className="div-openingaps"
      >
        {["All", "Bangalore", "Mysore"].map((location) => (
          <Button
            key={location}
            style={{
              fontSize: "24px",
              color: "black",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "none",
              border: "none",
              borderRadius: "0",
              borderBottom:
                selectedLocation === location
                  ? "2px solid #3D89F1"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "border-bottom 0.3s ease, color 0.3s ease",
            }}
            className="btn-currentopening"
            onClick={() => handleFilterChange(location)}
          >
            {location}
          </Button>
        ))}
      </div>

      {/* Job Listings */}
      <div
        style={{ backgroundColor: "#F2F1F5", padding: "50px" }}
        className="div-careersopening"
      >
        <Container>
          <div
            className={`job-list ${fadeIn ? "fade-in" : ""}`}
            style={{ display: "grid", gap: "40px" }}
          >
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                  borderBottom: "1px solid black",
                }}
                className="job-list-div"
              >
                <div>
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "26px",
                      letterSpacing: "1px",
                    }}
                    className="h3-careeropening"
                  >
                    {job.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "left",
                      letterSpacing: "1px",
                    }}
                    className="p-careersopening"
                  >
                    {job.type} | {job.category}
                  </p>
                </div>
                <ApplyBtn onClick={() => handleApplyClick(job.title)} />
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* Job Listings Container */}

      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="modal-margin-top"
      >
        <Modal.Body style={{ padding: "0px" }}>
          <AiOutlineClose
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "16px",
              cursor: "pointer",
              color: "#000",
            }}
            onClick={handleClose}
          />
          <Form
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "20px",
              fontSize: "14px",
            }}
            className="form-modal"
          >
            <Modal.Title
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "1px",
                padding: "20px 0",
                textAlign: "center",
              }}
              className="modal-title"
            >
              Apply for {selectedJob}
            </Modal.Title>
            <Row className="mb-3">
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="form-input"
                    style={{ fontSize: "10px" }}
                    value={formData.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      const nameRegex = /^[A-Za-z\s]*$/;
                      if (nameRegex.test(val)) {
                        handleChange(e); // Only update if input is valid
                      } else {
                        setFormErrors((prev) => ({
                          ...prev,
                          name: "Only alphabets and spaces are allowed in full name.",
                        }));
                      }
                    }}
                    onBlur={() => {
                      const nameRegex = /^[A-Za-z\s]+$/;
                      if (
                        !formData.name.trim() ||
                        !nameRegex.test(formData.name)
                      ) {
                        setFormErrors((prev) => ({
                          ...prev,
                          name: "Full name must contain only alphabets and spaces.",
                        }));
                      }
                    }}
                    placeholder="Enter your full name"
                    required
                  />
                  {formErrors.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {formErrors.name}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    style={{ fontSize: "10px" }}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                  {formErrors.email && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {formErrors.email}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    className="form-input"
                    style={{ fontSize: "10px" }}
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                      if (numericValue.length <= 10) {
                        handleChange({
                          target: { name: "phone", value: numericValue },
                        });
                      }
                    }}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    inputMode="numeric"
                    required
                  />
                  {formErrors.phone && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {formErrors.phone}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">Location</Form.Label>
                  <Form.Select
                    name="location"
                    value={formData.location}
                    className="form-input"
                    style={{ fontSize: "10px" }}
                    onChange={handleChange}
                    required
                  >
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mysore">Mysore</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">
                Position Applied For
              </Form.Label>
              <Form.Control
                type="text"
                value={formData.position}
                readOnly
                style={{ background: "#e9ecef", fontSize: "8px" }}
                className="form-input"
              />
            </Form.Group>

            <Row className="mb-3">
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">
                    Current CTC <br />
                    (in LPA)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="currentCTC"
                    style={{ fontSize: "10px" }}
                    value={formData.currentCTC}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}(\.\d{0,1})?$/.test(val)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Enter current CTC"
                    required
                  />
                  {formErrors.currentCTC && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {formErrors.currentCTC}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6} className="col-form">
                <Form.Group>
                  <Form.Label className="form-label">
                    Expected CTC <br />
                    (in LPA)
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="expectedCTC"
                    style={{ fontSize: "10px" }}
                    value={formData.expectedCTC}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}(\.\d{0,1})?$/.test(val)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Enter expected CTC"
                    required
                  />
                  {formErrors.expectedCTC && (
                    <div style={{ color: "red" }}>{formErrors.expectedCTC}</div>
                  )}

                  {formErrors.expectedCTC && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "10px",
                        marginTop: "5px",
                      }}
                    >
                      {formErrors.expectedCTC}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label className="form-label">
                Upload Resume <br />
                <span
                  style={{ fontWeight: "400", fontSize: "10px", color: "red" }}
                >
                  (max 4MB file with Valid filename excluding special char)
                </span>
              </Form.Label>
              <FormControl
                type="file"
                accept=".pdf" // Restrict to PDF files
                style={{ fontSize: "10px", margin: "0px 0px 20px 0px" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type === "application/pdf") {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const base64Resume = reader.result.split(",")[1]; // Remove metadata prefix
                      setFormData((prevData) => ({
                        ...prevData,
                        resume: base64Resume,
                        resumeFilename: file.name,
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                required
              />
            </Form.Group>
            {/* Other form fields remain unchanged */}
            <SubmitApplication handleSubmit={handleSubmit} />
          </Form>
        </Modal.Body>
      </Modal>

      <style>
        {`
          .fade-in {
            animation: fadeIn 0.8s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
