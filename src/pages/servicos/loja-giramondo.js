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
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Giramondo BikeShop
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Uma nova experiência
                  </p>
                  <p>
                    Venha conferir uma nova experiência no ciclismo. Nossa loja é o primeiro showroom da Bianchi e Five do Brasil, além de ser a nova casa da Sense em Moema.
                  </p>
                  <p>
                    Temos um ambiente exclusivo para sua bike com peças e acessórios, além de uma área de convívio muito agradável para tomar aquele café ou até mesmo uma cerveja depois de um pedal. 
                  </p>
                  <Slider {...settings}>
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
                      src={`/static/assets/loja/loja-giramondo-3.jpeg`}
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

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center flex-column align-items-center">
              <Col className="custom-col" xl="8" lg="9">
                <p>Tudo para o Ciclista</p>
                <p>Aqui você encontra as bikes mais fantásticas da Bianchi e Sense. Além disso, temos os produtos com a marca Bianchi e as melhores marcas de vestuário do mundo do ciclismo e a linha de vestuário exclusivo da Giramondo.</p>
                  {/* <img
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
                  /> */}
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
                <p>Tudo para sua Bike</p>
                <p>Precisando de algo para sua bike? Você encontra aqui. Uma grande seleção de peças e acessórios que vão desde luzes para o pedal seguro até grupos completos das Campagnolo.</p>
                {/* <img
                  className="bianchi-brands-img"
                  src={`/static/assets/loja/loja-giramondo-9.jpeg`}
                  alt="Loja Giramondo"
                /> */}
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
                      name: 'sram',
                      src: 'sram.jpg'
                    },
                    {
                      name: 'continental',
                      src: 'continental.jpg',
                    },
                    {
                      name: 'kenda',
                      src: 'kenda.jpg',
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
                <p>Tudo para o Pelotão</p>
                <p>Área de convívio para você e seus amigos do pedal. Venha tomar um café conosco.</p>
                <img
                  className="bianchi-brands-img"
                  src={`/static/assets/convivencia.jpg`}
                  alt="Loja Giramondo"
                />
                <p><b>Atendimento: seg a sex 10h as 19h, sábado 10h as 15h</b></p>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Loja;
