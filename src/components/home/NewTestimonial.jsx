"use client";

import React from "react";
import styles from "@/styles/NewTestimonial.module.css";
import Image from "next/image";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const NewTestimonial = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const smile = "/media/NNCWebsite_V3_CustomersSmilling.png";

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-80px)",
    config: { tension: 80, friction: 40 },
    delay: 200,
    reset: false,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.5)",
    config: { tension: 80, friction: 20 },
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 60, friction: 20 },
    delay: 600,
  });

  return (
    <div style={{ backgroundColor: "#edf2f8", padding: "5% 0%" }}>
      <h2
        className="text-center"
        style={{ fontWeight: "800", color: "#3f3f3f" }}
      >
        What Our Customers Say
      </h2>
      <div className={styles.outerdiv}>
        <div className={styles.innerdiv}>
          {/* Div 1 */}
          <div className={`${styles.div1} ${styles.eachdiv}`}>
            <div className={styles.userdetails}>
              <div className={styles.imgbox}>
                <Image
                  src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.avif"
                  alt="user"
                  width={40}
                  height={30}
                />
              </div>
              <div className={styles.detbox}>
                <p className={styles.name}>Make My documents</p>
              </div>
            </div>
            <div className={styles.review}>
              <p style={{ paddingTop: "4%" }}>
                “ My experience with NNC was fantastic! The team was
                professional, patient, and attentive to our needs from start to
                finish. They delivered a website that exceeded our expectations,
                perfectly capturing our vision, A special thanks to Dhanlakshmi,
                Harish, Anjana, and the entire team for their dedication and
                attention to detail. Their seamless approach made the entire
                process smooth and hassle-free. Highly recommended!!! ”
              </p>
            </div>
          </div>

          {/* Div 2 */}
          <div className={`${styles.div2} ${styles.eachdiv}`}>
            <div className={styles.userdetails}>
              <div className={styles.imgbox}>
                <Image
                  src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.avif"
                  alt="user"
            width={40}
                  height={30}
                />
              </div>
              <div className={styles.detbox}>
                <p className={styles.name}>Ranjani Sivaraj</p>
              </div>
            </div>
            <div className={styles.review}>
              <p style={{ paddingTop: "4%" }}>
                “ I had a great experience working with Nakshatra Namaha
                Creations on developing my website. They were professional,
                responsive and ensured the website was designed exactly as I
                envisioned. The final result looks clean, functional and
                user-friendly. Looking forward to continuing with their digital
                marketing services next! ”
              </p>
            </div>
          </div>

          {/* Div 3 */}
          <div className={`${styles.div3} ${styles.eachdiv}`}>
            <div className={styles.userdetails}>
              <div className={styles.imgbox}>
                <Image
                  src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.avif"
                  alt="user"
               width={40}
                  height={30}
                />
              </div>
              <div className={styles.detbox}>
                <p className={`${styles.name} ${styles.dark}`}>Patil Sandeep</p>
              </div>
            </div>
            <div className={`${styles.review} ${styles.dark}`}>
              <p style={{ paddingTop: "4%" }}>
                “ Good service we got from the Nakshatra website creations ,it
                was great moments we had with Mr, Harish ... We had started the
                new business at JP Nagar. To improve the business and marketing
                activities we got best support from Nakshatra website creations
                team.... I really suggest and recommend others to connect with
                Nakshatra website creations team to develop websites and manage
                online activities. Staff and Owner are very helpful and kind
                people.... ”
              </p>
            </div>
          </div>

          {/* Div 4 */}
          <div className={`${styles.div4} ${styles.eachdiv}`}>
            <div className={styles.userdetails}>
              <div className={styles.imgbox}>
                <Image
                  src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.avif"
                  alt="user"
              width={40}
                  height={30}
                />
              </div>
              <div className={styles.detbox}>
                <p className={`${styles.name} ${styles.dark}`}>
                  Chaandini Srinivas
                </p>
              </div>
            </div>
            <div className={`${styles.review} ${styles.dark}`}>
              <p style={{ paddingTop: "4%" }}>
                “ Mr. HARISH is excellent in understanding client requirement
                and quick response... Highly appreciated.. A place where we can
                fulfill all your requirements & they give a right base for our
                ideas. The best support team, they guide to improve our ideas
                too and they give chance to prove their talents. ”
              </p>
            </div>
          </div>

          {/* Div 5 */}
          <div className={`${styles.div5} ${styles.eachdiv}`}>
            <div className={styles.userdetails}>
              <div className={styles.imgbox}>
                <Image
                  src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.avif"
                  alt="user"
                    width={40}
                  height={30}
                />
              </div>
              <div className={styles.detbox}>
                <p className={styles.name}>Sudhakar S</p>
              </div>
            </div>
            <div className={styles.review}>
              <p style={{ paddingTop: "4%" }}>
                “ We are absolutely thrilled with our new website developed by
                Nakshatra Namaha! Their design perfectly captured our brand
                aesthetic while creating a user-friendly experience. The team
                was incredibly responsive to our feedback, exceeding expectations
                with their professionalism and attention to detail throughout
                the process. We highly recommend them for top-notch website
                development solutions. ”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom section */}
      <div ref={ref} style={{ textAlign: "center" }}>
        <animated.div style={{ ...imageAnimation, display: "inline-block" }}>
          <Image
            src={smile}
            alt="smile-icon"
          width={40}
                  height={30}
            style={{ marginBottom: "25px" }}
          />
        </animated.div>

        <animated.h3
          style={{ letterSpacing: "2px", ...textAnimation }}
          className="h3-smile-love"
        >
          We love to have
        </animated.h3>

        <animated.h3
          style={{
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "30px",
            ...textAnimation,
          }}
          className="h3-customer-smile"
        >
          Our Customers Smiling
        </animated.h3>
      </div>
    </div>
  );
};

export default NewTestimonial;
