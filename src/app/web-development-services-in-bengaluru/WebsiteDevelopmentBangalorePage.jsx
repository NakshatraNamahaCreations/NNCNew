"use client";

import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "@/styles/WebsiteDevelopmentBengaluru.css";
import { Button, Col, Container, Accordion, Row } from "react-bootstrap";
import TechSection from "@/components/home/TechSection";
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import StickyCarousal from "@/components/websiteDev/StickyCarousal";
import Slider from "react-slick";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  FaTasks,
  FaMobileAlt,
  FaSitemap,
  FaDatabase,
  FaSearch,
  FaShieldAlt,
  FaChartLine,
  FaSyncAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
import WebsiteDevContactForm from "@/components/websiteDev/WebsiteDevContactForm";
import axios from "axios";
import Link from "next/link";
import HeroBanner from "@/components/websiteDev/HeroBanner";
import { useRouter } from "next/navigation";
import Script from "next/script";

const industries = [
  ["Service", "Education"],
  ["Entertainment", "Automobile"],
  ["Finance", "Fitness"],
  ["Health", "Hospitality"],
  ["Real Estate", "Logistics"],
];
const pillarsData = [
  {
    icon: <FaTasks size={32} />,
    title: "Strategic Planning & Requirements Analysis",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Responsive & User-Centric Design",
  },
  {
    icon: <FaSitemap size={32} />,
    title: "Intuitive Navigation & User Experience Optimization",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Content Management System Integration",
  },
  {
    icon: <FaSearch size={32} />,
    title: "Search Engine Optimization (SEO) Implementation",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Security & Data Protection Measures",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Performance Monitoring & Website Maintenance",
  },
  {
    icon: <FaSyncAlt size={32} />,
    title: "Continuous Improvement & Future-Proofing",
  },
];

const servicesList = [
  {
    number: "01.",
    title: "Landing Page Development",
    desc: "Nakshatra Namaha Creations, a Website Development Agency in Bangalore, delivers top landing pages design for your website.",
  },
  {
    number: "02.",
    title: "React JS Website Development",
    desc: "Nakshatra Namaha Creations, a Website Development Agency in Bangalore, develops fast, modern, and scalable website solutions with React.js for an interactive user experience.",
  },
  {
    number: "03.",
    title: "Node JS Website Development",
    desc: "Nakshatra Namaha Creations, a Website Development Agency in Bangalore, provides powerful, high-performance backend solutions with Node.js for seamless website functionality.",
  },
  {
    number: "04.",
    title: "CMS Website Development",
    desc: "Nakshatra Namaha Creations, a Website Development Agency in Bangalore, can create content-driven websites that are easy for you to manage using the leading CMS platforms to suit your business.",
  },
];

const standoutFeatures = [
  {
    title: "Custom-Built Websites",
    icon: "/media/Custom-Built-Websites.png",
    dots: [{ color: "#9370DB", bottom: "0%", left: "50%" }],
  },
  {
    title: "Conversion-Focused Designs",
    icon: "/media/Conversion-Focused-Designs.png",
    dots: [{ color: "#FF69B4", bottom: "0%", left: "50%" }],
  },
  {
    title: "Mobile-First Approach",
    icon: "/media/Mobile-First-Approach.png",
    dots: [{ color: "#FFA500", bottom: "0%", left: "50%" }],
  },
  {
    title: "SEO-Optimized Development",
    icon: "/media/SEO-Optimized-Development.png",
    dots: [{ color: "#0000FF", bottom: "0%", left: "50%" }],
  },
];

const testimonials = [
  {
    name: "Sudhakar S",
    role: "",
    message:
      "We are absolutely thrilled with our new website developed by Nakshtra Namaha! Their design perfectly captured our brand aesthetic while creating a user-friendly experience that seamlessly navigates visitors through our key information. The team was incredibly responsive to our feedback, exceeding expectations with their professionalism and attention to detail throughout the entire process. We highly recommend them to anyone looking for a top-notch website development solution.",
  },
  {
    name: "Make My documents",
    role: "",
    message:
      "My experience with NNC was fantastic! The team was professional, patient, and attentive to our needs from start to finish. They delivered a website that exceeded our expectations, perfectly capturing our vision, A special thanks to Dhanlakshmi, Harish, Anjana, and the entire team for their dedication and attention to detail. Their seamless approach made the entire process smooth and hassle-free. Highly recommended!!!",
  },
  {
    name: "Patil sandeep",
    role: "",
    message:
      "Good service we got from the Nakshatra website creations ,it was great moment's we had with Mr,Harish ... We had started the new business at JP nagar,,,,,, To improve the business and marketing activities we got best support from Nakshatra website creations team.... I really suggest and recomend others to connect with Nakshatra website creations team to develop the website creation and Google adds or other online activities...... Staff and Owner is very helpful and kind people.",
  },
  {
    name: "Chaandini Srinivas",
    role: "",
    message:
      "Mr. HARISH is excellent in understanding client requirement and quick response... Highly appreciated.. A place where,we can fulfill all your requirements & they give a right base for our Ideas. The best support team, they guide to improve our ideas too and they give chance to prove their talents. ",
  },
  {
    name: "Ranjani Sivaraj",
    role: "",
    message:
      "I had a great experience working with Nakshatra Namaha Creations on developing my website. They were professional, responsive and ensured the website was designed exactly as I envisioned. The final result looks clean, functional and user-friendly. Looking forward to continuing with their digital marketing services next! ",
  },
];

