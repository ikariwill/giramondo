import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";

const Five = () => {
  return (
    <>
      <Head>
        <title>Five no Brasil - GIRAMONDO BIKESHOP</title>
      </Head>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-25 pt-lg-25 pb-9 pb-lg-12">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    <img
                      src={`/static/assets/five.png`}
                      alt=""
                      className="five-logo-info"
                    />
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" xl="8" lg="9">
                <div className="single-block mb-lg-5">
                  <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iFYTCgEWPdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                    
                  <p className="mb-9 mt-9">
                    Com uma fábrica industrial na Itália, a FIVE fabrica bicicletas e-bike com design moderno e motores sustentáveis. Pensando não apenas no hoje, mas no futuro.
                    Desde os componentes às baterias, são projetadas visando a sustentabilidade e qualidade,  bem como levá-lo ao seu destino sem muito esforço e muito mais rápido.
                  </p>
                  <p>
                    A FIVE possui, atualmente, 4 marcas registradas no grupo – Wayel, Italwin, Today Sunshine e Lockbike – além de projetos e criações não somente de e-bikes, mas também de veículos leves, concedo e ampliando toda a tecnologia, conforto e agilidade para seus usuários.
                  </p>
                </div>
                <div className="five-brands">
                  <a href="https://www.italwin.it/pt-br/">
                    <img
                      src={`/static/assets/logo-italwin.jpg`}
                      alt="Logo Italwin"
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Five;
