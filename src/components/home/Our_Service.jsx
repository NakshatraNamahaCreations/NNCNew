"use client";

import React from "react";
import Slider from "react-slick";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      right: -10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      background: "black",
      opacity: 0.8,
      borderRadius: "100%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    <FaChevronRight color="white" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      left: -10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      background: "black",
      borderRadius: "100%",
      opacity: 0.8,
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    <FaChevronLeft color="white" />
  </div>
);

const Our_Service = ({ cardData }) => {
  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "70px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="my-5 px-3 mx-2">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-4">
            <Link
              href={card.link}
              target="_blank"
              style={{ textDecoration: "none" }}
              className="removelinkStyle"
            >
              <Card className="rounded-3">
                <Image
                  src={card.ui_uxdesign}
                  alt={card.title}
                  width={400}
                  height={480}
                  className="card-img-top"
                  style={{
                    height: "480px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <Card.Body
                  className="d-flex flex-column"
                  style={{ position: "absolute", bottom: "0", left: "0" }}
                >
                  <Card.Title className="fw-bold fs-6 mb-2 text-dark">
                    {card.title}
                  </Card.Title>
                  <Card.Text
                    className="text-secondary flex-grow-1"
                    style={{ fontSize: "0.9rem", lineHeight: 1.3 }}
                  >
                    {card.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center ">
                    <Button
                      variant="success"
                      className="px-4 rounded-pill py-1 fw-semibold"
                      style={{
                        backgroundColor: "#d4f5d9",
                        color: "#007500",
                        border: "none",
                        fontSize: ".8rem",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#a0dca4";
                        e.currentTarget.style.color = "#004500";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#d4f5d9";
                        e.currentTarget.style.color = "#007500";
                      }}
                    
                    >
                      Live
                    </Button>

                    <div
                      className="text-muted"
                      style={{ cursor: "pointer", fontSize: "1.3rem" }}
                    >
                      <IoIosHeartEmpty />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>

      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="dark"
          className="rounded-pill d-flex align-items-center gap-2 px-4 py-2 justify-content-between"
          onClick={() => router.push("/our-works")}
        >
          View All <FaArrowUpRightFromSquare />
        </Button>
      </div>
    </div>
  );
};

export default Our_Service;
