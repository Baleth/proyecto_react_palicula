import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* item 1 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
            <img
              className="d-block w-100"
              src="../img/patch adams.jpg"
              alt="First slide"
            />
          </Col>

        </Row>

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 2 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
            <img
              className="d-block w-100"
              src="../img/ironman.png"
              alt="Second slide"
            />
          </Col>

        </Row>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 3 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
            <img
              className="d-block w-100"
              src="../img/deadpool.jpg"
              alt="Third slide"
            />
          </Col>

        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;