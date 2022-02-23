import React from "react";
import {CardGroup,Card} from 'react-bootstrap';
import mortalParkour from '../img/MortalParkourLogo.png';
import renge from '../img/logo.png';
import porfolio from '../img/porfolio.png';
let Porfolio=()=>{
    /*Es un grupo de cartas creado con boostrap que representa tres proyectos mios, 
    las cartan estan fromados por una imagen del proyyecto su nombre y una brebe descripcion, 
    con un elcae a su repositorio en github*/
    return(
        <CardGroup id="Porfolio" className="espacio job">
            <Card>
                <Card.Img variant="top" className="imagenjobs" src={renge} />
                <Card.Body>
                <Card.Title>Renge</Card.Title>
                <Card.Text className="black">
                    Proyecto que consiste en una pagina web que obtine datos de Anime y manga de una Api llamada Jikan
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href="https://github.com/IES-Rafael-Alberti/ut4-proyecto-maquetacion-y-desarrollo-de-la-aplicacion-web-alesanram/tree/DWEC-PROY1-Sanchez_Ramos_Alejandro(Parte2)">Enlace github</a></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" className="imagenjobs" src={mortalParkour} />
                <Card.Body>
                <Card.Title>Mortal Parkour</Card.Title>
                <Card.Text className="black">
                    Una SPA sobre un juego ficticio que hemos desarrollado en grupo( Sin terminar)
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href="https://github.com/alesanram/mortal_parkour">Enlace github</a></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" className="imagenjobs" src={porfolio} />
                <Card.Body>
                <Card.Title>Porfolio</Card.Title>
                <Card.Text className="black">
                    Una SPA que sirve como porfolio web incluye otras utilidades como un juego y un reloj
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href="https://github.com/alesanram/DWEC-PROY2-Sanchez_Ramos_Alejandro">Enlace github</a></small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}
export default Porfolio;