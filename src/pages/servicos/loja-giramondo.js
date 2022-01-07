import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import Brand from "../../sections/landing2/Brand";

import Slider from "react-slick";

const Loja = () => {
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
            <Row className="justify-content-center pt-5">
              <Col xl="10" lg="10">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Giramondo BikeShop
                  </h2>
                  <p className="text-center gr-text-7 mb-10 mb-lg-10">
                    <b>
                      Uma nova experiência
                    </b>
                  </p>
                  <p>
                    Fundada por 4 amigos ciclistas, está no DNA da Giramondo proporcionar a você uma nova e abrangente experiência em ciclismo.
                  </p>
                  <p className="mb-20">
                    Nossa loja é o primeiro showroom da Bianchi e Five do Brasil, além de ser a nova casa da Sense em Moema. 
                  </p>
                  <Slider {...settings}>
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-3.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-1.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-2.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-4.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-5.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-6.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-7.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-8.jpeg`}
                      alt="Loja Giramondo"
                    />
                    <img
                      className="bianchi-brands-img"
                      src={`/static/assets/loja/loja-giramondo-9.jpeg`}
                      alt="Loja Giramondo"
                    />
                    
                  </Slider>
      
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-5 pb-lg-5 bg-default-6">
          <Container>
            <Row className="justify-content-center flex-column align-items-center">
              <Col className="custom-col" xl="8" lg="9">
                <p><b>Tudo para o Ciclista</b></p>
                <p>
                  Aqui você encontra as bikes mais fantásticas da Bianchi e da Sense. Em nosso showroom temos os produtos exclusivos com a marca Bianchi e o melhor vestuário do mundo do ciclismo. Venha conhecer também a nossa linha de vestuário da Giramondo.
                </p>
              </Col>
              <Col className="custom-col" xl="12" lg="12">
                <Brand
                  id="vestuarios"
                  title="Vestuário"
                  brands={[
                    {
                      name: 'giramondo',
                      src: 'giramondo.png',
                    },
                    {
                      name: 'bianchi',
                      src: 'bianchi.png'
                    },
                    {
                      name: 'giro',
                      src: 'giro.jpg'
                    },
                    {
                      name: 'cemporcento',
                      src: 'cemporcento.jpg'
                    },
                    {
                      name: 'sidi',
                      src: 'sidi.jpg'
                    },
                    {
                      name: 'mauro-ribeiro',
                      src: 'mauro-ribeiro.jpg'
                    },
                    {
                      name: 'campagnolo',
                      src: 'campagnolo.png'
                    },
                    {
                      name: 'castelli',
                      src: 'castelli.jpg'
                    }
                  ]}
                />
                </Col>
              <Col className="custom-col" xl="8" lg="9">
                <p><b>Tudo para sua Bike</b></p>
                <p>
                  Precisando de algo para sua bike? Você encontra aqui uma grande seleção de peças e acessórios, que vão desde luzes para o pedal seguro até grupos completos da Campagnolo e Shimano.
                </p>
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/loja/loja-giramondo-9.jpeg`}
                  alt="Loja Giramondo"
                />
              </Col>
              <Col className="custom-col" xl="12" lg="12">
                <Brand
                  id="componentes"
                  title="Componentes"
                  brands={[
                    {
                      name: 'campagnolo',
                      src: 'campagnolo.png'
                    },
                    {
                      name: 'shimano',
                      src: 'shimano.jpg',
                    },
                    {
                      name: 'continental',
                      src: 'continental.jpg',
                    },
                    {
                      name: 'kenda',
                      src: 'kenda.jpg',
                    },
                    {
                      name: 'sram',
                      src: 'sram.jpg'
                    },
                  ]}
                />
                <Brand
                  id="acessorios"
                  title="Acessórios"
                  brands={[
                    {
                      name: 'elite',
                      src: 'elite.jpg',
                    },

                    {
                      name: 'garmin',
                      src: 'garmin.jpg',
                    },
                    {
                      name: 'look',
                      src: 'look.jpg',
                    },

                    {
                      name: 'topeak',
                      src: 'topeak.jpg',
                    },

                    {
                      name: 'parktool',
                      src: 'parktool.jpg',
                    },


                  ]}
                />
                <p><b>Tudo para o Pelotão</b></p>
                <p>
                  Venha tomar um café na nossa área de convívio com os seus amigos do pedal.
                </p>
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
