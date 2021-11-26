import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Brand = ({id, title, brands = []}) => (
  <>
    {/* <!-- Brand section --> */}
    <div id={id} className="brand-section pt-11 pb-9  pb-lg-24 bg-default-6 ">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="10" lg="9" xl="8">
            <div className="section-title text-center mb-7 mb-lg-11">
              <h2 className="title gr-text-4 mb-9">{title}</h2>
            </div>
          </Col>
          <Col xs="12" md="11" lg="10" xl="9">
            <div className="brand-logos d-flex justify-content-center align-items-center mx-n9 flex-wrap">
          {
            brands.map(brand => (
                <div
                  className="single-brand mx-9 py-7 gr-opacity-8"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  key={brand.name}
                >
                   {
                    brand.url && (
                      <a href={brand.url}>
                        <img
                          src={`/static/assets/${brand.src}`} 
                          alt="" 
                          className={`${brand.name === 'five' ? 'five-img w100' : 'w100'}`}
                        />
                      </a>
                      
                  ) || (
                      <img
                        src={`/static/assets/${brand.src}`}
                        alt=""
                        className={`${brand.name === 'five' ? 'five-img w100' : 'w100'}`}
                      />

                  )}
                </div>
            ))
          }
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Brand;
