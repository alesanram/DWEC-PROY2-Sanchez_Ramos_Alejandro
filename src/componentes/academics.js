import {React} from "react";
import {Accordion} from 'react-bootstrap';
let Academics=()=>{
    return(
        <Accordion  bg="success" className="acordeon" id="Academics">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Mis Titulos</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <p>Tecnico Superior en Desarrollo de aplicaciones web</p>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Academics;
