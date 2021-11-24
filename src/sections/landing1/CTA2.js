import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ContactLink } from '../../components/ContactLink'

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section-2 dark-mode-texts bg-blackish-blue ">
      <Container>
        <div className="cta-wrapper pt-14 pb-14 py-lg-19 border-bottom">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7 text-white custom-footer-h2">
                  GOSTOU DE ALGUM PRODUTO?
                </h2>
                <p className="gr-text-8 gr-color-white-opacity-7 mb-8 mb-lg-0">
                  Entre em contato, ou <a target="_blank" href="https://www.google.com/maps/dir//giramondo+bikes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce5b3170349d41:0xfdda1d9d5fd0053b?sa=X&ved=2ahUKEwjNga-zla_0AhViyDgGHW-1BLUQ9Rd6BAhbEAQ">venha nos visitar</a>.
                </p>
              </div>
            </Col>
            <Col lg="4" md="10" className="offset-lg-2">
              <div className="cta-btn text-lg-right">
                <ContactLink  title="CONTATO" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default CTA;
