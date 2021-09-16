import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import firstPicture from '../../Carousel images/carousel-1.jpg';
import secondPicture from '../../Carousel images/carousel-2.jpg';
import thirdPicture from '../../Carousel images/carousel-3.jpg';



function CarouselPart() {
    return (
        
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {firstPicture}
                    alt="TVs and a bike"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {secondPicture}
                    alt="Camera"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {thirdPicture}
                    alt="Broken TV"
                    />

                    
                </Carousel.Item>
            </Carousel>
    
    )
}

export default CarouselPart
