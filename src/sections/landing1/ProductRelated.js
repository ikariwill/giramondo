import React, { useContext, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import bikeImage from "../../assets/image/bike.png";

import GlobalContext from "../../context/GlobalContext";

const ProductRelated = () => {
  const gContext = useContext(GlobalContext);
  

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  function showCategory(category) {
    gContext.toggleVideoModal();
  }


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
            <Row>
              <Col lg="12">
                <div className="category">
                  <button
                  onClick={toggleClass}
                    className="bikes gr-hover-y btn btn-primary"
                  >
                      Bikes
                  </button>
                <button onClick={toggleClass}  
                className="vestuario gr-hover-y btn btn-dark">Vestuários</button>
                <button onClick={toggleClass}  
                className="componentes gr-hover-y btn btn-dark">Componentes</button>
                <button onClick={toggleClass}  className="acessorios gr-hover-y btn btn-dark">Acessórios</button>
                <button onClick={toggleClass}  className="giramondo gr-hover-y btn btn-dark">Linha Giramondo</button>
                </div>
              </Col>
            </Row>
            <Row
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img width="270px" src={bikeImage} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <Button 
                        onClick={() => showCategory('bike')}
                        className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                        Ver mais
                      </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    </div>
                    <h3 className="gr-text-7">Bikes</h3>
                  </div>
                </div>
              </Col>

            <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img width="270px" src={bikeImage} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('bike')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                  </div>
                  <h3 className="gr-text-7">Bikes</h3>
                </div>
              </div>
            </Col>

            <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img width="270px" src={bikeImage} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('bike')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                  </div>
                  <h3 className="gr-text-7">Bikes</h3>
                </div>
              </div>
            </Col>

            <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
              <div className="product-card gr-product-hover-1">
                <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                  <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img width="270px" src={bikeImage} alt="" />
                  </div>
                  <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('bike')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                  </div>
                </div>
                <div className="card-text text-center">
                  <div className="gr-text-9 mt-8 line-height-reset mb-2">
                  </div>
                  <h3 className="gr-text-7">Bikes</h3>
                </div>
              </div>
            </Col>
              {/* <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src="https://i.imgur.com/HQMM8a5.jpg" alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('vestuarios')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    </div>
                    <h3 className="gr-text-7">Vestuários</h3>

                  </div>
                </div>
              </Col>
              <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src="https://i.imgur.com/TBcAwvZ.jpg" alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('componentes')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    </div>
                    <h3 className="gr-text-7">Componentes</h3>
                  </div>
                </div>
              </Col>
              <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src="https://i.imgur.com/Oz1q5Kk.jpg" alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('acessorios')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    </div>
                    <h3 className="gr-text-7">Acessórios</h3>
                  </div>
                </div>
              </Col>              
              <Col xs="4" md="2" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                    <img src="https://i.imgur.com/57uemMl.png" alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                    <Button
                      onClick={() => showCategory('giramondo')}
                      className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                      Ver mais
                    </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                    </div>
                    <h3 className="gr-text-7">Linha Giramondo</h3>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
    </>
  );
};
export default ProductRelated;
