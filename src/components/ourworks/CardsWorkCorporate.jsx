"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ViewAllBtn from "@/components/ourworks/ViewAllBtn";

export default function CardsWorkCorporate({ filterData }) {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);

  const handleViewMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, filterData.length));
  };

  return (
    <Container>
      <Row className="justify-content-center g-4">
        {filterData.slice(0, visibleCards).map((item, index) => (
          <Col sm={6} key={index} className="d-flex justify-content-center">
            <div
              className="div-cardbox"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: playingVideo === index ? "700px" : "500px",
                transition: "max-width 0.5s ease-in-out",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {/* Video or Image */}
              <div
                style={{
                  width: "100%",
                  height: playingVideo === index ? "400px" : "250px",
                  position: "relative",
                  borderRadius: "10px",
                  transition: "height 0.5s ease-in-out",
                  top: "12%",
                  zIndex: playingVideo === index ? "3" : "1",
                }}
              >
                {playingVideo === index ? (
                  <>
                    <ReactPlayer
                      url={item.videoUrl}
                      controls
                      width="100%"
                      height="100%"
                      playing={true}
                      style={{
                        opacity: 0,
                        animation: "fadeIn 0.5s forwards",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 3,
                      }}
                    />
                    {/* Close Button */}
                    <button
                      onClick={() => setPlayingVideo(null)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        zIndex: 4,
                      }}
                    >
                      ✖
                    </button>
                  </>
                ) : (
                  <div
                    onClick={() => setPlayingVideo(index)}
                    style={{
                      cursor: "pointer",
                      position: "relative",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={item.imgPics}
                      alt="overlay-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    {/* Play Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div
                style={{
                  textAlign: "left",
                  padding: "10%",
                  backgroundImage: `url('/media/TextCard.png')`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                  position: "relative",
                  zIndex: "1",
                }}
              >
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginTop: "25px",
                    textAlign: "left",
                    width: "100%",
                    letterSpacing: "1px",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginTop: "5px",
                    textAlign: "left",
                    width: "100%",
                    letterSpacing: "1px",
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    className="btn-sm border-0 px-4"
                    style={{
                      fontSize: "12px",
                      background: "#D8F1DC",
                      color: "#00591B",
                    }}
                  >
                    <a
                      href={filterData[index].videoUrl}
                      style={{ textDecoration: "none", color: "#00591B" }}
                      target="_blank"
                    >
                      Link
                    </a>
                  </Button>
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid black",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "12px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {visibleCards < filterData.length && (
        <div className="mt-5">
          <ViewAllBtn onClick={handleViewMore} />
        </div>
      )}

      {/* Fade-in Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </Container>
  );
}
