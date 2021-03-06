import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="brand-section pt-13 pb-13 bg-default-2 ">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs="12">
              <div className="brand-logos d-flex justify-content-center justify-content-xl-between align-items-center mx-n9 flex-wrap">
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
                <div className="single-brand mx-9 py-6 gr-opacity-8">
                  <img  alt="" className="w-100" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Brands;
