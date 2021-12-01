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
                  <p className="gr-text-7 mb-0 mb-lg-13">Uma nova experiência
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p># ADICIONAR CARROSSEL DA IMAGENS#</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center flex-column">
              <Col class="custom-col" xl="8" lg="9">
                <p>Tudo para o Ciclista</p>
                <p>#Andar superior - escrever texto#</p>
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/loja/loja-giramondo-2.jpeg`}
                  alt="Loja Giramondo"
                />
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/ciclista.jpeg`}
                  alt="Loja Giramondo"
                />
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/roupa.jpeg`}
                  alt="Loja Giramondo"
                />
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/loja2.jpeg`}
                  alt="Loja Giramondo"
                />
              </Col>
              <Col class="custom-col" xl="8" lg="9">
                <p>Tudo para a Bike</p>
                <p>#Andar térreo - escrever texto#</p>
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/loja/loja-giramondo-9.jpeg`}
                  alt="Loja Giramondo"
                />
              </Col>
              <Col class="custom-col" xl="8" lg="9">
                <p>Tudo para o Pelotão</p>
                <p>#- escrever texto -#</p>
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/convivencia.jpg`}
                  alt="Loja Giramondo"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Loja;
