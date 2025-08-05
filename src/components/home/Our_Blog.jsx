"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import BlogCard from "../Blogs/BlogCard"; // Ensure this is converted too

export default function OurBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const API_BASE_URL = "https://api.nakshatranamahacreations.in";
  const router = useRouter();

  const toUrlFriendly = (title) => title.replace(/\s+/g, "-").toLowerCase();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs`, {
        params: {
          page: 1,
          limit: 9,
        },
      });

      const apiBlogs = response.data.data.slice(0, 3).map((blog) => ({
        id: blog._id,
        title: blog.title,
        description: blog.description.replace(/<[^>]+>/g, "").slice(0, 150),
        date: new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        category: blog.metaTitle || "General",
        link: `/blog/${toUrlFriendly(blog.title)}`,
        banner: blog.bannerImage.startsWith("http")
          ? blog.bannerImage
          : `${API_BASE_URL}/uploads/${blog.bannerImage}`,
      }));

      setBlogs(apiBlogs);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setError("Failed to load API blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const headingAnimation = useSpring({
    opacity: headingInView ? 1 : 0,
    transform: headingInView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 120, friction: 30 },
    reset: false,
  });

  return (
    <div style={{ marginTop: "0%" }}>
      <animated.h2
        ref={headingRef}
        style={{
          ...headingAnimation,
          lineHeight: "2.0",
          fontWeight: "900",
          letterSpacing: "2px",
          fontSize: "35px",
        }}
        className="h1-blogs"
      >
        OUR BLOGS
      </animated.h2>

      <Container>
        {blogs.length > 0 ? (
          <Row className="g-4">
            {blogs.map((blog) => (
              <Col md={4} sm={6} xs={12} key={blog.id}>
                <BlogCard card={blog} />
              </Col>
            ))}
          </Row>
        ) : (
          <>No blogs found</>
        )}

        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="dark"
            className="rounded-pill d-flex align-items-center gap-2 px-4 py-2 justify-content-between"
            onClick={() => router.push("/blog")}
          >
            View All Blogs <FaArrowUpRightFromSquare />
          </Button>
        </div>
      </Container>
    </div>
  );
}
