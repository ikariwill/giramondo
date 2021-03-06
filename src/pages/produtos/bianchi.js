import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";

import CTA2 from "../../sections/landing1/CTA2";

const Bianchi = () => {
  return (
    <>
      <Head>
        <title>Bianchi no Brasil - GIRAMONDO BIKESHOP</title>
      </Head>
      <PageWrapper
        footerConfig={{
          style: "style1", 
          map: false, //style1, style2
        }}
      >
        <div className="inner-banner pt-25 pt-lg-25 pb-9 pb-lg-12">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    <img
                      src={`/static/assets/bianchi.png`}
                      alt=""
                      className="bianchi-logo-info"
                    />
                  </h2>
                  <p className="text-center gr-text-7 mb-5 mb-lg-5">
                    <b>
                      Fabricante mais antigo do mundo
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
                      <a href="https://www.italwin.it/pt-br/">
                        <img
                          className="bianchi-brands-img"
                          src={`/static/assets/bianchi-shop.jpg`}
                          alt="Logo Italwin"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="mb-9">
                    Edoardo Bianchi, um fabricante de instrumentos m??dicos de 21 anos, come??ou seu neg??cio de fabrica????o de bicicletas em uma pequena loja na Via Nirone, 7, Mil??o, em 1885.
                  </p>
                  <p className="mb-9">
                    Bianchi foi o pioneiro de muitas inova????es como o freio da pin??a da roda dianteira e do uso de rodas de tamanhos iguais com pneus de borracha pneum??ticos.
                  </p>
                  <p className="mb-9">
                    As bicicletas Bianchi s??o tradicionalmente pintadas com Celeste, uma turquesa tamb??m conhecida como Verde Bianchi.
                  </p>
                  <p className="mb-9">
                    Mitos dizem que Celeste ?? a cor do c??u de Mil??o, a cor dos olhos de uma ex-rainha da It??lia para quem Edoardo Bianchi fez uma bicicleta (a ??guia coroada do logotipo da empresa ?? uma adapta????o do antigo bras??o real) e que era uma mistura de excesso de tinta militar. A tonalidade mudou ao longo dos anos, ??s vezes mais azul, depois mais verde.
                  </p>                  

                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                      <a href="https://www.italwin.it/pt-br/">
                        <img
                          className="bianchi-brands-img"
                          src={`/static/assets/marco-pantani.jpg`}
                          alt="Logo Italwin"
                        />
                      </a>
                    </div>
                  </div>

                  <p className="mb-9">
                    Ao longo da era moderna, Bianchi est?? associada aos vencedores italianos do Giro d'Italia e do Tour de France, Fausto Coppi, <b>Marco Pantani</b> e Felice Gimondi.
                  </p>

                  <p className="mb-9">
                    Ao longo dos 130 anos de hist??ria, Bianchi se tornou uma marca de estilo de vida. O desejo pela bicicleta na vida cotidiana, misturado com a cultura italiana estilosa, criou uma imagem duradoura. A evolu????o de Bianchi ?? agora, mas o futuro ainda espera ser escrito, para nos levar adiante, o que ser?? feito por meio de nossa paix??o e pesquisa tecnol??gica cont??nua.
                  </p>

                  <div className="bianchi-info">
                    <div className="bianchi-brands">
                      <a href="https://www.italwin.it/pt-br/">
                        <img
                          className="bianchi-brands-img"
                          src={`/static/assets/bianchi-future.jpg`}
                          alt="Logo Italwin"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="single-block mb-12 mb-lg-15">

                    <a
                      target="_blank"
                      href="https://www.bianchi.com/?store=global"
                      className="btn btn-primary mt-3 mt-lg-10 ">
                      Conhe??a os produtos da Bianchi
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
