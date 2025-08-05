"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RequestQuote from "./RequestQuote"; // adjust path
import ServicesDropdown from "./ServicesDropdown";
import "@/styles/Navbar_Menu.css";
import { useState, useEffect } from "react";

export default function Navbar_Menu({ isHomePage }) {
  const pathname = usePathname();
  const [linkColor, setLinkColor] = useState(isHomePage ? "red" : "black");

  useEffect(() => {
    setLinkColor(isHomePage ? "white" : "black");
  }, [isHomePage]);

  return (
    <header
      className="navbar"
      style={{
        backgroundColor: isHomePage ? "transparent" : "white",
        position: isHomePage ? "absolute" : "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        padding: "10px 0",
        boxShadow: isHomePage ? "none" : "0px 1px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link href="/">
            <Image
              src="/media/nnclogo.png"
              width={70}
              height={70}
              alt="NNC logo"
              className="navbar__logo-image"
              style={{
                filter: isHomePage ? "brightness(100%)" : "none",
              }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navbar__links">
          <ul className="navbar__menu">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About Us" },
              { path: "/our-works", label: "Our Works" },
            ].map(({ path, label }) => (
              <li key={path} className="navbar__item">
                <Link
                  href={path}
                  className="navbar__link"
                  style={{
                    color: pathname === path ? "#007bff" : linkColor,
                    fontWeight: "600", // Always bold
                  }}
                >
                  {label}
                </Link>

              </li>
            ))}

            {/* Dropdown */}
            <li className="navbar__item">
              <ServicesDropdown textColor={linkColor} />
            </li>

            <li className="navbar__item">
              <Link
                href="/blog"
                className="navbar__link"
                style={{ color: linkColor }}
              >
                Blogs
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                href="/careers"
                className="navbar__link"
                style={{ color: linkColor }}
              >
                Careers
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                href="/contact-us"
                className="navbar__link"
                style={{ color: linkColor }}
              >
                Contact Us
              </Link>
            </li>

            <li className="navbar__item">
              <RequestQuote textColor={linkColor} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
