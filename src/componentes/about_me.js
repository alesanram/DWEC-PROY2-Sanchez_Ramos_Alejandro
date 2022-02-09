import React from "react";
import {Carousel} from 'react-bootstrap';
import img from  "../img/fondo_about.png"

let AboutMe=()=>{
    return(
        <Carousel className="about">
            <Carousel.Item>
                <img className="about__image" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="about__image" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="about__image" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default AboutMe;