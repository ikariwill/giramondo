import React from "react";
import { useRouter } from 'next/router'
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  const router = useRouter()

  return (
    <>
      {/* <!--Service section  -->*/}
      <div id="bikes" className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0 border-right-custom cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div onClick={() => window.location.href = "/produtos/bianchi"} className="service-card gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="172px" src="/static/assets/bianchi.png" alt="Bianchi" />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Primeiro Showroom no Brasil</h3>
                <a
                  href="/servicos/espaco-bianchi"
                  className="gr-text-9 btn-link with-icon text-dark mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0 border-right-custom cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div onClick={() => window.location.href = "/produtos/five-bikes"} className="service-card gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="120px" src="/static/assets/five.png"  alt="Five" />
                </div>
                <h3 className="card-title gr-text-6 mb-6">As melhores <br/> e-bikes urbanas italianas</h3>
                <a
                  href="/servicos/five"
                  className="gr-text-9 btn-link with-icon text-dark mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0 border-right-custom cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div 
                onClick={() => window.location.href = "/servicos/loja-giramondo"}
                className="service-card gr-hover-shadow-4 d-flex flex-column text-center pt-10 px-9 pb-11 h-100"
              >
                <div className="card-img mb-11">
                  <img width="120px" src="/static/assets/loja.png" alt="Loja Giramondo" />
                </div>
                <h3 className="card-title gr-text-6 mb-6">
                  Giramondo Bikeshop<br/> a sua nova experiência no ciclismo
                </h3>
                <a
                  href="/servicos/loja-giramondo"
                  className="gr-text-9 btn-link with-icon text-dark mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col> 
            <Col
              md="6"
              lg="3"
              className="mb-9 mb-lg-0 cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div onClick={() => window.location.href = "/servicos/oficina-giramondo"} className="service-card gr-hover-shadow-4 d-flex flex-column text-center pt-8 px-9 pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="120px" src="/static/assets/oficina.png" alt="Oficina Giramondo" />
                </div>
                <h3 className="card-title gr-text-6 mb-6 custom-mt"> Oficina digital e com profissionais altamente especializados</h3>
                <a
                  href="/servicos/oficina-giramondo"
                  className="gr-text-9 btn-link with-icon text-dark mt-auto"
                >
                  Saiba mais{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
