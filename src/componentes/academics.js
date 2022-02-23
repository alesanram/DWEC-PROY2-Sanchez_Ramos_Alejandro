import {React} from "react";
import {Accordion} from 'react-bootstrap';
let Academics=()=>{
    return(
        //Acrodeon generado con boostrap con mis titulos academicos(como si hubiera terminado el grado)
        <Accordion  bg="success" className="acordeon" id="Academics">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Mis Titulos</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <p>Tecnico Superior en Desarrollo de aplicaciones web</p>
                        </li>
                        <li>
                            <p>Curos básico de prevención de riesgos laborales</p>
                        </li>
                        <li>
                            <p>B1- Ingles</p>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Academics;
