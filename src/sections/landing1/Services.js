import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/bike-undraw1.svg";
import imgC2 from "../../assets/image/bike-undraw2.svg";
import imgC3 from "../../assets/image/bike-undraw1.svg";

import imgDot from "../../assets/image/l5/png/l5-dot-shape2.png";

const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-black text-uppercase mb-7">
                  Our services
                </h4>
                <h2 className="title gr-text-4">
                  We provide great services for{" "}
                  <br className="d-none d-lg-block" /> our customers based on
                  needs
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-green h-100">
                <div className="card-img mb-11">
                  <img width="172px" width="172px" src={imgC1} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Espaço Bianchi</h3>
                <p className="gr-text-9 mb-11">
                  Primeira loja Bianchi do Brasil.
                </p>
                <a
                  href="/servicos/espaco-bianchi"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-blue h-100">
                <div className="card-img mb-11">
                  <img width="172px" width="172px" src={imgC2} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Five</h3>
                <p className="gr-text-9 mb-11">
                  As melhores bikes elétricas italianas.
                </p>
                <a
                  href="/servicos/five"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img width="172px" width="172px" src={imgC3} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Loja Giramondo</h3>
                <p className="gr-text-9 mb-11">
                  Uma nova experiência no mundo do ciclismo.
                </p>
                <a
                  href="/servicos/loja-giramondo"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col> 
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img width="172px" width="172px" src={imgC3} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Oficina Giramondo</h3>
                <p className="gr-text-9 mb-11">
                  Oficina digital e com profissionais altamente especializados.
                </p>
                <a
                  href="/servicos/oficina-giramondo"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img width="172px" width="172px" src={imgDot} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
