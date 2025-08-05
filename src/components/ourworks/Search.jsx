"use client";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Container, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ cardData, setFilterData }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const filteredData = cardData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterData(filteredData);
  }, [inputValue, cardData, setFilterData]);

  const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.2 });
  const imgSpring = useSpring({
    transform: inViewImg ? "scale(1)" : "scale(0.5)",
    opacity: inViewImg ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  const [refInput, inViewInput] = useInView({ triggerOnce: true, threshold: 0.3 });
  const inputSpring = useSpring({
    transform: inViewInput ? "scale(1)" : "scale(0.5)",
    opacity: inViewInput ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div style={{ marginTop: "5%", marginBottom: "2%" }}>
      <animated.div ref={refImg} style={{ ...imgSpring, display: "flex", justifyContent: "center" }}>
        <Image
          src="/media/NNCWebsite_Works_PNG_working.png"
          alt="people-icon"
          width={200}
          height={100}
          style={{ width: "20%", height: "auto", objectFit: "cover" }}
          className="img-groups"
        />
      </animated.div>

      <Container>
        <FloatingLabel controlId="floatingSearch" className="mb-3" style={{ marginTop: "-1%" }}>
          <InputGroup as={animated.div} ref={refInput} style={inputSpring}>
            <Form.Control
              type="text"
              placeholder="Come and explore our projects"
              className="rounded-pill border border-dark input-work"
              style={{ padding: "20px", margin: "0 10%" }}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <InputGroup.Text
              className="rounded-pill search-icon"
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: "12%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#000000", width: "30px", height: "30px" }}
                className="search-icon-size"
              />
            </InputGroup.Text>
          </InputGroup>
        </FloatingLabel>
      </Container>
    </div>
  );
}
