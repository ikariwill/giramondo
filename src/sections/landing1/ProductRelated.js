import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import helmetImage from "../../assets/image/helmet.jpg";
import bikeImage from "../../assets/image/bike.png";

const whatsappNumber = '5511981065807';

const products = {
  bikeText: encodeURIComponent('Tenho interesse na categoria bike'),
  helmetText: encodeURIComponent('Tenho interesse na categoria capacetes'),
  acessoriesText: encodeURIComponent('Tenho interesse nos acessórios de bike'),
  rodasText: encodeURIComponent('Tenho interesse em rodas de bike'),
}

const ProductRelated = () => {
  return (
    <>
        <div id="products" className="pt-13 pt-md-25 pb-13 pb-md-25 bg-default-5">
          <Container>
            <Row>
              <Col lg="12">
                <div className="section-title text-center">
                  <h2 className="gr-text-5">Nossos produtos</h2>
                </div>
              </Col>
            </Row>
            <Row
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={helmetImage} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                    <a 
                      target="_blank" 
                      href={
                          `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${products.helmetText}`
                      }
                    >
                        <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                          Contatar vendedor
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                      <span className="text-green">R$5.800</span>{" "}
                      <span className="ml-2 text-linethrough"> R$4.600</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Capacetes</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img width="270px" src={bikeImage} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <a target="_blank"
                        href={
                          `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${products.bikeText}`
                        }
                      >
                        <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                          Contatar vendedor
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">R$6.500</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Bikes</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={helmetImage} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <a target="_blank"
                        href={
                          `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${products.acessoriesText}`
                        }
                      >
                        <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                          Contatar vendedor
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">R$3.800</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Acessórios</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={helmetImage} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <a target="_blank"
                        href={
                          `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${products.rodasText}`
                        }
                      >
                        <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                          Contatar vendedor
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    <span className="text-green">R$5.800</span>{" "}
                    <span className="ml-2 text-linethrough"> R$4.600</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Rodas</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
};
export default ProductRelated;
