import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useInterval from 'use-interval'

import imgDot from "../../assets/image/l5/png/l5-dot-shape.png";

const slider = [
  {
    title: "Venha para uma nova experiência.",
    description: `Primeiro showroom Bianchi do Brasil.`,
  },
  {
    title: "Venha para uma nova experiência.",
    description: `Primeiro showroom Bianchi do Brasil.`,
  },
  {
    title: "Venha para uma nova experiência.",
    description: `Primeiro showroom Bianchi do Brasil.`,
  },
  {
    title: "Venha para uma nova experiência.",
    description: `Primeiro showroom Bianchi do Brasil.`,
  }
]


const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useInterval(() => {
    setCurrentSlider(currentSlider + 1);

    if(currentSlider === 2) {
      setCurrentSlider(0);
      return
    }

  }, 3000);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className={
          `position-relative header-background-custom-${currentSlider}  pt-27 pt-lg-32 pb-15 pb-lg-27`
        }
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img position-relative"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div
                  className="gr-abs-tl gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src={imgDot} alt="" />
                </div>
              </div>
            </Col>
            <Col
              xs="11"
              md="9"
              lg="7"
              xl="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content mt-11 mt-lg-0">
                <h1 className="title text-white mb-8">
                  {slider[currentSlider]?.title}
                </h1>
                <p className="text-white mb-11 pr-md-12">
                  {slider[currentSlider]?.description}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
};

export default Hero;
