'use client';

import React, { useEffect, useState } from "react";
import {
  Card,
  FloatingLabel,
  Button,
  Form,
} from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const BlogContactForm = () => {
  const pathname = usePathname(); // 👈 Replaces useLocation
  const router = useRouter();     // 👈 Replaces useNavigate

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "blog",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
  });

  useEffect(() => {
    const serviceMap = {
      "/website-development-company-in-bangalore": "Web Development",
      "/mobile-app-development-company-in-bangalore": "App Development",
      "/graphic-design-company-in-bangalore": "Graphic Designing",
      "/digital-marketing-agency-in-bangalore": "Digital Marketing",
      "/corporate-video-production-company-in-bangalore": "Corporate Video Production",
      "/b2b-marketing-agency-in-bangalore": "B2B Marketing Service",
      "/2d-animation-studio-in-bangalore": "2D Animations",
    };

    const detectedService = serviceMap[pathname];
    if (detectedService) {
      setFormData((prev) => ({
        ...prev,
        user_service: detectedService,
      }));
    }
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, user_phone, user_service, user_email } = formData;
    const errors = {};

    // Name validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!user_name || !nameRegex.test(user_name.trim())) {
      errors.user_name = "Please enter a valid name (only letters, at least 3 characters).";
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = [
      "0000000000", "1234567890", "0123456789", "9999999999",
      "8888888888", "7777777777", "6666666666"
    ];

    if (
      !user_phone ||
      !phoneRegex.test(user_phone) ||
      repeatedDigitsRegex.test(user_phone) ||
      invalidPhones.includes(user_phone)
    ) {
      errors.user_phone = "Please enter a valid 10-digit mobile number.";
    }

    // Service validation
    if (!user_service) {
      errors.user_service = "Please select a service.";
    }

    // Email validation
    if (user_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email)) {
        errors.user_email = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post("https://api.nakshatranamahacreations.in/api/enquiries", {
        name: user_name,
        email: user_email,
        phoneNo: user_phone,
        service: user_service,
        referenceFrom: "blog",
        city: "Bangalore",
      });

      if (response.status === 200 || response.status === 201) {
        router.push("/thankyou"); // 👈 Navigate on success
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          referenceFrom: "blog",
          city: "Bangalore",
        });
        setFormErrors({});
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check console for details.");
    }
  };

  return (
    <Card.Body
      style={{
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: "black" }}>
        Contact Us
      </h3>

      <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: "black" }}>
        <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        {formErrors.user_name && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_name}
          </div>
        )}

        <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-3">
          <Form.Control
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </FloatingLabel>
        {formErrors.user_phone && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_phone}
          </div>
        )}

        <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleChange}
          />
        </FloatingLabel>
        {formErrors.user_email && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_email}
          </div>
        )}

        <Form.Select
          name="user_service"
          value={formData.user_service}
          onChange={handleChange}
          required
          className="mb-3"
        >
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="Corporate Video Production">Corporate Video Production</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="2D Animations">2D Animations</option>
          <option value="B2B Marketing Service">B2B Marketing Service</option>
        </Form.Select>
        {formErrors.user_service && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_service}
          </div>
        )}

        <Button variant="dark" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </Card.Body>
  );
};

export default BlogContactForm;
