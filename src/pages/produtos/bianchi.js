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
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12">
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
                  <p className="gr-text-7 mb-0 mb-lg-13">Fabricante mais antigo do mundo</p>
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
                  <p className="gr-text-9 mb-9">
                    Edoardo Bianchi, um fabricante de instrumentos médicos de 21 anos, começou seu negócio de fabricação de bicicletas em uma pequena loja na Via Nirone, 7, Milão, em 1885.
                  </p>
                  <p className="gr-text-9 mb-9">
                    Bianchi foi o pioneiro de muitas inovações como o freio da pinça da roda dianteira e do uso de rodas de tamanhos iguais com pneus de borracha pneumáticos.
                  </p>
                  <p className="gr-text-9 mb-9">
                    As bicicletas Bianchi são tradicionalmente pintadas com Celeste, uma turquesa também conhecida como Verde Bianchi.
                  </p>
                  <p className="gr-text-9 mb-9">
                    Mitos dizem que Celeste é a cor do céu de Milão, a cor dos olhos de uma ex-rainha da Itália para quem Edoardo Bianchi fez uma bicicleta (a águia coroada do logotipo da empresa é uma adaptação do antigo brasão real) e que era uma mistura de excesso de tinta militar. A tonalidade mudou ao longo dos anos, às vezes mais azul, depois mais verde.
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

                  <p className="gr-text-9 mb-9">
                    Ao longo da era moderna, Bianchi está associada aos vencedores italianos do Giro d'Italia e do Tour de France, Fausto Coppi, <b>Marco Pantani</b> e Felice Gimondi.
                  </p>

                  <p className="gr-text-9 mb-9">
                    Ao longo dos 130 anos de história, Bianchi se tornou uma marca de estilo de vida. O desejo pela bicicleta na vida cotidiana, misturado com a cultura italiana estilosa, criou uma imagem duradoura. A evolução de Bianchi é agora, mas o futuro ainda espera ser escrito, para nos levar adiante, o que será feito por meio de nossa paixão e pesquisa tecnológica contínua.
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
                      Conheça os produtos da Biachi
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
