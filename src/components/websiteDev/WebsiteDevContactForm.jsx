"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const services = [
  "Web Development",
  "App Development",
  "Corporate Video Production",
  "Digital Marketing",
  "Graphic Designing",
  "2D Animations",
  "B2B Marketing Service",
];

export default function WebsiteDevContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const { name, email, phone, service, message } = formData;
    const errors = {};

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!name || !nameRegex.test(name.trim())) {
      errors.name = "Enter a valid name (min 3 letters)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!service) {
      errors.service = "Please select a service";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name,
          email,
          phoneNo: phone,
          service,
          message,
          referenceFrom: "website",
          city: "Bangalore",
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
        setMessage("Form submitted successfully!");

        setTimeout(() => {
          router.push("/thankyou");
        }, 1000);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#fef8f8" }}>
      <div className="container">
        <div className="row bg-white shadow rounded overflow-hidden">
          {/* Left Form Section */}
          <div className="col-lg-6 p-5 border-end">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Contact Number*"
                  name="phone"
                  className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
              </div>

              <div className="mb-3">
                <select
                  name="service"
                  className={`form-select ${formErrors.service ? "is-invalid" : ""}`}
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {formErrors.service && <div className="invalid-feedback">{formErrors.service}</div>}
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Your Message Here"
                  rows="4"
                  name="message"
                  className={`form-control ${formErrors.message ? "is-invalid" : ""}`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-dark px-4 py-2 rounded-pill"
                  style={{ minWidth: "180px" }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {message && (
                <p className="text-center mt-3 text-success fw-semibold">{message}</p>
              )}
            </form>
          </div>

          {/* Right Text Section */}
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center align-items-start">
            <h2 className="fw-bold mb-3">
              Your Questions
              <br />
              Answered Quickly
            </h2>
            <p className="text-muted">
              Get in touch with our team of experts to help you further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
