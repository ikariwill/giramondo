import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { ContactLink } from '../../components/ContactLink'

const Loja = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Giramondo BikeShop
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Sua experiência na Giramondo</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <p className="gr-text-9 mb-9">
              </p>

              <p className="gr-text-9 mb-9">
              </p>

              <div className="bianchi-info">
                <div className="bianchi-brands">
                  <a href="">
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina.jpg`}
                      alt="Logo Italwin"
                    />
                  </a>
                </div>
              </div>

              <div className="bianchi-info">
                <div className="bianchi-brands">
                  <a href="">
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina2.jpg`}
                      alt="Logo Italwin"
                    />
                  </a>
                </div>
              </div>

              <div className="bianchi-info">
                <div className="bianchi-brands">
                  <a href="">
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina3.jpg`}
                      alt="Logo Italwin"
                    />
                  </a>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Loja;
