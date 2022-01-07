import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
              alternative
                white={gContext.footer.theme === "light"}
                className="footer-logo mb-11"
              />

            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <p>
                Atendimento: seg a sex 10h as 19h, sábado 10h as 15h
              </p>
              <p className="gr-text-11">
                Alameda dos Jurupis, 285 - Moema, São Paulo - SP, 04088-000
              </p>
              <p className="gr-text-11 mb-0">
                Whatsapp: 11 9 9139-9291
              </p>
              <p className="gr-text-11">
                Telefone: 11 5051-3023
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">

                <li className="mr-2">
                  <a href="https://www.facebook.com/giramondo.bikeshop.sp">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </a>
                </li>
                <li className="mr-2">
                  <a href="https://www.instagram.com/giramondo.bikeshop">
                    <a className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </a>
                  </a>
                </li>

              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
