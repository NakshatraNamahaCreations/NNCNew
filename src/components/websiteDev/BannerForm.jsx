"use client";

import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import "@/styles//BannerForm.css";

const BannerForm = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "blog",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const pathMap = {
      "/website-development-company-in-bangalore": "Web Development",
      "/mobile-app-development-company-in-bangalore": "App Development",
      "/graphic-design-company-in-bangalore": "Graphic Designing",
      "/digital-marketing-agency-in-bangalore": "Digital Marketing",
      "/corporate-video-production-company-in-bangalore": "Corporate Video Production",
      "/b2b-marketing-agency-in-bangalore": "B2B Marketing Service",
      "/2d-animation-studio-in-bangalore": "2D Animations",
    };

    if (pathMap[pathname]) {
      setFormData((prev) => ({ ...prev, user_service: pathMap[pathname] }));
    }
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, user_email, user_phone, user_service } = formData;
    const errors = {};

    if (!/^[A-Za-z\s]{3,}$/.test(user_name.trim()))
      errors.user_name = "Enter a valid name (min 3 letters)";

    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = ["0000000000", "1234567890", "0123456789", "9999999999"];
    if (!phoneRegex.test(user_phone) || repeatedDigitsRegex.test(user_phone) || invalidPhones.includes(user_phone))
      errors.user_phone = "Enter a valid 10-digit number";

    if (!user_service) errors.user_service = "Select a service";
    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email))
      errors.user_email = "Enter a valid email";

    if (Object.keys(errors).length) {
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
        router.push("/thankyou");
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
        alert("Failed to send enquiry. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <div className="glass-form-wrapper">
      <h3 className="glass-form-title">Let’s Connect</h3>
      <Form onSubmit={handleSubmit} className="glass-form">
        <Form.Group controlId="user_name" className="glass-input mb-3">
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Your Name *"
            value={formData.user_name}
            onChange={handleChange}
          />
          {formErrors.user_name && <small className="error-text">{formErrors.user_name}</small>}
        </Form.Group>

        <Form.Group controlId="user_phone" className="glass-input mb-3">
          <Form.Control
            type="text"
            name="user_phone"
            placeholder="Phone Number *"
            value={formData.user_phone}
            onChange={handleChange}
          />
          {formErrors.user_phone && <small className="error-text">{formErrors.user_phone}</small>}
        </Form.Group>

        <Form.Group controlId="user_email" className="glass-input mb-3">
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Email *"
            value={formData.user_email}
            onChange={handleChange}
          />
          {formErrors.user_email && <small className="error-text">{formErrors.user_email}</small>}
        </Form.Group>

        <Form.Group controlId="user_service" className="glass-input mb-3">
          <Form.Select name="user_service" value={formData.user_service} onChange={handleChange}>
            <option value="">Select Service *</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Corporate Video Production">Corporate Video Production</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="2D Animations">2D Animations</option>
            <option value="B2B Marketing Service">B2B Marketing Service</option>
          </Form.Select>
          {formErrors.user_service && <small className="error-text">{formErrors.user_service}</small>}
        </Form.Group>

        <Button type="submit" className="glass-submit-btn w-100">Submit</Button>
      </Form>
    </div>
  );
};

export default BannerForm;
