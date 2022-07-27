import React from 'react'
import { Carousel } from 'react-bootstrap';


const Slider = () => {
    return (
        
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"  height="800px" 
          src="../../images/slider-images/slider-image1.avif"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100" height="800px" 
          src="../../images/slider-images/slider-image2.avif"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"  height="800px"
          src="../../images/slider-images/slider-image3.avif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;