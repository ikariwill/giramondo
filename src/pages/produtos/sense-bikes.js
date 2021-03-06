import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";

import CTA2 from "../../sections/landing1/CTA2";

const Bianchi = () => {
  return (
    <>
      <Head>
        <title>Sense no Brasil - GIRAMONDO BIKESHOP</title>
      </Head>
      <PageWrapper
        footerConfig={{
          style: "style1", 
          map: false, //style1, style2
        }}
      >
        <div className="inner-banner pt-25 pt-lg-25 pb-9 pb-lg-5">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    <img
                      src={`/static/assets/sense.png`}
                      alt=""
                      className="bianchi-logo-info"
                    />
                  </h2>
                  <p className="text-center gr-text-7 mb-5 mb-lg-5">
                    <b>
                      Bicicletas Produzidas Por Ciclistas,
                      Para Ciclistas
                    </b>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                        <img
                          className="bianchi-brands-img"
                          src={`/static/assets/sense-info-1.png`}
                          alt="Sense Bike"
                        />
                    </div>
                  </div>
                  <p className="mb-9">
                    Fundada por ciclistas apaixonados com o objetivo de oferecer bicicletas nacionais com padr??o mundial, se tornou a principal marca investidora do ciclismo nacional por acreditar que, fomentando o desenvolvimento do esporte, impactaria de forma positiva a vida das pessoas.
                  </p>                 

                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                        <img
                          className="bianchi-brands-img"
                          src={`/static/assets/sense-info-2.png`}
                          alt="Sense Bike"
                        />
                    </div>
                  </div>

                  <p className="mb-9">
                    Sempre buscando inova????o, a Sense desenvolve bicicletas com o que h?? de mais moderno em tecnologia e design. N??o por menos, levou tr??s edi????es do Pr??mio Guid??o de Ouro como melhor bicicleta nacional.
                  </p>

                  <p className="mb-9">
                    A empresa det??m um avan??ado parque fabril em Manaus com estrutura completa de produ????o e montagem. Conta, ainda, com pessoal capacitado para cria????o, distribui????o, marketing, comercial e p??s-venda, isso tudo em solo nacional, al??m de manter uma estrutura para importa????o e estoque. Juntamente com a Swift Carbon, adquirida em 2018, comp??e a S2 Bicycle Industries com sede em Portugal e polo de desenvolvimento na ??frica do Sul.
                  </p>

                  <p className="mb-9">
                    Hoje ?? uma das marcas l??deres de mercado e pioneira em diversos assuntos do setor, tal como a cria????o do conceito GROM: <b>???bicicleta de verdade para garotos e garotas que curtem a vida outdoor???!</b>
                  </p>

                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                        <img
                          className="bianchi-brands-img"
                        src={`/static/assets/sense-info-3.png`}
                          alt="Sense Bikes"
                        />
                    </div>
                  </div>

                  <p className="mb-9">
                    Tamb??m reconhecida por ser <b>precursora no universo de el??tricas</b>, a Sense continua inovando nesse segmento a cada ano, n??o se atendo ao universo urbano, seu pontap?? inicial em 2009.
                  </p>

                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                      <img
                        className="bianchi-brands-img"
                        src={`/static/assets/sense-info-4.png`}
                        alt="Sense Bikes"
                      />
                    </div>
                  </div>

                  <div className="single-block mb-12 mb-lg-15">

                    <a
                      target="_blank"
                      href="https://sensebike.com.br/"
                      className="btn btn-primary mt-3 mt-lg-10 ">
                      Conhe??a os produtos da Sense
                    </a>
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default Bianchi;
