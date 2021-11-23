import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/jpg/l5-case1.jpg";
import imgC2 from "../../assets/image/l5/jpg/l5-case2.jpg";
import imgC3 from "../../assets/image/l5/png/caminho.png";
import imgC4 from "../../assets/image/l5/jpg/l5-case4.jpg";

const Aventura = () => (
  <>
    {/* <!-- CaseStudies section --> */}
    <div id="aventuras" className="case-section pt-15 pb-14 py-lg-25">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-11 mb-lg-21">
              <h3 className="sub-badge gr-text-12 text-uppercase text-red mb-7">
                Trilhas
              </h3>
              <h2 className="title gr-text-4 mb-0">
                Aventuras
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                  <img src={imgC1} alt="" className="w-100 rounded-10" />
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Trilha
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Caminho dos Anjos
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                  <img src={imgC2} alt="" className="w-100 rounded-10" />
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Trilha
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Caminho Real
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                  <img src={imgC3} alt="" className="w-100 rounded-10" />
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Trilha
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Caminho da fé
                  </h3>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Aventura;
