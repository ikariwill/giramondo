import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logoVerticalImage from "../../assets/image/bike2.jpg";


const Content = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section border-bottom pb-7 pb-lg-28 bg-default-6">
      <Container>
        <Row className=" justify-content-center">
          <div className="col-xl-6 col-lg-8 col-sm-10">
            <div className="section-title text-center mb-12 mb-lg-23">
              <h2 className="title gr-text-4 mb-6">
                Encontre o produto em 3 passos
              </h2>
            </div>
          </div>
        </Row>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-75 w-lg-85 w-xl-75 mx-auto position-relative gr-z-index-1">
                <img className="rounded-10 w-100" src={logoVerticalImage} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="content-widget mt-7 mt-lg-0 pr-lg-13 pl-xl-19">
              <Row className="align-items-center">
                <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">1</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Escolha o produto que tem interesse
                      </h3>

                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">2</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Receba informações via Whatsapp
                      </h3>

                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">3</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Pague e receba seu produto em casa
                      </h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content;
