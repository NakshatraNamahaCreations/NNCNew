"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const QuickLinks = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-works", label: "Works" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div>
      <h5
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "2px",
          fontSize: "18px",
        }}
        className="h5-col1"
      >
        QUICK LINKS
      </h5>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          fontWeight: "400",
          fontSize: "14px",
        }}
        className="ul-li-footer"
      >
        {links.map(({ path, label }) => (
          <li key={path} style={{ marginBottom: "15px" }}>
            <Link
              href={path}
              style={{
                textDecoration: "none",
                color: activeLink === path ? "#EDEBF6" : "#fff",
                fontWeight: activeLink === path ? "bold" : "normal",
                transition: "color 0.3s ease-in-out",
              }}
              onClick={() => setActiveLink(path)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