const faqList = [
  {
    question: "What does your website making process have?",
    answer:
      "Our team primarily specializes in WordPress, known for its flexibility, scalability, and ease of use.",
  },
  {
    question: "How long does it take to make a website?",
    answer:
      "How long it takes changes with how big and hard the job is. A simple site for work may take 2–4 weeks, but big sites or online shops can take 6–12 weeks.",
  },
  {
    question: "Is the SEO part of your website helping?",
    answer:
      "Yes! We use SEO good tricks when making websites—like fast load times, working well on phones, simple URLs, and good metadata—to help you show up better in searches.",
  },
  {
    question: "Will my site work well on phones and be fast?",
    answer:
      "Yes, for sure. Each site we make works well and looks good on all tools, like phones and tablets.",
  },
  {
    question: "Do you redo websites too?",
    answer:
      "Yes. If your old site is not up to date or not doing well, we can make it new with a better look, work better, and give a better feel to users.",
  },
  {
    question: "What tech do you use to make websites?",
    answer:
      "We use new tech like HTML5, CSS3, JavaScript, React, WordPress, Webflow, and Laravel—based on what your job needs and what you want to reach.",
  },
  {
    question: "How much does it cost to make a website?",
    answer:
      "YCosts change based on what features and design you want. Contact us for a free cost idea that fits what you need and your money plan",
  },
  {
    question: "How do I start with your website team?",
    answer:
      "Just send a message through our contact form or WhatsApp. We'll set up a free talk to know your aims and give you a plan just for you.",
  },
];

const keywords = [
  "WEB DEVELOPMENT SERVICES",
  "WEB DEVELOPMENT COMPANY",
  "WEB DESIGNING COMPANY IN BANGALORE",
  "WEBSITE DESIGNERS IN BANGALORE",
  "BEST WEBSITE DEVELOPERS IN BANGALORE",
  "WEBSITE DEVELOPER",
  "WEBSITE REDESIGN SERVICES",
  "WEBSITE DESIGNER NEAR ME",
  "WEBSITE DEVELOPMENT AGENCY IN BANGALORE",
  "WEB DEVELOPMENT COMPANY IN BANGALORE",
  "TOP WEB DEVELOPMENT SERVICES IN BANGALORE",
  "WEB DESIGN",
  "WEB DEVELOPMENT",
  "BEST WEBSITE REDESIGN SERVICES",
  "CMS WEB DESIGNER",
  "WEBSITE DESIGNERS",
  "WEB DEVELOPMENT AGENCY IN BANGALORE",
];

