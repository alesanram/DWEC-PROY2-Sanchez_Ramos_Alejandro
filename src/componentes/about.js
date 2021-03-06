import React from "react";
import {Carousel} from 'react-bootstrap';
import img from  "../img/fondo_about.png"

let About=()=>{
    return(
        /*Carrusel creado de con boostrap utilizando la variante React-Boostrapt,
        se divide en tres slider sinedoel primero un saludo, el segundo una descripcion de mi y el tercero una lista de lenguajes que conocsco*/
        <Carousel className="about" id="About">
            <Carousel.Item>
                <img className="d-block w-100" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption className="about__text">
                <h1>Hi, soy Alejandro Sanchez Ramos</h1>
                <h5>Tengo 21 años y soy desarrollador web</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption className="about__text">
                <p>
                    Soy una persona que le interesa aprender
                nuevos conocimientos, me encanta aprender nuevos lenguajes,
                framework o librerias para desarrollo web.
                Además me interesa aprender nuevas
                tecnologías y métodos respecto a la web.
                Aunque, lo que mas me gusta del desarrollo web es la
                parte del frontend con un interés un poco
                mas fuerte en el diseño de la misma.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img} alt="Foto de Peter Olexa en Pexels"/>
                <Carousel.Caption className="about__text">
                <p>De momento los lenguajes.libreiras y frameworks que conosco son estos<br></br> <br></br>
                        HTML,CSS,JavaScript <br></br> <br></br>
                        PHP,Python,Java, MYSQL <br></br> <br></br>
                        Larabel, flask y React
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default About;