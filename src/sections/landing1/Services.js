import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {

  return (
    <>
      {/* <!--Service section  -->*/}
      <div id="bikes" className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="5"
              lg="2"
              className="mb-9 mb-lg-0 border-right-custom"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div  className="service-card d-flex flex-column text-center pt-15  pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="130px" src="/static/assets/bianchi.png" alt="Bianchi" />
                </div>
                <h3 className="card-title gr-text-7 mb-4">Primeiro Showroom no Brasil</h3>
                <a
                  href="/produtos/bianchi"
                  className="gr-text-9 btn btn-outline btn-custom mt-auto"
                >
                  Saiba mais
                </a>
              </div>
            </Col>
            <Col
              md="5"
              lg="2"
              className="mb-9 mb-lg-0 border-right-custom"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card d-flex flex-column text-center pt-15  pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="140px" src="/static/assets/sense.png" alt="Sense" />
                </div>
                <h3 className="card-title gr-text-7 mb-4">Bike Passion</h3>
                <a
                  href="/produtos/sense-bikes"
                  className="gr-text-9 btn btn-outline btn-custom mt-auto"
                >
                  Saiba mais
                </a>
              </div>
            </Col>
            <Col
              md="5"
              lg="2"
              className="mb-9 mb-lg-0 border-right-custom"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card  d-flex flex-column text-center pt-15  pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="100px" src="/static/assets/five.png" alt="Five" />
                </div>
                <h3 className="card-title gr-text-7 mb-4">As melhores <br/> e-bikes urbanas italianas</h3>
                <a
                  href="/produtos/five-bikes"
                  className="gr-text-9 btn btn-outline btn-custom mt-auto"
                >
                  Saiba mais
                </a>
              </div>
            </Col>
            <Col
              md="5"
              lg="2"
              className="mb-9 mb-lg-0 border-right-custom"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div 
                className="service-card d-flex flex-column text-center pt-10  pb-11 h-100"
              >
                <div className="card-img mb-11">
                  <img width="100px" src="/static/assets/loja.png" alt="Loja Giramondo" />
                </div>
                <h3 className="card-title gr-text-7 mb-4">
                  Giramondo Bikeshop<br/> a sua nova experiência no ciclismo
                </h3>
                <a
                  href="/servicos/loja-giramondo"
                  className="gr-text-9 btn btn-outline btn-custom mt-auto"
                >
                  Saiba mais
                </a>
              </div>
            </Col> 
            <Col
              md="5"
              lg="2"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div  className="service-card d-flex flex-column text-center pt-8  pb-11 h-100">
                <div className="card-img mb-11">
                  <img width="100px" src="/static/assets/oficina.png" alt="Oficina Giramondo" />
                </div>
                <h3 className="card-title gr-text-7 mb-4 custom-mt"> Oficina digital e com profissionais altamente especializados</h3>
                <a
                  href="/servicos/oficina-giramondo"
                  className="gr-text-9 btn btn-outline btn-custom mt-auto"
                >
                  Saiba mais
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