const videoSlides = [
  "/media/gaminzo.mp4",
  "/media/Nithyaevent.mp4",
  "/media/vjhomeservice.mp4",
];
export default function WebsiteDevelopmentBangalorePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRefs = useRef({});
  const [activeKey, setActiveKey] = useState("0");
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [readMoreOpen, setReadMoreOpen] = useState(null);
  const router = useRouter();
  const API_BASE_URL = "https://api.nakshatranamahacreations.in";
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const toUrlFriendly = (title) => title.replace(/\s+/g, "-").toLowerCase();
  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs`, {
        params: {
          page: 1,
          limit: 9,
        },
      });

      // Map API data to match BlogCard structure
      const apiBlogs = response.data.data.slice(0, 2).map((blog) => ({
        id: blog._id, // Use MongoDB _id
        title: blog.title,
        description: blog.description.replace(/<[^>]+>/g, "").slice(0, 150), // Strip HTML and truncate
        date: new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        category: blog.metaTitle || "General", // Use metaTitle or fallback
        link: `/blog/${toUrlFriendly(blog.title)}`, // Dynamic link using blog ID
        banner: blog.bannerImage.startsWith("http")
          ? blog.bannerImage
          : `${API_BASE_URL}/uploads/${blog.bannerImage}`, // Handle relative paths
      }));

      setBlogs(apiBlogs);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setError("Failed to load API blogs. Showing static data instead.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const goNext = () => sliderRef.current.slickNext();
  const goPrev = () => sliderRef.current.slickPrev();

  return (
    <div className="">
  
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
          name: "Nakshatra Namaha Creations",
          image: "https://nakshatranamahacreations.com/media/nnclogo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560061",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.900525119796741,
            longitude: 77.52318771928213,
          },
          url: "https://www.nakshatranamahacreations.com",
          telephone: "+91-9900566466",
          email: "info@nakshatranamahacreations.com",
          areaServed: "Bangalore",
          priceRange: "₹₹",
          sameAs: [
            "https://www.facebook.com/Nakshatranamahacreations/",
            "https://www.instagram.com/nnc.digitalbengaluru/",
          ],
        })}
      </Script>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.nakshatranamahacreations.com/#organization",
          name: "Nakshatra Namaha Creations",
          url: "https://nakshatranamahacreations.com/web-design-company-in-jayanagar",
          logo: "https://nakshatranamahacreations.com/media/nnclogo.png",
        })}
      </Script>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqList.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}
      </Script>
      <div id="hero-banner">
        <HeroBanner />
      </div>
      {/* <div className="container d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="main-heading poppins-gradient mb-5">
          BEST WEB <br /> DEVELOPMENT <br /> COMPANY IN <br /> BANGALORE
        </h1>
      </div> */}

      <div
        className="w-full mt-4 carousel-container"
        style={{ height: "100vh", overflow: "hidden", marginBottom: "20px" }}
      >
        <Carousel fade className="custom-carousel" interval={2000}>
          {videoSlides.map((src, index) => (
            <Carousel.Item key={index} interval={6000}>
              <video
                className="d-block w-100"
                style={{ height: "100vh", objectFit: "cover", width: "100%" }}
                src={src}
                autoPlay
                loop
                muted
                playsInline
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="">
        <div
          style={{ backgroundColor: "#fff6f6", padding: "3rem 4rem" }}
          className="explore-Industry-box"
        >
          <p
            style={{
              fontSize: "2rem",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Explore By industry
          </p>

          <Row>
            {industries.map((pair, idx) => (
              <React.Fragment key={idx}>
                {pair.map((industry, i) => (
                  <Col md={6} key={industry} className="mb-4">
                    <div
                      className="d-flex justify-content-between align-items-center pb-3"
                      style={{
                        borderBottom: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                        {industry}
                      </span>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: "#000",
                          color: "#fff",
                          borderBottomRightRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FiArrowUpRight size={20} />
                      </div>
                    </div>
                  </Col>
                ))}
              </React.Fragment>
            ))}
          </Row>
        </div>
        {/* Consultation */}
        <Container className="my-5">
          <div className="cta-section text-center px-3 py-5">
            <h2 className="fw-bold mb-3">Ready to Build Your Next App?</h2>
            <p className="fw-semibold mb-4">
              We’ll help you bring your idea to life fast, secure, and tailored
              to your business goals.
            </p>
            <a href="#hero-banner">
              <Button className="cta-button">
                <span style={{ color: "#000", textDecoration: "none" }}>
                  Book A Consultation
                </span>
                <span className="cta-icon">→</span>
              </Button>
            </a>
          </div>
        </Container>
        <div className="service-box" style={{ backgroundColor: "#fff6f6" }}>
          <Container fluid className="py-5 position-relative bg-light-pink">
            <div className="floating-boxes position-relative">
              <div className="red-box"></div>
              <div className="black-box"></div>
            </div>
            <div className="left-padding-only">
              <h2 className="fw-bold mb-5 big-heading">
                OUR WEBSITE DEVELOPMENT <br /> AGENCY IN BANGALORE INCLUDES
              </h2>
              {servicesList.map((service, index) => (
                <Row
                  key={index}
                  className="align-items-start py-5 border-top service-list"
                >
                  <Col xs={12} md={1} className="mb-2">
                    <div className="service-number">{service.number}</div>
                  </Col>
                  <Col xs={12} md={4} className="mb-2">
                    <h3 className="service-title">{service.title}</h3>
                  </Col>
                  <Col xs={12} md={7} className="mb-2">
                    <p className="service-desc">{service.desc}</p>
                  </Col>
                </Row>
              ))}
            </div>
          </Container>
        </div>
        <div
          className="standout-section"
          style={{ backgroundColor: "#FFF6F6" }}
        >
          <Container className="text-center">
            <h2
              className="standout-heading mb-5"
              style={{ fontWeight: "bold" }}
            >
              WHAT MAKES US STAND OUT
            </h2>
            <Row className="justify-content-center">
              {standoutFeatures.map((item, index) => (
                <Col key={index} md={3} sm={6} xs={12} className="mb-5">
                  <div className="standout-card d-flex flex-column align-items-center justify-content-center position-relative">
                    <div className="standout-icon-wrapper">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="standout-icon"
                      />
                      {item.dots.map((dot, i) => (
                        <div
                          key={i}
                          className="standout-floating-dot"
                          style={{
                            backgroundColor: dot.color,
                            top: dot.top,
                            left: dot.left,
                          }}
                        />
                      ))}
                    </div>
                    <div className="standout-underline mt-3 mb-2" />
                    <h5 className="standout-title">{item.title}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <TechSection />
        <StickyCarousal />

        {/* Consultation */}
        <Container className="my-5">
          <div className="cta-section text-center px-3 py-5">
            <h2 className="fw-bold mb-3">Ready to Build Your Next App?</h2>
            <p className="fw-semibold mb-4">
              We’ll help you bring your idea to life fast, secure, and tailored
              to your business goals.
            </p>
            <a href="#hero-banner">
              <Button className="cta-button">
                <span>Book A Consultation</span>
                <span className="cta-icon">→</span>
              </Button>
            </a>
          </div>
        </Container>

        {/* Card section */}
        <div className="core-pillar-wrapper">
          <h2 className="core-pillar-heading">
            OUR CORE PILLARS OF WEB <br /> DEVELOPMENT SERVICES IN Bangalore
          </h2>
          <h2 className="core-pillar-heading-mob">
            OUR CORE PILLARS OF WEB DEVELOPMENT SERVICES IN Bangalore
          </h2>

          <div className="pillar-grid">
            {pillarsData.map((pillar, index) => (
              <div className="pillar-box" key={index}>
                <div className="pillar-icon">{pillar.icon}</div>
                <div className="pillar-title">{pillar.title}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonail */}
        <div className="my-5 testimonail">
          <Row className="justify-content-center ">
            <Col md={12}>
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((current, index) => (
                  <div key={index}>
                    <div
                      className="p-5 position-relative  testimonial-box"
                      style={{
                        background: "#000",
                        borderRadius: "20px",
                        color: "#fff",
                        fontFamily: "sans-serif",
                        minHeight: "300px",
                        margin: "0px 20px",
                      }}
                    >
                      <div className="mb-2 fw-semibold">{current.name}</div>
                      <div
                        className="text-secondary mb-4"
                        style={{ fontSize: "14px" }}
                      >
                        {current.role}
                      </div>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "300",
                          lineHeight: "1.6",
                          maxWidth: "95%",
                        }}
                      >
                        <strong>"</strong>
                        {current.message}
                        <strong>"</strong>
                      </p>

                      <div
                        className="d-flex gap-3 position-absolute"
                        style={{ top: "32px", right: "32px" }}
                      >
                        <Button
                          variant="outline-light"
                          onClick={goPrev}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "38px", height: "38px", padding: 0 }}
                        >
                          <FaChevronLeft />
                        </Button>
                        <Button
                          variant="outline-light"
                          onClick={goNext}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "38px", height: "38px", padding: 0 }}
                        >
                          <FaChevronRight />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>

        <div style={{ backgroundColor: "#fff5f8", padding: "60px 0" }}>
          <Container>
            <h2
              className="text-center fw-bold mb-5"
              style={{ fontSize: "34px", lineHeight: "1.3" }}
            >
              VISIT OUR WEB DESIGNING <br />
              COMPANY IN Bangalore
            </h2>
            <Row className="gx-4 gy-4 bg-white p-4 rounded-3 shadow-sm flex-column flex-md-row">
              {/* Map */}
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="rounded-3 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                  ></iframe>
                </div>
              </Col>

              {/* Address */}
              <Col
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="text-center text-md-start"
              >
                <div className="d-flex justify-content-center justify-content-md-start mb-3">
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMapMarkerAlt size={24} color="#000" />
                  </div>
                </div>

                <h5 className="fw-bold w-full">Nakshatra Namaha Creations</h5>
                <p style={{ marginBottom: "8px" }}>
                  1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th
                  Stage 1st Block,
                  <br />
                  Channasandra, Bangalore, Karnataka 560061
                </p>

                <p className="mb-1">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@nakshatranamahacreations.com"
                    style={{ color: "#000" }}
                  >
                    info@nakshatranamahacreations.com
                  </a>
                </p>
                <p>
                  <strong>Call:</strong>{" "}
                  <a href="tel:9900566466" style={{ color: "#000" }}>
                    9900566466
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ backgroundColor: "#fff5f8", padding: "60px 0" }}>
          <Container>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold" style={{ color: "#555" }}>
                OUR BLOGS
              </h2>
              <Button
                variant="dark"
                className="rounded-pill d-flex align-items-center gap-2 px-4 py-2"
                onClick={() => router.push("/blog")}
              >
                View All Blogs <FaArrowUpRightFromSquare />
              </Button>
            </div>

            <Row className="g-4">
              {blogs.map((blog) => (
                <Col lg={6} key={blog.id}>
                  <div className="p-4 blog-card h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="blog-category mb-3">{blog.category}</div>
                      <h5 className="fw-bold">{blog.title}</h5>
                    </div>
                    <div className="d-lg-flex justify-content-between align-items-center mt-4">
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Posted on: <span className="ms-1">{blog.date}</span>
                      </span>
                      <div
                        className="blog-icon"
                        onClick={() => router.push(blog.link)}
                      >
                        <FaArrowUpRightFromSquare size={16} />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div style={{ background: "#fff5f8", padding: "60px 0" }}>
          <Container>
            <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Frequently Asked Questions
            </h3>
            <Row className="justify-content-center">
              <Col md={10}>
                <Accordion
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                  {faqList.map((faq, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="container-fluid px-0">
          {/* Red Section */}
          <div className="row m-0 py-5 red-section text-white align-items-center">
            <div className="col-md-4 text-center text-md-start px-5">
              <h2 className="fw-bold headline hoverable">
                STOP SCROLLING!
                <br />
                THIS HEADLINE HAS
                <br />
                WHAT YOU NEED
              </h2>
            </div>
            <div className="col-md-8 px-4">
              <p className="lead">
                Stop scrolling! At Nakshatra Namaha Creations, a leading Web
                Designing Company in Bangalore, we create creative,
                user-friendly websites. As a top Website Development Agency, we
                offer custom solutions to meet your business needs. Trust the
                Best Web Development Company in Bangalore to turn your ideas
                into a digital reality.
              </p>
            </div>
          </div>

          {/* Blue Section */}
          <div className="row m-0 py-5 blue-section text-white align-items-center">
            <div className="col-md-4 text-center text-md-start px-5">
              <h2 className="fw-bold headline hoverable">
                BEYOND THE PRETTY:
                <br />
                SEO & CRO – THE
                <br />
                SECRET SAUCE TO
                <br />
                WEBSITES THAT SELL
              </h2>
            </div>
            <div className="col-md-8 px-4">
              <p className="lead">
                Beyond the Pretty: SEO & CRO – The Secret Sauce to Websites that
                Sell” by Nakshatra Namaha Creations highlights the need for
                combining SEO and CRO to create websites that are both visually
                appealing and highly functional. As a top Web Designing and
                Website Development Agency in Bangalore, Nakshatra Namaha
                Creations ensures businesses have websites optimized for both
                search engines and conversions, driving growth and success
                online.
              </p>
            </div>
          </div>
          <WebsiteDevContactForm />
        </div>

        <div style={{ backgroundColor: "#fef6f6", padding: "40px 20px" }}>
          <Container className="text-center">
            <h4 className="fw-bold mb-4 text-uppercase">
              What People Are Searching For
            </h4>
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "2rem",
                color: "#333",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              {keywords.map((item, index) => (
                <span key={index}>
                  {item}
                  {index !== keywords.length - 1 && <span> | </span>}
                </span>
              ))}
            </div>
          </Container>
        </div>

        <div className="container mx-auto my-5">
          <Accordion
            activeKey={readMoreOpen}
            onSelect={(key) => setReadMoreOpen(key)}
          >
            <Accordion.Item eventKey="readmore" key="readmore">
              <Accordion.Header className="custom-chevron-header">
                <span
                  style={{
                    color: "#000",
                    flex: 1,
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Read More
                </span>
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#dbdbdbff" }}>
                <div className="" style={{ color: "#000" }}>
                  <h5 style={{ fontWeight: "bold" }}>
                    Are You Looking For Top-Notch Web Development Agency in
                    Bangalore To Elevate Your Online Presence And Drive Business
                    Growth?
                  </h5>
                  <p>
                    We will help you to grow your digital vision by providing a
                    wide range of web development services in Bangalore. From
                    developing strong e-commerce platforms to creating
                    user-focused websites, our team of professionals has the
                    know-how to provide outstanding outcomes.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    What is Web Development?
                  </h5>
                  <p>
                    Web development is the work involved in creating and
                    maintaining websites (and other web-related solutions such
                    as web applications). The terminology web development can
                    refer to the actions of designing, developing, testing, and
                    implementing web-based solutions. The whole process of
                    creating a website or web application is referred to as web
                    development. In summary, it refers to turning ideas into
                    useful web experiences. Design is important, but it is only
                    part of the process. Web developers build structure and
                    functionality for a website in code. Without code, the
                    website would remain static without functionality or
                    interaction.
                  </p>
                  <p>
                    Picture a website as a house. Design would be the
                    architectural plan, or how the rooms are situated and
                    appear. Web development would be the actual building of it.
                    The builder has to make certain the walls stand, the
                    plumbing works, and the lights turn on. There are various
                    tools to accomplish different things. HTML creates the basic
                    structure, CSS makes it look great, and JavaScript adds
                    functionality. There are also other components that include
                    CMS websites, React JS, Node JS. The process of web
                    development sometimes feels like a never ending learning
                    process to stay on top of how technology is constantly
                    changing.
                  </p>
                  <p>
                    Web development can range from simple to complex, with
                    everything from a simple personal website to a large scale
                    e-commerce web site. It's a technical and creative field and
                    keeps the internet alive!
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Websites Crafted With Creativity
                  </h5>
                  <p>
                    Nakshatra Namaha Creations is a premier Web Designing
                    Company in Bangalore, quality designing websites while
                    ensuring creatively complete solutions. As a well-known
                    Website Development Agency in Bangalore India, we focus on
                    creating user-friendly & visual appealing websites tailored
                    to your specific needs. Whether it's being the best Best Web
                    Developer Company in Bangalore India assisting your business
                    with an online presence reviewing & designing a website for
                    you.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    No. 1 Web Designing Company in Bangalore
                  </h5>
                  <p>
                    Nakshatra Namaha Creations is a premier web designing
                    company located in Bangalore, providing high-quality website
                    development service. As a leading website development
                    company in Bangalore, Nakshatra Namaha Creations creates
                    attractive and well-functioning websites tailored to fit
                    your business.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Why Our Website Development Agency in Bangalore Is Important
                    For Your Business to Grow Your Business?
                  </h5>
                  <p>
                    At Nakshatra Namaha Creations, we recognize that having a
                    well-designed website is essential for business development.
                    In Bangalore, Nakshatra Namaha Creations is a Website
                    Development Agency that builds professionally built custom
                    websites that are functional, user-friendly, mobile-friendly
                    and conversion focused. Our team of website development and
                    design professionals have the capability to ensure
                    innovation and creativity is at the forefront of your
                    website with seamless functionality along with unique
                    website designs. As a web designing company in Bangalore, we
                    design and develop responsive and effective and
                    aesthetically pleasing websites that produce results. We are
                    the Best Web Development Company in Bangalore to help your
                    business.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    The Best Web Designing Company in Bangalore to Achieve Your
                    Business Goals
                  </h5>
                  <p>
                    Nakshatra Namaha Creations, the best Web Designing Company
                    in Bangalore is very passionate about working with
                    businesses to help them achieve their objectives. Nakshatra
                    Namaha Creations is a leading Website Development Agency in
                    Bangalore that creates websites that are user-friendly and
                    beautifully designed to achieve their goals. Their dedicated
                    team of designers and developers will ensure that you have a
                    beautiful website that looks great but also performs well.
                    If you are searching for the Best Web Development Company in
                    Bangalore, Nakshatra Namaha Creations will be with you every
                    step to help you realise your digital dreams.!
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Why Choose Our Web Development Services in Bangalore for
                    Website Development?
                  </h5>
                  <p>
                    Choose Nakshatra Namaha Creations for your web development
                    needs, we are a top Web Designing Company in Bangalore that
                    offers custom solutions to help you realize your vision. As
                    a top Website Development Agency in Bangalore, we build a
                    suit of features creating an intuitive, usable, and
                    responsive website. Your interests are the focus of our
                    work, enabling you to shine as your website is displayed. We
                    are the Best Web Development Company in Bangalore, and we
                    are committed to delivering the desired result so that your
                    job as an owner is easier. Let us develop your dream website
                    now!
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Types of Web Development
                  </h5>
                  <p>
                    Web development encompasses various types, each tailored to
                    different needs and functionalities. Here’s an explanation
                    of common types of web development and how Nakshatra Namaha
                    Creations can assist with each:{" "}
                  </p>

                  <h5 style={{ fontWeight: "bold" }}>
                    1. Front End Development:{" "}
                  </h5>
                  <p>
                    Frontend development is the process of creating the visible
                    portions of a website that a user will be directly
                    interacting with the site through, which include HTML, CSS,
                    and JavaScript. At our Web Development Agency in Bangalore,
                    we make sure your web app has a good-looking and
                    user-friendly interface, taking advantage of modern frontend
                    technology and methods. Our team optimizes the frontend code
                    to load fast and respond quickly, which is vital to
                    improving user experience and your site's SEO rankings.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    2. Backend Development:
                  </h5>
                  <p>
                    Backend development focuses on server-side programming and
                    database management, to provide the functionality and data
                    processing. Technologies include PHP, Ruby on Rails,
                    Node.js, etc. As Web Development Agency in Bangalore, we
                    develop stable backends to support complex data interactions
                    securely. The solutions are scalable, to allow websites to
                    develop and elevate their level of traffic and associated
                    data volume effectively.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    3. Full-Stack Development:
                  </h5>
                  <p>
                    Full-stack developers tackle both frontend and backend
                    development. They are responsible for all aspects of the web
                    project including server management or UI design. With the
                    capability of being expertise in technologies for both the
                    frontend and the backend, Our Web Development Services in
                    Bangalore provides end-to-end solutions. They optimize the
                    entire stack so every aspect can perform efficiently,
                    securely, or/and that is duly engaging to the user.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    4. Ecommerce Development:
                  </h5>
                  <p>
                    The process of ecommerce development involves creating
                    online shops and online selling platforms for products or
                    services. Ecommerce development includes integrating payment
                    gateways, inventory management and customer accounts. My Web
                    Development Agency in Bangalore specializes in building
                    ecommerce websites that can be scaled up to drive sales.
                    Included in my ecommerce solutions are UX/UI work, easy
                    payment system integrations, and analytics targets that see
                    enhanced conversion.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>5. CMS Development:</h5>
                  <p>
                    Content Management Systems (CMS) including WordPress,
                    Joomla, and Drupal make it easy to manage and update your
                    website content. As a Web Development Agency in Bangalore,
                    we customize CMS preferences to suit your business
                    specifically. We customize their CMS platforms to allow you
                    to publish content quickly and efficiently, optimize content
                    with search engine optimization (SEO), and improve their
                    security. Their CMS solutions allow clients to manage their
                    own websites with limited difficulty
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    6. Custom Web Application Development:
                  </h5>
                  <p>
                    Custom web applications are tailored solutions to meet
                    unique business needs. They typically include complex
                    functionality and integrations. Our Web Development Agency
                    based in Bangalore specializes in developing custom
                    solutions, using the latest technologies. Their solutions
                    are always designed for scalability, security, and to
                    improve business processes that promote productivity and
                    customer satisfaction.
                  </p>
                  <p>
                    Nakshatra Namaha Creations has a team of expertly qualified
                    developers with comprehensive experience working across many
                    web development technologies. Our Web Development Agency in
                    Bangalore also integrates best-in-class SEO techniques to
                    assist the development process; thereby optimizing websites
                    for search engine visibility. With both of these aspects in
                    mind along with our team experience, Nakshatra Namaha
                    Creations has provided quality web development solutions
                    that cater to the needs of businesses in Bangalore and other
                    locations around the world. Through our response development
                    values we have improved many online business prospects and
                    competitiveness.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    What Are the Key Components of Web Development?
                  </h5>
                  <p>
                    Web development is a varied field that encompasses several
                    key components, each essential to creating a functional,
                    attractive, and effective website. Here’s a detailed
                    breakdown of these components and how Nakshatra Namaha
                    Creations, as a premier Web Development Agency in Bangalore:
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    1. Planning and Strategy:
                  </h5>
                  <p>
                    With the Pre-Planning Phase, we analyze the client's needs,
                    target customers, and business requirements. During this
                    phase we'll define objectives, specify scope, and set up the
                    website content structure. Nakshatra Namaha Creations in
                    Bangalore includes this full and detailed analysis in its
                    Web Development services. In this phase, we work with the
                    client to establish clearly defined objectives, target
                    customer profiles, and schematic site architecture. It is
                    crucial we have the direction for the project so the end
                    product meets your business needs and we have a clear and
                    strategic plan to build from.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>2. Design:</h5>
                  <p>
                    The phase of design is the work of visualizing the website's
                    layout and user interface (UI) and includes creating the
                    overall look and feel, color strategies, typography,
                    imagery, etc. The design must be user-friendly, attractive,
                    and effectively convey the brand. Nakshatra Namaha Creations
                    is one of the best Web Development Agencies in Bangalore and
                    provides professional-design services including UI/UX
                    design, where their team creates design solutions that
                    appeal to the user and functionally support the experience
                    while maintaining brand identity. Modern design tools and
                    methodologies like highly translatable responsive layouts
                    are taken to make their visually stimulating and engaging
                    styles work across multiple platforms.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>3. Development:</h5>
                  <p>
                    Development is the technical aspect of creating the website;
                    which is everything from coding and programming. The
                    development process has two specific builds: front-end
                    development (the portion the user interacts with) and
                    back-end development (the parts of it taking place on the
                    server side or database). Nakshatra Namaha Creations's Web
                    Development Services in Bangalore include both front-end and
                    back-end development. Nakshatra Namaha Creations's
                    developers use the latest and most modern technologies and
                    programming languages to develop stable, scalable, and
                    secure websites. They are committed to ensuring that the
                    website works properly on all devices and browsers creating
                    an uninterrupted user experience.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>4. Content Creation:</h5>
                  <p>
                    Content creation is the process of creating the text,
                    images, videos, and other media that will appear on the web
                    site. Quality content is important to keep visitors engaged,
                    deliver the brand's message, and improve search engine
                    rankings. Our Web Development Agency does help with content
                    strategy and content creation, ensuring that any content
                    posted is written well, relevant, and SEO focused. Our team
                    will collaborate with content creators to develop great
                    content that is interesting and informative for the visitor,
                    engages the website objective, and works towards enticing
                    prospective customers.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    5. Testing and Quality Assurance:
                  </h5>
                  <p>
                    Testing and QA are vital parts of checking the website to
                    ensure there are no bugs or compatibility problems or
                    usability issues. You want the site to perform well when it
                    is being used under many conditions and that you meet any
                    initial requirement stated or agreed upon. Nakshatra Namaha
                    Creations views testing and QA as an integral part of their
                    Web Development Services in Bangalore. Their QA specialists
                    will run through full tests and check everything and detail
                    all issues and/or problems before going live with the
                    website. This testing includes cross-browser testing, mobile
                    responsiveness testing, and performance testing.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>6. Deployment:</h5>
                  <p>
                    Deployment is the point at which a website is made live and
                    public-facing. This includes configuring the hosting
                    services, uploading the necessary files, and adjusting the
                    server settings as needed. Nakshatra Namaha Creations is a
                    leading Web Development Agency in Bangalore and they take
                    the responsibility of overseeing the deployment process so
                    you can enjoy a fuss-free handover from the development
                    phase to live site. They configure the server, set the
                    domain and perform a range of technical tasks to ensure an
                    efficient and secure launch of your website.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    7. Maintenance and Support:
                  </h5>
                  <p>
                    Maintaining and supporting the website is critical to
                    keeping it secure, updated, and working properly. A website
                    should always be updated, fixed, and improved upon.
                    Nakshatra Namaha Creations includes ongoing support and
                    maintenance of websites as part of their Web Development
                    Services in Bangalore. Ongoing support allows for updates to
                    be made and security patches to be applied regularly, while
                    also offering technical support, so that a website can be
                    operational and kept up with the latest technologies and
                    standards of today.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>8. SEO and Analytics:</h5>
                  <p>
                    SEO is the process of optimizing a website in order to
                    increase visibility in search engine results. Analytics
                    helps track user behavior and the performance of a website,
                    and when combined with SEO the information can further
                    improve a website’s development. Our Web Development Agency
                    in Bangalore incorporates best practices at every step in
                    their process of developing a website. They also offer
                    analytics monitoring and setting it all up, helping their
                    clients track how users act when on their websites, allowing
                    them to improve it to further performance with data.
                  </p>
                  <p>
                    Nakshatra Namaha Creations's Web Development Services in
                    Bangalore include everything you need in web development,
                    from planning and design, through development, testing,
                    deployment and support. Being a Web Development Agency in
                    Bangalore they cover every essentials and provide a
                    complete, efficient web solution tailored to the client’s
                    needs and objectives.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Why Do You Need A Professional Web Development Agency in
                    Bangalore?
                  </h5>
                  <p>
                    In today’s digital landscape, having a strong online
                    presence is crucial for businesses of all sizes. Our Web
                    Development Agency in Bangalore offers several advantages
                    that can significantly impact your business’s success.
                    Here’s a detailed explanation of why you should consider
                    partnering with a professional web development agency:
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    1. Expertise and Experience
                  </h5>
                  <p>
                    Professional web development agencies have developed a lot
                    of knowledge and talent. At Nakshatra Namaha Creations we
                    have developers and designers with a significant level of
                    experience and projects to show for it. We don't just make
                    sites that look nice, we make sites that function. As
                    experts in designs and technologies of the day, we provide
                    great-looking projects with high functionality.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    2. Custom Solutions Tailored to Your Needs
                  </h5>
                  <p>
                    No two businesses are the same, and web development is
                    rarely a one-size-fits-all pursuit. A professional web
                    development agency like Nakshatra Namaha Creations in
                    Bangalore can offer tailor-made solutions that successfully
                    meet your business needs and objectives. We do not take a
                    cookie-cutter approach, and we do not create templates; we
                    discuss your business, your audience, and your objectives to
                    make a website that fits your image and your specific
                    business needs.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    3. Comprehensive Services
                  </h5>
                  <p>
                    Web development is more than writing code. It is a service
                    that involves UI/UX design, content management, SEO, and
                    performance optimization. Our Web Development Agency in
                    Bangalore offers a full range of web development services in
                    Bangalore and the surrounding areas to take care of every
                    part of your website professionally. We deal with every
                    detail, from the first design ideas to ongoing maintenance,
                    we deliver the whole process.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}></h5>
                  <p></p>
                  <h5 style={{ fontWeight: "bold" }}>
                    4. Enhanced User Experience
                  </h5>
                  <p>
                    User experience (UX) is key in determining whether or not a
                    website is successful. Well-designed websites attract
                    visitors, keep them engaged, and nudge them toward taking
                    action! Our Web Development Company in Bangalore applies a
                    user-centered design process that ensures; your website is
                    intuitive to use, easy to navigate, optimized for all
                    devices, and creates a positive user experience.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>5. SEO Optimization</h5>
                  <p>
                    An attractive website is of no value if it is not getting
                    visitors. Search engine optimization (SEO) is an important
                    part of making your website visible in search engines. Our
                    Web Development Agency in Bangalore considers SEO best
                    practices in every web development project. This means your
                    website will rank higher on search engines and receive
                    better organic traffic.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    6. Security and Performance
                  </h5>
                  <p>
                    Website security and performance are essential for
                    protecting your business and providing users with a seamless
                    experience. Professional web development agencies such as
                    Nakshatra Namaha Creations implement strong security
                    protocols and performance optimization strategies to defend
                    your website from potential threats and increase speed and
                    efficiency.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    7. Ongoing Support and Maintenance
                  </h5>
                  <p>
                    Websites require maintenance and updates on a timely basis
                    in order to be effective and current. Our Web Development
                    Agency, in Bangalore, offers ongoing support and maintenance
                    services to make sure that your website is kept up-to-date
                    based on technological advances and that your website is
                    continually performing well.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>8. Cost-Effectiveness</h5>
                  <p>
                    Although hiring a professional web development agency in
                    Bangalore may seem like a considerable investment, a web
                    development agency can actually save money in the long run.
                    Nakshatra Namaha Creations provides you with a proper site
                    that works well, a quality website that avoids issues and
                    costly fixes that may result from a poorly developed site.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>9. Competitive Edge</h5>
                  <p>
                    In a competitive market, a professional working website
                    gives you an edge in competition with your competitors.
                    Nakshatra Namaha Creations's expertise and creativity will
                    make your website unique, allowing you to acquire and retain
                    customers with greater effectiveness.
                  </p>
                  <p>
                    Overall, you can be confident in choosing Nakshatra Namaha
                    Creations for your web development portfolio because we
                    provide high quality, custom web development services in
                    Bangalore. With our expertise, process, and commitment to
                    excellence, we offer the foundation for an excellent online
                    presence in sync with your goals to grow your organization.
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    Why Choose Nakshatra Namaha Creations as a Web Development
                    Agency in Bangalore?
                  </h5>
                  <p>
                    When it comes to building a strong online presence, choosing
                    the right web development agency can make all the
                    difference. Nakshatra Namaha Creations, a leading Web
                    Development Agency in Bangalore, stands out for its
                    exceptional Web Development Services in Bangalore. Here’s
                    why you should consider Nakshatra Namaha Creations for your
                    web development needs:
                  </p>
                  <h5 style={{ fontWeight: "bold" }}>
                    1. Comprehensive Expertise in Web Development
                  </h5>
                  <p>
                    Nakshatra Namaha Creations provides complete Web Development
                    Services in Bangalore, providing everything from the
                    planning and development stage to maintenance and
                    optimization. Their team of knowledgeable developers is
                    experienced in a wide variety of technologies, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Custom Web Development:</strong>Tailored solutions
                      to meet your unique business requirements.
                    </li>
                    <li>
                      <strong>E-Commerce Development:</strong>Robust and
                      scalable e-commerce platforms that drive sales and enhance
                      customer experiences.
                    </li>
                    <li>
                      <strong>CMS Development:</strong>User-friendly content
                      management systems for easy content updates and
                      management.
                    </li>
                    <li>
                      <strong>Responsive Web Design:</strong>Websites that look
                      and perform excellently across all devices and screen
                      sizes.
                    </li>
                    <li>
                      <strong>Web Application Development:</strong>Advanced web
                      applications that enhance functionality and user
                      engagement.
                    </li>
                  </ul>
                  <h5 style={{ fontWeight: "bold" }}>
                    2. Client-Centric Approach
                  </h5>
                  <p>
                    Our Web Development Services in Bangalore focuses on
                    providing services that align with your business objectives.
                    Their customer-centered philosophy means:
                  </p>
                  <ul>
                    <li>
                      <strong>Personalized Solutions:</strong> Each project is
                      customized to fit your specific needs, whether you’re a
                      startup or an established enterprise.
                    </li>
                    <li>
                      <strong>Collaborative Process:</strong>They work closely
                      with clients throughout the development process to ensure
                      that the final product meets your expectations.
                    </li>
                    <li>
                      <strong>Transparent Communication:</strong>Regular updates
                      and feedback sessions keep you informed about the
                      project’s progress.
                    </li>
                  </ul>
                  <h5 style={{ fontWeight: "bold" }}>
                    3. Cutting-Edge Technology and Innovation
                  </h5>
                  <p>
                    At Nakshatra Namaha Creations, our Web Development Agency in
                    Bangalore keeps all websites on the cutting edge by marrying
                    two important considerations: the latest technology (tools)
                    and industry best practices. In doing so:
                  </p>
                  <ul>
                    <li>
                      <strong>Advanced Development Tools:</strong>Utilization of
                      the latest tools and frameworks to build high-performance
                      websites.
                    </li>
                    <li>
                      <strong>SEO Optimization:</strong> Integration of SEO best
                      practices from the ground up to enhance your site’s
                      visibility and search engine rankings.
                    </li>
                    <li>
                      <strong>Security Measures:</strong>Implementation of
                      robust security protocols to protect your website from
                      potential threats and breaches.
                    </li>
                  </ul>
                  <h5 style={{ fontWeight: "bold" }}>
                    4. Proven Track Record of Success
                  </h5>
                  <p>
                    As a reputable web development agency in Bangalore,
                    Nakshatra Namaha Creations has an extensive portfolio of
                    successful projects and satisfied clients to showcase their
                    success in delivering quality web development solutions. We
                    have worked across several industries and have a variety of
                    success stories and solutions to demonstrate their
                    versatility. Being one of the most reputable Web Development
                    Agencies in Bangalore is supported by:
                  </p>
                  <ul>
                    <li>
                      <strong>Client Testimonials:</strong> Positive feedback
                      and reviews from businesses that have benefited from their
                      services.
                    </li>
                    <li>
                      <strong>Case Studies:</strong>Documented examples of how
                      Nakshatra Namaha Creations has helped clients achieve
                      their business objectives through effective web
                      development.
                    </li>
                  </ul>
                  <h5 style={{ fontWeight: "bold" }}>
                    5. Focus on Long-Term Partnership
                  </h5>
                  <p>
                    Nakshatra Namaha Creations is focused on developing
                    long-lasting relationships with clients. Their services
                    include a commitment to their clients that spans beyond the
                    build phase with:
                  </p>
                  <ul>
                    <li>
                      <strong>Ongoing Support and Maintenance:</strong>Ensuring
                      that your website remains up-to-date and fully functional.
                    </li>
                    <li>
                      <strong>Performance Monitoring:</strong>Regular monitoring
                      and optimization to keep your website performing at its
                      best.
                    </li>
                    <li>
                      <strong>Future Enhancements:</strong> Flexibility to adapt
                      and expand your website as your business grows and
                      evolves.
                    </li>
                  </ul>
                  <h5 style={{ fontWeight: "bold" }}>
                    6. Competitive Pricing and Value for Money
                  </h5>
                  <p>
                    Our Web Development Agency in Bangalore is offering quality
                    work at competitive prices. They believe in value for money
                    by offering:
                  </p>
                  <ul>
                    <li>
                      <strong>Cost-Effective Solutions:</strong>
                      High-quality web development services at reasonable rates.
                    </li>
                    <li>
                      <strong>Flexible Packages:</strong>
                      Customizable packages that fit different budgets and
                      requirements.
                    </li>
                  </ul>
                  <p>
                    When you choose Nakshatra Namaha Creations as your Web
                    Development Agency in Bangalore, you are choosing a team
                    that will provide exceptional Web Development Services in
                    Bangalore. With knowledge and expertise in the services they
                    provide, being very client-focused, innovation, and a desire
                    for your long-term success, they are a perfect fit for any
                    business looking to develop a strong online presence.
                  </p>
                  <p>
                    Nakshatra Namaha Creations is the web development company in
                    Bangalore you can trust. Whether you are looking for a new
                    website, wanting to refresh your existing website with a
                    website redesign service, or just want ongoing maintenance
                    and support, we are ready to assist.
                  </p>
                  <p>
                    <Link href="/contact-us">
                      Contact us for a free consultation today
                    </Link>
                    , and see for yourself why we are one of the best web
                    development companies in Bangalore!
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
