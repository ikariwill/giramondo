import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";

import Slider from "react-slick";

const Giramondo = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    touchMove: true,
  };
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12">
          <Container>
            <Row className="justify-content-center direction-column pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Oficina Giramondo
                  </h2>
                  <p className="gr-text-7 mb-10 mb-lg-13">Oficinal Digital credenciada Shimano Service Center e a única Campagnolo Opnion Dealer do Brasil. Além de contar com os Mecânicos altamente treinados e experientes.</p>
                
                  <Slider {...settings}>
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina2.jpg`}
                      alt="Logo Italwin"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina3.jpg`}
                      alt="Logo Italwin"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/oficina.jpeg`}
                      alt="Logo Shimano"
                    />
                  </Slider>

                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center direction-column">

              <Col xl="8" lg="9">
                <p>
                  Nossa oficina digital trabalha com uma plataforma de gestão de serviços onde você pode agendar serviços, conferir preços e aprovar orçamentos, acompanhar e inserir informações sobre as suas manutenções. E para facilitar tudo isso, um serviço de Chat com o mecânico, que permite o envio e recebimento de fotos da manutenção.
                </p>

                <p className="text-center">
                  Baixei o aplicativo e agende a sua revisão.
                </p>
              </Col>
              <Col className="text-center" xl="8" lg="9">
                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=br.com.blump.mobile.cyclist">
                  <img
                    src={`/static/assets/playstore.png`}
                    alt="Disponível na Google Play Store"
                    width="170px"
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/blump/id1587383812">
                  <img
                    src={`/static/assets/appstore.png`}
                    alt="Disponível na App Store"
                    width="170px"
                    className="ml-5"
                  />
                </a>
              </Col>

              <Col xl="8" lg="9">
                <div className="default-info mt-20 mb-10">
                  <img
                    src={`/static/assets/shimano-service.jpg`}
                    alt="Logo Shimano"
                    width="200px"
                  />

                  <p className="gr-text-9 mb-10 mt-10">
                    A Giramondo Bike Shop é reconhecida como um Centro de especialistas SHIMANO, oferecendo consultoria e uma ampla linha de componentes, produtos, peças de reposição, ferramental completo e serviços especializados. Nossos mecânicos recebem treinamento técnico de alto nível e têm know-how para lidar com toda a linha de componentes SHIMANO: das linhas básicas às mais altas, que envolvem tecnologia eletrônica e engenharia de precisão.
                    <a target="_blank" rel="noreferrer" href="https://bike.shimano.com/pt-BR/information/SHIMANO_SERVICE_CENTER.html">
                      {' '}Saiba Mais
                    </a>
                  </p>
                </div>


                <div className="default-info mb-10">
                  <img
                    src={`/static/assets/campagnolo.png`}
                    alt="Logo Campagnolo"
                  />
                  <p className="gr-text-9 mb-9">
                    CAMPY CODE
                  </p>
                  <p className="gr-text-9 mb-9">
                    Mais do que pontos de venda especializados, são sobretudo onde se encontram a paixão, o produto e a marca Campagnolo.
                    Campy CODE (Campagnolo Opinion Dealer) é um projeto que foi criado para selecionar parceiros de referência e embaixadores para a marca Campagnolo em todo o Brasil da rede de especialistas Campagnolo Pro-Shops.
                    <a target="_blank" rel="noreferrer" href="https://www.campagnolo.com/WW/en/Shops/campy_code">
                      {' '}Saiba Mais
                    </a>
                  </p>
                </div>
              </Col>
              
            </Row>
            
            
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Giramondo;
