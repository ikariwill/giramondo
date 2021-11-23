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
                    Espaço Bianchi
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
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <p className="gr-text-9 mb-9">
                    Fundada por 4 amigos unidos pelo sonho de inaugurar a primeira Espaço Bianchi e Five no Brasil, está no DNA da Giramondo proporcionar a você uma nova e abrangente experiência em ciclismo.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Loja
                  </h3>
                  <p className="gr-text-9 mb-0">
                    <ul>
                      <li>
                        Bicicletas Bianchi e Five
                      </li>
                      <li>
                        Espaço Bianchi
                      </li>
                      <li>
                        Assessoria na escolha do modelo e dos equipamentos indispensáveis
                      </li>
                      <li>
                        Vestuário, sapatilhas, capacetes, peças e acessórios
                      </li>
                      <li>
                        Suplementos
                      </li>
                      <li>
                        Descontos para associados de assessorias parceiras
                      </li>
                    </ul>
                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <ContactLink
                    title="Entre em contato com um vendedor"
                    message="Entrei em contato pela página do espaço bianchi, e desejo mais informações."
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Loja;
