import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

import CTA2 from "../../sections/landing1/CTA2";

const Bianchi = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", 
          map: false, //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-5">
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
                  <p className="gr-text-7 mb-0">DESDE 2009</p>
                  <p className="gr-text-7 mb-0">
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
                  <p className="gr-text-9 mb-9">
                    Fundada por ciclistas apaixonados com o objetivo de oferecer
                    bicicletas nacionais com padrão mundial, se tornou a principal
                    marca investidora do ciclismo nacional por acreditar que,
                    fomentando o desenvolvimento do esporte, impactaria de forma
                    positiva a vida das pessoas.
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

                  <p className="gr-text-9 mb-9">
                    Sempre buscando inovação, a Sense desenvolve bicicletas com o que há de mais
                    moderno em tecnologia e design. Não por menos, levou três edições do Prêmio Guidão de
                    Ouro como melhor bicicleta nacional.
                  </p>

                  <p className="gr-text-9 mb-9">
                    A empresa detém um avançado parque fabril em Manaus com estrutura completa de
                    produção e montagem. Conta, ainda, com pessoal capacitado para criação, distribuição,
                    marketing, comercial e pós-venda, isso tudo em solo nacional, além de manter uma
                    estrutura para importação e estoque. Juntamente com a Swift Carbon, adquirida em 2018,
                    compõe a S2 Bicycle Industries com sede em Portugal e polo de desenvolvimento na
                    África do Sul.
                  </p>

                  <p className="gr-text-9 mb-9">
                    Hoje é uma das marcas líderes de mercado e pioneira em
                    diversos assuntos do setor, tal como a criação do
                    conceito GROM: <b>“bicicleta de verdade para garotos e garotas
                      que curtem a vida outdoor”!</b>
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

                  <p className="gr-text-9 mb-9">
                    Também reconhecida por ser <b>precursora no universo de
                    elétricas</b>, a Sense continua inovando nesse segmento a cada
                    ano, não se atendo ao universo urbano, seu pontapé inicial em
                    2009.
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
                      Conheça os produtos da Sense
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
