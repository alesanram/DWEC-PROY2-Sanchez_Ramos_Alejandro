import {React} from "react";
import {Accordion} from 'react-bootstrap';
let Academics=()=>{
    return(
        //Acrodeon generado con boostrap con mis titulos academicos(como si hubiera terminado el grado)
        <Accordion  bg="success" className="acordeon">
            <Accordion.Item eventKey="0">
                <Accordion.Header id="Academi">Mis Titulos</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li >
                            <p className="black">Tecnico Superior en Desarrollo de aplicaciones web</p>
                        </li>
                        <li>
                            <p className="black">Curos básico de prevención de riesgos laborales</p>
                        </li>
                        <li>
                            <p className="black">B1- Ingles</p>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Academics;
