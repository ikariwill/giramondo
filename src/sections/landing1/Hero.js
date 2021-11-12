import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgL1Hero from "../../assets/image/l5/png/l5-hero-img.png";
import imgDot from "../../assets/image/l5/png/l5-dot-shape.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative header-background-custom pt-27 pt-lg-32 pb-15 pb-lg-27">
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
                {/* <img className="w-100" src={imgL1Hero} alt="" /> */}
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
                  Embarque nessa aventura com a Giramondo.
                </h1>
                <p className="text-white mb-11 pr-md-12">
                  Celeste é a cor da Bianchi por excelência. Combinada com Passione, expressa a
                  paixão pela marca Bianchi. No Brasil, Bianchi é Giramondo.
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
