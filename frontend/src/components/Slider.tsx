import React from 'react';
import '../styles/Slider.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="first d-block w-100 h-100%"
          src={'images/pastaslider.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="title-slider">Hot offer!</h3>
          <p className="text-slider">Get 10% off each main and drink combo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="second d-block w-100"
          src={'images/manyfood.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="title-slider">Hungry Date Offer! </h3>
          <p className="text-slider">
            Get 2 mains + 2 drinks + 1 dessert for 40.00.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
