import React, { useContext } from "react";
import Link from "next/link";
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
                white={gContext.footer.theme === "light"}
                className="footer-logo mb-11"
              />
              <p className="gr-text-11">
                Alameda dos Jurupis, 285 - Moema, São Paulo - SP, 04088-000
              </p>              
              <p className="gr-text-11">
                Whatsapp: 11 9 9139-9291
              </p>
              <p className="gr-text-11">
                Telefone: 11 5051-3023
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">

                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/">
                    <a className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </a>
                  </Link>
                </li>
                
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <a target="_blank" href="https://www.google.com/maps/place/Giramondo+Bicicletas+e+Servi%C3%A7os+Ltda/@-23.6025464,-46.6579552,15z/data=!4m2!3m1!1s0x0:0xfdda1d9d5fd0053b?sa=X&ved=2ahUKEwjNga-zla_0AhViyDgGHW-1BLUQ_BJ6BAhTEAU">
                <img src="https://i.imgur.com/7uLBCZC.png" alt="Mapa Giramondo" className="mapa" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
