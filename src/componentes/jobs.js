import React from "react";
import {CardGroup,Card} from 'react-bootstrap';

let Jobs=()=>{
    return(
        <CardGroup className="espacio">
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Renge</Card.Title>
                <Card.Text>
                    Proyecto que consiste en una pagina web que obtine datos de Anime y manga de una Api llamada Jikan
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href="https://github.com/IES-Rafael-Alberti/ut4-proyecto-maquetacion-y-desarrollo-de-la-aplicacion-web-alesanram/tree/DWEC-PROY1-Sanchez_Ramos_Alejandro(Parte2)">Enlace github</a></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Mortal Parkour</Card.Title>
                <Card.Text>
                    Una SPA sobre un juego ficticio que hemos desarrollado en grupo( Sin terminar)
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Porfolio</Card.Title>
                <Card.Text>
                    Una SPA que sirve como porfolio web incluye otras utilidades como un juego y un reloj
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><a href="https://alesanram.github.io/DWEC-PROY2-Sanchez_Ramos_Alejandro/">Enlace github</a></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Porfolio</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}
export default Jobs;